import { NextRequest, NextResponse } from 'next/server'
import { RATE_LIMITS } from './constants'

// Re-export RATE_LIMITS for convenience
export { RATE_LIMITS }

// Simple in-memory rate limiter (for production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

export function rateLimit(
  identifier: string,
  max: number,
  windowMs: number
): { success: boolean; remaining: number; resetTime: number } {
  const now = Date.now()
  const key = identifier
  const record = rateLimitStore.get(key)

  if (!record || now > record.resetTime) {
    // Create new record
    const newRecord = {
      count: 1,
      resetTime: now + windowMs,
    }
    rateLimitStore.set(key, newRecord)
    return {
      success: true,
      remaining: max - 1,
      resetTime: newRecord.resetTime,
    }
  }

  if (record.count >= max) {
    return {
      success: false,
      remaining: 0,
      resetTime: record.resetTime,
    }
  }

  // Increment count
  record.count++
  rateLimitStore.set(key, record)
  return {
    success: true,
    remaining: max - record.count,
    resetTime: record.resetTime,
  }
}

export function getRateLimitIdentifier(req: NextRequest): string {
  // Use IP address as identifier
  const forwarded = req.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0] : req.headers.get('x-real-ip') || 'unknown'
  return ip
}

export function createRateLimitMiddleware(
  max: number,
  windowMs: number
) {
  return (req: NextRequest): NextResponse | null => {
    const identifier = getRateLimitIdentifier(req)
    const result = rateLimit(identifier, max, windowMs)

    if (!result.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: {
            'Retry-After': Math.ceil((result.resetTime - Date.now()) / 1000).toString(),
            'X-RateLimit-Limit': max.toString(),
            'X-RateLimit-Remaining': result.remaining.toString(),
            'X-RateLimit-Reset': new Date(result.resetTime).toISOString(),
          },
        }
      )
    }

    return null
  }
}

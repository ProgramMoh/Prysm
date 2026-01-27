import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { subscriptionUpdateSchema } from '@/lib/validations'
import { createRateLimitMiddleware, RATE_LIMITS } from '@/lib/rate-limit'
import { supabaseAdmin } from '@/lib/supabase'
// import Stripe from 'stripe' // TODO: Use when implementing Stripe integration

type UserIdResult = { id: string } | null

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: '2024-11-20.acacia',
// })

const rateLimitMiddleware = createRateLimitMiddleware(
  RATE_LIMITS.SUBSCRIPTION.max,
  RATE_LIMITS.SUBSCRIPTION.window
)

export async function PATCH(req: NextRequest) {
  // Rate limiting
  const rateLimitResponse = rateLimitMiddleware(req)
  if (rateLimitResponse) {
    return rateLimitResponse
  }

  // Authentication check
  const { userId } = await auth()
  if (!userId) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  try {
    const body = await req.json()

    // Validate input
    const validationResult = subscriptionUpdateSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid request data', details: validationResult.error.errors },
        { status: 400 }
      )
    }

    const { subscriptionId } = validationResult.data
    // const { action, frequencyDays } = validationResult.data // TODO: Use when implementing subscription updates

    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Get user ID from Supabase
    const { data: dbUser } = await supabaseAdmin!
      .from('users')
      .select('id')
      .eq('clerk_id', userId)
      .single()

    // Type assertion for Supabase select('id') query
    const userResult = dbUser as UserIdResult
    if (!userResult || !userResult.id) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    // Verify user owns subscription
    const { data: subscription, error: subError } = await supabaseAdmin!
      .from('subscriptions')
      .select('*')
      .eq('id', subscriptionId)
      .eq('user_id', userResult.id)
      .single()

    if (subError || !subscription) {
      return NextResponse.json(
        { error: 'Subscription not found or access denied' },
        { status: 404 }
      )
    }

    // TODO: Update Stripe subscription based on action
    // TODO: Update subscription in database based on action

    return NextResponse.json(
      { error: 'Subscription management implementation in progress. Stripe integration needed.' },
      { status: 501 }
    )
  } catch (error) {
    console.error('Subscription update error:', error)
    return NextResponse.json(
      { error: 'An error occurred updating your subscription. Please try again.' },
      { status: 500 }
    )
  }
}

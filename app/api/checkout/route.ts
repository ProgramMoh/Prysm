import { NextRequest, NextResponse } from 'next/server'
import { auth, currentUser } from '@clerk/nextjs/server'
import { checkoutSchema } from '@/lib/validations'
import { createRateLimitMiddleware, RATE_LIMITS } from '@/lib/rate-limit'
import { supabaseAdmin } from '@/lib/supabase'
import type { Database } from '@/types/supabase'

// import { calculatePrice } from '@/lib/pricing' // TODO: Use when implementing pricing
// import Stripe from 'stripe' // TODO: Use when implementing Stripe integration

type UserInsert = Database['public']['Tables']['users']['Insert']
type UserIdResult = { id: string } | null
type Product = Database['public']['Tables']['products']['Row']

// Initialize Stripe (commented until implementation)
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: '2024-11-20.acacia',
// })

const rateLimitMiddleware = createRateLimitMiddleware(
  RATE_LIMITS.CHECKOUT.max,
  RATE_LIMITS.CHECKOUT.window
)

export async function POST(req: NextRequest) {
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
    const validationResult = checkoutSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid request data', details: validationResult.error.errors },
        { status: 400 }
      )
    }

    const { items } = validationResult.data
    // const { shippingAddress, orderType, frequencyDays, promoCode } = validationResult.data // TODO: Use when implementing checkout

    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Get or create user in Supabase
    const user = await currentUser()
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 401 }
      )
    }

    // Check if user exists in Supabase, create if not
    const { data: dbUser } = await supabaseAdmin!
      .from('users')
      .select('id')
      .eq('clerk_id', userId)
      .single()

    // Type assertion for Supabase select('id') query
    let userResult = dbUser as UserIdResult

    if (!userResult || !userResult.id) {
      const userData: UserInsert = {
        clerk_id: userId,
        email: user.emailAddresses[0]?.emailAddress || '',
        name: user.firstName && user.lastName 
          ? `${user.firstName} ${user.lastName}` 
          : user.firstName || null,
      }
      
      // Type assertion needed for Supabase insert - Database generic type inference issue
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { data: newUser, error: createError } = await (supabaseAdmin!.from('users') as any)
        .insert(userData)
        .select('id')
        .single()

      if (createError || !newUser) {
        return NextResponse.json(
          { error: 'Failed to create user record' },
          { status: 500 }
        )
      }
      // Type assertion for new user
      userResult = newUser as UserIdResult
    }

    if (!userResult || !userResult.id) {
      return NextResponse.json(
        { error: 'User record not found' },
        { status: 500 }
      )
    }

    // Fetch products from database and validate inventory
    const productIds = items.map(item => item.productId)
    const { data: productsData, error: productsError } = await supabaseAdmin!
      .from('products')
      .select('*')
      .in('id', productIds)

    if (productsError || !productsData || productsData.length !== items.length) {
      return NextResponse.json(
        { error: 'Invalid products or products not found' },
        { status: 400 }
      )
    }

    // Type assertion for products array
    const products = productsData as Product[]

    // Validate inventory
    for (const item of items) {
      const product = products.find(p => p.id === item.productId)
      if (!product) {
        return NextResponse.json(
          { error: `Product ${item.productId} not found` },
          { status: 400 }
        )
      }
      if (product.inventory_count < item.quantity) {
        return NextResponse.json(
          { error: `Insufficient inventory for ${product.name}` },
          { status: 400 }
        )
      }
    }

    // Calculate pricing using server-authoritative pricing engine
    // TODO: Implement full pricing calculation with shipping and tax
    // TODO: Calculate shipping using Shippo/EasyPost
    // TODO: Calculate tax using Stripe Tax
    // TODO: Create Stripe payment intent or subscription

    return NextResponse.json(
      { error: 'Checkout implementation in progress. Pricing and Stripe integration needed.' },
      { status: 501 }
    )
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'An error occurred processing your order. Please try again.' },
      { status: 500 }
    )
  }
}

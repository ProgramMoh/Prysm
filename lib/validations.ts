import { z } from 'zod'

// User validation schemas
export const emailSchema = z.string().email().max(255).trim()
export const nameSchema = z.string().min(1).max(100).trim()

// Product validation
export const productIdSchema = z.string().cuid()
export const quantitySchema = z.number().int().min(1).max(100)

// Cart validation
export const cartItemSchema = z.object({
  productId: productIdSchema,
  quantity: quantitySchema,
})

export const cartSchema = z.array(cartItemSchema).max(50) // Max 50 items in cart

// Checkout validation
export const shippingAddressSchema = z.object({
  name: nameSchema,
  line1: z.string().min(1).max(200).trim(),
  line2: z.string().max(200).trim().optional(),
  city: z.string().min(1).max(100).trim(),
  state: z.string().min(2).max(100).trim(),
  postal_code: z.string().min(5).max(20).trim(),
  country: z.string().length(2), // ISO country code
})

export const checkoutSchema = z.object({
  items: cartSchema,
  shippingAddress: shippingAddressSchema,
  orderType: z.enum(['one-time', 'subscription']),
  frequencyDays: z.enum(['30', '60', '90']).optional(), // Required if subscription
  promoCode: z.string().max(50).trim().optional(),
})

// Subscription management
export const subscriptionUpdateSchema = z.object({
  subscriptionId: z.string().cuid(),
  action: z.enum(['pause', 'resume', 'cancel', 'skip', 'change-frequency']),
  frequencyDays: z.enum(['30', '60', '90']).optional(),
})

// Rate limiting - no validation needed, handled by middleware

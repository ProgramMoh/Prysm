import { DISCOUNTS, SUBSCRIPTION_CADENCES } from './constants'

export interface PricingInput {
  basePrice: number
  quantity: number
  isSubscription: boolean
  isFirstOrder: boolean
  frequencyDays?: number
  isBundle?: boolean
  bundleDiscount?: number
}

export interface PricingResult {
  subtotal: number
  discountAmount: number
  total: number
  breakdown: {
    base: number
    subscriptionDiscount?: number
    cadenceDiscount?: number
    firstMonthDiscount?: number
    bundleDiscount?: number
  }
}

/**
 * Server-authoritative pricing engine
 * Follows the order of operations from PRD:
 * 1. Base product price
 * 2. Bundle override
 * 3. Subscription discount
 * 4. Cadence modifier
 * 5. First-month promo
 * 6. Rounding rules
 */
export function calculatePrice(input: PricingInput): PricingResult {
  let subtotal = input.basePrice * input.quantity
  const breakdown: PricingResult['breakdown'] = {
    base: subtotal,
  }
  let discountAmount = 0

  // 2. Bundle override (if applicable)
  if (input.isBundle && input.bundleDiscount) {
    const bundleDiscount = subtotal * input.bundleDiscount
    subtotal -= bundleDiscount
    discountAmount += bundleDiscount
    breakdown.bundleDiscount = bundleDiscount
  }

  // 3. Subscription discount (10%)
  if (input.isSubscription) {
    const subscriptionDiscount = subtotal * DISCOUNTS.SUBSCRIPTION
    subtotal -= subscriptionDiscount
    discountAmount += subscriptionDiscount
    breakdown.subscriptionDiscount = subscriptionDiscount
  }

  // 4. Cadence modifier
  if (input.isSubscription && input.frequencyDays) {
    let cadenceDiscountRate = 0
    if (input.frequencyDays === SUBSCRIPTION_CADENCES.DAYS_30) {
      cadenceDiscountRate = DISCOUNTS.CADENCE_30
    } else if (input.frequencyDays === SUBSCRIPTION_CADENCES.DAYS_60) {
      cadenceDiscountRate = DISCOUNTS.CADENCE_60
    } else if (input.frequencyDays === SUBSCRIPTION_CADENCES.DAYS_90) {
      cadenceDiscountRate = DISCOUNTS.CADENCE_90
    }

    if (cadenceDiscountRate > 0) {
      const cadenceDiscount = subtotal * cadenceDiscountRate
      subtotal -= cadenceDiscount
      discountAmount += cadenceDiscount
      breakdown.cadenceDiscount = cadenceDiscount
    }
  }

  // 5. First-month promo (25% - applied last, on already discounted price)
  if (input.isSubscription && input.isFirstOrder) {
    const firstMonthDiscount = subtotal * DISCOUNTS.FIRST_MONTH
    subtotal -= firstMonthDiscount
    discountAmount += firstMonthDiscount
    breakdown.firstMonthDiscount = firstMonthDiscount
  }

  // 6. Rounding rules (round to 2 decimal places)
  subtotal = Math.round(subtotal * 100) / 100
  discountAmount = Math.round(discountAmount * 100) / 100

  return {
    subtotal,
    discountAmount,
    total: subtotal,
    breakdown,
  }
}

/**
 * Convert number to string for database storage (Supabase uses numeric/decimal types)
 */
export function toDecimalString(value: number): string {
  return value.toFixed(2)
}

// Product image variants
export type ImageVariant = 'dark' | 'light' | 'package' | 'cutout'

// Product information
export const PRODUCTS = {
  PRYSM_INTIMA: {
    name: 'Prysm Intima',
    slug: 'prysm-intima',
    price: 49.00, // Added price
    color: 'prysm-intima',
    description: 'Energy booster for sports and athletic performance',
    category: 'energy',
    images: {
      dark: '/images/products/prysm-intima-dark.png',
      light: '/images/products/prysm-intima-light.png',
      package: '/images/products/prysm-intima-package.png',
      cutout: '/images/products/prysm-intima-cutout.png',
    },
  },
  PRYSM_THINQ: {
    name: 'Prysm ThinQ',
    slug: 'prysm-thinq',
    price: 54.00, // Added price
    color: 'prysm-thinq',
    description: 'Focus and work enhancement energy drink',
    category: 'energy',
    images: {
      dark: '/images/products/prysm-thinq-dark.png',
      light: '/images/products/prysm-thinq-light.png',
      package: '/images/products/prysm-thinq-package.png',
      cutout: '/images/products/prysm-thinq-cutout.png',
    },
  },
  PRYSM_BEST: {
    name: 'Prysm Best of You',
    slug: 'prysm-best-of-you',
    price: 59.00, // Added price
    color: 'prysm-best',
    description: 'General mood and wellness energy booster',
    category: 'energy',
    images: {
      dark: '/images/products/prysm-best-of-you-dark.png',
      light: '/images/products/prysm-best-of-you-light.png',
      package: '/images/products/prysm-best-of-you-package.png',
      cutout: '/images/products/prysm-best-of-you-cutout.png',
    },
  },
  NIGHTNITE: {
    name: 'NightNite',
    slug: 'nightnite',
    price: 45.00, // Added price
    color: 'nightnite',
    description: 'Melatonin-based sleep aid',
    category: 'sleep',
    images: {
      dark: '/images/products/nightnite-dark.png',
      light: '/images/products/nightnite-light.png',
      package: '/images/products/nightnite-package.png',
      cutout: '/images/products/nightnite-cutout.png',
    },
  },
} as const

// Helper function to get product image based on context
export function getProductImage(slug: string, variant: ImageVariant = 'cutout'): string {
  const product = Object.values(PRODUCTS).find(p => p.slug === slug)
  if (!product) return ''
  return product.images[variant]
}

// Subscription cadences
export const SUBSCRIPTION_CADENCES = {
  DAYS_30: 30,
  DAYS_60: 60,
  DAYS_90: 90,
} as const

// Discount percentages (to be confirmed with client)
export const DISCOUNTS = {
  SUBSCRIPTION: 0.10, // 10%
  FIRST_MONTH: 0.25, // 25%
  CADENCE_30: 0.15, // TBD - placeholder
  CADENCE_60: 0.10, // TBD - placeholder
  CADENCE_90: 0.05, // TBD - placeholder
} as const

// Rate limiting
export const RATE_LIMITS = {
  LOGIN: { max: 5, window: 60 * 1000 }, // 5 per minute
  CHECKOUT: { max: 10, window: 60 * 60 * 1000 }, // 10 per hour
  SUBSCRIPTION: { max: 5, window: 60 * 60 * 1000 }, // 5 per hour
} as const
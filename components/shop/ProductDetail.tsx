'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { PRODUCTS } from '@/lib/constants'
import ProductImageVariantSelector from './ProductImageVariantSelector'

interface ProductDetailProps {
  product: {
    name: string
    slug: string
    color: string
    description: string
    category: string
  }
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const [orderType, setOrderType] = useState<'one-time' | 'subscription'>('subscription')
  const [frequency, setFrequency] = useState<'30' | '60' | '90'>('30')

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image with variant selector */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={cn(
                'relative aspect-square rounded-lg overflow-hidden border border-text-secondary/10',
                'bg-gradient-to-br from-bg-primary',
                product.color === 'prysm-intima' && 'to-prysm-intima-900/20',
                product.color === 'prysm-thinq' && 'to-prysm-thinq-900/20',
                product.color === 'prysm-best' && 'to-prysm-best-900/20',
                product.color === 'nightnite' && 'to-nightnite-900/20'
              )}
            >
              <ProductImageVariantSelector product={product} />
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h1 className={cn(
                  'text-4xl md:text-5xl font-heading font-bold mb-4',
                  product.color === 'prysm-intima' && 'text-prysm-intima-500',
                  product.color === 'prysm-thinq' && 'text-prysm-thinq-400',
                  product.color === 'prysm-best' && 'text-prysm-best-500',
                  product.color === 'nightnite' && 'text-nightnite-400'
                )}>
                  {product.name}
                </h1>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Order Type Selection */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <button
                    onClick={() => setOrderType('subscription')}
                    className={cn(
                      'flex-1 px-6 py-3 border font-heading tracking-luxury transition-all',
                      orderType === 'subscription'
                        ? 'border-accent-gold bg-accent-gold/10 text-accent-gold'
                        : 'border-text-secondary/30 text-text-secondary hover:border-text-secondary/50'
                    )}
                  >
                    Subscribe & Save
                  </button>
                  <button
                    onClick={() => setOrderType('one-time')}
                    className={cn(
                      'flex-1 px-6 py-3 border font-heading tracking-luxury transition-all',
                      orderType === 'one-time'
                        ? 'border-accent-gold bg-accent-gold/10 text-accent-gold'
                        : 'border-text-secondary/30 text-text-secondary hover:border-text-secondary/50'
                    )}
                  >
                    One-Time Purchase
                  </button>
                </div>

                {orderType === 'subscription' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="space-y-2"
                  >
                    <label className="text-text-secondary text-sm">Delivery Frequency</label>
                    <select
                      value={frequency}
                      onChange={(e) => setFrequency(e.target.value as '30' | '60' | '90')}
                      className="w-full px-4 py-3 bg-bg-primary border border-text-secondary/30 text-text-primary focus:border-accent-gold focus:outline-none"
                    >
                      <option value="30">Every 30 days</option>
                      <option value="60">Every 60 days</option>
                      <option value="90">Every 90 days</option>
                    </select>
                  </motion.div>
                )}
              </div>

              {/* Quantity */}
              <div className="space-y-2">
                <label className="text-text-secondary text-sm">Quantity</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-text-secondary/30 flex items-center justify-center hover:border-accent-gold transition-colors"
                  >
                    −
                  </button>
                  <span className="text-text-primary text-lg w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-text-secondary/30 flex items-center justify-center hover:border-accent-gold transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price Display - Placeholder */}
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-heading tracking-luxury">$0.00</span>
                  {orderType === 'subscription' && (
                    <span className="text-text-secondary text-sm">per delivery</span>
                  )}
                </div>
                {orderType === 'subscription' && (
                  <p className="text-accent-gold text-sm">
                    Save 10% with subscription
                  </p>
                )}
              </div>

              {/* Add to Cart */}
              <button className={cn(
                'w-full px-8 py-4 font-heading font-semibold transition-all duration-200 rounded-lg shadow-lg',
                product.color === 'prysm-intima' && 'bg-gradient-to-r from-prysm-intima-500 to-prysm-intima-600 text-bg-primary hover:from-prysm-intima-400 hover:to-prysm-intima-500',
                product.color === 'prysm-thinq' && 'bg-gradient-to-r from-prysm-thinq-500 to-prysm-thinq-600 text-white hover:from-prysm-thinq-400 hover:to-prysm-thinq-500',
                product.color === 'prysm-best' && 'bg-gradient-to-r from-prysm-best-500 to-prysm-best-600 text-bg-primary hover:from-prysm-best-400 hover:to-prysm-best-500',
                product.color === 'nightnite' && 'bg-gradient-to-r from-nightnite-500 to-nightnite-600 text-white hover:from-nightnite-400 hover:to-nightnite-500'
              )}>
                Add to Cart
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

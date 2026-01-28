'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { PRODUCTS } from '@/lib/constants'
import { useCartStore } from '@/lib/store' // Import the store

// Derive the Product type from the data itself
type Product = typeof PRODUCTS[keyof typeof PRODUCTS]

interface PurchaseControlsProps {
  product: Product
  theme?: 'light' | 'dark'
}

export default function PurchaseControls({ product, theme = 'light' }: PurchaseControlsProps) {
  const [quantity, setQuantity] = useState(1)
  const [orderType, setOrderType] = useState<'one-time' | 'subscription'>('subscription')
  const [frequency, setFrequency] = useState<'30' | '60' | '90'>('30')
  
  // Access the add function from our store
  const addItem = useCartStore((state) => state.addItem)

  // Reset quantity when product changes
  useEffect(() => {
    setQuantity(1)
  }, [product.slug])

  const textColor = theme === 'dark' ? 'text-white' : 'text-text-primary'
  const subTextColor = theme === 'dark' ? 'text-gray-400' : 'text-text-secondary'
  const borderColor = theme === 'dark' ? 'border-white/20' : 'border-text-secondary/30'

  const handleAddToCart = () => {
    addItem({
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.images.cutout,
      quantity: quantity,
      orderType: orderType,
      frequency: orderType === 'subscription' ? frequency : undefined
    })
  }

  return (
    <div className="w-full max-w-md space-y-6">
      
      {/* Order Type Selection */}
      <div className="flex gap-3">
        <button
          onClick={() => setOrderType('subscription')}
          className={cn(
            'flex-1 px-4 py-3 border font-heading text-sm tracking-wide transition-all duration-200 rounded-md',
            orderType === 'subscription'
              ? 'border-accent-gold bg-accent-gold/10 text-accent-gold'
              : `${borderColor} ${subTextColor} hover:border-accent-gold/50`
          )}
        >
          Subscribe
        </button>
        <button
          onClick={() => setOrderType('one-time')}
          className={cn(
            'flex-1 px-4 py-3 border font-heading text-sm tracking-wide transition-all duration-200 rounded-md',
            orderType === 'one-time'
              ? 'border-accent-gold bg-accent-gold/10 text-accent-gold'
              : `${borderColor} ${subTextColor} hover:border-accent-gold/50`
          )}
        >
          One-Time
        </button>
      </div>

      {/* Subscription Frequency */}
      <AnimatePresence>
        {orderType === 'subscription' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-1">
              <select
                value={frequency}
                onChange={(e) => setFrequency(e.target.value as '30' | '60' | '90')}
                className={cn(
                  "w-full px-4 py-3 bg-transparent border rounded-md focus:border-accent-gold focus:outline-none appearance-none cursor-pointer",
                  borderColor,
                  textColor
                )}
              >
                <option value="30" className="text-bg-primary">Every 30 Days (Most Popular)</option>
                <option value="60" className="text-bg-primary">Every 60 Days</option>
                <option value="90" className="text-bg-primary">Every 90 Days</option>
              </select>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quantity & Price Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className={cn("w-10 h-10 border flex items-center justify-center rounded-full hover:border-accent-gold transition-colors", borderColor, textColor)}
          >
            −
          </button>
          <span className={cn("text-xl font-heading w-8 text-center", textColor)}>{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className={cn("w-10 h-10 border flex items-center justify-center rounded-full hover:border-accent-gold transition-colors", borderColor, textColor)}
          >
            +
          </button>
        </div>

        <div className="text-right">
          <div className={cn("text-2xl font-heading font-semibold", textColor)}>
            ${(product.price * quantity).toFixed(2)}
          </div>
          {orderType === 'subscription' && (
            <span className="text-xs text-accent-gold font-medium block">
              Includes 10% Savings
            </span>
          )}
        </div>
      </div>

      {/* Add to Cart Button */}
      <button 
        onClick={handleAddToCart}
        className={cn(
          'w-full py-4 font-heading font-semibold text-lg tracking-wide rounded-lg shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]',
          product.color === 'prysm-intima' && 'bg-gradient-to-r from-prysm-intima-100 to-prysm-intima-500 text-bg-primary hover:shadow-prysm-intima-500/25',
          product.color === 'prysm-thinq' && 'bg-gradient-to-r from-prysm-thinq-500 to-prysm-thinq-600 text-white hover:shadow-prysm-thinq-500/25',
          product.color === 'prysm-best' && 'bg-gradient-to-r from-prysm-best-500 to-prysm-best-600 text-bg-primary hover:shadow-prysm-best-500/25',
          product.color === 'nightnite' && 'bg-gradient-to-r from-nightnite-500 to-nightnite-600 text-white hover:shadow-nightnite-500/25'
        )}
      >
        Add to Cart
      </button>
    </div>
  )
}
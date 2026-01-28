'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useCartStore } from '@/lib/store'

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity } = useCartStore()
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    useCartStore.persist.rehydrate()
    setIsMounted(true)
  }, [])

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0)

  if (!isMounted) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-[2px] z-[60]"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-bg-primary border-l border-text-secondary/10 z-[70] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-text-secondary/10">
              <div className="flex items-baseline gap-2">
                <h2 className="text-2xl font-heading tracking-luxury text-text-primary">Your Cart</h2>
                <span className="text-accent-gold text-sm">({items.length} items)</span>
              </div>
              <button onClick={onClose} className="text-text-secondary hover:text-text-primary p-2 hover:bg-white/5 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                  <p className="text-text-secondary text-lg">Your cart is currently empty.</p>
                  <button onClick={onClose} className="text-accent-gold hover:text-accent-gold/80 font-heading tracking-wide">
                    Start Shopping →
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={`${item.slug}-${item.orderType}-${item.frequency}`} className="flex gap-4">
                    {/* Image */}
                    <div className="relative w-24 h-32 bg-gradient-to-br from-white/5 to-white/10 rounded-md overflow-hidden flex-shrink-0 border border-text-secondary/10">
                      <Image src={item.image} alt={item.name} fill className="object-contain p-2" sizes="96px" />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="text-text-primary font-heading font-medium text-lg leading-tight">{item.name}</h3>
                          <p className="text-text-primary font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <p className="text-sm text-text-secondary mt-1">
                          {item.orderType === 'subscription' ? (
                            <span className="text-accent-gold flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                              Subscribe (Every {item.frequency} days)
                            </span>
                          ) : 'One-time Purchase'}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3 border border-text-secondary/20 rounded-full px-3 py-1">
                          <button
                            // UPDATED: Pass all 3 parameters
                            onClick={() => updateQuantity(item.slug, Math.max(1, item.quantity - 1), item.orderType, item.frequency)}
                            className="text-text-secondary hover:text-text-primary w-4 h-6 flex items-center justify-center"
                          >
                            −
                          </button>
                          <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                          <button
                            // UPDATED: Pass all 3 parameters
                            onClick={() => updateQuantity(item.slug, item.quantity + 1, item.orderType, item.frequency)}
                            className="text-text-secondary hover:text-text-primary w-4 h-6 flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          // UPDATED: Pass all 3 parameters
                          onClick={() => removeItem(item.slug, item.orderType, item.frequency)}
                          className="text-xs text-text-secondary hover:text-red-400 transition-colors underline decoration-text-secondary/30 underline-offset-4"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-text-secondary/10 p-6 space-y-4 bg-bg-primary">
                <div className="space-y-2">
                  <div className="flex justify-between text-text-secondary">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-text-secondary/60">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>
                <div className="flex justify-between text-xl border-t border-text-secondary/10 pt-4">
                  <span className="font-heading text-text-primary">Total</span>
                  <span className="font-heading text-accent-gold">${subtotal.toFixed(2)}</span>
                </div>
                <button className="w-full py-4 bg-gradient-to-r from-accent-gold to-[#E5C065] text-bg-primary font-heading font-semibold tracking-luxury rounded-lg hover:shadow-[0_0_20px_rgba(201,162,77,0.3)] transition-all duration-300 transform active:scale-[0.98]">
                  Proceed to Checkout
                </button>
                <p className="text-center text-xs text-text-secondary/50">Secure checkout powered by Stripe</p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
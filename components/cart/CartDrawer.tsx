'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface CartItem {
  id: string
  name: string
  quantity: number
  price: number
}

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const [items] = useState<CartItem[]>([]) // TODO: Connect to cart state

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 h-full w-full sm:w-96 bg-bg-primary border-l border-text-secondary/10 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-text-secondary/10">
              <h2 className="text-2xl font-heading tracking-luxury">Cart</h2>
              <button
                onClick={onClose}
                className="text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Close cart"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-text-secondary mb-4">Your cart is empty</p>
                  <button
                    onClick={onClose}
                    className="text-accent-gold hover:underline"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Cart items will be rendered here */}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-text-secondary/10 p-6 space-y-4">
                <div className="flex justify-between text-lg">
                  <span className="text-text-secondary">Total</span>
                  <span className="font-heading tracking-luxury">$0.00</span>
                </div>
                <button className="w-full px-8 py-4 bg-accent-gold text-bg-primary font-heading tracking-luxury hover:bg-accent-gold/90 transition-all duration-200">
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

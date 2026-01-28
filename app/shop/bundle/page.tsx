'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { PRODUCTS } from '@/lib/constants'
import PurchaseControls from '@/components/shop/PurchaseControls'
import { cn } from '@/lib/utils'

// Calculate total value dynamically
const INDIVIDUAL_TOTAL = 
  PRODUCTS.PRYSM_INTIMA.price + 
  PRODUCTS.PRYSM_THINQ.price + 
  PRODUCTS.PRYSM_BEST.price + 
  PRODUCTS.NIGHTNITE.price

const BUNDLE = PRODUCTS.BUNDLE

export default function BundlePage() {
  return (
    <div className="min-h-screen relative overflow-hidden pt-20 bg-bg-primary">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(201,162,77,0.15),transparent_70%)]" />

      <div className="container mx-auto px-4 z-10 relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center">
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 w-full max-w-7xl">
          
          {/* Left: Dynamic Bottle Composition */}
          <div className="relative w-full lg:w-1/2 h-[500px] flex items-center justify-center">
            {/* We layer the bottles to create a group shot without needing a new image file */}
            
            {/* NightNite (Back Left) */}
            <motion.div 
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: -140, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="absolute w-48 h-auto aspect-[1/3] z-10 brightness-75"
            >
              <Image src={PRODUCTS.NIGHTNITE.images.cutout} alt="NightNite" fill className="object-contain" sizes="200px" />
            </motion.div>

            {/* Prysm Intima (Back Right) */}
            <motion.div 
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: 140, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="absolute w-48 h-auto aspect-[1/3] z-10 brightness-75"
            >
              <Image src={PRODUCTS.PRYSM_INTIMA.images.cutout} alt="Intima" fill className="object-contain" sizes="200px" />
            </motion.div>

            {/* Prysm ThinQ (Mid Left) */}
            <motion.div 
              initial={{ x: 0, opacity: 0, scale: 0.9 }}
              animate={{ x: -50, opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute w-52 h-auto aspect-[1/3] z-20 brightness-90"
            >
              <Image src={PRODUCTS.PRYSM_THINQ.images.cutout} alt="ThinQ" fill className="object-contain" sizes="200px" />
            </motion.div>

            {/* Prysm Best (Front Center) */}
            <motion.div 
              initial={{ x: 0, y: 50, opacity: 0, scale: 0.9 }}
              animate={{ x: 40, y: 20, opacity: 1, scale: 1.1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute w-56 h-auto aspect-[1/3] z-30 drop-shadow-2xl"
            >
              <Image src={PRODUCTS.PRYSM_BEST.images.cutout} alt="Best of You" fill className="object-contain" sizes="250px" />
            </motion.div>
          </div>

          {/* Right: Details & Value Proposition */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 max-w-xl text-center lg:text-left"
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-accent-gold mb-3 uppercase">
              Complete Protocol
            </h2>
            <h1 className="text-5xl lg:text-7xl font-heading font-bold mb-6 text-text-primary">
              The System
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              A fully synchronized cycle of energy, focus, mood, and sleep. 
              Experience the complete Prysm lifestyle with our all-in-one monthly protocol.
            </p>

            {/* Price Breakdown Box */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-2 text-text-secondary text-sm">
                <span>Individual Value</span>
                <span className="line-through decoration-red-500/70 text-lg">${INDIVIDUAL_TOTAL.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-white font-medium">Bundle Price</span>
                <span className="text-3xl font-heading text-accent-gold font-bold">${BUNDLE.price.toFixed(2)}</span>
              </div>
              <div className="bg-accent-gold/10 border border-accent-gold/20 rounded px-3 py-2 text-center">
                <span className="text-accent-gold text-sm font-semibold tracking-wide">
                  YOU SAVE ${(INDIVIDUAL_TOTAL - BUNDLE.price).toFixed(2)}
                </span>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <PurchaseControls product={BUNDLE} theme="light" />
            </div>
            
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4 text-xs text-text-secondary uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 bg-accent-gold rounded-full"></span> 4 Full Cases
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 bg-accent-gold rounded-full"></span> Free Shipping
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 bg-accent-gold rounded-full"></span> Priority Processing
              </span>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  )
}
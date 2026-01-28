'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { PRODUCTS } from '@/lib/constants'
import { cn } from '@/lib/utils'

// Filter for just the Prysm line (exclude NightNite or Bundles)
const PRYSM_PRODUCTS = Object.values(PRODUCTS).filter(p => 
  p.slug.includes('prysm') && !p.slug.includes('bundle')
)

export default function PrysmShopPage() {
  // Default to the first product (Intima usually)
  const [selectedProduct, setSelectedProduct] = useState(PRYSM_PRODUCTS[0])

  return (
    <div className="min-h-screen relative overflow-hidden pt-20">
      
      {/* Dynamic Background Gradient */}
      <motion.div 
        animate={{
          background: `radial-gradient(circle at 50% 50%, ${
            selectedProduct.color === 'prysm-intima' ? '#E8B4A0' :
            selectedProduct.color === 'prysm-thinq' ? '#1E3A8A' :
            '#FFB84D' // prysm-best
          }15, transparent 70%)`
        }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      />

      <div className="container mx-auto px-4 z-10 relative h-[calc(100vh-80px)] flex flex-col">
        
        {/* Sub-header Navigation */}
        <div className="flex justify-center pt-8 pb-4">
          <div className="inline-flex bg-bg-primary/50 backdrop-blur-md border border-text-secondary/20 rounded-full p-1">
            {PRYSM_PRODUCTS.map((product) => (
              <button
                key={product.slug}
                onClick={() => setSelectedProduct(product)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-heading font-medium transition-all duration-300",
                  selectedProduct.slug === product.slug 
                    ? "bg-text-primary text-bg-primary shadow-lg" 
                    : "text-text-secondary hover:text-text-primary"
                )}
              >
                {product.name.replace('Prysm ', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          
          {/* Left: Interactive Bottle */}
          <div className="w-full md:w-1/2 h-[400px] md:h-[600px] relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProduct.slug}
                initial={{ opacity: 0, x: -50, rotate: -5 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, x: 50, rotate: 5 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative w-full h-full max-w-sm"
              >
                {/* Using Next/Image directly here for the specific hero sizing.
                   Assuming images.cutout is available from your PRODUCTS constant.
                */}
                <Image
                  src={selectedProduct.images.cutout}
                  alt={selectedProduct.name}
                  fill
                  priority
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Product Details */}
          <div className="w-full md:w-1/2 max-w-lg text-center md:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProduct.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-sm font-bold tracking-[0.2em] text-accent-gold mb-2 uppercase">
                  The Prysm Collection
                </h2>
                <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-text-primary">
                  {selectedProduct.name.replace('Prysm ', '')}
                </h1>
                <p className="text-text-secondary text-lg leading-relaxed mb-8">
                  {selectedProduct.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link href={`/shop/${selectedProduct.slug}`} className="w-full sm:w-auto">
                    <button className={cn(
                      "w-full sm:w-auto px-8 py-4 rounded-full font-heading font-semibold transition-all duration-300 transform hover:scale-105",
                      selectedProduct.color === 'prysm-intima' && "bg-prysm-intima-500 text-bg-primary hover:bg-prysm-intima-400",
                      selectedProduct.color === 'prysm-thinq' && "bg-prysm-thinq-500 text-white hover:bg-prysm-thinq-400",
                      selectedProduct.color === 'prysm-best' && "bg-prysm-best-500 text-bg-primary hover:bg-prysm-best-400"
                    )}>
                      Shop Now
                    </button>
                  </Link>
                  <span className="text-2xl font-heading text-text-primary">
                    ${selectedProduct.price}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  )
}
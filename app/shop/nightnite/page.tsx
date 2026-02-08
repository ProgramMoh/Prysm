'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { PRODUCTS } from '@/lib/constants'
import StarField from '@/components/effects/StarField'
import PurchaseControls from '@/components/shop/PurchaseControls'

const NIGHTNITE = Object.values(PRODUCTS).find(p => p.slug === 'nightnite')

export default function NightNitePage() {
  if (!NIGHTNITE) return null

  return (
    // FIX: Changed min-h-screen to min-h-[100vh] and added -mb-20 to pull footer up slightly or cover gap
    // Also added a gradient to bottom to blend with footer if needed
    <div className="min-h-screen relative overflow-hidden bg-[#0A0A0A]">
      
      {/* Starry Background */}
      <StarField />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative pt-32 pb-20 flex items-center justify-center min-h-[90vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto">
          
          {/* Left: Floating Bottle */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center relative order-1"
          >
            {/* Gradient Glow */}
            <div 
              className="absolute inset-0 rounded-full blur-3xl" 
              style={{ background: 'radial-gradient(circle, rgba(76,29,149,0.2) 0%, transparent 70%)' }}
            />
            
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-full max-w-md h-[500px] will-change-transform z-10"
            >
               <Image
                  src={NIGHTNITE.images.cutout}
                  alt="NightNite Bottle"
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
            </motion.div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 text-left"
          >
            <h2 className="text-nightnite-100 font-heading tracking-luxury mb-4 text-lg">
              REST • RECOVER • DREAM
            </h2>
            <h1 className="text-6xl md:text-8xl font-heading font-bold text-white mb-6 drop-shadow-[0_0_15px_rgba(76,29,149,0.5)]">
              NightNite
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-lg">
              {NIGHTNITE.description}
            </p>
            
            <PurchaseControls product={NIGHTNITE} theme="dark" />
          </motion.div>

        </div>
      </div>
      
      {/* FIX: Bottom Fade to prevent hard line cut-off */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-0 pointer-events-none" />
    </div>
  )
}
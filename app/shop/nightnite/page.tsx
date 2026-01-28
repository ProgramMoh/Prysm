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
    <div className="min-h-screen relative overflow-hidden bg-[#0A0A0A]">
      
      {/* Starry Background */}
      <StarField />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto">
          
          {/* Left: Text Content & Controls */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
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
            
            {/* Embedded Purchase Controls (Dark Theme) */}
            <PurchaseControls product={NIGHTNITE} theme="dark" />
            
          </motion.div>

          {/* Right: Floating Bottle */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center relative"
          >
            {/* Glow behind bottle */}
            <div className="absolute inset-0 bg-nightnite-500/30 blur-[100px] rounded-full" />
            
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-full max-w-md h-[500px]"
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

        </div>
      </div>
    </div>
  )
}
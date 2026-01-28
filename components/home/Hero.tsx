'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 bg-bg-primary">
      {/* Animated background gradients (Preserved per request) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-prysm-thinq-900/20 via-bg-primary to-bg-primary" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-prysm-best-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-prysm-thinq-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          {/* Editorial Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <span className="text-accent-gold text-xs font-bold tracking-[0.2em] uppercase border-b border-accent-gold/30 pb-1">
              The Future of Wellness
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-8 leading-[1.1] tracking-tight text-white">
            Unlock Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-prysm-best-500 via-white to-prysm-thinq-500">
              Full Potential
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-xl mx-auto leading-relaxed font-light">
            A scientifically formulated system for energy, focus, and deep restorative sleep. Made in the USA.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/shop"
              className="w-full sm:w-auto px-10 py-4 bg-white text-bg-primary font-heading font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Shop The System
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto px-10 py-4 text-white border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 font-heading"
            >
              Our Science
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
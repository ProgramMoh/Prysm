'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import HeroProduct from './HeroProduct'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-prysm-thinq-900/20 to-bg-primary" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-prysm-best-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-prysm-thinq-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Floating Product (Desktop only) */}
      <HeroProduct />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-prysm-best-500/10 border border-prysm-best-500/30 rounded-full text-prysm-best-500 text-sm font-heading font-medium">
              Science-Backed Formulations
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 text-balance leading-tight">
            Premium Energy &<br />
            <span className="bg-gradient-to-r from-prysm-best-500 via-prysm-thinq-500 to-prysm-best-500 bg-clip-text text-transparent animate-gradient">
              Sleep Solutions
            </span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-text-secondary mb-4 max-w-2xl mx-auto"
          >
            Formulated in Los Angeles, CA
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-text-secondary/80 mb-12 max-w-2xl mx-auto"
          >
            Made in the USA
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/shop"
              className="px-8 py-4 bg-gradient-to-r from-prysm-best-500 to-prysm-best-600 text-bg-primary font-heading font-semibold hover:from-prysm-best-400 hover:to-prysm-best-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-prysm-best-500/20"
            >
              Shop Now
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-prysm-best-500 text-prysm-best-500 font-heading font-semibold hover:bg-prysm-best-500/10 transition-all duration-200"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-text-secondary rounded-full mt-2"
          />
        </motion.div>
      </motion.div> */}
    </section>
  )
}

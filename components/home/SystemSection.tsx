'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SystemSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-bg-secondary via-bg-secondary to-prysm-best-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-bg-primary">
              The{' '}
              <span className="bg-gradient-to-r from-prysm-best-600 to-prysm-thinq-600 bg-clip-text text-transparent">
                System
              </span>
            </h2>
            <p className="text-lg text-bg-primary/70 mb-8 max-w-2xl mx-auto">
              Energy + Focus + Mood + Sleep as one protocol. Our products work
              together to support your complete wellness lifestyle.
            </p>
            <p className="text-base text-bg-primary/60 mb-12 max-w-xl mx-auto">
              Bundles positioned as a lifestyle system designed for premium clients
              who value performance and wellness.
            </p>
            <Link
              href="/shop?bundle=true"
              className="inline-block px-8 py-4 bg-gradient-to-r from-bg-primary to-prysm-thinq-900 text-prysm-best-500 font-heading font-semibold hover:from-prysm-thinq-900 hover:to-bg-primary transition-all duration-200 rounded-lg shadow-lg"
            >
              Explore Bundles
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

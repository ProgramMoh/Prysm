'use client'

import { motion } from 'framer-motion'

const trustPoints = [
  {
    title: 'Made in USA',
    description: 'Formulated in Los Angeles, CA. Manufactured in the USA.',
  },
  {
    title: 'Premium Quality',
    description: 'Science-forward formulations with natural ingredients.',
  },
  {
    title: 'Subscription First',
    description: 'Never run out with our flexible subscription model.',
  },
]

export default function TrustSection() {
  return (
    <section className="py-20 bg-bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading tracking-luxury mb-4">
            Trust & Quality
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 border border-text-secondary/10 hover:border-accent-gold/30 transition-all duration-300"
            >
              <h3 className="text-xl font-heading font-semibold bg-gradient-to-r from-prysm-best-500 to-prysm-thinq-400 bg-clip-text text-transparent mb-4">
                {point.title}
              </h3>
              <p className="text-text-secondary">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

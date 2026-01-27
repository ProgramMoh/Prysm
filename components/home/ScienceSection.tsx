'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const scienceData = [
  {
    metric: '5x',
    label: 'Increased Energy Efficiency',
    description: 'Our formulations optimize cellular energy production',
  },
  {
    metric: '19%',
    label: 'Enhanced Performance',
    description: 'Measured improvement in cognitive and physical output',
  },
  {
    metric: '100%',
    label: 'Natural Ingredients',
    description: 'Scientifically-backed, naturally-derived compounds',
  },
]

export default function ScienceSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-prysm-thinq-900/10 via-bg-primary to-bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-prysm-thinq-500/10 border border-prysm-thinq-500/30 rounded-full text-prysm-thinq-400 text-sm font-heading font-medium mb-6">
              Science-Backed
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Formulated with{' '}
              <span className="bg-gradient-to-r from-prysm-thinq-400 to-prysm-best-500 bg-clip-text text-transparent">
                Precision
              </span>
            </h2>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto leading-relaxed">
              Every ingredient is selected based on peer-reviewed research and clinical studies. 
              Our formulations are designed to work synergistically with your body's natural processes.
            </p>
          </motion.div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {scienceData.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 rounded-lg border border-text-secondary/10 bg-gradient-to-br from-bg-primary to-prysm-thinq-900/5 hover:border-prysm-thinq-500/30 transition-all duration-300"
              >
                <div className="text-5xl md:text-6xl font-heading font-bold mb-3 bg-gradient-to-r from-prysm-best-500 to-prysm-thinq-400 bg-clip-text text-transparent">
                  {item.metric}
                </div>
                <h3 className="text-xl font-heading font-semibold text-text-primary mb-2">
                  {item.label}
                </h3>
                <p className="text-text-secondary text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Research Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-prysm-thinq-900/20 to-prysm-best-900/10 border border-prysm-thinq-500/20 rounded-2xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-heading font-bold mb-4 text-text-primary">
                  Research-Driven Development
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Our team of scientists and nutritionists work with leading research institutions 
                  to develop formulations that deliver measurable results. Every product undergoes 
                  rigorous testing to ensure efficacy and safety.
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    'Peer-reviewed ingredient selection',
                    'Clinical study validation',
                    'Third-party lab testing',
                    'Transparent ingredient sourcing',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-text-secondary">
                      <span className="w-2 h-2 bg-prysm-best-500 rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/about"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-prysm-thinq-500 to-prysm-thinq-600 text-white font-heading font-semibold hover:from-prysm-thinq-400 hover:to-prysm-thinq-500 transition-all duration-200 rounded-lg"
                >
                  Learn About Our Science
                </Link>
              </div>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden bg-gradient-to-br from-prysm-thinq-900/30 to-prysm-best-900/20 border border-prysm-thinq-500/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🧪</div>
                    <p className="text-text-secondary text-sm">
                      Research visualization placeholder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

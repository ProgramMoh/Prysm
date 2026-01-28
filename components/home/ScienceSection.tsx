'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const metrics = [
  { value: '100%', label: 'Natural Ingredients', detail: 'Sourced globally' },
  { value: '0g', label: 'Added Sugar', detail: 'Clean energy' },
  { value: 'USA', label: 'Manufactured', detail: 'In Los Angeles, CA' },
]

export default function ScienceSection() {
  return (
    <section className="py-24 bg-bg-primary border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
              Precision Formulated. <br />
              <span className="text-text-secondary">Clinically Inspired.</span>
            </h2>
            {/* FIX: Escaped apostrophes in "don't" and "body's" */}
            <p className="text-text-secondary text-lg leading-relaxed">
              We don&apos;t rely on caffeine crashes or sugar spikes. Prysm is built on a foundation of adaptogens, nootropics, and clinically studied compounds designed to work with your body&apos;s natural rhythm.
            </p>
            
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {metrics.map((m) => (
                <div key={m.label}>
                  <div className="text-3xl font-heading font-bold text-accent-gold mb-1">{m.value}</div>
                  <div className="text-sm text-white font-medium">{m.label}</div>
                  <div className="text-xs text-gray-500">{m.detail}</div>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
               <Link href="/about" className="text-white border-b border-accent-gold pb-0.5 hover:text-accent-gold transition-colors">
                 Read the Research →
               </Link>
            </div>
          </motion.div>

          {/* Right: Visual Abstract */}
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative h-[500px] w-full bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="relative z-10 text-center">
              <span className="text-6xl mb-4 block opacity-50">⚗️</span>
              <p className="text-sm text-gray-500 font-mono uppercase tracking-widest">Molecule Visualization</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
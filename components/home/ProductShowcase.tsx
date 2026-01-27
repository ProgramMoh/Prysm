'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { PRODUCTS } from '@/lib/constants'
import { cn } from '@/lib/utils'
import ProductImage from '@/components/common/ProductImage'

const products = [
  PRODUCTS.PRYSM_INTIMA,
  PRODUCTS.PRYSM_THINQ,
  PRODUCTS.PRYSM_BEST,
  PRODUCTS.NIGHTNITE,
]

export default function ProductShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-bg-primary via-bg-primary to-prysm-thinq-900/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-text-primary to-text-secondary bg-clip-text text-transparent">
            Our Products
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Premium formulations designed for your lifestyle
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Link href={`/shop/${product.slug}`}>
                <div
                  className={cn(
                    'group relative h-full p-6 lg:p-8 border border-text-secondary/10 hover:border-text-secondary/30 transition-all duration-300 rounded-lg overflow-hidden',
                    'bg-gradient-to-br from-bg-primary',
                    product.color === 'prysm-intima' && 'to-prysm-intima-900/20 hover:to-prysm-intima-900/30',
                    product.color === 'prysm-thinq' && 'to-prysm-thinq-900/20 hover:to-prysm-thinq-900/30',
                    product.color === 'prysm-best' && 'to-prysm-best-900/20 hover:to-prysm-best-900/30',
                    product.color === 'nightnite' && 'to-nightnite-900/20 hover:to-nightnite-900/30'
                  )}
                >
                  {/* Product color accent gradient */}
                  <div
                    className={cn(
                      'absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r to-transparent',
                      product.color === 'prysm-intima' && 'from-prysm-intima-500',
                      product.color === 'prysm-thinq' && 'from-prysm-thinq-500',
                      product.color === 'prysm-best' && 'from-prysm-best-500',
                      product.color === 'nightnite' && 'from-nightnite-500'
                    )}
                  />
                  
                  {/* Product Image - Using cutout on dark background */}
                  <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                    <ProductImage
                      src={product.images.cutout}
                      alt={product.name}
                      variant="cutout"
                      className="h-full"
                      enable3D={true}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className={cn(
                      'text-xl lg:text-2xl font-heading font-semibold transition-colors',
                      product.color === 'prysm-intima' && 'text-prysm-intima-500 group-hover:text-prysm-intima-400',
                      product.color === 'prysm-thinq' && 'text-prysm-thinq-400 group-hover:text-prysm-thinq-300',
                      product.color === 'prysm-best' && 'text-prysm-best-500 group-hover:text-prysm-best-400',
                      product.color === 'nightnite' && 'text-nightnite-400 group-hover:text-nightnite-300'
                    )}>
                      {product.name}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {product.description}
                    </p>
                    <span className={cn(
                      'inline-block text-sm font-heading font-medium transition-colors',
                      product.color === 'prysm-intima' && 'text-prysm-intima-500 group-hover:text-prysm-intima-400',
                      product.color === 'prysm-thinq' && 'text-prysm-thinq-400 group-hover:text-prysm-thinq-300',
                      product.color === 'prysm-best' && 'text-prysm-best-500 group-hover:text-prysm-best-400',
                      product.color === 'nightnite' && 'text-nightnite-400 group-hover:text-nightnite-300'
                    )}>
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/shop"
            className="inline-block px-8 py-4 border-2 border-prysm-best-500 text-prysm-best-500 font-heading font-semibold hover:bg-prysm-best-500/10 transition-all duration-200 rounded-lg"
          >
            Shop All Products
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

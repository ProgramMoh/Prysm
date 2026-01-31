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

  // Helper function to generate the correct URL
  const getProductUrl = (slug: string) => {
    // 1. Nightnite has its own dedicated page
    if (slug === 'nightnite') {
      return '/shop/nightnite'
    }
    
    // 2. Prysm products live on one page, so we use a query param to select the tab
    if (slug.includes('prysm')) {
      return `/shop/prysm?product=${slug}`
    }

    // 3. Fallback for any other future products
    return `/shop/${slug}`
  }

  return (
    <section id="showcase" className="py-32 bg-bg-secondary relative overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-bg-primary mb-2">
              The Collection
            </h2>
            <p className="text-text-secondary text-lg max-w-md">
              Engineered for every state of mind.
            </p>
          </div>
          {/* <Link
            href="/shop"
            className="hidden md:inline-flex items-center text-bg-primary font-medium hover:text-accent-gold transition-colors"
          >
            View All Products <span className="ml-2">→</span>
          </Link> */}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* UPDATED LINK LOGIC HERE */}
              <Link href={getProductUrl(product.slug)} className="block h-full">
                <div className="group relative h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  
                  {/* Image Area */}
                  <div className="relative h-64 w-full bg-gray-50/50 flex items-center justify-center p-2 group-hover:bg-gray-50 transition-colors">
                  <div className={cn(
                      "relative w-full h-full transition-transform duration-500",
                      // FIX: Apply scale-110 for tall Prysm bottles, but scale-90 for the wider Nightnite bottle
                      product.slug === 'nightnite' ? "scale-100 group-hover:scale-110" : "scale-150 group-hover:scale-[1.75]"
                    )}>                      
                      <ProductImage
                        src={product.images.cutout}
                        alt={product.name}
                        variant="cutout"
                        className="h-full object-contain"
                        enable3D={true}
                      />
                    </div>
                  </div>
                  
                  {/* Content Area */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-heading font-bold text-bg-primary">
                        {product.name.replace('Prysm ', '')}
                      </h3>
                      <span className={cn(
                        "text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider",
                        product.category === 'sleep' 
                          ? "bg-nightnite-50 text-nightnite-900" 
                          : "bg-orange-50 text-orange-900"
                      )}>
                        {product.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center text-sm font-medium text-bg-primary group-hover:text-accent-gold transition-colors">
                      Shop Now
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* <div className="mt-12 text-center md:hidden">
           <Link
            href="/shop"
            className="inline-block px-8 py-3 border border-gray-300 rounded-full text-bg-primary font-medium"
          >
            View All Products
          </Link>
        </div> */}
      </div>
    </section>
  )
}
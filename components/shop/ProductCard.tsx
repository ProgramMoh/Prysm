'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { PRODUCTS } from '@/lib/constants'
import ProductImage from '@/components/common/ProductImage'

interface ProductCardProps {
  product: {
    name: string
    slug: string
    color: string
    description: string
    category: string
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/shop/${product.slug}`}>
        <div
          className={cn(
            'group relative h-full p-6 border border-text-secondary/10 hover:border-text-secondary/30 transition-all duration-300 rounded-lg overflow-hidden bg-gradient-to-br from-bg-primary',
            product.color === 'prysm-intima' && 'to-prysm-intima-900/20 hover:to-prysm-intima-900/30',
            product.color === 'prysm-thinq' && 'to-prysm-thinq-900/20 hover:to-prysm-thinq-900/30',
            product.color === 'prysm-best' && 'to-prysm-best-900/20 hover:to-prysm-best-900/30',
            product.color === 'nightnite' && 'to-nightnite-900/20 hover:to-nightnite-900/30'
          )}
        >
          {/* Product color accent */}
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
          <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
            {(() => {
              const productData = Object.values(PRODUCTS).find(p => p.slug === product.slug)
              return productData ? (
                <ProductImage
                  src={productData.images.cutout}
                  alt={product.name}
                  variant="cutout"
                  className="h-full"
                  enable3D={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : null
            })()}
          </div>
          
          <div className="space-y-3">
            <h3 className={cn(
              'text-xl font-heading font-semibold transition-colors',
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
              View Details →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

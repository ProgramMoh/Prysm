'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PRODUCTS, type ImageVariant } from '@/lib/constants'
import ProductImage from '@/components/common/ProductImage'

interface ProductImageVariantSelectorProps {
  product: {
    name: string
    slug: string
    color: string
    description: string
    category: string
  }
}

const variants: { label: string; value: ImageVariant }[] = [
  { label: 'Product', value: 'cutout' },
  { label: 'Package', value: 'package' },
  { label: 'Dark BG', value: 'dark' },
  { label: 'Light BG', value: 'light' },
]

export default function ProductImageVariantSelector({ product }: ProductImageVariantSelectorProps) {
  const [selectedVariant, setSelectedVariant] = useState<ImageVariant>('cutout')
  
  const productData = Object.values(PRODUCTS).find(p => p.slug === product.slug)
  if (!productData) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-text-secondary text-lg">Product Image</span>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full">
      {/* Main Image */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedVariant}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 p-8"
          >
            <ProductImage
              src={productData.images[selectedVariant]}
              alt={`${product.name} - ${selectedVariant}`}
              variant={selectedVariant}
              className="h-full"
              enable3D={selectedVariant === 'cutout'}
              priority={selectedVariant === 'cutout'}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Variant Selector */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex gap-2 bg-bg-primary/80 backdrop-blur-sm border border-text-secondary/20 rounded-full px-2 py-1">
          {variants.map((variant) => (
            <button
              key={variant.value}
              onClick={() => setSelectedVariant(variant.value)}
              className={`
                px-3 py-1 text-xs font-heading font-medium rounded-full transition-all duration-200
                ${selectedVariant === variant.value
                  ? 'bg-prysm-best-500 text-bg-primary'
                  : 'text-text-secondary hover:text-text-primary hover:bg-text-secondary/10'
                }
              `}
            >
              {variant.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

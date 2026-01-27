'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import ProductImage from '@/components/common/ProductImage'
import { PRODUCTS } from '@/lib/constants'

export default function HeroProduct() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  
  // Use Best of You as hero product (gold color)
  const heroProduct = PRODUCTS.PRYSM_BEST

  return (
    <motion.div
      ref={ref}
      className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden lg:block pointer-events-none"
      style={{
        y,
      }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative w-64 h-96"
        >
          <ProductImage
            src={heroProduct.images.cutout}
            alt={heroProduct.name}
            variant="cutout"
            className="h-full"
            enable3D={true}
            sizes="400px"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

'use client'

import Image from 'next/image'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'
import { cn } from '@/lib/utils'
import type { ImageVariant } from '@/lib/constants'

interface ProductImageProps {
  src: string
  alt: string
  variant?: ImageVariant
  className?: string
  enable3D?: boolean
  priority?: boolean
  sizes?: string
}

export default function ProductImage({
  src,
  alt,
  variant = 'cutout',
  className,
  enable3D = false,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
}: ProductImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  
  // 3D tilt effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enable3D || !ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    x.set((e.clientX - centerX) / rect.width)
    y.set((e.clientY - centerY) / rect.height)
  }

  const handleMouseLeave = () => {
    if (!enable3D) return
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={cn('relative', className, enable3D && 'perspective-1000')}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-full"
        style={enable3D ? {
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        } : {}}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={cn(
            'object-contain transition-opacity duration-500',
            variant === 'cutout' && 'object-contain p-4',
            variant === 'package' && 'object-cover',
            variant === 'dark' && 'object-contain p-4',
            variant === 'light' && 'object-contain p-4',
          )}
          onLoad={() => setIsLoaded(true)}
          priority={priority}
          sizes={sizes}
        />
      </motion.div>
    </motion.div>
  )
}

'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { PRODUCTS } from '@/lib/constants'
import { cn } from '@/lib/utils'
import PurchaseControls from '@/components/shop/PurchaseControls'

// --- CONTENT DATA ---
const PRODUCT_DETAILS = {
  'prysm-intima': {
    tagline: "Ignite Your Vitality",
    benefits: [
      { title: "Sustained Energy", desc: "No crash. Just 6 hours of clean, linear power." },
      { title: "Athletic Output", desc: "Optimized for pre-workout and physical endurance." },
      { title: "Rapid Absorption", desc: "Bio-available liquid format hits your system in 15 mins." }
    ],
    ingredients: "L-Citrulline, Beta Alanine, Natural Caffeine (Green Tea), Vitamin B12.",
    packageDesc: "Contains 12x 60ml Bottles"
  },
  'prysm-thinq': {
    tagline: "Architecture for Your Mind",
    benefits: [
      { title: "Deep Focus", desc: "Blocks out distractions for deep work sessions." },
      { title: "Memory Recall", desc: "Enhanced cognitive pathways for faster retrieval." },
      { title: "Mental Clarity", desc: "Eliminates brain fog within minutes of ingestion." }
    ],
    ingredients: "Lion's Mane Mushroom, Alpha-GPC, L-Theanine, Ginkgo Biloba.",
    packageDesc: "Contains 12x 60ml Bottles"
  },
  'prysm-best-of-you': {
    tagline: "Balance in a Bottle",
    benefits: [
      { title: "Mood Elevation", desc: "Natural serotonin support for a brighter outlook." },
      { title: "Stress Response", desc: "Adaptogens that help your body process cortisol." },
      { title: "Daily Wellness", desc: "A comprehensive blend for holistic health." }
    ],
    ingredients: "Ashwagandha KSM-66, Rhodiola Rosea, 5-HTP, Magnesium.",
    packageDesc: "Contains 12x 60ml Bottles"
  }
}

const PRYSM_PRODUCTS = Object.values(PRODUCTS).filter(p => 
  p.slug.includes('prysm') && !p.slug.includes('bundle')
)

export default function PrysmShopPage() {
  const [selectedProduct, setSelectedProduct] = useState(PRYSM_PRODUCTS[0])
  const searchParams = useSearchParams()

  // NEW: Listen for URL changes to switch tabs
  useEffect(() => {
    const productSlug = searchParams.get('product')
    if (productSlug) {
      const foundProduct = PRYSM_PRODUCTS.find(p => p.slug === productSlug)
      if (foundProduct) {
        setSelectedProduct(foundProduct)
      }
    }
  }, [searchParams])
  
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // --- DESKTOP ANIMATIONS ---
  const bottleScale = useTransform(scrollYProgress, [0, 0.6, 0.8], [1, 1, 0.25])
  const bottleY = useTransform(scrollYProgress, [0, 0.6, 0.9], [0, 0, 150])
  const bottleRotate = useTransform(scrollYProgress, [0, 0.6, 0.8], [0, 0, 24])
  const bottleOpacity = useTransform(scrollYProgress, [0.7, 0.8], [1, 0])

  const packageOpacity = useTransform(scrollYProgress, [0.75, 0.9], [0, 1])
  const packageScale = useTransform(scrollYProgress, [0.7, 0.9], [0.7, 1])
  const packageY = useTransform(scrollYProgress, [0.6, 0.9], [250, 0])

  const details = PRODUCT_DETAILS[selectedProduct.slug as keyof typeof PRODUCT_DETAILS] || PRODUCT_DETAILS['prysm-intima']

  const getGradientColor = (colorKey: string) => {
    switch (colorKey) {
      case 'prysm-intima': return '#D43636'
      case 'prysm-thinq': return '#2563EB'
      case 'prysm-best': return '#FFB84D'
      default: return '#D4D4D4'
    }
  }

  return (
    <div ref={containerRef} className="min-h-[250vh] relative bg-bg-primary">
      
      {/* Background Gradient */}
      <motion.div 
        animate={{
          background: `radial-gradient(circle at 50% 50%, ${getGradientColor(selectedProduct.color)}15, transparent 70%)`
        }}
        transition={{ duration: 1 }}
        className="fixed inset-0 z-0 pointer-events-none"
      />

      {/* Sticky Nav */}
      <div className="fixed top-20 left-0 right-0 z-40 flex justify-center pointer-events-none">
        <div className="inline-flex bg-bg-primary/80 backdrop-blur-md border border-text-secondary/20 rounded-full p-1 pointer-events-auto shadow-xl">
          {PRYSM_PRODUCTS.map((product) => (
            <button
              key={product.slug}
              onClick={() => {
                setSelectedProduct(product)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-heading font-medium transition-all duration-300",
                selectedProduct.slug === product.slug 
                  ? "bg-text-primary text-bg-primary shadow-lg" 
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              {product.name.replace('Prysm ', '')}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col md:flex-row">
          
          {/* --- LEFT COLUMN (DESKTOP): STICKY BOTTLE --- */}
          <div className="hidden md:flex w-1/2 h-screen sticky top-0 items-center justify-center">
            <div className="relative w-full h-[600px] flex items-center justify-center">
              
              <motion.div 
                style={{ scale: bottleScale, y: bottleY, opacity: bottleOpacity, rotate: bottleRotate }}
                className="relative w-full h-full max-w-sm z-20"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedProduct.slug}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={selectedProduct.images.cutout}
                      alt={selectedProduct.name}
                      fill
                      priority
                      className="object-contain drop-shadow-2xl"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              <motion.div 
                style={{ opacity: packageOpacity, scale: packageScale, y: packageY }}
                className="absolute inset-0 flex items-center justify-center z-10 translate-y-24 pb-10"
              >
                 <div className="relative w-[700px] h-[700px] mt-20">
                    <Image
                      src={selectedProduct.images.package}
                      alt="Package"
                      fill
                      className="object-contain"
                    />
                 </div>
              </motion.div>
            </div>
          </div>

          {/* --- RIGHT COLUMN (CONTENT) --- */}
          <div className="w-full md:w-1/2 flex flex-col pt-32 pb-32">
            
            {/* HERO SECTION */}
            <div className="min-h-[80vh] flex flex-col justify-center">
              
              {/* MOBILE ONLY: Floating Bottle with Switching Animation */}
              <div className="md:hidden h-[400px] relative mb-8">
                 <AnimatePresence mode="wait">
                   <motion.div
                     key={selectedProduct.slug} // Triggers fade/slide on change
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: 20 }}
                     transition={{ duration: 0.3 }}
                     className="relative w-full h-full"
                   >
                     {/* Inner loop for the continuous float */}
                     <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="w-full h-full relative"
                     >
                       <Image 
                        src={selectedProduct.images.cutout} 
                        alt={selectedProduct.name} 
                        fill 
                        className="object-contain" 
                        priority 
                       />
                     </motion.div>
                   </motion.div>
                 </AnimatePresence>
              </div>

              <motion.div
                key={selectedProduct.slug + "text"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-sm font-bold tracking-[0.2em] text-accent-gold mb-2 uppercase">
                  The Prysm Collection
                </h2>
                <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-text-primary">
                  {selectedProduct.name.replace('Prysm ', '')}
                </h1>
                <p className="text-text-secondary text-lg leading-relaxed mb-8">
                  {selectedProduct.description}
                </p>
                <PurchaseControls product={selectedProduct} theme="light" />
              </motion.div>
            </div>

            {/* BENEFITS SECTION */}
            <div className="min-h-[60vh] flex flex-col justify-center py-20">
              <h3 className="text-3xl font-heading text-white mb-10 border-l-2 border-accent-gold pl-4">
                {details.tagline}
              </h3>
              <div className="space-y-12">
                {details.benefits.map((benefit, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
                    <p className="text-text-secondary leading-relaxed max-w-md">{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* INGREDIENTS SECTION */}
            <div className="min-h-[40vh] flex flex-col justify-center py-20 border-t border-b border-white/10">
              <h3 className="text-sm font-bold tracking-[0.2em] text-accent-gold mb-6 uppercase">
                Active Ingredients
              </h3>
              <p className="text-2xl md:text-3xl font-heading text-text-primary leading-tight">
                {details.ingredients}
              </p>
              <div className="mt-8 flex gap-4">
                <span className="px-4 py-2 border border-white/20 rounded-full text-xs text-text-secondary uppercase">
                  Sugar Free
                </span>
                <span className="px-4 py-2 border border-white/20 rounded-full text-xs text-text-secondary uppercase">
                  Vegan
                </span>
                <span className="px-4 py-2 border border-white/20 rounded-full text-xs text-text-secondary uppercase">
                  Made in USA
                </span>
              </div>
            </div>

            {/* PACKAGE / END SECTION */}
            <div className="min-h-[60vh] flex flex-col justify-end pb-10 pt-20">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
                
                {/* MOBILE ONLY: Package Image with Slide Up Animation */}
                <motion.div 
                  className="md:hidden relative w-full h-[400px] mb-8"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                    <Image
                      src={selectedProduct.images.package}
                      alt="Package"
                      fill
                      className="object-contain"
                    />
                </motion.div>

                <h3 className="text-2xl font-heading text-white mb-2">The Monthly Supply</h3>
                <p className="text-text-secondary mb-6">{details.packageDesc}</p>
                <p className="text-sm text-gray-400">
                  Delivered fresh to your door. The bottle you just followed lands right here, ready for unboxing.
                </p>
                <div className="mt-6">
                   <PurchaseControls product={selectedProduct} theme="dark" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
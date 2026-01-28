'use client'

import { useEffect, useRef } from 'react'

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    
    const handleResize = () => {
      // FIX: Use offsetWidth/Height to match the parent container's full scrollable size
      // instead of window.innerWidth/Height which only matches the viewport.
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth
        canvas.height = canvas.parentElement.offsetHeight
      }
    }
    
    // Initial size
    handleResize()
    
    // Update on resize
    window.addEventListener('resize', handleResize)

    const stars: { x: number; y: number; size: number; opacity: number; speed: number }[] = []
    
    const isMobile = window.innerWidth < 768
    const starCount = isMobile ? 50 : 150

    // Initialize stars randomly across the full height of the page
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        opacity: Math.random(),
        speed: Math.random() * 0.02 + 0.005
      })
    }

    const animate = () => {
      // Clear the specific drawing area
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      stars.forEach(star => {
        star.opacity += star.speed
        if (star.opacity > 1 || star.opacity < 0.2) {
          star.speed = -star.speed
        }

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      // FIX: Changed 'fixed' to 'absolute' and 'h-full' to ensure it fills the parent container
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      style={{ background: 'linear-gradient(to bottom, #0A0A0A 0%, #1a1a2e 100%)' }}
    />
  )
}
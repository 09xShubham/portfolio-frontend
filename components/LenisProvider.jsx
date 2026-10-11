'use client'
import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

export default function LenisProvider({ children }) {
  const lenisRef = useRef(null)

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing for buttery feel
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      infinite: false,
    })

    lenisRef.current = lenis

    // RAF loop for Lenis
    let animationFrameId;
    function raf(time) {
      lenis.raf(time)
      animationFrameId = requestAnimationFrame(raf)
    }
    animationFrameId = requestAnimationFrame(raf)

    // Export lenis reference globally for scroll tracking or buttons
    window.lenis = lenis

    return () => {
      cancelAnimationFrame(animationFrameId)
      lenis.destroy()
      window.lenis = null
    }
  }, [])

  return <>{children}</>
}

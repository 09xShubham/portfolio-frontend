'use client'
import { useEffect, useRef, useState } from 'react'

export default function ScrollCanvas({ onLoaded }) {
  const canvasRef = useRef(null)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const imageRef = useRef(null)

  // Scroll interpolation states (lerp)
  const scrollState = useRef({
    target: 0,
    current: 0
  })

  // Preload the user's specific high-res car image
  useEffect(() => {
    const img = new Image()
    img.src = '/thumb-1920-913920.jpg'
    img.onload = () => {
      imageRef.current = img
      setLoadingProgress(100)
      setIsLoaded(true)
      if (onLoaded) onLoaded()
    }
    img.onerror = () => {
      setLoadingProgress(100)
      setIsLoaded(true)
      if (onLoaded) onLoaded()
    }
  }, [onLoaded])

  // Canvas drawing loop with RAF + Lerp Scroll Physics
  useEffect(() => {
    if (!isLoaded || !imageRef.current) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resizeCanvas = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio
      canvas.height = window.innerHeight * window.devicePixelRatio
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
    }

    const drawChoreographedImage = (img, opacity, scale = 1.0, panX = 0, panY = 0) => {
      if (!img) return
      ctx.save()
      ctx.globalAlpha = opacity

      const canvasWidth = canvas.width
      const canvasHeight = canvas.height
      const imgWidth = img.width
      const imgHeight = img.height

      const canvasRatio = canvasWidth / canvasHeight
      const imgRatio = imgWidth / imgHeight

      let drawWidth = canvasWidth
      let drawHeight = canvasHeight
      let offsetX = 0
      let offsetY = 0

      if (canvasRatio > imgRatio) {
        drawHeight = canvasWidth / imgRatio
        offsetY = (canvasHeight - drawHeight) / 2
      } else {
        drawWidth = canvasHeight * imgRatio
        offsetX = (canvasWidth - drawWidth) / 2
      }

      // Center of canvas + apply interactive pans
      const cx = canvasWidth / 2 + (panX * canvasWidth)
      const cy = canvasHeight / 2 + (panY * canvasHeight)
      
      ctx.translate(cx, cy)
      ctx.scale(scale, scale)
      ctx.translate(-cx, -cy)

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)
      ctx.restore()
    }

    const updateAndDraw = () => {
      const scrollY = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      
      // Update target scroll position
      scrollState.current.target = maxScroll > 0 ? scrollY / maxScroll : 0
      
      // Smooth lerp (interpolate) current scroll progress
      scrollState.current.current += (scrollState.current.target - scrollState.current.current) * 0.085

      const scrollFraction = Math.min(Math.max(scrollState.current.current, 0), 1)

      // Clear Canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = 'high'

      const img = imageRef.current
      ctx.fillStyle = '#030303'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Timeline mapping for choreographed camera sequence
      // 0.0 - 0.40: HERO SECTION - Pull back and pan down
      if (scrollFraction <= 0.40) {
        const t = scrollFraction / 0.40
        const scale = 1.45 - t * 0.40 // Zoom out from 1.45 to 1.05
        const panY = 0.04 * (1 - t)  // Pan down from 4% offset to 0%
        const panX = -0.06 * (1 - t) // Pan left from -6% to 0%
        drawChoreographedImage(img, 1.0, scale, panX, panY)
      }
      // 0.40 - 0.70: THREE PILLARS (BUILDER) - Slow push-in
      else if (scrollFraction > 0.40 && scrollFraction <= 0.70) {
        const t = (scrollFraction - 0.40) / 0.30
        const scale = 1.05 + t * 0.15 // Zoom in from 1.05 to 1.20
        drawChoreographedImage(img, 1.0, scale, 0, 0)
      }
      // 0.70 - 0.93: WORK & SKILLS (CLOSER) - Lateral profile slide
      else if (scrollFraction > 0.70 && scrollFraction <= 0.93) {
        const t = (scrollFraction - 0.70) / 0.23
        const scale = 1.20 - t * 0.10 // Slide back slightly to 1.10
        const panX = 0.05 * t         // Slide left-to-right by 5%
        drawChoreographedImage(img, 1.0, scale, panX, 0)
      }
      // 0.93 - 1.0: FINALE - Fade to black overlay
      else {
        const t = (scrollFraction - 0.93) / 0.07
        drawChoreographedImage(img, 1.0, 1.10, 0.05, 0)

        // Overlay a dark screen to highlight footer CTA text
        ctx.fillStyle = `rgba(3, 3, 3, ${t * 0.88})`
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
    }

    // Continuous rendering animation loop (60FPS/120FPS decoupled from scroll events)
    let animationFrameId
    const loop = () => {
      updateAndDraw()
      animationFrameId = requestAnimationFrame(loop)
    }

    // Event listener setup for resize
    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()
    
    // Start rendering loop
    animationFrameId = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isLoaded])

  return (
    <>
      {/* Cinematic Loading Overlay */}
      {!isLoaded && (
        <div className="fixed inset-0 bg-[#030303] z-[9999] flex flex-col items-center justify-center font-mono">
          <div className="w-[300px] md:w-[400px]">
            <div className="flex justify-between items-end mb-2">
              <span className="text-[#00ff85] uppercase tracking-[0.2em] font-bold text-sm">
                SYSTEM BOOTING
              </span>
              <span className="text-[#f5f5ee] font-bold text-lg">{loadingProgress}%</span>
            </div>
            {/* Progress Bar Container */}
            <div className="w-full h-[2px] bg-white/10 relative overflow-hidden">
              <div
                className="h-full bg-[#00ff85] transition-all duration-300 shadow-[0_0_10px_#00ff85]"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            {/* Minimal Stat Subtitles */}
            <div className="flex justify-between mt-3 text-[10px] text-white/40 tracking-[0.1em] uppercase">
              <span>PRELOADING CUSTOM ASSET</span>
              <span>SHUBHAM YADAV V2.0</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Fullscreen Background Canvas showing original image colors with GPU acceleration */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-10 bg-[#030303]"
        style={{ 
          opacity: isLoaded ? 1 : 0, 
          transition: 'opacity 0.8s ease',
          willChange: 'transform, opacity', 
          transform: 'translate3d(0, 0, 0)', 
          backfaceVisibility: 'hidden'
        }}
      />
    </>
  )
}

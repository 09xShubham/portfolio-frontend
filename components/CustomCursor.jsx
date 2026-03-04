'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState({ x: 0, y: 0 })
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    const down = () => setClicking(true)
    const up = () => setClicking(false)

    const checkHover = (e) => {
      const el = e.target
      const isInteractive = el.matches('a, button, [data-hover], input, textarea')
      setHovering(isInteractive)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousemove', checkHover)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousemove', checkHover)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [])

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        animate={{ x: pos.x - 6, y: pos.y - 6, scale: clicking ? 0.6 : 1 }}
        transition={{ type: 'spring', stiffness: 2000, damping: 40, mass: 0.1 }}
        style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#00f5ff' }}
      />
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        animate={{
          x: pos.x - (hovering ? 24 : 18),
          y: pos.y - (hovering ? 24 : 18),
          scale: clicking ? 0.8 : 1,
          opacity: hovering ? 0.8 : 0.4,
          width: hovering ? 48 : 36,
          height: hovering ? 48 : 36,
        }}
        transition={{ type: 'spring', stiffness: 600, damping: 28, mass: 0.15 }}
        style={{
          borderRadius: '50%',
          border: '1px solid #00f5ff',
          boxShadow: hovering ? '0 0 15px rgba(0,245,255,0.5)' : 'none',
        }}
      />
    </>
  )
}

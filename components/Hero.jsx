'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const roles = ['AI/ML Engineer', 'Full Stack Developer',  'RAG Specialist', 'MLOps Engineer']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((roleIndex + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 z-10">
      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }}
      />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)', filter: 'blur(50px)' }}
      />

      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          {/* Top line */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6 ml-16">
            <div className="w-8 h-px bg-[#00f5ff]" />
            <span className="font-['JetBrains_Mono',monospace] text-[#00f5ff] text-sm tracking-widest mt-4">
              HELLO, WORLD
            </span>
            <div className="w-8 h-px bg-[#00f5ff]" />
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-['Syne',sans-serif] text-6xl md:text-8xl font-bold leading-none mb-4 mt-28"
          >
            <span className="text-white">Shubham</span>
            <br />
            <span className="text-gradient-cyan">Yadav</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8 h-12">
            <span className="font-['JetBrains_Mono',monospace] text-slate-400 text-sm md:text-base">&gt;_</span>
            <span className="font-['Syne',sans-serif] text-xl md:text-3xl font-semibold text-slate-300">
              {displayed}
              <span className="inline-block w-0.5 h-7 bg-[#00f5ff] ml-1 animate-pulse" />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="font-['DM_Sans',sans-serif] text-slate-400 text-lg max-w-xl leading-relaxed mb-10"
          >
            Building scalable ML systems & LLM-based applications that push boundaries.
            1+ year of production experience improving inference latency by{' '}
            <span className="text-[#00f5ff]">40%</span> and delivering{' '}
            <span className="text-[#00f5ff]">95%+</span> extraction accuracy.
          </motion.p>

          {/* Stats row */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-8 mb-12">
            {[
              { value: '1+', label: 'Year Experience' },
              { value: '40%', label: 'Latency Reduced' },
              { value: '95%+', label: 'Accuracy' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-['Syne',sans-serif] text-3xl font-bold text-gradient-cyan">{stat.value}</span>
                <span className="font-['DM_Sans',sans-serif] text-xs text-slate-500 mt-0.5">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="relative px-8 py-4 bg-[#00f5ff] text-[#0a0a0f] font-['Syne',sans-serif] font-bold rounded overflow-hidden group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">View Projects</span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
                style={{ opacity: 0.15 }}
              />
            </motion.a>

            <motion.a
              href="#contact"
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="px-8 py-4 border border-[rgba(0,245,255,0.4)] text-[#00f5ff] font-['Syne',sans-serif] font-bold rounded hover:bg-[rgba(0,245,255,0.06)] hover:border-[#00f5ff] hover:shadow-[0_0_20px_rgba(0,245,255,0.2)] transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex items-center gap-6 mt-12">
            <a href="https://github.com/09xShubham" target="_blank" rel="noreferrer"
              className="font-['JetBrains_Mono',monospace] text-xs text-slate-500 hover:text-[#00f5ff] transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/shubham-yadav-364185208/" target="_blank" rel="noreferrer"
              className="font-['JetBrains_Mono',monospace] text-xs text-slate-500 hover:text-[#00f5ff] transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a href="mailto:shubhamyadav.03@outlook.com"
              className="font-['JetBrains_Mono',monospace] text-xs text-slate-500 hover:text-[#00f5ff] transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Email
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-['JetBrains_Mono',monospace] text-[10px] text-slate-600 tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-[#00f5ff] to-transparent"
        />
      </motion.div>
    </section>
  )
}

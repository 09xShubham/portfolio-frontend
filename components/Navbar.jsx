'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setActive(href)
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled ? 'glass border-b border-[rgba(0,245,255,0.08)] py-3' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-['Syne',sans-serif] text-xl font-bold text-white flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-[#00f5ff] glow-text font-['JetBrains_Mono',monospace] text-sm">&lt;</span>
            <span>SY</span>
            <span className="text-[#00f5ff] glow-text font-['JetBrains_Mono',monospace] text-sm">/&gt;</span>
          </motion.button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`font-['DM_Sans',sans-serif] text-sm font-medium transition-all duration-300 relative group ${
                  active === link.href ? 'text-[#00f5ff]' : 'text-slate-400 hover:text-white'
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
              >
                <span className="font-['JetBrains_Mono',monospace] text-[#00f5ff] text-xs mr-1 opacity-60">0{i + 1}.</span>
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-[#00f5ff] transition-all duration-300 ${
                  active === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </motion.button>
            ))}
            <motion.a
              href="mailto:shubhamyadav.03@outlook.com"
              className="px-5 py-2 border border-[#00f5ff] text-[#00f5ff] text-sm font-['DM_Sans',sans-serif] rounded hover:bg-[rgba(0,245,255,0.08)] transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,245,255,0.3)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }} className="block w-6 h-0.5 bg-[#00f5ff]" />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1, x: menuOpen ? 10 : 0 }} className="block w-6 h-0.5 bg-[#00f5ff]" />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} className="block w-6 h-0.5 bg-[#00f5ff]" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[90] glass flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-2xl font-['Syne',sans-serif] font-bold text-white hover:text-[#00f5ff] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                <span className="font-['JetBrains_Mono',monospace] text-[#00f5ff] text-sm mr-2">0{i + 1}.</span>
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

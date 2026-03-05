'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

export default function Contact() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://portfolio-backend-1-g8kh.onrender.com/api/contact"
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message
        })
      })

      if (!res.ok) throw new Error("Failed to send")

      setSent(true)
      setForm({ name: "", email: "", message: "" })

      setTimeout(() => setSent(false), 3000)

    } catch (error) {
      console.error("Error sending message:", error)
      alert("Failed to send message. Please try again.")
    }
  }

  const contactLinks = [
    {
      label: 'Email',
      value: 'shubhamyadav.03@outlook.com',
      href: 'mailto:shubhamyadav.03@outlook.com',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
    },
    {
      label: 'Phone',
      value: '+91-8287737144',
      href: 'tel:+918287737144',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/>
        </svg>
      ),
    },
    {
      label: 'GitHub',
      value: 'GitHub Profile',
      href: 'https://github.com/09xShubham',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      href: 'https://www.linkedin.com/in/shubham-yadav-364185208/',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      label: 'Naukri',
      value: 'Naukri Profile',
      href: 'https://www.naukri.com/mnjuser/profile',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill="#2F5BD3" />
          <circle cx="10" cy="7" r="1.8" fill="white" />
          <path
            d="M10 9 L15 11.5 L11.5 15 L15 19 L9.5 15.5 L10 9 Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ]

  const inputClass = (name) => `
    w-full bg-[rgba(255,255,255,0.03)] border rounded-xl px-5 py-4
    font-['DM_Sans',sans-serif] text-sm text-white placeholder-slate-600
    outline-none transition-all duration-300
    ${focused === name
      ? 'border-[#00f5ff] shadow-[0_0_20px_rgba(0,245,255,0.1)]'
      : 'border-[rgba(255,255,255,0.07)] hover:border-[rgba(255,255,255,0.12)]'
    }
  `

  return (
    <section id="contact" ref={ref} className="relative py-32 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-['JetBrains_Mono',monospace] text-[#00f5ff] text-sm">05.</span>
          <h2 className="font-['Syne',sans-serif] text-4xl font-bold text-white">Contact</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[rgba(0,245,255,0.3)] to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-['Syne',sans-serif] text-3xl font-bold text-white mb-4">
                Let's Build Something<br />
                <span className="text-gradient-cyan">Extraordinary</span>
              </h3>
              <p className="font-['DM_Sans',sans-serif] text-slate-400 leading-relaxed">
                I'm currently open to new opportunities — whether it's a full-time role, freelance project, 
                or an exciting collaboration. If you have an interesting problem to solve with AI/ML, let's talk.
              </p>
            </div>

            {/* Contact links */}
            <div className="space-y-3">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.08 + 0.3 }}
                  className="flex items-center gap-4 glass glass-hover rounded-xl p-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[rgba(0,245,255,0.08)] flex items-center justify-center text-[#00f5ff] group-hover:bg-[rgba(0,245,255,0.15)] transition-colors">
                    {link.icon}
                  </div>
                  <div>
                    <p className="font-['JetBrains_Mono',monospace] text-xs text-slate-500">{link.label}</p>
                    <p className="font-['DM_Sans',sans-serif] text-sm text-slate-300 group-hover:text-white transition-colors">{link.value}</p>
                  </div>
                  <svg className="w-4 h-4 text-slate-700 group-hover:text-[#00f5ff] transition-colors ml-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
                placeholder="Your Name"
                required
                className={inputClass('name')}
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
                placeholder="Your Email"
                required
                className={inputClass('email')}
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                placeholder="Your Message"
                rows={5}
                required
                className={`${inputClass('message')} resize-none`}
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-[#00f5ff] text-[#0a0a0f] font-['Syne',sans-serif] font-bold rounded-xl relative overflow-hidden group"
              >
                <motion.span
                  animate={sent ? { y: -30, opacity: 0 } : { y: 0, opacity: 1 }}
                  className="block"
                >
                  Send Message →
                </motion.span>
                {sent && (
                  <motion.span
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center text-green-900 font-bold"
                  >
                    ✓ Message Sent!
                  </motion.span>
                )}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-24 pt-8 border-t border-[rgba(255,255,255,0.05)] flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-['JetBrains_Mono',monospace] text-xs text-slate-700">
            © {new Date().getFullYear()} Shubham Yadav.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

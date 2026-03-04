'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const highlights = [
  {
    label: 'Location',
    value: 'Delhi / Gurugram, India',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
  },
  {
    label: 'Education',
    value: 'B.Tech CSE (AI/ML), DCE',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/>
        <path d="M6 12v5c3.33 1.67 8.67 1.67 12 0v-5"/>
      </svg>
    ),
  },
  {
    label: 'CGPA',
    value: '7.0 / 10',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    label: 'Availability',
    value: 'Open to Opportunities',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
]

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="about" ref={ref} className="relative py-32 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="font-['JetBrains_Mono',monospace] text-[#00f5ff] text-sm">01.</span>
            <h2 className="font-['Syne',sans-serif] text-4xl font-bold text-white">About Me</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[rgba(0,245,255,0.3)] to-transparent" />
          </div>

          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Text content */}
            <div className="lg:col-span-3 space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="font-['DM_Sans',sans-serif] text-slate-300 text-lg leading-relaxed"
              >
                I'm an <span className="text-[#00f5ff] font-semibold">AI/ML Engineer</span> with a passion for building 
                intelligent systems that solve real-world problems at scale. With over 1 year of production experience, 
                I specialize in architecting end-to-end machine learning pipelines and LLM-based applications.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="font-['DM_Sans',sans-serif] text-slate-400 text-base leading-relaxed"
              >
                My work spans from building multi-tenant helpdesk platforms and AI-driven costing tools to 
                deploying OCR AI platforms with 95%+ extraction accuracy. I thrive at the intersection of 
                research and engineering — turning cutting-edge models into reliable production systems.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-['DM_Sans',sans-serif] text-slate-400 text-base leading-relaxed"
              >
                When I'm not optimizing inference latency or engineering RAG pipelines, I'm building 
                full-stack platforms that scale to thousands of users — combining my love for both 
                backend intelligence and clean frontend experiences.
              </motion.p>

              {/* Code block decoration */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="glass rounded-lg p-5 font-['JetBrains_Mono',monospace] text-sm mt-8"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  <span className="text-slate-600 text-xs ml-2">profile.py</span>
                </div>
                <div className="space-y-1.5 text-xs">
                  <p><span className="text-purple-400">class</span> <span className="text-[#00f5ff]">ShubhamYadav</span><span className="text-white">:</span></p>
                  <p className="pl-4"><span className="text-slate-500">"""AI/ML Engineer | Full Stack Developer"""</span></p>
                  <p className="pl-4"><span className="text-slate-300">skills</span> <span className="text-white">=</span> <span className="text-yellow-400">["PyTorch", "LLMs", "RAG", "FastAPI"]</span></p>
                  <p className="pl-4"><span className="text-slate-300">passion</span> <span className="text-white">=</span> <span className="text-green-400">"Building intelligent systems"</span></p>
                  <p className="pl-4"><span className="text-slate-300">available</span> <span className="text-white">=</span> <span className="text-[#00f5ff]">True</span></p>
                </div>
              </motion.div>
            </div>

            {/* Info cards */}
            <div className="lg:col-span-2 space-y-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 * i + 0.3, duration: 0.7 }}
                  className="glass glass-hover rounded-xl p-5 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-[rgba(0,245,255,0.08)] flex items-center justify-center text-[#00f5ff] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-['JetBrains_Mono',monospace] text-xs text-slate-500">{item.label}</p>
                    <p className="font-['DM_Sans',sans-serif] text-sm font-medium text-white mt-0.5">{item.value}</p>
                  </div>
                </motion.div>
              ))}

              {/* Avatar placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="relative mt-6 rounded-2xl overflow-hidden aspect-square w-full max-w-[280px] mx-auto"
              >
                <div className="absolute inset-0 glass" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00f5ff] to-purple-600 flex items-center justify-center">
                    <span className="font-['Syne',sans-serif] text-3xl font-bold text-white">SY</span>
                  </div>
                  <p className="font-['Syne',sans-serif] font-bold text-white">Shubham Yadav</p>
                  <p className="font-['JetBrains_Mono',monospace] text-xs text-[#00f5ff]">AI/ML Engineer</p>
                  <div className="flex gap-1 mt-2">
                    {['Python', 'PyTorch', 'LLMs'].map(t => (
                      <span key={t} className="text-[10px] font-['JetBrains_Mono',monospace] px-2 py-0.5 bg-[rgba(0,245,255,0.1)] text-[#00f5ff] rounded-full border border-[rgba(0,245,255,0.2)]">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

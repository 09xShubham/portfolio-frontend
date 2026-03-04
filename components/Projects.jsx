'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const projects = [
  {
    title: 'InterviewAiHub',
    subtitle: 'Interview Preparation Platform',
    description: 'AI-powered full-stack interview preparation platform with resume analysis, AI-driven cover letter generation, mock interviews, and 50+ domain-specific skill assessments.',
    longDesc: 'Scaled to 1000+ registered users and 100+ concurrent users. Engineered an intelligent LLM-based interview question generator that analyzes resume–job description pairs to create 30+ personalized questions.',
    tech: ['Next.js', 'Django REST', 'MySQL', 'LLMs', 'OpenAI', 'Python'],
    metrics: [
      { label: 'Registered Users', value: '1000+' },
      { label: 'Response Time', value: '<3s' },
      { label: 'Processing Speed', value: '40% faster' },
    ],
    gradient: 'from-[#00f5ff] to-purple-600',
    accentColor: '#00f5ff',
    icon: '🤖',
    link: 'https://interviewaihub.com',
    
  },
  {
    title: 'RAG Intelligence',
    subtitle: 'Multi-Source Knowledge Engine',
    description: 'Multi-RAG Intelligence Application using LangChain tools and agents with vector-based semantic search for intelligent document querying.',
    longDesc: 'Improved response accuracy by 40–50% while optimizing retrieval latency and system scalability. Built with Next.js frontend and Django REST API backend.',
    tech: ['Next.js', 'Django', 'LangChain', 'Vector DB', 'Embeddings', 'Python'],
    metrics: [
      { label: 'Accuracy Boost', value: '40-50%' },
      { label: 'Architecture', value: 'Multi-RAG' },
      { label: 'Search Type', value: 'Semantic' },
    ],
    gradient: 'from-[#39ff14] to-[#00f5ff]',
    accentColor: '#39ff14',
    icon: '🧠',
    link: '#',
  },
]

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
}

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)

  const go = (next) => {
    setDir(next > index ? 1 : -1)
    setIndex(next)
  }
  const prev = () => go((index - 1 + projects.length) % projects.length)
  const next = () => go((index + 1) % projects.length)

  const p = projects[index]

  return (
    <section id="projects" ref={ref} className="relative py-28 px-6 z-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-['JetBrains_Mono',monospace] text-[#00f5ff] text-sm">03.</span>
          <h2 className="font-['Syne',sans-serif] text-4xl font-bold text-white">Projects</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[rgba(0,245,255,0.3)] to-transparent" />
          <span className="font-['JetBrains_Mono',monospace] text-xs text-slate-600">
            <span className="text-[#00f5ff]">{String(index + 1).padStart(2, '0')}</span>
            {' / '}
            {String(projects.length).padStart(2, '0')}
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Slider card */}
          <div className="relative overflow-hidden rounded-2xl glass" style={{ minHeight: 420 }}>
            <div className={`h-1 w-full bg-gradient-to-r ${p.gradient}`} />

            <AnimatePresence custom={dir} mode="wait">
              <motion.div
                key={index}
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="p-8 md:p-10"
              >
                <div className="grid md:grid-cols-2 gap-10">
                  {/* Left */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-5">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center text-2xl flex-shrink-0`}>
                          {p.icon}
                        </div>
                        <div>
                          <h3 className="font-['Syne',sans-serif] text-2xl font-bold text-white">{p.title}</h3>
                          <p className="font-['JetBrains_Mono',monospace] text-xs text-slate-500 mt-0.5">{p.subtitle}</p>
                        </div>
                      </div>
                      <p className="font-['DM_Sans',sans-serif] text-slate-300 text-sm leading-relaxed mb-3">{p.description}</p>
                      <p className="font-['DM_Sans',sans-serif] text-slate-500 text-sm leading-relaxed">{p.longDesc}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {p.tech.map(t => (
                        <span key={t} className="font-['JetBrains_Mono',monospace] text-xs px-3 py-1 rounded-full bg-[rgba(255,255,255,0.04)] text-slate-400 border border-[rgba(255,255,255,0.07)] hover:border-[rgba(0,245,255,0.3)] hover:text-[#00f5ff] transition-all">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex flex-col justify-between gap-6">
                    <div className="grid grid-cols-1 gap-3">
                      {p.metrics.map((m) => (
                        <div key={m.label} className="flex items-center justify-between bg-[rgba(255,255,255,0.03)] rounded-xl px-5 py-4 border border-[rgba(255,255,255,0.05)]">
                          <span className="font-['DM_Sans',sans-serif] text-sm text-slate-500">{m.label}</span>
                          <span className={`font-['Syne',sans-serif] text-lg font-bold bg-gradient-to-r ${p.gradient} bg-clip-text text-transparent`}>
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a href={p.link} target="_blank" rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-['DM_Sans',sans-serif] font-semibold transition-all"
                        style={{ background: `${p.accentColor}15`, color: p.accentColor, border: `1px solid ${p.accentColor}30` }}>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                        </svg>
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation row */}
          <div className="flex items-center justify-between mt-5">
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <button key={i} onClick={() => go(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === index ? 'w-6 h-2 bg-[#00f5ff]' : 'w-2 h-2 bg-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.3)]'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <motion.button onClick={prev} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.93 }}
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-[#00f5ff] hover:border-[rgba(0,245,255,0.3)] border border-transparent transition-all"
                style={{ background: '#00f5ff', color: '#0a0a0f' }}>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
              </motion.button>
              <motion.button onClick={next} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.93 }}
                className="w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-all"
                style={{ background: '#00f5ff', color: '#0a0a0f' }}>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

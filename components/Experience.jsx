'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    company: 'Ipai Technology Solutions LLP',
    role: 'Associate Software Dev.',
    period: 'April 2025 – Present',
    location: 'Delhi, India',
    type: 'Full-time',
    color: '#00f5ff',
    achievements: [
      'Developed a multi-tenant helpdesk platform with tenant-isolated data and role-based access using the MERN stack, improving API performance by 50–60%.',
      'Built an AI-driven FOB costing tool for tech packs with region-wise costing using OpenAI and Gemini APIs.',
      'Implemented multi-threaded backend processing for concurrent AI requests, improving REST API response time by 60%.',
      'Implemented automated CI/CD pipeline reducing deployment and release cycle time by 40%.',
    ],
    tags: ['MERN Stack', 'OpenAI', 'Gemini', 'MongoDB', 'CI/CD'],
  },
  {
    company: 'Ipai Technology Solutions LLP',
    role: 'Full Stack Intern',
    period: 'Jan 2025 – Mar 2025',
    location: 'Delhi, India',
    type: 'Internship',
    color: '#7c3aed',
    achievements: [
      'Developed a Business Operation Management System (BOMS) using React.js for frontend and Django for backend, improving operational efficiency by 30%.',
      'Implemented automated CI/CD pipeline reducing deployment cycle time by 25%.',
    ],
    tags: ['React.js', 'Django', 'REST APIs', 'CI/CD'],
  },
]

function ExperienceCard({ exp, index, inView }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.2 + 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 lg:left-1/2 top-8 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 2, delay: index * 0.5 }}
          className="w-4 h-4 rounded-full border-2"
          style={{ borderColor: exp.color, backgroundColor: '#0a0a0f', boxShadow: `0 0 15px ${exp.color}50` }}
        />
      </div>

      {/* Card */}
      <div className={`ml-8 lg:ml-0 lg:w-[calc(50%-2rem)] ${isEven ? 'lg:pr-8' : 'lg:ml-[calc(50%+2rem)]'}`}>
        <div className="glass glass-hover rounded-2xl p-7 relative overflow-hidden">
          {/* Accent bar */}
          <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl" style={{ background: exp.color }} />

          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div>
              <span className="font-['JetBrains_Mono',monospace] text-xs px-2 py-1 rounded mb-2 inline-block"
                style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}30` }}>
                {exp.type}
              </span>
              <h3 className="font-['Syne',sans-serif] text-xl font-bold text-white">{exp.role}</h3>
              <p className="font-['DM_Sans',sans-serif] text-base mt-1" style={{ color: exp.color }}>{exp.company}</p>
            </div>
            <div className="text-right">
              <p className="font-['JetBrains_Mono',monospace] text-xs text-slate-400">{exp.period}</p>
              <p className="font-['JetBrains_Mono',monospace] text-xs text-slate-600 mt-1">{exp.location}</p>
            </div>
          </div>

          <ul className="space-y-2.5 mb-5">
            {exp.achievements.map((ach, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                <span className="font-['DM_Sans',sans-serif] text-sm text-slate-400 leading-relaxed">{ach}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {exp.tags.map(tag => (
              <span key={tag} className="font-['JetBrains_Mono',monospace] text-xs px-3 py-1 rounded-full"
                style={{ background: `${exp.color}10`, color: exp.color, border: `1px solid ${exp.color}20` }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="experience" ref={ref} className="relative py-32 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-['JetBrains_Mono',monospace] text-[#00f5ff] text-sm">02.</span>
          <h2 className="font-['Syne',sans-serif] text-4xl font-bold text-white">Experience</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[rgba(0,245,255,0.3)] to-transparent" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f5ff] via-purple-600 to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} inView={inView} />
            ))}
          </div>

          {/* Timeline end dot */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="hidden lg:flex absolute left-1/2 -translate-x-1/2 bottom-0 w-3 h-3 items-center justify-center"
          >
            <div className="w-2 h-2 rounded-full bg-purple-600" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

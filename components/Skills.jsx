'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    title: 'Machine Learning & AI',
    icon: '🧠',
    color: '#00f5ff',
    skills: [
      { name: 'LLMs & Prompt Eng.', level: 92 },
      { name: 'LangChain & LangGraph', level: 90 },
      { name: 'RAG & Vector Embeddings', level: 90 },
      { name: 'NLP & Deep Learning', level: 85 },
      { name: 'TensorFlow / Keras', level: 82 },
      { name: 'Scikit-learn & NLTK', level: 85 },
    ],
  },
  {
    title: 'Backend & APIs',
    icon: '⚙️',
    color: '#7c3aed',
    skills: [
      { name: 'Django / DRF', level: 92 },
      { name: 'FastAPI', level: 88 },
      { name: 'REST APIs & Microservices', level: 92 },
      { name: 'PostgreSQL & MySQL', level: 88 },
      { name: 'Relational DB Architecture', level: 86 },
    ],
  },
  {
    title: 'Frontend & UI',
    icon: '🎨',
    color: '#39ff14',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 88 },
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    title: 'MLOps & Cloud',
    icon: '☁️',
    color: '#f59e0b',
    skills: [
      { name: 'Docker & Containerization', level: 88 },
      { name: 'Model Deployment', level: 85 },
      { name: 'CI/CD Pipelines', level: 85 },
      { name: 'Azure & Cloud Platforms', level: 78 },
      { name: 'Git & GitHub', level: 92 },
    ],
  },
]

const allTags = [
  'Python', 'JavaScript', 'SQL', 'Large Language Models (LLMs)', 'LangGraph',
  'LangChain', 'RAG', 'Vector Embeddings', 'Prompt Engineering', 'NLP',
  'Deep Learning', 'TensorFlow', 'Keras', 'Scikit-learn', 'NLTK',
  'Django', 'Django REST Framework (DRF)', 'FastAPI', 'REST APIs', 'Microservices',
  'React.js', 'Next.js', 'PostgreSQL', 'MySQL', 'Relational Databases',
  'Docker', 'Model Deployment', 'Azure', 'Git', 'GitHub', 'CI/CD',
  'OpenAI API', 'Gemini API',
]

function SkillBar({ skill, color, inView, delay }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="font-['DM_Sans',sans-serif] text-sm text-slate-300">{skill.name}</span>
        <span className="font-['JetBrains_Mono',monospace] text-xs" style={{ color }}>{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ delay, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color} 0%, ${color}80 100%)`,
            boxShadow: `0 0 8px ${color}40`,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="skills" ref={ref} className="relative py-20 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-['JetBrains_Mono',monospace] text-[#00f5ff] text-sm">04.</span>
          <h2 className="font-['Syne',sans-serif] text-4xl font-bold text-white">Skills</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[rgba(0,245,255,0.3)] to-transparent" />
        </div>

        {/* Category cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.12 + 0.1, duration: 0.7 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-['Syne',sans-serif] text-sm font-bold text-white leading-tight">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    color={cat.color}
                    inView={inView}
                    delay={ci * 0.1 + si * 0.08 + 0.3}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="flex-1 h-px bg-[rgba(255,255,255,0.05)]" />
            <span className="font-['JetBrains_Mono',monospace] text-xs text-slate-600 tracking-wider px-3 py-1 rounded-full border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]">
              Tech Stack
            </span>
            <div className="flex-1 h-px bg-[rgba(255,255,255,0.05)]" />
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {allTags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                whileHover={{ scale: 1.1, borderColor: '#00f5ff', color: '#00f5ff' }}
                className="font-['JetBrains_Mono',monospace] text-xs px-4 py-2 rounded-full text-slate-500 border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] cursor-default transition-all duration-200"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

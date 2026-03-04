'use client'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import CustomCursor from '../components/CustomCursor'
import ParticleField from '../components/ParticleField'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0f] noise-overlay">
      <CustomCursor />
      <ParticleField />
      {/* Grid background */}
      <div className="fixed inset-0 grid-bg opacity-100 pointer-events-none z-0" />
      {/* Radial gradient center glow */}
      <div className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,245,255,0.07) 0%, transparent 70%)'
        }}
      />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

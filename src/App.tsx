import { Suspense, lazy, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import CurrentFocus from './components/CurrentFocus'
import ExpertiseCards from './components/ExpertiseCards'
import TechStack from './components/TechStack'
import DomainExperience from './components/DomainExperience'
import GitHubInsights from './components/GitHubInsights'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

const Background3D = lazy(() => import('./components/Background3D'))

export default function App() {
  const [load3D, setLoad3D] = useState(false)

  useEffect(() => {
    // Defer 3D loading to prioritize initial content paint (LCP) and avoid main-thread blocking
    const timer = setTimeout(() => {
      setLoad3D(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Global IntersectionObserver for kinetic scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('kinetic-active')
          } else {
            entry.target.classList.remove('kinetic-active')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    // Select all sections inside main
    const sections = document.querySelectorAll('main > section')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="font-sans bg-[#050505] min-h-screen">
      {/* Global 3D Kinetic Background */}
      <div className="fixed inset-0 z-0">
        {load3D && (
          <Suspense fallback={null}>
            <Background3D />
          </Suspense>
        )}
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <main className="text-[#ffffff] w-full rounded-t-[40px] -mt-10 overflow-hidden pb-12 border-t border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_-20px_40px_rgba(0,0,0,0.5)]">
          <About />
          <CurrentFocus />
          <ExpertiseCards />
          <TechStack />
          <DomainExperience />
          <GitHubInsights />
          <Projects />
          <Certifications />
          <Contact />
          
          <footer className="mt-20 border-t border-white/10 pt-12 pb-8 text-center text-sm text-[#52525b] px-4">
            <span className="font-bold text-white uppercase tracking-widest block md:inline">Maulana Rafi Nurdiansyah</span>
            <span className="hidden md:inline mx-3 text-[#a3a3a3]">·</span>
            <span className="block md:inline mt-2 md:mt-0">QA Automation Engineer · SDET</span>
            <span className="hidden md:inline mx-3 text-[#a3a3a3]">·</span>
            <span className="italic block md:inline mt-2 md:mt-0">latency, correctness, and release confidence</span>
          </footer>
        </main>
      </div>
    </div>
  )
}

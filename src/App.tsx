import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

const CurrentFocus = lazy(() => import('./components/CurrentFocus'))
const ExpertiseCards = lazy(() => import('./components/ExpertiseCards'))
const TechStack = lazy(() => import('./components/TechStack'))
const DomainExperience = lazy(() => import('./components/DomainExperience'))
const GitHubInsights = lazy(() => import('./components/GitHubInsights'))
const Projects = lazy(() => import('./components/Projects'))
const Certifications = lazy(() => import('./components/Certifications'))
const Contact = lazy(() => import('./components/Contact'))

const Fallback = () => <div style={{ minHeight: '80px' }} aria-hidden />

export default function App() {
  return (
    <div className="font-sans bg-[#404040]">
      <Navbar />
      <Hero />
      <main className="bg-[#f4f4f4] text-[#171717] min-h-screen relative z-10 w-full rounded-t-[40px] -mt-10 overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.1)] pb-12">
        <About />
        <Suspense fallback={<Fallback />}>
          <CurrentFocus />
          <ExpertiseCards />
          <TechStack />
          <DomainExperience />
          <GitHubInsights />
          <Projects />
          <Certifications />
          <Contact />
        </Suspense>
        
        <footer className="mt-20 border-t border-black/10 pt-12 pb-8 text-center text-sm text-[#52525b] px-4">
          <span className="font-bold text-black uppercase tracking-widest block md:inline">Maulana Rafi Nurdiansyah</span>
          <span className="hidden md:inline mx-3 text-[#a3a3a3]">·</span>
          <span className="block md:inline mt-2 md:mt-0">QA Automation Engineer · SDET</span>
          <span className="hidden md:inline mx-3 text-[#a3a3a3]">·</span>
          <span className="italic block md:inline mt-2 md:mt-0">latency, correctness, and release confidence</span>
        </footer>
      </main>
    </div>
  )
}

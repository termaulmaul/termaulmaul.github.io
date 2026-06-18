import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

// Lazy-load below-fold sections — reduces initial JS parse cost
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
    <div className="min-h-screen bg-slate-950 bg-grid text-slate-200 font-sans selection:bg-brand-500/30">
      <Navbar />
      <main className="relative">
        <Hero />
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
      </main>
      <footer className="mt-20 border-t border-brand-500/10 py-8 text-center text-sm text-slate-500">
        <span className="font-medium text-slate-400">Maulana Rafi Nurdiansyah</span>
        <span className="mx-3 text-brand-500">·</span>
        <span>QA Automation Engineer · SDET</span>
        <span className="mx-3 text-brand-500">·</span>
        <span className="italic">latency, correctness, and release confidence</span>
      </footer>
    </div>
  )
}

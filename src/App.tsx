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
    <div className="min-h-screen bg-grid" style={{ backgroundColor: '#020617', color: '#e2e8f0' }}>
      <Navbar />
      <main>
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
      <footer style={{ borderTop: '1px solid rgba(99,102,241,0.1)', padding: '24px', textAlign: 'center', fontSize: '12px', color: '#475569' }}>
        <span>Maulana Rafi Nurdiansyah</span>
        <span style={{ margin: '0 8px', color: '#6366f1' }}>·</span>
        <span>QA Automation Engineer · SDET</span>
        <span style={{ margin: '0 8px', color: '#6366f1' }}>·</span>
        <span>latency, correctness, and release confidence</span>
      </footer>
    </div>
  )
}

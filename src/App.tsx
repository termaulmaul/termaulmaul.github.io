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

export default function App() {
  return (
    <div className="min-h-screen bg-grid" style={{ backgroundColor: '#020617', color: '#e2e8f0' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <CurrentFocus />
        <ExpertiseCards />
        <TechStack />
        <DomainExperience />
        <GitHubInsights />
        <Projects />
        <Certifications />
        <Contact />
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

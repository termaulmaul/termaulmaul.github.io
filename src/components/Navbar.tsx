import { useState, useEffect } from 'react'

const links = [
  { label: 'about', href: '#about' },
  { label: 'focus', href: '#focus' },
  { label: 'expertise', href: '#expertise' },
  { label: 'stack', href: '#stack' },
  { label: 'domains', href: '#domains' },
  { label: 'projects', href: '#projects' },
  { label: 'certs', href: '#certs' },
  { label: 'contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-lg border-b border-white/5 py-3 shadow-lg shadow-black/20' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-lg tracking-tight group text-slate-100 hover:text-white transition-colors">
          <span className="text-accent-400 group-hover:scale-110 transition-transform">▶</span>
          <span>termaulmaul</span>
          <span className="cursor-blink text-brand-400 font-mono">_</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-400 hover:text-highlight-400 transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-400 hover:text-white transition-colors p-2 -mr-2"
          aria-label="Menu"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[400px] border-b border-white/5 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-slate-900/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-4 shadow-2xl">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-3 py-1"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <span className="text-accent-400 font-mono text-xs">›</span>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

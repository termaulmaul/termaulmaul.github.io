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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-accent-400/20 shadow-[0_4px_26px_rgba(34,197,94,0.05)] py-[16px]' : 'bg-transparent py-[26px]'}`}>
      <div className="max-w-[1100px] mx-auto px-[26px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-[10px] font-bold text-[16px] text-white hover:text-accent-400 transition-colors font-mono">
          <span className="text-accent-400">~/</span>
          <span>termaulmaul</span>
          <span className="cursor-blink text-brand-400">_</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-[26px] items-center">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-[16px] font-mono text-slate-400 hover:text-accent-400 transition-colors"
            >
              <span className="text-brand-500 opacity-50 mr-1">#</span>{l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-accent-400 hover:text-white transition-colors"
          aria-label="Menu"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[500px] border-b border-accent-400/20 opacity-100 bg-slate-950/95 backdrop-blur-xl' : 'max-h-0 opacity-0'}`}>
        <div className="px-[26px] py-[26px] flex flex-col gap-[16px]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[16px] font-mono text-slate-300 hover:text-accent-400 transition-colors flex items-center gap-[10px]"
            >
              <span className="text-brand-500">{'>'}</span>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

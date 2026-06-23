import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Lab', href: '#focus' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-8 left-0 right-0 z-50 flex justify-center w-full pointer-events-none">
      <div 
        className={`pointer-events-auto flex items-center justify-center gap-6 md:gap-10 px-8 py-3 rounded-full transition-all duration-300 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-lg border border-white/20/5 text-[#ffffff]' 
            : 'bg-white/60 backdrop-blur-sm text-[#ffffff] hover:bg-white/80'
        }`}
      >
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            className="text-sm font-sans font-medium hover:text-[#60a5fa] transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

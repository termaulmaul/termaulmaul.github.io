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
    <nav className="fixed top-8 left-0 right-0 z-50 flex justify-center w-full pointer-events-none px-4 mix-blend-difference">
      <div 
        className={`pointer-events-auto relative flex items-center justify-center gap-6 md:gap-10 px-8 py-3 rounded-full transition-all duration-700 ease-out border ${
          scrolled 
            ? 'bg-black/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] border-white/10 text-[#ffffff] scale-100' 
            : 'bg-black/20 backdrop-blur-md shadow-lg border-white/5 text-[#ffffff] hover:bg-black/40 hover:border-white/20 scale-[0.98]'
        }`}
      >
        {/* Animated Gradient Background Overlay */}
        <div 
          className={`absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-purple-500/20 bg-gradient-liquid pointer-events-none transition-opacity duration-1000 ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`} 
        />
        
        {/* Glowing Border effect */}
        <div 
          className={`absolute -inset-[1px] rounded-full bg-gradient-to-r from-cyan-500/50 via-[#050505] to-blue-500/50 bg-gradient-liquid pointer-events-none transition-opacity duration-1000 -z-10 ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`} 
        />
        
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            className="text-sm font-sans font-medium hover:text-[#00ffff] hover:scale-105 hover:shadow-[0_0_10px_rgba(0,255,255,0.5)] transition-all duration-300 relative z-10"
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

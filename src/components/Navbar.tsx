import { useState } from 'react'

const links = [
  { label: 'about', href: '#about' },
  { label: 'focus', href: '#focus' },
  { label: 'expertise', href: '#expertise' },
  { label: 'stack', href: '#stack' },
  { label: 'domains', href: '#domains' },
  { label: 'projects', href: '#projects' },
  { label: 'contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      borderBottom: '1px solid rgba(99,102,241,0.12)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      backgroundColor: 'rgba(2,6,23,0.85)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '52px' }}>
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600, fontSize: '14px' }}>
          <span style={{ color: '#4ade80' }}>▶</span>
          <span style={{ color: '#e2e8f0' }}>termaulmaul</span>
          <span className="cursor-blink" style={{ marginLeft: '2px' }}>_</span>
        </a>

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }} className="desktop-nav">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              style={{ fontSize: '12px', color: '#64748b', textDecoration: 'none', transition: 'color 0.15s', letterSpacing: '0.05em' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#22d3ee')}
              onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ display: 'none', background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '4px' }}
          className="mobile-menu-btn"
          aria-label="Menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          borderTop: '1px solid rgba(99,102,241,0.12)',
          backgroundColor: 'rgba(2,6,23,0.95)',
          padding: '16px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ fontSize: '13px', color: '#94a3b8', textDecoration: 'none' }}
            >
              <span style={{ color: '#4ade80', marginRight: '8px' }}>›</span>{l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}

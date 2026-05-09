import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px 48px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Radial glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '300px',
        background: 'radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '900px', width: '100%', position: 'relative' }}>
        {/* Profile + Terminal layout */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'flex-start', marginBottom: '32px' }}>

          {/* Profile photo */}
          <div className="profile-photo-wrap" style={{ flexShrink: 0, display: 'flex', justifyContent: 'center' }}>
            <img
              src="/profilepicture.jpg"
              alt="Maulana Rafi Nurdiansyah"
              className="profile-photo"
              loading="lazy"
            />
          </div>

          {/* Terminal block */}
          <div className="card-glass fade-up" style={{ borderRadius: '8px', padding: '32px', flex: 1, minWidth: '280px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444', display: 'inline-block' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b', display: 'inline-block' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block' }} />
            <span style={{ marginLeft: '8px', fontSize: '11px', color: '#475569', letterSpacing: '0.05em' }}>terminal — zsh</span>
          </div>

          <p style={{ margin: '0 0 6px', fontSize: '13px' }}>
            <span style={{ color: '#4ade80', fontWeight: 600 }}>$ </span>
            <span style={{ color: '#94a3b8' }}>whoami</span>
          </p>
          <h1 style={{ margin: '0 0 4px', fontSize: 'clamp(22px, 4vw, 36px)', fontWeight: 700, color: '#f1f5f9', letterSpacing: '-0.5px', fontFamily: 'inherit' }}>
            {profile.name}
          </h1>

          <p style={{ margin: '0 0 16px', fontSize: '13px' }}>
            <span style={{ color: '#4ade80', fontWeight: 600 }}>$ </span>
            <span style={{ color: '#94a3b8' }}>cat role.txt</span>
          </p>
          <p style={{ margin: '0 0 4px', fontSize: 'clamp(12px, 2vw, 14px)', color: '#6366f1', fontWeight: 500, letterSpacing: '0.05em' }}>
            {profile.title}
          </p>
          <p style={{ margin: '0 0 20px', fontSize: '12px', color: '#475569' }}>
            {profile.subtitle}
          </p>

          <p style={{ margin: '0 0 6px', fontSize: '13px' }}>
            <span style={{ color: '#4ade80', fontWeight: 600 }}>$ </span>
            <span style={{ color: '#94a3b8' }}>cat mission.txt</span>
          </p>
          <p style={{ margin: '0 0 20px', fontSize: 'clamp(12px, 1.8vw, 14px)', color: '#cbd5e1', lineHeight: '1.65', maxWidth: '600px' }}>
            {profile.intro}
          </p>

          <p style={{ margin: '0', fontSize: '13px', color: '#94a3b8' }}>
            <span style={{ color: '#4ade80', fontWeight: 600 }}>$ </span>
            <span className="cursor-blink">█</span>
          </p>
        </div>
        </div>{/* end profile+terminal row */}

        {/* Tagline */}
        <p style={{ margin: '0 0 28px', fontSize: '13px', color: '#22d3ee', textAlign: 'center', letterSpacing: '0.1em', opacity: 0.8 }}>
          // {profile.tagline}
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
          <CtaBtn href={`mailto:${profile.email}`} label="✉ Email" primary />
          <CtaBtn href={profile.github} label="⌥ GitHub" />
          <CtaBtn href={profile.linkedin} label="⎆ LinkedIn" />
          <CtaBtn href={profile.credly} label="✦ Credly" />
        </div>
      </div>
    </section>
  )
}

function CtaBtn({ href, label, primary }: { href: string; label: string; primary?: boolean }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '8px 18px',
        borderRadius: '4px',
        fontSize: '12px',
        fontWeight: 500,
        textDecoration: 'none',
        fontFamily: 'inherit',
        letterSpacing: '0.03em',
        transition: 'all 0.15s',
        border: primary ? '1px solid rgba(99,102,241,0.6)' : '1px solid rgba(99,102,241,0.2)',
        backgroundColor: primary ? 'rgba(99,102,241,0.15)' : 'rgba(15,23,42,0.6)',
        color: primary ? '#a5b4fc' : '#94a3b8',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(34,211,238,0.6)'
        e.currentTarget.style.color = '#22d3ee'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = primary ? 'rgba(99,102,241,0.6)' : 'rgba(99,102,241,0.2)'
        e.currentTarget.style.color = primary ? '#a5b4fc' : '#94a3b8'
      }}
    >
      {label}
    </a>
  )
}

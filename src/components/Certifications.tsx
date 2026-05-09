import { profile } from '../data/profile'

const CATEGORIES = ['Infrastructure & Linux', 'Security & Threat Hunting', 'AI/ML & Data']

export default function Certifications() {
  const featured = profile.certifications.find(c => c.featured)!
  const grouped = CATEGORIES.map(cat => ({
    name: cat,
    certs: profile.certifications.filter(c => !c.featured && c.category === cat),
  }))

  return (
    <section id="certs" style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
      <p className="section-label" style={{ marginBottom: '8px' }}>// credentials</p>
      <h2 style={{ margin: '0 0 40px', fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 600, color: '#f1f5f9', fontFamily: 'inherit' }}>
        Certifications
      </h2>

      {/* RHCSA hero card */}
      <div
        style={{
          marginBottom: '48px',
          borderRadius: '10px',
          padding: '2px',
          background: 'linear-gradient(135deg, rgba(238,0,0,0.5) 0%, rgba(99,102,241,0.3) 50%, rgba(238,0,0,0.2) 100%)',
          boxShadow: '0 0 40px rgba(238,0,0,0.08), 0 0 80px rgba(99,102,241,0.05)',
        }}
      >
        <div style={{
          borderRadius: '9px',
          padding: 'clamp(24px, 4vw, 40px)',
          background: 'linear-gradient(135deg, rgba(10,4,4,0.97) 0%, rgba(15,10,30,0.97) 100%)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '28px',
          alignItems: 'flex-start',
        }}>
          {/* Left: icon + issuer */}
          <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', minWidth: '80px' }}>
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '10px',
              background: 'rgba(238,0,0,0.1)',
              border: '1px solid rgba(238,0,0,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
            }}>
              🎓
            </div>
            <span style={{ fontSize: '10px', color: '#ee0000', fontWeight: 700, letterSpacing: '0.1em', textAlign: 'center' }}>RED HAT</span>
          </div>

          {/* Center: title + desc */}
          <div style={{ flex: 1, minWidth: '220px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <h3 style={{ margin: 0, fontSize: 'clamp(14px, 2.5vw, 18px)', fontWeight: 700, color: '#f8fafc', fontFamily: 'inherit', letterSpacing: '-0.3px' }}>
                {featured.title}
              </h3>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '3px 10px',
                borderRadius: '4px',
                fontSize: '11px',
                fontWeight: 700,
                backgroundColor: 'rgba(238,0,0,0.12)',
                border: '1px solid rgba(238,0,0,0.4)',
                color: '#fca5a5',
                letterSpacing: '0.05em',
                whiteSpace: 'nowrap',
              }}>
                ✦ {featured.scoreLabel} · {featured.score}
              </span>
            </div>

            <p style={{ margin: '0 0 16px', fontSize: '12px', color: '#94a3b8', lineHeight: 1.7, maxWidth: '600px' }}>
              {featured.desc}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
              {featured.tags.map(tag => (
                <span key={tag} style={{
                  padding: '2px 8px',
                  borderRadius: '3px',
                  fontSize: '10px',
                  fontWeight: 500,
                  backgroundColor: 'rgba(238,0,0,0.06)',
                  border: '1px solid rgba(238,0,0,0.2)',
                  color: '#fca5a5',
                }}>
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={featured.credly}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: '4px',
                fontSize: '11px',
                fontWeight: 600,
                textDecoration: 'none',
                backgroundColor: 'rgba(238,0,0,0.1)',
                border: '1px solid rgba(238,0,0,0.35)',
                color: '#fca5a5',
                transition: 'all 0.15s',
                fontFamily: 'inherit',
                letterSpacing: '0.05em',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'rgba(238,0,0,0.2)'
                e.currentTarget.style.borderColor = 'rgba(238,0,0,0.6)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'rgba(238,0,0,0.1)'
                e.currentTarget.style.borderColor = 'rgba(238,0,0,0.35)'
              }}
            >
              ✦ Verify on Credly →
            </a>
          </div>

          {/* Right: score stat */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px 24px',
            borderRadius: '8px',
            background: 'rgba(238,0,0,0.05)',
            border: '1px solid rgba(238,0,0,0.15)',
            textAlign: 'center',
            minWidth: '100px',
          }}>
            <span style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, color: '#ee0000', letterSpacing: '-1px', lineHeight: 1 }}>
              300
            </span>
            <span style={{ fontSize: '10px', color: '#fca5a5', letterSpacing: '0.1em', marginTop: '4px' }}>/ 300</span>
            <span style={{ fontSize: '9px', color: '#64748b', marginTop: '6px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              Exam Score
            </span>
            <div style={{ marginTop: '8px', width: '40px', height: '2px', background: 'linear-gradient(90deg, #ee0000, transparent)' }} />
            <span style={{ fontSize: '9px', color: '#94a3b8', marginTop: '6px' }}>EX200</span>
          </div>
        </div>
      </div>

      {/* Grouped remaining certs */}
      {grouped.filter(g => g.certs.length > 0).map(group => (
        <div key={group.name} style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{ fontSize: '11px', color: '#6366f1', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
              {group.name}
            </span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(99,102,241,0.15)' }} />
            <span style={{ fontSize: '10px', color: '#334155' }}>{group.certs.length} certs</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
            {group.certs.map(cert => (
              <CertCard key={cert.id} cert={cert} />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

type Cert = typeof profile.certifications[number]

function CertCard({ cert }: { cert: Cert }) {
  return (
    <div
      className="card-glass"
      style={{ borderRadius: '8px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span style={{
              fontSize: '9px',
              padding: '2px 6px',
              borderRadius: '3px',
              backgroundColor: 'rgba(31,112,193,0.1)',
              border: '1px solid rgba(31,112,193,0.25)',
              color: '#93c5fd',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              {cert.issuer}
            </span>
          </div>
          <h4 style={{ margin: 0, fontSize: '12px', fontWeight: 600, color: '#e2e8f0', fontFamily: 'inherit', lineHeight: 1.45 }}>
            {cert.title}
          </h4>
        </div>
      </div>

      <p style={{ margin: 0, fontSize: '11px', color: '#64748b', lineHeight: 1.6, flex: 1 }}>
        {cert.desc}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
        {cert.tags.slice(0, 4).map(tag => (
          <span key={tag} className="badge" style={{ fontSize: '10px', padding: '1px 7px' }}>{tag}</span>
        ))}
        {cert.tags.length > 4 && (
          <span style={{ fontSize: '10px', color: '#334155', padding: '1px 4px' }}>+{cert.tags.length - 4}</span>
        )}
      </div>

      <a
        href={cert.credly}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px',
          fontSize: '10px',
          color: '#475569',
          textDecoration: 'none',
          paddingTop: '8px',
          borderTop: '1px solid rgba(99,102,241,0.1)',
          transition: 'color 0.15s',
          fontFamily: 'inherit',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = '#22d3ee')}
        onMouseLeave={e => (e.currentTarget.style.color = '#475569')}
      >
        ✦ Verify on Credly →
      </a>
    </div>
  )
}

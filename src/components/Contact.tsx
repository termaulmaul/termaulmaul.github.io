import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
      <p className="section-label" style={{ marginBottom: '8px' }}>// reach out</p>
      <h2 style={{ margin: '0 0 16px', fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 600, color: '#f1f5f9', fontFamily: 'inherit' }}>
        Contact
      </h2>
      <p style={{ margin: '0 0 40px', fontSize: '13px', color: '#64748b' }}>
        Open to conversations around QA automation, SDET practices, fintech systems, observability, and AI/ML quality workflows.
      </p>

      <div className="card-glass" style={{ borderRadius: '8px', padding: '32px', maxWidth: '560px' }}>
        {/* Terminal block */}
        <div style={{ marginBottom: '24px' }}>
          <p style={{ margin: '0 0 4px', fontSize: '12px' }}>
            <span style={{ color: '#4ade80', fontWeight: 600 }}>$ </span>
            <span style={{ color: '#94a3b8' }}>cat contact.json</span>
          </p>
          <pre style={{
            margin: '8px 0 0',
            padding: '16px',
            backgroundColor: 'rgba(0,0,0,0.3)',
            borderRadius: '4px',
            fontSize: '12px',
            color: '#94a3b8',
            overflow: 'auto',
            fontFamily: 'inherit',
          }}>
{`{
  "email":    "${profile.email}",
  "github":   "termaulmaul",
  "linkedin": "maulanarafi",
  "domain":   "fintech · qa · devops · ai"
}`}
          </pre>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <ContactRow icon="✉" label="Email" href={`mailto:${profile.email}`} value={profile.email} />
          <ContactRow icon="⌥" label="GitHub" href={profile.github} value="github.com/termaulmaul" />
          <ContactRow icon="⎆" label="LinkedIn" href={profile.linkedin} value="linkedin.com/in/maulanarafi" />
          <ContactRow icon="✦" label="Credly" href={profile.credly} value="Certifications" />
        </div>

        <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(99,102,241,0.12)', textAlign: 'center' }}>
          <p style={{ margin: '0 0 12px', fontSize: '11px', color: '#334155' }}>support this work</p>
          <a
            href={profile.patreon}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '11px', color: '#475569', textDecoration: 'none', padding: '6px 14px', border: '1px solid rgba(99,102,241,0.15)', borderRadius: '4px', transition: 'all 0.15s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'; e.currentTarget.style.color = '#a5b4fc' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.15)'; e.currentTarget.style.color = '#475569' }}
          >
            ♥ Patreon
          </a>
        </div>
      </div>
    </section>
  )
}

function ContactRow({ icon, label, href, value }: { icon: string; label: string; href: string; value: string }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 14px', borderRadius: '4px', textDecoration: 'none', backgroundColor: 'rgba(15,23,42,0.5)', border: '1px solid rgba(99,102,241,0.1)', transition: 'all 0.15s' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,211,238,0.3)'; e.currentTarget.style.backgroundColor = 'rgba(34,211,238,0.04)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.1)'; e.currentTarget.style.backgroundColor = 'rgba(15,23,42,0.5)' }}
    >
      <span style={{ fontSize: '14px', width: '20px', textAlign: 'center' }}>{icon}</span>
      <span style={{ fontSize: '11px', color: '#475569', width: '60px' }}>{label}</span>
      <span style={{ fontSize: '12px', color: '#94a3b8' }}>{value}</span>
    </a>
  )
}

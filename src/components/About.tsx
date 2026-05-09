import { profile } from '../data/profile'

export default function About() {
  return (
    <section id="about" style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
      <p className="section-label" style={{ marginBottom: '8px' }}>// identity</p>
      <h2 style={{ margin: '0 0 40px', fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 600, color: '#f1f5f9', fontFamily: 'inherit' }}>
        About
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
        {profile.about.map(item => (
          <div key={item.label} className="card-glass" style={{ borderRadius: '6px', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ fontSize: '11px', color: '#6366f1', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>{item.label}</span>
            <span style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: 1.5 }}>{item.value}</span>
          </div>
        ))}
      </div>

      <div className="card-glass" style={{ borderRadius: '6px', padding: '24px', marginTop: '24px' }}>
        <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8', lineHeight: 1.7 }}>
          <span style={{ color: '#4ade80' }}>// </span>
          I focus on building reliable software quality workflows: automated regression coverage, API validation, performance testing, release confidence, and production-aware debugging. My work sits at the intersection of QA engineering, systems reliability, and observability.
        </p>
      </div>
    </section>
  )
}

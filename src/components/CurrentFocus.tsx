import { profile } from '../data/profile'

export default function CurrentFocus() {
  return (
    <section id="focus" style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
      <p className="section-label" style={{ marginBottom: '8px' }}>// current work</p>
      <h2 style={{ margin: '0 0 40px', fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 600, color: '#f1f5f9', fontFamily: 'inherit' }}>
        Current Focus
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '12px' }}>
        {profile.currentFocus.map((item, i) => (
          <div
            key={i}
            className="card-glass"
            style={{ borderRadius: '6px', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <span style={{ color: '#6366f1', fontSize: '14px', flexShrink: 0 }}>›</span>
            <span style={{ fontSize: '13px', color: '#cbd5e1' }}>{item}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '32px', padding: '16px 24px', borderLeft: '2px solid rgba(99,102,241,0.4)', backgroundColor: 'rgba(99,102,241,0.04)' }}>
        <p style={{ margin: 0, fontSize: '12px', color: '#64748b', fontStyle: 'italic' }}>
          "quality gates before production risk — latency, correctness, and release confidence"
        </p>
      </div>
    </section>
  )
}

import { profile } from '../data/profile'

export default function DomainExperience() {
  return (
    <section id="domains" style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
      <p className="section-label" style={{ marginBottom: '8px' }}>// domain depth</p>
      <h2 style={{ margin: '0 0 40px', fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 600, color: '#f1f5f9', fontFamily: 'inherit' }}>
        Domain Experience
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
        {/* Capital Markets */}
        <div className="card-glass" style={{ borderRadius: '8px', padding: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <span style={{ fontSize: '18px' }}>📈</span>
            <div>
              <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: '#e2e8f0', fontFamily: 'inherit' }}>Capital Markets & FinTech</h3>
              <p style={{ margin: 0, fontSize: '11px', color: '#6366f1' }}>trading · reliability · correctness</p>
            </div>
          </div>
          <p style={{ margin: '0 0 16px', fontSize: '12px', color: '#64748b', lineHeight: 1.6 }}>
            Quality workflows for trading and financial systems where reliability, timing, and correctness matter.
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {profile.capitalMarkets.map(item => (
              <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12px', color: '#94a3b8' }}>
                <span style={{ color: '#22d3ee', flexShrink: 0, marginTop: '1px' }}>›</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Healthcare */}
        <div className="card-glass" style={{ borderRadius: '8px', padding: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <span style={{ fontSize: '18px' }}>🏥</span>
            <div>
              <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: '#e2e8f0', fontFamily: 'inherit' }}>Healthcare Systems</h3>
              <p style={{ margin: 0, fontSize: '11px', color: '#6366f1' }}>PT. Anugerah Mitrautama Sejahtera</p>
            </div>
          </div>
          <p style={{ margin: '0 0 16px', fontSize: '12px', color: '#64748b', lineHeight: 1.6 }}>
            Implementation and operational readiness for healthcare technology systems across Indonesia.
          </p>
          <ul style={{ margin: '0 0 20px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {profile.healthcare.map(item => (
              <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12px', color: '#94a3b8' }}>
                <span style={{ color: '#4ade80', flexShrink: 0, marginTop: '1px' }}>›</span>
                {item}
              </li>
            ))}
          </ul>

          <p style={{ margin: '0 0 10px', fontSize: '11px', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Selected Deployments</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {profile.healthcareRefs.map(ref => (
              <span key={ref} style={{ fontSize: '10px', padding: '2px 8px', borderRadius: '3px', backgroundColor: 'rgba(74,222,128,0.05)', border: '1px solid rgba(74,222,128,0.15)', color: '#64748b' }}>
                {ref}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

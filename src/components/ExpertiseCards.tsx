import { profile } from '../data/profile'

export default function ExpertiseCards() {
  return (
    <section id="expertise" style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
      <p className="section-label" style={{ marginBottom: '8px' }}>// capabilities</p>
      <h2 style={{ margin: '0 0 40px', fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 600, color: '#f1f5f9', fontFamily: 'inherit' }}>
        Expertise
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
        {profile.expertise.map(card => (
          <div
            key={card.title}
            className="card-glass"
            style={{ borderRadius: '8px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '20px' }}>{card.icon}</span>
              <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: '#e2e8f0', fontFamily: 'inherit' }}>{card.title}</h3>
            </div>
            <p style={{ margin: 0, fontSize: '12px', color: '#64748b', lineHeight: 1.6 }}>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

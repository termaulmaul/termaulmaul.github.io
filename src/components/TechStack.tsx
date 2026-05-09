import { profile } from '../data/profile'

export default function TechStack() {
  return (
    <section id="stack" style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
      <p className="section-label" style={{ marginBottom: '8px' }}>// toolchain</p>
      <h2 style={{ margin: '0 0 40px', fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 600, color: '#f1f5f9', fontFamily: 'inherit' }}>
        Core Tech Stack
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {Object.entries(profile.techStack).map(([category, tools]) => (
          <div key={category} className="card-glass" style={{ borderRadius: '6px', padding: '20px 24px' }}>
            <p style={{ margin: '0 0 12px', fontSize: '11px', color: '#6366f1', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
              {category}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {tools.map(tool => (
                <span key={tool} className="badge">{tool}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

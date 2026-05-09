import { profile } from '../data/profile'

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
      <p className="section-label" style={{ marginBottom: '8px' }}>// work</p>
      <h2 style={{ margin: '0 0 40px', fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 600, color: '#f1f5f9', fontFamily: 'inherit' }}>
        Projects
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
        {profile.projects.map(project => (
          <div
            key={project.title}
            className="card-glass"
            style={{ borderRadius: '8px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            <div>
              <h3 style={{ margin: '0 0 8px', fontSize: '14px', fontWeight: 600, color: '#e2e8f0', fontFamily: 'inherit' }}>
                {project.title}
              </h3>
              <p style={{ margin: 0, fontSize: '12px', color: '#64748b', lineHeight: 1.6 }}>
                {project.impact}
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {project.stack.map(s => (
                <span key={s} className="badge">{s}</span>
              ))}
            </div>

            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: 'auto',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '11px',
                color: '#475569',
                textDecoration: 'none',
                transition: 'color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#22d3ee')}
              onMouseLeave={e => (e.currentTarget.style.color = '#475569')}
            >
              <span>⌥</span> View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

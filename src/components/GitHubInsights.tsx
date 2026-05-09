export default function GitHubInsights() {
  const username = 'termaulmaul'
  const theme = 'tokyonight'

  return (
    <section id="github" style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
      <p className="section-label" style={{ marginBottom: '8px' }}>// activity</p>
      <h2 style={{ margin: '0 0 40px', fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 600, color: '#f1f5f9', fontFamily: 'inherit' }}>
        GitHub Insights
      </h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
        <img
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme}&hide_border=true`}
          alt="GitHub streak stats"
          width={495}
          height={170}
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '6px', border: '1px solid rgba(99,102,241,0.15)' }}
          loading="lazy"
          decoding="async"
        />
        <img
          src={`https://github-readme-stats-salesp07.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${theme}&hide_border=true&langs_count=8`}
          alt="Top languages"
          width={495}
          height={170}
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '6px', border: '1px solid rgba(99,102,241,0.15)' }}
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  )
}

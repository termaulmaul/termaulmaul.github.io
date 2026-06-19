export default function GitHubInsights() {
  const username = 'termaulmaul'
  const theme = 'tokyonight'

  return (
    <section id="github" className="py-[68px] px-[26px] max-w-[1100px] mx-auto scroll-mt-[68px]">
      <p className="section-label">
        <span className="text-accent-400">07.</span> Activity Log
      </p>
      <h2 className="devops-title">GitHub Insights</h2>

      <div className="flex flex-wrap gap-[26px] justify-center items-start">
        <div className="card-glass rounded-sm p-[10px] overflow-hidden leading-none shrink-0 max-w-full">
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme}&hide_border=true&background=030712`}
            alt="GitHub streak stats"
            width={495}
            className="block w-full h-auto max-w-[495px] opacity-90 hover:opacity-100 transition-opacity"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="card-glass rounded-sm p-[10px] overflow-hidden leading-none shrink-0 max-w-full">
          <img
            src={`https://github-readme-stats-salesp07.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${theme}&hide_border=true&langs_count=8&bg_color=030712`}
            alt="Top languages"
            width={495}
            className="block w-full h-auto max-w-[495px] opacity-90 hover:opacity-100 transition-opacity"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}

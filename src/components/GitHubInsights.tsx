export default function GitHubInsights() {
  const username = 'termaulmaul'
  // Using light themes to match the light UI
  const theme = 'default'

  return (
    <section id="github" className="py-24 px-6 max-w-[1100px] mx-auto scroll-mt-12">
      <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
        <div className="w-full md:w-1/3">
          <h2 className="doto-heading text-[48px] md:text-[64px] text-[#171717] tracking-tighter flex items-center gap-4">
            <span className="text-[#a3a3a3]">/</span> GHB
          </h2>
        </div>

        <div className="w-full md:w-2/3 flex flex-wrap gap-6 justify-center md:justify-start items-start">
          <div className="card-glass-light rounded-2xl overflow-hidden leading-none shrink-0 max-w-full">
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${theme}&hide_border=true&background=ffffff&ring=055dff&fire=055dff&currStreakLabel=171717`}
              alt="GitHub streak stats"
              width={495}
              className="block w-full h-auto max-w-[495px]"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="card-glass-light rounded-2xl overflow-hidden leading-none shrink-0 max-w-full">
            <img
              src={`https://github-readme-stats-salesp07.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${theme}&hide_border=true&langs_count=8&bg_color=ffffff&title_color=171717&text_color=52525b`}
              alt="Top languages"
              width={495}
              className="block w-full h-auto max-w-[495px]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

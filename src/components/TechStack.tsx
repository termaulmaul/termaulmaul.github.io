import { profile } from '../data/profile'

export default function TechStack() {
  return (
    <section id="stack" className="py-[68px] px-[26px] max-w-[1100px] mx-auto scroll-mt-[68px]">
      <p className="section-label">
        <span className="text-accent-400">03.</span> Toolchain
      </p>
      <h2 className="devops-title">Core Tech Stack</h2>

      <div className="flex flex-col gap-[26px]">
        {Object.entries(profile.techStack).map(([category, tools]) => (
          <div key={category} className="card-glass p-[26px]">
            <p className="mb-[16px] text-[10px] md:text-[16px] text-brand-400 tracking-[0.12em] uppercase font-mono font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-xl bg-brand-400"></span>
              {category}
            </p>
            <div className="flex flex-wrap gap-[10px]">
              {tools.map(tool => (
                <span key={tool} className="badge">
                  <span className="opacity-50 mr-1">#</span>{tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

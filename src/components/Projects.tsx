import { profile } from '../data/profile'

export default function Projects() {
  return (
    <section id="projects" className="py-[68px] px-[26px] max-w-[1100px] mx-auto scroll-mt-[68px]">
      <p className="section-label">
        <span className="text-accent-400">06.</span> Work
      </p>
      <h2 className="devops-title">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[26px]">
        {profile.projects.map(project => (
          <div
            key={project.title}
            className="card-glass p-[26px] flex flex-col gap-[16px]"
          >
            <div>
              <h3 className="m-0 mb-[10px] text-[16px] font-bold text-foreground font-mono flex items-center gap-[10px]">
                <span className="text-brand-400">◆</span>
                {project.title}
              </h3>
              <p className="m-0 text-[16px] text-muted-foreground leading-relaxed font-sans border-l-2 border-border pl-[16px]">
                {project.impact}
              </p>
            </div>

            <div className="flex flex-wrap gap-[10px] mt-[10px]">
              {project.stack.map(s => (
                <span key={s} className="badge">{s}</span>
              ))}
            </div>

            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-[10px] text-[16px] font-mono text-muted-foreground hover:text-highlight-400 transition-colors pt-[16px] border-t border-border"
            >
              <span className="text-[10px] px-[6px] py-[2px] bg-secondary rounded-xl">⌥</span>
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

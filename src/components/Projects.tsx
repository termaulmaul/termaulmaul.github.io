import { profile } from '../data/profile'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-[1100px] mx-auto scroll-mt-12">
      <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
        <div className="w-full md:w-1/3">
          <h2 className="doto-heading text-[48px] md:text-[64px] text-[#ffffff] tracking-tighter flex items-center gap-4">
            <span className="text-[#a3a3a3]">/</span> WRK
          </h2>
        </div>

        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {profile.projects.map(project => (
            <div
              key={project.title}
              className="card-glass p-8 flex flex-col gap-6"
            >
              <div>
                <h3 className="m-0 mb-3 text-[20px] font-bold text-[#ffffff] font-sans tracking-tight">
                  {project.title}
                </h3>
                <p className="m-0 text-[16px] text-[#a3a3a3] leading-relaxed font-sans">
                  {project.impact}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                {project.stack.map(s => (
                  <span key={s} className="badge">{s}</span>
                ))}
              </div>

              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 text-[14px] font-sans font-medium text-[#ffffff] hover:text-[#60a5fa] transition-colors pt-6 border-t border-white/10"
              >
                View Details →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

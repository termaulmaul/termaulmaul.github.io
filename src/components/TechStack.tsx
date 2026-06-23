import { profile } from '../data/profile'

export default function TechStack() {
  return (
    <section id="stack" className="py-24 px-6 max-w-[1100px] mx-auto scroll-mt-12">
      <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
        <div className="w-full md:w-1/3">
          <h2 className="doto-heading text-[48px] md:text-[64px] text-[#ffffff] tracking-tighter flex items-center gap-4">
            <span className="text-[#a3a3a3]">/</span> TCH
          </h2>
        </div>

        <div className="w-full md:w-2/3 flex flex-col gap-8">
          {Object.entries(profile.techStack).map(([category, tools]) => (
            <div key={category} className="card-glass p-8">
              <p className="mb-6 text-[14px] text-[#a3a3a3] tracking-widest uppercase font-sans font-bold flex items-center gap-2">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {tools.map(tool => (
                  <span key={tool} className="badge">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

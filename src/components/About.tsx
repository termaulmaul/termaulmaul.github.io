import { profile } from '../data/profile'

export default function About() {
  const skills = [
    "Test Automation",
    "CI/CD Integration",
    "API Testing",
    "Performance Testing",
    "Release Engineering"
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-[1100px] mx-auto scroll-mt-12">
      <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
        <div className="w-full md:w-1/3">
          <h2 className="doto-heading text-[48px] md:text-[64px] text-[#171717] tracking-tighter flex items-center gap-4">
            <span className="text-[#a3a3a3]">/</span> ABT
          </h2>
        </div>
        
        <div className="w-full md:w-2/3 flex flex-col gap-8">
          <p className="text-[20px] md:text-[28px] font-sans font-medium text-[#171717] leading-tight tracking-tight">
            I'm at my best when I get to stay close to the craft, combining a strategic view with hands-on execution. I focus on building reliable software quality workflows, from automated regression coverage to production-aware debugging.
          </p>
          
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <span key={skill} className="badge-light">
                {skill}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {profile.about.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="text-[12px] font-sans font-bold text-[#a3a3a3] uppercase tracking-widest">
                  {item.label}
                </span>
                <span className="text-[#171717] text-[16px] font-medium font-sans">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

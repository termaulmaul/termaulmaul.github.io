import { profile } from '../data/profile'

export default function About() {
  return (
    <section id="about" className="py-[68px] px-[26px] max-w-[1100px] mx-auto scroll-mt-[68px]">
      <p className="section-label">
        <span className="text-accent-400">01.</span> Whoami
      </p>
      <h2 className="devops-title">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[26px]">
        {profile.about.map((item) => (
          <div 
            key={item.label} 
            className="card-glass p-[26px] flex flex-col gap-[10px]"
          >
            <span className="text-[10px] font-mono text-highlight-400 tracking-[0.12em] uppercase font-bold">
              {item.label}
            </span>
            <span className="text-foreground text-[16px] font-medium leading-relaxed font-sans">
              {item.value}
            </span>
          </div>
        ))}
      </div>

      <div className="card-glass p-[42px] mt-[42px] border-l-4 border-l-accent-400">
        <p className="text-[16px] text-muted-foreground leading-relaxed font-mono">
          <span className="text-accent-400 font-bold mr-2">/*</span>
          I focus on building reliable software quality workflows: automated regression coverage, API validation, performance testing, release confidence, and production-aware debugging. My work sits at the intersection of QA engineering, systems reliability, and observability.
          <span className="text-accent-400 font-bold ml-2">*/</span>
        </p>
      </div>
    </section>
  )
}

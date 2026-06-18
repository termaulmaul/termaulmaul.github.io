import { profile } from '../data/profile'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20">
      <div className="section-label">
        <span className="text-brand-500 mr-2">01.</span> About Me
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {profile.about.map((item, i) => (
          <div 
            key={item.label} 
            className="card-glass rounded-xl p-6 flex flex-col gap-2 relative overflow-hidden group"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            {/* Subtle highlight */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-brand-500/10 blur-xl rounded-full group-hover:bg-brand-400/20 transition-colors" />
            
            <span className="text-xs font-mono text-brand-400 tracking-wider uppercase font-semibold">
              {item.label}
            </span>
            <span className="text-slate-200 text-sm md:text-base font-medium leading-relaxed">
              {item.value}
            </span>
          </div>
        ))}
      </div>

      <div className="card-glass rounded-xl p-8 mt-6 border-l-4 border-l-accent-400 relative overflow-hidden">
        <div className="absolute -left-10 -top-10 w-32 h-32 bg-accent-500/10 blur-2xl rounded-full" />
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-mono relative z-10">
          <span className="text-accent-400 font-bold mr-2">/*</span>
          I focus on building reliable software quality workflows: automated regression coverage, API validation, performance testing, release confidence, and production-aware debugging. My work sits at the intersection of QA engineering, systems reliability, and observability.
          <span className="text-accent-400 font-bold ml-2">*/</span>
        </p>
      </div>
    </section>
  )
}

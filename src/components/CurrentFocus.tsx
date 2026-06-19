import { profile } from '../data/profile'

export default function CurrentFocus() {
  return (
    <section id="focus" className="py-[68px] px-[26px] max-w-[1100px] mx-auto scroll-mt-[68px]">
      <p className="section-label">
        <span className="text-accent-400">02.</span> Current Pipeline
      </p>
      <h2 className="devops-title">Current Focus</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[26px]">
        {profile.currentFocus.map((item, i) => (
          <div
            key={i}
            className="card-glass p-[26px] flex items-start gap-[16px]"
          >
            <span className="text-accent-400 font-mono mt-[2px] font-bold">[{'>'}]</span>
            <span className="text-[16px] text-muted-foreground font-medium leading-relaxed">{item}</span>
          </div>
        ))}
      </div>

      <div className="mt-[42px] p-[26px] bg-card border border-border border-l-[4px] border-l-alert-400 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-[10px] text-[10px] font-mono text-alert-400 font-bold opacity-50 uppercase">Alert</div>
        <p className="text-[16px] text-muted-foreground font-mono italic">
          "quality gates before production risk — latency, correctness, and release confidence"
        </p>
      </div>
    </section>
  )
}

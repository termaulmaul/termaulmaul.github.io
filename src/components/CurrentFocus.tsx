import { profile } from '../data/profile'

export default function CurrentFocus() {
  return (
    <section id="focus" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20">
      <div className="section-label">
        <span className="text-brand-500 mr-2">02.</span> Current Focus
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {profile.currentFocus.map((item, i) => (
          <div
            key={i}
            className="card-glass rounded-xl p-5 flex items-start gap-4 group"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <span className="text-accent-400 font-mono mt-1 group-hover:translate-x-1 transition-transform">›</span>
            <span className="text-sm md:text-base text-slate-300 font-medium leading-relaxed">{item}</span>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 border-l-2 border-brand-500 bg-brand-500/5 rounded-r-xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <p className="text-sm md:text-base text-slate-400 italic font-medium relative z-10">
          "quality gates before production risk — latency, correctness, and release confidence"
        </p>
      </div>
    </section>
  )
}

import { profile } from '../data/profile'

export default function ExpertiseCards() {
  return (
    <section id="expertise" className="py-[68px] px-[26px] max-w-[1100px] mx-auto scroll-mt-[68px]">
      <p className="section-label">
        <span className="text-accent-400">04.</span> Capabilities
      </p>
      <h2 className="devops-title">Expertise</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[26px]">
        {profile.expertise.map(card => (
          <div
            key={card.title}
            className="card-glass p-[26px] flex flex-col gap-[16px]"
          >
            <div className="flex items-center gap-[10px] border-b border-slate-800 pb-[10px]">
              <span className="text-[26px] text-accent-400 bg-accent-400/10 p-[10px] rounded-sm border border-accent-400/20">{card.icon}</span>
              <h3 className="m-0 text-[16px] font-bold text-white font-mono">{card.title}</h3>
            </div>
            <p className="m-0 text-[16px] text-slate-400 leading-relaxed font-sans">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

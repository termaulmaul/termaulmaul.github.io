import { profile } from '../data/profile'

export default function DomainExperience() {
  return (
    <section id="domains" className="py-[68px] px-[26px] max-w-[1100px] mx-auto scroll-mt-[68px]">
      <p className="section-label">
        <span className="text-accent-400">05.</span> Domain Depth
      </p>
      <h2 className="devops-title">Domain Experience</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[26px]">
        {/* Capital Markets */}
        <div className="card-glass p-[26px]">
          <div className="flex items-center gap-[16px] mb-[26px]">
            <span className="text-[26px] p-[10px] bg-slate-800/80 border border-slate-700 text-highlight-400 rounded-xl">📈</span>
            <div>
              <h3 className="m-0 text-[16px] font-bold text-white font-mono">Capital Markets & FinTech</h3>
              <p className="m-0 text-[10px] md:text-[16px] text-highlight-400 font-mono mt-1">trading · reliability · correctness</p>
            </div>
          </div>
          <p className="mb-[26px] text-[16px] text-slate-400 leading-relaxed border-l-2 border-slate-800 pl-[16px]">
            Quality workflows for trading and financial systems where reliability, timing, and correctness matter.
          </p>
          <ul className="m-0 p-0 list-none flex flex-col gap-[10px]">
            {profile.capitalMarkets.map(item => (
              <li key={item} className="flex items-start gap-[10px] text-[16px] text-slate-300">
                <span className="text-highlight-400 mt-[2px] font-bold">[{'>'}]</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Healthcare */}
        <div className="card-glass p-[26px]">
          <div className="flex items-center gap-[16px] mb-[26px]">
            <span className="text-[26px] p-[10px] bg-slate-800/80 border border-slate-700 text-accent-400 rounded-xl">🏥</span>
            <div>
              <h3 className="m-0 text-[16px] font-bold text-white font-mono">Healthcare Systems</h3>
              <p className="m-0 text-[10px] md:text-[16px] text-accent-400 font-mono mt-1">PT. Anugerah Mitrautama Sejahtera</p>
            </div>
          </div>
          <p className="mb-[26px] text-[16px] text-slate-400 leading-relaxed border-l-2 border-slate-800 pl-[16px]">
            Implementation and operational readiness for healthcare technology systems across Indonesia.
          </p>
          <ul className="mb-[26px] p-0 list-none flex flex-col gap-[10px]">
            {profile.healthcare.map(item => (
              <li key={item} className="flex items-start gap-[10px] text-[16px] text-slate-300">
                <span className="text-accent-400 mt-[2px] font-bold">[{'>'}]</span>
                {item}
              </li>
            ))}
          </ul>

          <p className="m-0 mb-[10px] text-[10px] text-slate-500 uppercase tracking-[0.1em] font-mono">Selected Deployments</p>
          <div className="flex flex-wrap gap-[10px]">
            {profile.healthcareRefs.map(ref => (
              <span key={ref} className="text-[10px] px-[10px] py-[4px] rounded-xl bg-accent-400/10 border border-accent-400/20 text-accent-400 font-mono">
                {ref}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

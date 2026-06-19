import { profile } from '../data/profile'

const CATEGORIES = ['Infrastructure & Linux', 'Security & Threat Hunting', 'AI/ML & Data']

export default function Certifications() {
  const featured = profile.certifications.find(c => c.featured)!
  const grouped = CATEGORIES.map(cat => ({
    name: cat,
    certs: profile.certifications.filter(c => !c.featured && c.category === cat),
  }))

  return (
    <section id="certs" className="py-[68px] px-[26px] max-w-[1100px] mx-auto scroll-mt-[68px]">
      <p className="section-label">
        <span className="text-accent-400">09.</span> Credentials
      </p>
      <h2 className="devops-title">Certifications</h2>

      {/* RHCSA hero card */}
      <div className="card-glass p-[26px] md:p-[42px] mb-[68px] border-l-[4px] border-l-alert-400 flex flex-col md:flex-row gap-[26px] items-start relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-alert-400/10 blur-[68px] pointer-events-none rounded-full" />
        
        <div className="shrink-0 flex flex-col items-center gap-[10px]">
          <div className="w-[68px] h-[68px] flex items-center justify-center bg-alert-400/10 border border-alert-400/30 text-[26px] rounded-xl">
            🎓
          </div>
          <span className="text-[10px] text-alert-400 font-bold font-mono tracking-widest">RED HAT</span>
        </div>

        <div className="flex-1 relative z-10">
          <div className="flex flex-wrap items-center gap-[16px] mb-[10px]">
            <h3 className="text-[26px] font-bold text-white font-mono leading-none m-0">{featured.title}</h3>
            <span className="px-[10px] py-[4px] bg-alert-400/10 border border-alert-400/30 text-alert-400 text-[10px] font-bold font-mono uppercase tracking-[0.1em]">
              {featured.scoreLabel} · {featured.score}
            </span>
          </div>
          
          <p className="text-[16px] text-slate-300 mb-[26px] leading-relaxed max-w-[600px] border-l-2 border-slate-800 pl-[16px]">
            {featured.desc}
          </p>

          <div className="flex flex-wrap gap-[10px] mb-[26px]">
            {featured.tags.map(tag => (
              <span key={tag} className="badge !border-alert-400/30 !text-alert-400">{tag}</span>
            ))}
          </div>

          <a href={featured.credly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-[10px] text-[10px] md:text-[16px] font-mono text-alert-400 hover:text-white transition-colors border-b border-alert-400/30 pb-1">
            [ Verify on Credly ]
          </a>
        </div>

        <div className="shrink-0 flex flex-col items-center justify-center p-[26px] bg-slate-900 border border-alert-400/20 text-center w-full md:w-auto relative z-10">
          <span className="text-[42px] font-bold text-alert-400 leading-none font-mono tracking-tighter">300</span>
          <span className="text-[10px] text-alert-400/70 tracking-[0.1em] mt-1 font-mono">/ 300</span>
          <span className="text-[10px] text-slate-500 uppercase tracking-widest mt-[10px] font-mono">Exam Score</span>
          <div className="w-[42px] h-[2px] bg-alert-400 mt-[10px]" />
        </div>
      </div>

      {/* Grouped remaining certs */}
      <div className="flex flex-col gap-[42px]">
        {grouped.filter(g => g.certs.length > 0).map(group => (
          <div key={group.name}>
            <div className="flex items-center gap-[16px] mb-[26px]">
              <span className="text-[16px] text-brand-400 font-bold font-mono tracking-widest uppercase">
                {group.name}
              </span>
              <div className="flex-1 h-px bg-slate-800" />
              <span className="text-[10px] text-slate-500 font-mono">[{group.certs.length} certs]</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[26px]">
              {group.certs.map(cert => (
                <CertCard key={cert.id} cert={cert} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

type Cert = typeof profile.certifications[number]

function CertCard({ cert }: { cert: Cert }) {
  return (
    <div className="card-glass p-[26px] flex flex-col gap-[16px] border-l-[2px] border-l-brand-500">
      <div className="flex-1">
        <span className="inline-block mb-[10px] text-[10px] px-[6px] py-[2px] bg-brand-500/10 border border-brand-500/30 text-brand-400 font-bold tracking-widest font-mono uppercase">
          {cert.issuer}
        </span>
        <h4 className="text-[16px] font-bold text-white font-mono leading-snug m-0 mb-[10px]">
          {cert.title}
        </h4>
        <p className="text-[16px] text-slate-400 leading-relaxed font-sans m-0">
          {cert.desc}
        </p>
      </div>

      <div className="flex flex-wrap gap-[6px]">
        {cert.tags.slice(0, 3).map(tag => (
          <span key={tag} className="badge text-[10px]">{tag}</span>
        ))}
        {cert.tags.length > 3 && (
          <span className="text-[10px] text-slate-500 font-mono flex items-center">+{cert.tags.length - 3}</span>
        )}
      </div>

      <a
        href={cert.credly}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto pt-[16px] border-t border-slate-800 text-[10px] font-mono text-slate-500 hover:text-highlight-400 transition-colors flex items-center gap-[10px]"
      >
        <span>[ Verify ]</span>
      </a>
    </div>
  )
}

import { profile } from '../data/profile'

const CATEGORIES = ['Infrastructure & Linux', 'Security & Threat Hunting', 'AI/ML & Data']

export default function Certifications() {
  const featured = profile.certifications.find(c => c.featured)!
  const grouped = CATEGORIES.map(cat => ({
    name: cat,
    certs: profile.certifications.filter(c => !c.featured && c.category === cat),
  }))

  return (
    <section id="certs" className="py-24 px-6 max-w-[1100px] mx-auto scroll-mt-12">
      <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
        <div className="w-full md:w-1/3">
          <h2 className="doto-heading text-[48px] md:text-[64px] text-[#ffffff] tracking-tighter flex items-center gap-4">
            <span className="text-[#a3a3a3]">/</span> CERT
          </h2>
        </div>

        <div className="w-full md:w-2/3 flex flex-col gap-12">
          {/* Featured Cert */}
          <div className="card-glass p-8 md:p-12 border-l-4 border-l-[#f87171] flex flex-col md:flex-row gap-8 items-start relative overflow-hidden">
            <div className="shrink-0 flex flex-col items-center gap-2">
              <div className="w-16 h-16 flex items-center justify-center bg-[#f87171]/10 text-[#f87171] text-[24px] rounded-2xl">
                🎓
              </div>
              <span className="text-[10px] text-[#f87171] font-bold font-sans tracking-widest uppercase">RED HAT</span>
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-4 mb-2">
                <h3 className="text-[20px] font-bold text-[#ffffff] font-sans m-0">{featured.title}</h3>
                <span className="px-3 py-1 bg-[#f87171]/10 text-[#f87171] text-[10px] font-bold font-sans uppercase tracking-widest rounded-full">
                  {featured.scoreLabel} · {featured.score}
                </span>
              </div>
              
              <p className="text-[14px] text-[#a3a3a3] mb-6 leading-relaxed max-w-[600px] border-l border-white/10 pl-4">
                {featured.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {featured.tags.map(tag => (
                  <span key={tag} className="badge text-[#f87171] border-[#ef4444]/20">{tag}</span>
                ))}
              </div>

              <a href={featured.credly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[12px] font-sans font-bold text-[#f87171] hover:text-[#ffffff] transition-colors uppercase tracking-widest">
                Verify on Credly →
              </a>
            </div>

            <div className="shrink-0 flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl w-full md:w-auto">
              <span className="text-[36px] font-bold text-[#f87171] leading-none tracking-tighter">300</span>
              <span className="text-[12px] text-[#f87171]/70 tracking-widest mt-1 font-bold">/ 300</span>
              <span className="text-[10px] text-[#a3a3a3] uppercase tracking-widest mt-2 font-bold">Exam Score</span>
            </div>
          </div>

          {/* Grouped Certs */}
          <div className="flex flex-col gap-10">
            {grouped.filter(g => g.certs.length > 0).map(group => (
              <div key={group.name}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[14px] text-[#ffffff] font-bold font-sans tracking-widest uppercase">
                    {group.name}
                  </span>
                  <div className="flex-1 h-px bg-black/10" />
                  <span className="text-[12px] text-[#a3a3a3] font-medium">{group.certs.length} certs</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {group.certs.map(cert => (
                    <CertCard key={cert.id} cert={cert} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

type Cert = typeof profile.certifications[number]

function CertCard({ cert }: { cert: Cert }) {
  return (
    <div className="card-glass p-6 flex flex-col gap-4 border-t-2 border-t-[#60a5fa]">
      <div className="flex-1">
        <span className="inline-block mb-2 text-[10px] px-2 py-1 bg-[#60a5fa]/10 text-[#60a5fa] font-bold tracking-widest font-sans uppercase rounded-md">
          {cert.issuer}
        </span>
        <h4 className="text-[16px] font-bold text-[#ffffff] font-sans leading-snug m-0 mb-2">
          {cert.title}
        </h4>
        <p className="text-[14px] text-[#a3a3a3] leading-relaxed font-sans m-0">
          {cert.desc}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {cert.tags.slice(0, 3).map(tag => (
          <span key={tag} className="badge text-[10px]">{tag}</span>
        ))}
      </div>

      <a
        href={cert.credly}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto pt-4 border-t border-white/10 text-[12px] font-sans font-bold text-[#a3a3a3] hover:text-[#60a5fa] transition-colors flex items-center"
      >
        Verify →
      </a>
    </div>
  )
}

import { profile } from '../data/profile'

export default function DomainExperience() {
  return (
    <section id="domains" className="py-24 px-6 max-w-[1100px] mx-auto scroll-mt-12">
      <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
        <div className="w-full md:w-1/3">
          <h2 className="doto-heading text-[48px] md:text-[64px] text-[#ffffff] tracking-tighter flex items-center gap-4">
            <span className="text-[#a3a3a3]">/</span> DOMAIN
          </h2>
        </div>

        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Capital Markets Domain */}
          <div className="card-glass p-8 border-t-4 border-t-[#055dff]">
            <h3 className="m-0 mb-4 text-[20px] font-bold text-[#ffffff] font-sans tracking-tight">Capital Markets & Trading</h3>
            <p className="m-0 text-[14px] text-[#a3a3a3] leading-relaxed font-sans mb-6">
              Ensuring the accuracy, security, and low-latency performance of financial transactions, payment gateways, and core exchange modules.
            </p>
            <ul className="mb-6 p-0 list-none flex flex-col gap-3">
              {profile.capitalMarkets.map((item: string) => (
                <li key={item} className="flex items-start gap-2 text-[14px] text-[#a3a3a3]">
                  <span className="text-[#055dff] mt-1 text-[10px]">■</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Healthcare Domain */}
          <div className="card-glass p-8 border-t-4 border-t-[#10b981]">
            <h3 className="m-0 mb-4 text-[20px] font-bold text-[#ffffff] font-sans tracking-tight">Healthcare Tech</h3>
            <p className="m-0 text-[14px] text-[#a3a3a3] leading-relaxed font-sans mb-6">
              Implementation and operational readiness for healthcare technology systems across Indonesia.
            </p>
            <ul className="mb-6 p-0 list-none flex flex-col gap-3">
              {profile.healthcare.map((item: string) => (
                <li key={item} className="flex items-start gap-2 text-[14px] text-[#a3a3a3]">
                  <span className="text-[#10b981] mt-1 text-[10px]">■</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="m-0 mb-2 text-[10px] text-[#a3a3a3] uppercase tracking-widest font-sans font-bold">Selected Deployments</p>
            <div className="flex flex-wrap gap-2">
              {profile.healthcareRefs.map((ref: string) => (
                <span key={ref} className="text-[12px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#ffffff] font-sans">
                  {ref}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

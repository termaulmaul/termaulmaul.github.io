import { profile } from '../data/profile'

export default function CurrentFocus() {
  return (
    <section id="focus" className="py-24 px-6 max-w-[1100px] mx-auto scroll-mt-12">
      <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
        <div className="w-full md:w-1/3">
          <h2 className="doto-heading text-[48px] md:text-[64px] text-[#171717] tracking-tighter flex items-center gap-4">
            <span className="text-[#a3a3a3]">/</span> LAB
          </h2>
        </div>

        <div className="w-full md:w-2/3 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.currentFocus.map((item, i) => (
              <div
                key={i}
                className="card-glass-light p-8 flex flex-col gap-4 border-l-4 border-l-[#055dff]"
              >
                <span className="text-[#171717] text-[16px] font-medium leading-relaxed font-sans">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-8 card-glass-light border border-black/10 bg-[#e5e5e5] relative overflow-hidden flex flex-col items-center text-center justify-center min-h-[200px]">
            <p className="text-[20px] md:text-[28px] text-[#171717] font-sans font-medium tracking-tight">
              "quality gates before production risk — latency, correctness, and release confidence"
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

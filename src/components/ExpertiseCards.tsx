import { profile } from '../data/profile'

export default function ExpertiseCards() {
  return (
    <section id="expertise" className="py-24 px-6 max-w-[1100px] mx-auto scroll-mt-12">
      <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
        <div className="w-full md:w-1/3">
          <h2 className="doto-heading text-[48px] md:text-[64px] text-[#ffffff] tracking-tighter flex items-center gap-4">
            <span className="text-[#a3a3a3]">/</span> EXP
          </h2>
        </div>

        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.expertise.map(card => (
            <div
              key={card.title}
              className="card-glass p-8 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <span className="text-[20px] text-[#60a5fa]">{card.icon}</span>
                <h3 className="m-0 text-[16px] font-bold text-[#ffffff] font-sans">{card.title}</h3>
              </div>
              <p className="m-0 text-[14px] text-[#a3a3a3] leading-relaxed font-sans">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

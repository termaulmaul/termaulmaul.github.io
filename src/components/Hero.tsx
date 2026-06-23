import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-[105vh] bg-transparent relative flex flex-col items-center justify-center overflow-hidden w-full"
    >

      {/* Floating Header Info */}
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 md:p-12 z-20">
        <div className="flex justify-between items-start mt-20">
          <p className="text-white/60 text-[10px] md:text-xs font-mono max-w-[150px] leading-relaxed uppercase">
            {profile.name} <br/> PORTFOLIO 2026 ©
          </p>
          <p className="text-white text-[10px] md:text-xs max-w-[200px] text-right uppercase tracking-wider font-medium leading-relaxed">
            {profile.title} WORKING ACROSS LATENCY, CORRECTNESS & RELEASE CONFIDENCE
          </p>
        </div>
      </div>

      {/* Massive Central Typography */}
      <div className="relative z-10 w-full px-4 flex flex-col items-center pointer-events-none select-none mix-blend-overlay text-white text-center">
        <h1 className="doto-heading text-[15vw] leading-[0.85] tracking-tighter w-full">
          <span className="block w-full text-center">MAULANA</span>
          <span className="block w-full text-center">
            RAFI <span className="text-transparent" style={{ WebkitTextStroke: "min(0.5vw, 2px) #00ffff" }}>SDET</span>
          </span>
        </h1>
      </div>
    </section>
  )
}

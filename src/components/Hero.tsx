import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6 relative overflow-hidden"
    >
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] max-w-[800px] h-[400px] bg-brand-600/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen opacity-60" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-accent-500/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen opacity-40" />

      <div className="max-w-4xl w-full relative z-10 flex flex-col items-center">
        {/* Terminal block */}
        <div className="card-glass fade-up w-full rounded-2xl p-6 sm:p-10 mb-12 relative overflow-hidden group">
          
          {/* Subtle shine effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none translate-x-[-100%] group-hover:translate-x-[100%]" />

          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-8 border-b border-white/5 pb-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/90 shadow-[0_0_10px_rgba(239,68,68,0.4)]" />
              <div className="w-3 h-3 rounded-full bg-amber-500/90 shadow-[0_0_10px_rgba(245,158,11,0.4)]" />
              <div className="w-3 h-3 rounded-full bg-green-500/90 shadow-[0_0_10px_rgba(34,197,94,0.4)]" />
            </div>
            <span className="ml-4 font-mono text-xs text-slate-500 tracking-wider">maul@termaulmaul: ~</span>
          </div>

          <div className="font-mono text-sm sm:text-base leading-relaxed space-y-6">
            <div>
              <p className="mb-2 text-slate-300">
                <span className="text-accent-400 font-bold mr-2">❯</span>
                whoami
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-sans drop-shadow-sm bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                {profile.name}
              </h1>
            </div>

            <div>
              <p className="mb-2 text-slate-300">
                <span className="text-accent-400 font-bold mr-2">❯</span>
                cat role.txt
              </p>
              <div className="pl-4 border-l-2 border-brand-500/40">
                <p className="text-lg sm:text-xl text-brand-400 font-semibold tracking-wide">
                  {profile.title}
                </p>
                <p className="text-slate-400 mt-1">
                  {profile.subtitle}
                </p>
              </div>
            </div>

            <div>
              <p className="mb-2 text-slate-300">
                <span className="text-accent-400 font-bold mr-2">❯</span>
                cat mission.txt
              </p>
              <p className="text-slate-300 leading-relaxed max-w-2xl text-base sm:text-lg">
                {profile.intro}
              </p>
            </div>

            <div className="pt-2">
              <span className="text-accent-400 font-bold mr-2">❯</span>
              <span className="cursor-blink text-slate-300">█</span>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-highlight-400 text-sm tracking-[0.2em] uppercase font-bold mb-10 text-center opacity-90 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
          // {profile.tagline}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <CtaBtn href={`mailto:${profile.email}`} label="✉ Contact Me" primary />
          <CtaBtn href={profile.github} label="⌥ GitHub" />
          <CtaBtn href={profile.linkedin} label="⎆ LinkedIn" />
          <CtaBtn href={profile.credly} label="✦ Credly" />
        </div>
      </div>
    </section>
  )
}

function CtaBtn({ href, label, primary }: { href: string; label: string; primary?: boolean }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      className={`
        inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium tracking-wide transition-all duration-300
        ${primary 
          ? 'bg-brand-600 hover:bg-brand-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] border border-brand-400/30 hover:-translate-y-1' 
          : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-white/10 hover:border-brand-500/50 hover:text-white hover:-translate-y-1 backdrop-blur-md'
        }
      `}
    >
      {label}
    </a>
  )
}

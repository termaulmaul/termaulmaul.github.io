import { profile } from '../data/profile'
import Background3D from './Background3D'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-[110px] pb-[68px] px-[26px] relative"
    >
      {/* 3D Isometric Motion Graphic */}
      <Background3D />

      <div className="max-w-[800px] w-full relative z-10 flex flex-col items-center">
        {/* Terminal block */}
        <div className="card-glass w-full p-[26px] md:p-[42px] mb-[42px] border-t-[4px] border-t-accent-400">
          
          {/* Terminal Header */}
          <div className="flex items-center gap-[10px] mb-[26px] border-b border-slate-800 pb-[16px]">
            <div className="flex gap-[10px]">
              <div className="w-[10px] h-[10px] rounded-full bg-alert-400" />
              <div className="w-[10px] h-[10px] rounded-full bg-warn-400" />
              <div className="w-[10px] h-[10px] rounded-full bg-accent-400" />
            </div>
            <span className="ml-[16px] font-mono text-[10px] text-slate-500 uppercase tracking-[0.1em]">bash - 80x24</span>
          </div>

          <div className="font-mono text-[16px] leading-relaxed space-y-[26px]">
            <div>
              <p className="mb-[10px] text-slate-300">
                <span className="text-accent-400 font-bold mr-2">termaulmaul@macbook-pro:~$</span>
                whoami
              </p>
              <h1 className="text-[42px] md:text-[68px] font-bold text-white tracking-tight leading-none drop-shadow-[0_0_10px_rgba(74,222,128,0.2)]">
                {profile.name}
              </h1>
            </div>

            <div>
              <p className="mb-[10px] text-slate-300">
                <span className="text-accent-400 font-bold mr-2">termaulmaul@macbook-pro:~$</span>
                cat current_role.txt
              </p>
              <div className="pl-[16px] border-l-[4px] border-brand-500/50">
                <p className="text-[26px] text-brand-400 font-bold tracking-tight">
                  {profile.title}
                </p>
                <p className="text-[16px] text-slate-400 mt-[10px]">
                  {profile.subtitle}
                </p>
              </div>
            </div>

            <div>
              <p className="mb-[10px] text-slate-300">
                <span className="text-accent-400 font-bold mr-2">termaulmaul@macbook-pro:~$</span>
                cat ./mission.sh
              </p>
              <p className="text-[16px] text-slate-300 max-w-[600px] font-sans">
                {profile.intro}
              </p>
            </div>

            <div className="pt-[10px]">
              <span className="text-accent-400 font-bold mr-2">termaulmaul@macbook-pro:~$</span>
              <span className="cursor-blink text-accent-400">█</span>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-[10px] md:text-[16px] tracking-[0.2em] uppercase font-bold mb-[42px] text-center font-mono text-highlight-400">
          // {profile.tagline}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-[16px] justify-center items-center font-mono">
          <CtaBtn href={`mailto:${profile.email}`} label="./contact.sh" primary />
          <CtaBtn href={profile.github} label="--github" />
          <CtaBtn href={profile.linkedin} label="--linkedin" />
          <CtaBtn href={profile.credly} label="--credly" />
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
        inline-flex items-center justify-center px-[26px] py-[10px] text-[16px] font-bold transition-all rounded-full shadow-lg
        ${primary 
          ? 'bg-accent-400 text-slate-950 hover:bg-accent-500 shadow-[0_0_26px_rgba(74,222,128,0.3)]' 
          : 'bg-slate-900 border border-slate-700 text-slate-300 hover:border-accent-400 hover:text-accent-400'
        }
      `}
    >
      {label}
    </a>
  )
}

import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto scroll-mt-20">
      <div className="section-label">
        <span className="text-brand-500 mr-2">08.</span> Reach Out
      </div>
      
      <p className="text-slate-400 text-sm md:text-base max-w-2xl mb-12">
        Open to conversations around QA automation, SDET practices, fintech systems, observability, and AI/ML quality workflows.
      </p>

      <div className="card-glass rounded-2xl p-8 md:p-12 max-w-2xl mx-auto relative overflow-hidden">
        {/* Terminal block */}
        <div className="mb-10">
          <p className="font-mono text-sm mb-3">
            <span className="text-accent-400 font-bold mr-2">$</span>
            <span className="text-slate-400">cat contact.json</span>
          </p>
          <pre className="bg-black/40 rounded-xl p-6 text-sm md:text-base text-slate-300 overflow-x-auto font-mono border border-white/5 shadow-inner">
{`{
  "email":    "${profile.email}",
  "github":   "termaulmaul",
  "linkedin": "maulanarafi",
  "domain":   "fintech · qa · devops · ai"
}`}
          </pre>
        </div>

        <div className="flex flex-col gap-3 relative z-10">
          <ContactRow icon="✉" label="Email" href={`mailto:${profile.email}`} value={profile.email} />
          <ContactRow icon="⌥" label="GitHub" href={profile.github} value="github.com/termaulmaul" />
          <ContactRow icon="⎆" label="LinkedIn" href={profile.linkedin} value="linkedin.com/in/maulanarafi" />
          <ContactRow icon="✦" label="Credly" href={profile.credly} value="Certifications" />
        </div>

        <div className="mt-12 pt-8 border-t border-brand-500/20 text-center relative z-10">
          <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-4">support this work</p>
          <a
            href={profile.patreon}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-highlight-400 px-4 py-2 border border-brand-500/20 hover:border-highlight-400/50 rounded-lg transition-all hover:bg-highlight-400/10"
          >
            ♥ Patreon
          </a>
        </div>
      </div>
    </section>
  )
}

function ContactRow({ icon, label, href, value }: { icon: string; label: string; href: string; value: string }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 rounded-xl bg-slate-900/50 border border-white/5 hover:border-highlight-400/30 hover:bg-highlight-400/5 transition-all group"
    >
      <div className="flex items-center gap-4 w-full sm:w-32 flex-shrink-0">
        <span className="text-xl w-6 text-center text-slate-500 group-hover:text-highlight-400 transition-colors">{icon}</span>
        <span className="text-xs font-mono uppercase tracking-wider text-slate-500 group-hover:text-slate-300 transition-colors">{label}</span>
      </div>
      <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors truncate">{value}</span>
    </a>
  )
}

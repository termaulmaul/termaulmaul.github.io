import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" className="py-[68px] px-[26px] max-w-[1100px] mx-auto scroll-mt-[68px]">
      <p className="section-label">
        <span className="text-accent-400">08.</span> Reach Out
      </p>
      <h2 className="devops-title">Connection ESTABLISHED</h2>
      
      <p className="text-muted-foreground text-[16px] max-w-[600px] mb-[42px] font-sans">
        Open to conversations around QA automation, SDET practices, fintech systems, observability, and AI/ML quality workflows.
      </p>

      <div className="card-glass p-[42px] max-w-[800px] mx-auto relative border-t-[4px] border-t-highlight-400">
        <div className="mb-[26px]">
          <p className="font-mono text-[16px] mb-[10px]">
            <span className="text-accent-400 font-bold mr-2">root@termaulmaul:~#</span>
            <span className="text-slate-200">cat contact.json</span>
          </p>
          <pre className="bg-background rounded-xl p-[26px] text-[16px] text-accent-400 overflow-x-auto font-mono border border-border">
{`{
  "email":    "${profile.email}",
  "github":   "termaulmaul",
  "linkedin": "maulanarafi",
  "domain":   "fintech · qa · devops · ai"
}`}
          </pre>
        </div>

        <div className="flex flex-col gap-[10px]">
          <ContactRow icon="[E]" label="Email" href={`mailto:${profile.email}`} value={profile.email} />
          <ContactRow icon="[G]" label="GitHub" href={profile.github} value="github.com/termaulmaul" />
          <ContactRow icon="[L]" label="LinkedIn" href={profile.linkedin} value="linkedin.com/in/maulanarafi" />
          <ContactRow icon="[C]" label="Credly" href={profile.credly} value="Certifications" />
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
      className="flex items-center gap-[26px] p-[16px] bg-card border border-border hover:bg-accent hover:text-accent-foreground transition-all group font-mono rounded-xl shadow-sm"
    >
      <span className="text-[16px] text-highlight-400 font-bold">{icon}</span>
      <span className="text-[16px] uppercase tracking-widest text-muted-foreground w-[100px] group-hover:text-muted-foreground">{label}</span>
      <span className="text-[16px] text-muted-foreground group-hover:text-foreground truncate">{value}</span>
    </a>
  )
}

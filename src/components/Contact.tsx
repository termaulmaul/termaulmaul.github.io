import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-[1100px] mx-auto scroll-mt-12">
      <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
        <div className="w-full md:w-1/3">
          <h2 className="doto-heading text-[48px] md:text-[64px] text-[#ffffff] tracking-tighter flex items-center gap-4">
            <span className="text-[#a3a3a3]">/</span> CNT
          </h2>
        </div>

        <div className="w-full md:w-2/3 flex flex-col gap-8">
          <p className="text-[20px] md:text-[28px] font-sans font-medium text-[#ffffff] leading-tight tracking-tight mb-4">
            Open to conversations around QA automation, SDET practices, fintech systems, observability, and AI/ML quality workflows.
          </p>

          <div className="flex flex-col gap-4">
            <ContactRow label="Email" href={`mailto:${profile.email}`} value={profile.email} />
            <ContactRow label="GitHub" href={profile.github} value="github.com/termaulmaul" />
            <ContactRow label="LinkedIn" href={profile.linkedin} value="linkedin.com/in/maulanarafi" />
            <ContactRow label="Credly" href={profile.credly} value="View Certifications" />
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactRow({ label, href, value }: { label: string; href: string; value: string }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      className="flex flex-col md:flex-row md:items-center justify-between gap-2 p-6 card-glass hover:bg-[#171717] hover:text-white transition-all group font-sans border border-white/10 shadow-sm group-hover:border-white/30"
    >
      <span className="text-[14px] uppercase tracking-widest text-[#a3a3a3] group-hover:text-white/60 font-bold">{label}</span>
      <span className="text-[18px] font-medium group-hover:text-white truncate">{value}</span>
    </a>
  )
}

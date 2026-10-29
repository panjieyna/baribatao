import { CheckCircle2, Handshake, Info, MessageSquare, Shield } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { whyUs } from '../data/company'
import { ScrollReveal } from './ScrollReveal'
import { SectionHeading } from './SectionHeading'

const icons: LucideIcon[] = [MessageSquare, Info, Handshake, Shield, CheckCircle2]

export function WhyUs() {
  return (
    <section id="keunggulan" className="section" aria-labelledby="why-title">
      <div className="container">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Mengapa Memilih Kami"
            title="Keunggulan yang relevan untuk pelanggan"
            description="Fokus kami adalah pengalaman yang jelas dan mudah diikuti—bukan klaim tanpa data pendukung."
            align="center"
          />
        </ScrollReveal>

        <div className="why__grid">
          {whyUs.map((item, index) => {
            const Icon = icons[index % icons.length]
            return (
              <ScrollReveal key={item.title} as="article" className="why-item">
                <div className="why-item__icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 id={index === 0 ? 'why-title' : undefined}>{item.title}</h3>
                <p>{item.description}</p>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

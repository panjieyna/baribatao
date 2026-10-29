import { ClipboardCheck, MessageCircle, PackageCheck, Send } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { howItWorks } from '../data/company'
import { ScrollReveal } from './ScrollReveal'
import { SectionHeading } from './SectionHeading'

const icons: LucideIcon[] = [MessageCircle, Send, ClipboardCheck, PackageCheck]

export function HowItWorks() {
  return (
    <section id="cara-kerja" className="section" aria-labelledby="how-title">
      <div className="container">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Cara Kerja"
            title="Empat langkah sederhana"
            description="Alur berikut bersifat umum. Rincian prosedur dapat disesuaikan dengan operasional perusahaan."
            align="center"
          />
        </ScrollReveal>

        <ol className="steps">
          {howItWorks.map((item, index) => {
            const Icon = icons[index % icons.length]
            return (
              <ScrollReveal key={item.step} as="li" className="step-card">
                <div className="step-card__top">
                  <span className="step-card__number" aria-hidden="true">
                    {String(item.step).padStart(2, '0')}
                  </span>
                  <span className="step-card__icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                </div>
                <h3 id={index === 0 ? 'how-title' : undefined}>{item.title}</h3>
                <p>{item.description}</p>
              </ScrollReveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

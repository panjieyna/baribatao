import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/company'
import { ScrollReveal } from './ScrollReveal'
import { SectionHeading } from './SectionHeading'

export function FAQ() {
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section section--muted" aria-labelledby="faq-title">
      <div className="container container--narrow">
        <ScrollReveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Pertanyaan yang sering diajukan"
            description="Jawaban bersifat informatif. Untuk ketentuan spesifik, silakan hubungi Bariba Tao."
            align="center"
          />
        </ScrollReveal>

        <div className="faq__list">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index
            const panelId = `${baseId}-panel-${index}`
            const buttonId = `${baseId}-button-${index}`

            return (
              <ScrollReveal key={item.question} className={`faq-item ${isOpen ? 'is-open' : ''}`.trim()}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    className="faq-item__button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span id={index === 0 ? 'faq-title' : undefined}>{item.question}</span>
                    <ChevronDown size={20} aria-hidden="true" />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="faq-item__panel"
                  hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

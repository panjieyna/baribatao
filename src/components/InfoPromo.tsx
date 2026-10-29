import { infoArticles } from '../data/company'
import { ScrollReveal } from './ScrollReveal'
import { SectionHeading } from './SectionHeading'

export function InfoPromo() {
  return (
    <section id="informasi" className="section section--muted" aria-labelledby="info-title">
      <div className="container">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Informasi & Panduan"
            title="Yang perlu Anda ketahui"
            description="Bagian ini berisi informasi layanan, tips, dan pengumuman. Belum ada promo aktif saat ini."
            align="center"
          />
        </ScrollReveal>

        <div className="info__grid">
          {infoArticles.map((article, index) => (
            <ScrollReveal key={article.title} as="article" className="info-card">
              <span className="info-card__tag">{article.tag}</span>
              <h3 id={index === 0 ? 'info-title' : undefined}>{article.title}</h3>
              <p>{article.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

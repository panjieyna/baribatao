import { aboutContent, aboutImage } from '../data/company'
import { SafeImage } from './SafeImage'
import { ScrollReveal } from './ScrollReveal'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="tentang" className="section about" aria-labelledby="about-title">
      <div className="container">
        <div className="about__grid">
          <ScrollReveal className="about__copy">
            <SectionHeading
              eyebrow="Tentang Kami"
              title="Mengenal Bariba Tao"
              description={aboutContent.intro}
            />
            <div className="about__vm">
              <div>
                <h3>Visi</h3>
                <p>{aboutContent.vision}</p>
              </div>
              <div>
                <h3>Misi</h3>
                <ul>
                  {aboutContent.mission.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="about__visual">
            <SafeImage src={aboutImage.src} alt={aboutImage.alt} className="about__image" />
          </ScrollReveal>
        </div>

        <ScrollReveal className="about__values">
          <h3 id="about-title" className="about__values-title">
            Nilai yang kami jaga
          </h3>
          <div className="about__values-grid">
            {aboutContent.values.map((value) => (
              <article key={value.title} className="value-item">
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

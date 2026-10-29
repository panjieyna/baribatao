import { Quote } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'
import { SectionHeading } from './SectionHeading'

export function Testimonials() {
  return (
    <section id="testimoni" className="section" aria-labelledby="testimoni-title">
      <div className="container">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Testimoni"
            title="Ulasan pelanggan"
            description="Bagian ini disiapkan untuk menampilkan testimoni pelanggan asli. Saat ini belum ada ulasan yang ditampilkan."
            align="center"
          />
        </ScrollReveal>

        <ScrollReveal className="placeholder-panel placeholder-panel--wide" role="status">
          <Quote size={28} aria-hidden="true" />
          <h3 id="testimoni-title">Testimoni segera hadir</h3>
          <p>
            Kami tidak menampilkan nama, foto, atau ulasan fiktif. Setelah mendapatkan izin pelanggan,
            testimoni asli akan ditampilkan di sini.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

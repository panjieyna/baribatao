import { MapPin, MessageCircle } from 'lucide-react'
import { company, coverageAreas } from '../data/company'
import { openWhatsApp } from '../utils/whatsapp'
import { ScrollReveal } from './ScrollReveal'
import { SectionHeading } from './SectionHeading'

const coverageMessage =
  'Halo Bariba Tao, saya ingin menanyakan ketersediaan pengiriman ke wilayah berikut: [tulis nama wilayah]. Mohon informasinya.'

export function Coverage() {
  const hasAreas = coverageAreas.length > 0
  const hasMap = Boolean(company.mapEmbedUrl.trim())

  return (
    <section id="wilayah" className="section section--muted" aria-labelledby="coverage-title">
      <div className="container">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Wilayah Pengiriman"
            title="Cakupan layanan Bariba Tao"
            description="Informasi wilayah layanan ditampilkan berdasarkan data resmi. Jika destinasi Anda belum tercantum, silakan tanyakan langsung melalui WhatsApp."
            align="center"
          />
        </ScrollReveal>

        <div className={`coverage__layout ${hasMap ? 'coverage__layout--with-map' : ''}`.trim()}>
          <ScrollReveal className="coverage__list-wrap">
            <h3 id="coverage-title" className="visually-hidden">
              Daftar wilayah layanan
            </h3>
            {hasAreas ? (
              <ul className="coverage__list">
                {coverageAreas.map((area) => (
                  <li key={area.name} className="coverage__item">
                    <MapPin size={18} aria-hidden="true" />
                    <div>
                      <strong>{area.name}</strong>
                      {area.note && <span>{area.note}</span>}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="placeholder-panel" role="status">
                <MapPin size={28} aria-hidden="true" />
                <p>
                  Informasi wilayah layanan akan segera diperbarui. Silakan tanyakan destinasi Anda
                  melalui WhatsApp untuk konfirmasi ketersediaan.
                </p>
              </div>
            )}

            <button
              type="button"
              className="btn btn--accent"
              onClick={() => openWhatsApp(coverageMessage)}
            >
              <MessageCircle size={18} aria-hidden="true" />
              Tanyakan Ketersediaan Wilayah
            </button>
          </ScrollReveal>

          {hasMap && (
            <ScrollReveal className="coverage__map">
              <iframe
                title="Peta lokasi Bariba Tao"
                src={company.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  )
}

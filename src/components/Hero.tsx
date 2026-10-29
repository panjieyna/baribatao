import { company, heroImage } from '../data/company'
import { defaultWhatsAppMessage, openWhatsApp } from '../utils/whatsapp'
import { SafeImage } from './SafeImage'

export function Hero() {
  return (
    <section id="beranda" className="hero" aria-labelledby="hero-title">
      <div className="hero__media" aria-hidden="false">
        <SafeImage src={heroImage.src} alt={heroImage.alt} className="hero__image" />
        <div className="hero__scrim" />
      </div>

      <div className="container hero__content">
        <p className="hero__brand">{company.name}</p>
        <h1 id="hero-title" className="hero__title">
          {company.tagline}
        </h1>
        <p className="hero__subtitle">
          Bariba Tao hadir membantu kebutuhan pengiriman barang Anda dengan layanan yang praktis,
          komunikasi yang jelas, dan pelayanan yang mengutamakan kepercayaan.
        </p>
        <div className="hero__actions">
          <button
            type="button"
            className="btn btn--accent"
            onClick={() => openWhatsApp(defaultWhatsAppMessage)}
          >
            Hubungi Kami
          </button>
          <a href="#layanan" className="btn btn--ghost">
            Lihat Layanan
          </a>
        </div>
      </div>
    </section>
  )
}

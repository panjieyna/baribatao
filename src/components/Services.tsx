import {
  Boxes,
  Briefcase,
  MessageCircle,
  Package,
  Route,
  Truck,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { services } from '../data/company'
import { openWhatsApp } from '../utils/whatsapp'
import { ScrollReveal } from './ScrollReveal'
import { SectionHeading } from './SectionHeading'

const icons: LucideIcon[] = [Truck, Package, Briefcase, Boxes, Route]

export function Services() {
  return (
    <section id="layanan" className="section section--muted" aria-labelledby="services-title">
      <div className="container">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Layanan Kami"
            title="Pilihan layanan pengiriman"
            description="Kategori di bawah ini bersifat contoh dan dapat disesuaikan dengan layanan aktual Bariba Tao. Tanyakan ketersediaan layanan yang Anda butuhkan."
            align="center"
          />
        </ScrollReveal>

        <div className="services__grid">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length]
            return (
              <ScrollReveal key={service.id} as="article" className="service-card">
                <div className="service-card__icon" aria-hidden="true">
                  <Icon size={24} strokeWidth={1.75} />
                </div>
                <h3 id={index === 0 ? 'services-title' : undefined}>{service.title}</h3>
                <p>{service.description}</p>
                <button
                  type="button"
                  className="btn btn--outline service-card__btn"
                  onClick={() => openWhatsApp(service.whatsappMessage)}
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  Tanyakan Layanan
                </button>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

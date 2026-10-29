import { useState } from 'react'
import type { FormEvent } from 'react'
import { Clock3, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { company } from '../data/company'
import { defaultWhatsAppMessage, isWhatsAppConfigured, openWhatsApp } from '../utils/whatsapp'
import { ScrollReveal } from './ScrollReveal'
import { SectionHeading } from './SectionHeading'

type FormState = {
  name: string
  destination: string
  message: string
}

const initialForm: FormState = {
  name: '',
  destination: '',
  message: '',
}

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<Partial<FormState>>({})

  const validate = () => {
    const next: Partial<FormState> = {}
    if (!form.name.trim()) next.name = 'Nama wajib diisi.'
    if (!form.destination.trim()) next.destination = 'Tujuan pengiriman wajib diisi.'
    if (!form.message.trim()) next.message = 'Pesan wajib diisi.'
    else if (form.message.trim().length < 10) next.message = 'Pesan minimal 10 karakter.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!validate()) return

    const composed = [
      `Halo Bariba Tao, saya ${form.name.trim()}.`,
      `Saya ingin menanyakan pengiriman ke: ${form.destination.trim()}.`,
      form.message.trim(),
    ].join(' ')

    openWhatsApp(composed)
  }

  const displayOrPlaceholder = (value: string, placeholder: string) =>
    value.trim() ? value : placeholder

  return (
    <section id="kontak" className="section" aria-labelledby="contact-title">
      <div className="container">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Kontak Kami"
            title="Siap membantu kebutuhan pengiriman Anda"
            description="Hubungi Bariba Tao untuk menanyakan layanan, wilayah, atau biaya. Formulir di bawah menyusun pesan lalu membuka WhatsApp—tanpa pengiriman data ke server."
            align="center"
          />
        </ScrollReveal>

        <div className="contact__grid">
          <ScrollReveal className="contact__info">
            <h3 id="contact-title">Informasi kontak</h3>
            <ul className="contact__list">
              <li>
                <MessageCircle size={18} aria-hidden="true" />
                <div>
                  <strong>WhatsApp</strong>
                  <span>
                    {isWhatsAppConfigured()
                      ? `+${company.whatsappNumber}`
                      : 'Nomor WhatsApp — PLACEHOLDER (isi di company.ts)'}
                  </span>
                </div>
              </li>
              <li>
                <Phone size={18} aria-hidden="true" />
                <div>
                  <strong>Telepon</strong>
                  <span>{displayOrPlaceholder(company.phone, 'Nomor telepon — PLACEHOLDER')}</span>
                </div>
              </li>
              <li>
                <Mail size={18} aria-hidden="true" />
                <div>
                  <strong>Email</strong>
                  <span>{displayOrPlaceholder(company.email, 'Email — PLACEHOLDER')}</span>
                </div>
              </li>
              <li>
                <MapPin size={18} aria-hidden="true" />
                <div>
                  <strong>Alamat</strong>
                  <span>{company.address}</span>
                </div>
              </li>
              <li>
                <Clock3 size={18} aria-hidden="true" />
                <div>
                  <strong>Jam operasional</strong>
                  <span>{company.operatingHours}</span>
                </div>
              </li>
            </ul>

            <button
              type="button"
              className="btn btn--accent"
              onClick={() => openWhatsApp(defaultWhatsAppMessage)}
            >
              <MessageCircle size={18} aria-hidden="true" />
              Hubungi melalui WhatsApp
            </button>
          </ScrollReveal>

          <ScrollReveal className="contact__form-wrap">
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <label htmlFor="contact-name">Nama</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                />
                {errors.name && (
                  <p id="contact-name-error" className="form-error">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="contact-destination">Tujuan pengiriman</label>
                <input
                  id="contact-destination"
                  name="destination"
                  type="text"
                  value={form.destination}
                  onChange={(e) => setForm((prev) => ({ ...prev, destination: e.target.value }))}
                  aria-invalid={Boolean(errors.destination)}
                  aria-describedby={errors.destination ? 'contact-destination-error' : undefined}
                  placeholder="Contoh: nama kota / kecamatan"
                />
                {errors.destination && (
                  <p id="contact-destination-error" className="form-error">
                    {errors.destination}
                  </p>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="contact-message">Pesan</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  placeholder="Jelaskan jenis barang dan kebutuhan Anda"
                />
                {errors.message && (
                  <p id="contact-message-error" className="form-error">
                    {errors.message}
                  </p>
                )}
              </div>

              <button type="submit" className="btn btn--primary">
                Kirim via WhatsApp
              </button>
              <p className="form-note">
                Formulir ini tidak mengirim data ke server. Pesan disusun di browser lalu dibuka di
                WhatsApp.
              </p>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

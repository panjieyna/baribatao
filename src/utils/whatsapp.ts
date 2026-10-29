import { company } from '../data/company'

export function isWhatsAppConfigured(): boolean {
  const number = company.whatsappNumber.trim()
  return Boolean(number) && /^\d{10,15}$/.test(number) && !number.includes('X')
}

export function buildWhatsAppUrl(message?: string): string | null {
  if (!isWhatsAppConfigured()) return null
  const base = `https://wa.me/${company.whatsappNumber.trim()}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

export function openWhatsApp(message?: string): void {
  const url = buildWhatsAppUrl(message)
  if (!url) {
    window.alert(
      'Nomor WhatsApp Bariba Tao belum dikonfigurasi. Buka file src/data/company.ts dan isi whatsappNumber dengan nomor resmi.',
    )
    return
  }
  window.open(url, '_blank', 'noopener,noreferrer')
}

export const defaultWhatsAppMessage =
  'Halo Bariba Tao, saya ingin menanyakan layanan pengiriman barang. Mohon informasinya.'

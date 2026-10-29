import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { company } from '../data/company'
import { defaultWhatsAppMessage, openWhatsApp } from '../utils/whatsapp'
import { Logo } from './Logo'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`.trim()}>
      <div className="container navbar__inner">
        <Logo />

        <nav className="navbar__desktop" aria-label="Navigasi utama">
          {company.nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="navbar__link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="btn btn--primary navbar__cta"
            onClick={() => openWhatsApp(defaultWhatsAppMessage)}
          >
            Hubungi Kami
          </button>
          <button
            type="button"
            className="navbar__toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`navbar__mobile ${open ? 'is-open' : ''}`.trim()}
        hidden={!open}
      >
        <nav className="navbar__mobile-nav" aria-label="Navigasi mobile">
          {company.nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="navbar__mobile-link" onClick={close}>
              {item.label}
            </a>
          ))}
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => {
              close()
              openWhatsApp(defaultWhatsAppMessage)
            }}
          >
            Hubungi Kami
          </button>
        </nav>
      </div>
    </header>
  )
}

import { Facebook, Instagram } from 'lucide-react'
import { company, services } from '../data/company'
import { Logo } from './Logo'

export function Footer() {
  const year = new Date().getFullYear()
  const socialLinks = [
    { label: 'Instagram', href: company.social.instagram, Icon: Instagram },
    { label: 'Facebook', href: company.social.facebook, Icon: Facebook },
  ].filter((item) => item.href.trim())

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo />
          <p>{company.description}</p>
        </div>

        <div>
          <h2 className="footer__heading">Navigasi</h2>
          <ul className="footer__links">
            {company.nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer__heading">Layanan</h2>
          <ul className="footer__links">
            {services.slice(0, 4).map((service) => (
              <li key={service.id}>
                <a href="#layanan">{service.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer__heading">Kontak</h2>
          <ul className="footer__contact">
            <li>{company.address}</li>
            <li>{company.operatingHours}</li>
            <li>
              {company.email.trim()
                ? company.email
                : 'Email — PLACEHOLDER'}
            </li>
          </ul>
          {socialLinks.length > 0 ? (
            <div className="footer__social">
              {socialLinks.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          ) : (
            <p className="footer__social-note">Tautan media sosial — PLACEHOLDER</p>
          )}
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>
            © {year} {company.name}. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}

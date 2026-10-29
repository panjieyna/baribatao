type Props = {
  compact?: boolean
}

export function Logo({ compact = false }: Props) {
  return (
    <a href="#beranda" className={`logo ${compact ? 'logo--compact' : ''}`.trim()} aria-label="Bariba Tao — beranda">
      <span className="logo__mark" aria-hidden="true">
        <svg viewBox="0 0 40 40" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="10" fill="currentColor" className="logo__bg" />
          <path d="M8 24h24v4a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3v-4Z" fill="#F97316" />
          <path d="M10 13h14l6 7H10V13Z" fill="#FFFFFF" />
          <circle cx="14" cy="28" r="2.2" fill="#0B3A6E" />
          <circle cx="28" cy="28" r="2.2" fill="#0B3A6E" />
          <path d="M24 13v7h6" stroke="#E2E8F0" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="logo__text">
        <span className="logo__name">Bariba Tao</span>
        {!compact && <span className="logo__sub">Jasa Pengiriman</span>}
      </span>
    </a>
  )
}

import { useState } from 'react'
import { ImageOff } from 'lucide-react'

type Props = {
  src: string
  alt: string
  className?: string
}

export function SafeImage({ src, alt, className = '' }: Props) {
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)

  if (failed) {
    return (
      <div className={`image-fallback ${className}`.trim()} role="img" aria-label={alt}>
        <ImageOff size={28} aria-hidden="true" />
        <span>Gambar tidak dapat dimuat</span>
      </div>
    )
  }

  return (
    <div className={`safe-image ${loaded ? 'safe-image--loaded' : ''} ${className}`.trim()}>
      {!loaded && <div className="safe-image__skeleton" aria-hidden="true" />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
      />
    </div>
  )
}

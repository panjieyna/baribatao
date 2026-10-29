import type { ReactNode } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

type Props = {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'article' | 'li'
}

export function ScrollReveal({ children, className = '', as = 'div' }: Props) {
  const ref = useScrollReveal<HTMLDivElement>()
  const Tag = as

  return (
    <Tag ref={ref as never} className={`reveal ${className}`.trim()}>
      {children}
    </Tag>
  )
}

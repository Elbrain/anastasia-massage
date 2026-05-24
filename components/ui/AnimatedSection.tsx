'use client'

import { useEffect, useRef, ReactNode } from 'react'
import { clsx } from 'clsx'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: 0 | 1 | 2 | 3 | 4 | 5
  once?: boolean
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          if (once) observer.unobserve(el)
        } else if (!once) {
          el.classList.remove('visible')
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once])

  const delayClass = delay > 0 ? `reveal-delay-${delay}` : ''

  return (
    <div ref={ref} className={clsx('reveal', delayClass, className)}>
      {children}
    </div>
  )
}

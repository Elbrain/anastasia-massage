'use client'

import { usePathname } from 'next/navigation'

/** Renders children only on the homepage. */
export function HomeOnly({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  if (pathname !== '/') return null
  return <>{children}</>
}

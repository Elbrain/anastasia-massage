import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig, whatsappUrl } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <section className="pt-40 pb-28 bg-cream min-h-[70vh]">
      <div className="container-site max-w-2xl mx-auto text-center">
        <p className="font-body text-xs tracking-[0.25em] uppercase text-rose mb-4">404</p>
        <h1 className="font-display text-display-lg text-brown-dark mb-6">This Page Has Moved On</h1>
        <p className="text-brown leading-relaxed text-lg mb-10">
          The page you were looking for is no longer here — but everything you need is a click away.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-10">
          <Link href="/services" className="btn-primary">Massage Menu</Link>
          <Link href="/pricing" className="btn-secondary">Prices</Link>
          <Link href="/faq" className="btn-secondary">FAQ</Link>
          <Link href="/blog" className="btn-secondary">Journal</Link>
        </div>

        <h2 className="font-display text-xl text-brown-dark mb-4">Popular Massages</h2>
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {siteConfig.services.slice(0, 4).map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="px-5 py-2.5 bg-ivory border border-rose/20 rounded-full text-sm text-brown hover:border-rose/50 hover:text-brown-dark transition-colors"
            >
              {s.name}
            </Link>
          ))}
        </div>

        <p className="text-sm text-brown-muted">
          Or{' '}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-brown-dark">
            message me on WhatsApp
          </a>{' '}
          — West Kensington (W14), daily 11:00–22:00.
        </p>
      </div>
    </section>
  )
}

import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import { BookingCTA } from '@/components/home/BookingCTA'
import { PortfolioGallery } from '@/components/portfolio/PortfolioGallery'

export const metadata: Metadata = buildMetadata({
  title: 'Gallery — Anna & The Space',
  description:
    'A glimpse of Anna and the private, candlelit space. Sensual massage in West Kensington, London — calm, discreet and designed for complete relaxation.',
  path: '/portfolio',
  keywords: ['sensual massage london gallery', 'anastasia massage london', 'private massage room london'],
})

export default function PortfolioPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-cream">
        <div className="container-site text-center max-w-3xl mx-auto">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-rose mb-4">Gallery</p>
          <h1 className="font-display text-display-lg text-brown-dark mb-6">Gallery</h1>
          <p className="text-brown leading-relaxed text-lg max-w-xl mx-auto">
            A glimpse of Anna and the private, candlelit space — calm, discreet,
            and designed for complete relaxation from the moment you arrive.
          </p>
        </div>
      </section>

      {/* Gallery — client component for interactivity */}
      <section className="section bg-ivory">
        <div className="container-site">
          <PortfolioGallery />
        </div>
      </section>

      <BookingCTA />
    </>
  )
}

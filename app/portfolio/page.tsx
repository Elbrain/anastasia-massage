import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import { BookingCTA } from '@/components/home/BookingCTA'
import { PortfolioGallery } from '@/components/portfolio/PortfolioGallery'

export const metadata: Metadata = buildMetadata({
  title: 'Portfolio — Treatment Room & Atmosphere',
  description:
    'A look inside the treatment room. Calm, private, and designed for complete relaxation. Professional massage therapy environment in Central London.',
  path: '/portfolio',
  keywords: ['massage treatment room london', 'massage therapist london portfolio', 'massage room london'],
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
          <p className="font-body text-xs tracking-[0.25em] uppercase text-rose mb-4">The Space</p>
          <h1 className="font-display text-display-lg text-brown-dark mb-6">Portfolio</h1>
          <p className="text-brown leading-relaxed text-lg max-w-xl mx-auto">
            A glimpse inside the treatment room — calm, private, and designed for
            complete relaxation from the moment you arrive.
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

import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { BookingCTA } from '@/components/home/BookingCTA'
import { siteConfig } from '@/lib/siteConfig'

export interface LocalAreaConfig {
  area: string
  slug: string
  postcodes: string
  intro: string
  body: string
  keywords: string[]
  faqs: { question: string; answer: string }[]
}

export function generateLocalMetadata(config: LocalAreaConfig) {
  return buildMetadata({
    title: `Sensual Massage ${config.area} — Anna`,
    description: `Sensual massage near ${config.area}, London. Sensual, body-to-body, tantric and nuru massage with Anna at a discreet in-call studio in West Kensington (W14), easily reached from ${config.area}. Daily 11:00–22:00.`,
    path: `/${config.slug}`,
    keywords: config.keywords,
  })
}

export function LocalAreaPage({ config }: { config: LocalAreaConfig }) {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Massage London', href: '/massage-london' },
    { name: `Massage ${config.area}`, href: `/${config.slug}` },
  ])
  const faq = faqSchema(config.faqs)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-cream relative overflow-hidden">
        <div className="container-site">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-xs text-brown-muted mb-6 flex-wrap">
              <Link href="/" className="hover:text-brown-dark transition-colors">Home</Link>
              <span>/</span>
              <Link href="/massage-london" className="hover:text-brown-dark transition-colors">Massage London</Link>
              <span>/</span>
              <span className="text-brown-dark">Massage {config.area}</span>
            </nav>
            <p className="font-body text-xs tracking-[0.25em] uppercase text-rose mb-4">London · {config.postcodes}</p>
            <h1 className="font-display text-display-lg text-brown-dark mb-6">
              Massage in {config.area}
            </h1>
            <p className="text-lg text-brown leading-relaxed mb-8 max-w-xl">{config.intro}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book on WhatsApp
              </a>
              <Link href="/services" className="btn-secondary">View Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Body content */}
      <section className="section bg-ivory">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="prose-anastasia text-brown leading-relaxed space-y-5" dangerouslySetInnerHTML={{ __html: config.body }} />
              </AnimatedSection>
            </div>

            <aside>
              <div className="sticky top-28 space-y-5">
                {/* Booking CTA */}
                <div className="bg-brown-dark rounded-3xl p-6 text-ivory">
                  <h3 className="font-display text-xl text-ivory mb-3">Massage near {config.area}</h3>
                  <p className="text-ivory/60 text-sm mb-5 leading-relaxed">In-call studio in West Kensington (W14), easily reached from {config.area}. Available daily 11:00–22:00.</p>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-rose w-full justify-center text-sm"
                  >
                    Book Now
                  </a>
                </div>

                {/* Services */}
                <div className="bg-cream rounded-3xl border border-rose/15 p-6">
                  <h3 className="font-display text-lg text-brown-dark mb-4">Available Treatments</h3>
                  <ul className="space-y-2">
                    {siteConfig.services.slice(0, 6).map((s) => (
                      <li key={s.slug}>
                        <Link href={`/services/${s.slug}`} className="text-sm text-brown hover:text-rose transition-colors flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-rose flex-shrink-0" />
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="/services" className="text-xs text-rose mt-3 inline-block hover:text-rose-dark transition-colors">View all services →</Link>
                </div>

                {/* Contact */}
                <div className="bg-cream rounded-3xl border border-rose/15 p-6">
                  <h3 className="font-display text-lg text-brown-dark mb-4">Get in Touch</h3>
                  <div className="space-y-3">
                    <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-brown hover:text-rose transition-colors">
                      <span className="text-rose">→</span> WhatsApp
                    </a>
                    <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-sm text-brown hover:text-rose transition-colors">
                      <span className="text-rose">→</span> {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-cream">
        <div className="container-site max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display text-2xl text-brown-dark">FAQs — Massage in {config.area}</h2>
          </AnimatedSection>
          <div className="space-y-4">
            {config.faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={(Math.min(i + 1, 5) as 1 | 2 | 3 | 4 | 5)}>
                <div className="bg-ivory rounded-2xl border border-rose/15 p-6">
                  <h3 className="font-display text-lg text-brown-dark mb-3">{faq.question}</h3>
                  <p className="text-sm text-brown leading-relaxed">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  )
}

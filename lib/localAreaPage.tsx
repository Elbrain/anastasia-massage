import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import { areaServiceSchema, breadcrumbSchema, faqSchema } from '@/lib/schema'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { FaqList } from '@/components/ui/FaqList'
import { BookingCTA } from '@/components/home/BookingCTA'
import { siteConfig, whatsappUrl } from '@/lib/siteConfig'

export interface LocalAreaConfig {
  area: string
  slug: string
  postcodes: string
  intro: string
  body: string
  keywords: string[]
  faqs: { question: string; answer: string }[]
  /** Optional overrides — sensible defaults are generated from `area`. */
  h1?: string
  metaTitle?: string
  metaDescription?: string
  /** Breadcrumb / link label. Defaults to "Massage {area}". */
  label?: string
  /** "How to get here" rows shown in a facts box. */
  travel?: { from: string; how: string }[]
}

function labelOf(config: LocalAreaConfig) {
  return config.label ?? `Massage ${config.area}`
}

export function generateLocalMetadata(config: LocalAreaConfig) {
  const title = config.metaTitle ?? `Tantric & Sensual Massage ${config.area}`
  // Keep the full <title> within ~60 characters: long area names get the short brand.
  const tooLong = `${title} | ${siteConfig.titleBrand}`.length > 60

  return buildMetadata({
    title: tooLong ? `${title} | Anna` : title,
    absoluteTitle: tooLong,
    description:
      config.metaDescription ??
      `Sensual, tantric and nuru massage near ${config.area} with Anna. Private in-call studio in West Kensington (W14). From £80. Open daily 11:00–22:00.`,
    path: `/${config.slug}`,
    keywords: config.keywords,
  })
}

export function LocalAreaPage({ config }: { config: LocalAreaConfig }) {
  const label = labelOf(config)
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Massage London', href: '/massage-london' },
    { name: label, href: `/${config.slug}` },
  ])
  const faq = faqSchema(config.faqs)
  const service = areaServiceSchema({ area: config.area, slug: config.slug })
  const otherAreas = siteConfig.areas.filter((a) => a.slug !== config.slug)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-cream relative overflow-hidden">
        <div className="container-site">
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-brown-muted mb-6 flex-wrap">
              <Link href="/" className="hover:text-brown-dark transition-colors">Home</Link>
              <span>/</span>
              <Link href="/massage-london" className="hover:text-brown-dark transition-colors">Massage London</Link>
              <span>/</span>
              <span className="text-brown-dark">{label}</span>
            </nav>
            <p className="font-body text-xs tracking-[0.25em] uppercase text-rose mb-4">London · {config.postcodes}</p>
            <h1 className="font-display text-display-lg text-brown-dark mb-6">
              {config.h1 ?? `Sensual & Tantric Massage near ${config.area}`}
            </h1>
            <p className="text-lg text-brown leading-relaxed mb-8 max-w-xl">{config.intro}</p>
            <div className="flex flex-wrap gap-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
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
              <div className="prose-anastasia text-brown leading-relaxed" dangerouslySetInnerHTML={{ __html: config.body }} />

              {config.travel && config.travel.length > 0 && (
                <div className="mt-10 bg-cream rounded-3xl border border-rose/15 p-7">
                  <h2 className="font-display text-2xl text-brown-dark mb-5">Getting Here from {config.area}</h2>
                  <dl className="facts-list">
                    {config.travel.map((row) => (
                      <div key={row.from} className="contents">
                        <dt>{row.from}</dt>
                        <dd>{row.how}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="text-xs text-brown-muted mt-5">
                    The studio is close to West Kensington and Barons Court Underground stations. The exact
                    address is shared once your booking is confirmed.
                  </p>
                </div>
              )}

              {/* Price summary — the same facts on every area page */}
              <div className="mt-10">
                <h2 className="font-display text-2xl text-brown-dark mb-5">Treatments and Prices</h2>
                <div className="overflow-x-auto rounded-2xl border border-rose/15">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-cream text-brown-dark">
                      <tr>
                        <th scope="col" className="px-5 py-3 font-medium">Massage</th>
                        <th scope="col" className="px-5 py-3 font-medium">30 min</th>
                        <th scope="col" className="px-5 py-3 font-medium">60 min</th>
                      </tr>
                    </thead>
                    <tbody>
                      {siteConfig.services.map((s) => (
                        <tr key={s.slug} className="border-t border-rose/10">
                          <th scope="row" className="px-5 py-3 font-normal">
                            <Link href={`/services/${s.slug}`} className="text-rose-dark underline underline-offset-2 hover:text-brown-dark">
                              {s.name}
                            </Link>
                          </th>
                          <td className="px-5 py-3 text-brown">{s.price30 ? `£${s.price30}` : '—'}</td>
                          <td className="px-5 py-3 text-brown">£{s.price60}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-brown-muted mt-3">
                  Cash on the day. Longer and bespoke sessions on request — see the{' '}
                  <Link href="/pricing" className="underline underline-offset-2 hover:text-brown-dark">full price list</Link>.
                </p>
              </div>
            </div>

            <aside>
              <div className="sticky top-28 space-y-5">
                {/* Booking CTA */}
                <div className="bg-brown-dark rounded-3xl p-6 text-ivory">
                  <h2 className="font-display text-xl text-ivory mb-3">Massage near {config.area}</h2>
                  <p className="text-ivory/60 text-sm mb-5 leading-relaxed">
                    In-call studio in West Kensington (W14), easily reached from {config.area}. Available daily 11:00–22:00.
                  </p>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-rose w-full justify-center text-sm">
                    Book Now
                  </a>
                </div>

                {/* Key facts */}
                <div className="bg-cream rounded-3xl border border-rose/15 p-6">
                  <h2 className="font-display text-lg text-brown-dark mb-4">Key Facts</h2>
                  <dl className="facts-list">
                    <dt>Studio</dt>
                    <dd>West Kensington, W14</dd>
                    <dt>Type</dt>
                    <dd>In-call only</dd>
                    <dt>Hours</dt>
                    <dd>Daily 11:00–22:00</dd>
                    <dt>Prices</dt>
                    <dd>From £80</dd>
                    <dt>Payment</dt>
                    <dd>Cash</dd>
                  </dl>
                </div>

                {/* Contact */}
                <div className="bg-cream rounded-3xl border border-rose/15 p-6">
                  <h2 className="font-display text-lg text-brown-dark mb-4">Get in Touch</h2>
                  <div className="space-y-3">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-brown hover:text-rose transition-colors">
                      <span className="text-rose">→</span> WhatsApp
                    </a>
                    <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-sm text-brown hover:text-rose transition-colors">
                      <span className="text-rose">→</span> {siteConfig.phoneDisplay}
                    </a>
                    <Link href="/faq" className="flex items-center gap-2 text-sm text-brown hover:text-rose transition-colors">
                      <span className="text-rose">→</span> Frequently asked questions
                    </Link>
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
          <div className="text-center mb-10">
            <h2 className="font-display text-display-md text-brown-dark">Massage near {config.area}: FAQs</h2>
          </div>
          <FaqList faqs={config.faqs} tone="ivory" openFirst />
        </div>
      </section>

      {/* Other areas */}
      <section className="py-16 bg-ivory">
        <div className="container-site text-center">
          <AnimatedSection>
            <h2 className="font-display text-2xl text-brown-dark mb-3">Other Areas Close to the Studio</h2>
            <p className="text-sm text-brown mb-6">
              One private studio in West Kensington — convenient for much of West and Central London.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {otherAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/${area.slug}`}
                  className="px-5 py-2.5 bg-cream border border-rose/20 rounded-full text-sm text-brown hover:border-rose/50 hover:text-brown-dark transition-all duration-200"
                >
                  Massage {area.name}
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <BookingCTA />
    </>
  )
}

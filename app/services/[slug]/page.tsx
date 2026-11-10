import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { FaqList } from '@/components/ui/FaqList'
import { BookingCTA } from '@/components/home/BookingCTA'
import { siteConfig, getService, whatsappUrl } from '@/lib/siteConfig'
import { serviceDetails, getServiceDetail } from '@/lib/serviceDetails'
import { getPostsForService } from '@/lib/blog'

export const dynamicParams = false

export async function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const service = getServiceDetail(params.slug)
  if (!service) return {}

  return buildMetadata({
    title: service.metaTitle,
    description: service.description,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
  })
}

function priceLine(slug: string): string {
  const s = getService(slug)
  if (!s) return ''
  return s.price30 ? `£${s.price30} (30 min) · £${s.price60} (60 min)` : `£${s.price60} (60 min)`
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceDetail(params.slug)
  const summary = getService(params.slug)
  if (!service || !summary) notFound()

  const breadcrumb = breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: service.name, href: `/services/${service.slug}` },
  ])
  const faq = faqSchema(service.faqs)
  const schema = serviceSchema({
    name: service.name,
    description: service.description,
    slug: service.slug,
  })

  const relatedServices = service.relatedSlugs
    .map((slug) => ({ detail: serviceDetails[slug], summary: getService(slug) }))
    .filter((r) => r.detail && r.summary)

  const guides = await getPostsForService(service.slug, 4)
  const nearbyAreas = siteConfig.areas.slice(0, 8)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-cream relative overflow-hidden">
        <div className="container-site">
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-brown-muted mb-6 flex-wrap">
              <Link href="/" className="hover:text-brown-dark transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-brown-dark transition-colors">Services</Link>
              <span>/</span>
              <span className="text-brown-dark">{service.name}</span>
            </nav>
            <p className="font-body text-xs tracking-[0.25em] uppercase text-rose mb-4">
              {summary.duration} · {summary.price} · West Kensington W14
            </p>
            <h1 className="font-display text-display-lg text-brown-dark mb-4">{service.name} in London</h1>
            <p className="text-lg text-brown-muted italic mb-6">{service.tagline}</p>
            <p className="text-brown leading-relaxed mb-8 max-w-2xl">{service.intro}</p>
            <div className="flex flex-wrap gap-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book on WhatsApp
              </a>
              <Link href="/pricing" className="btn-secondary">See All Prices</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Body content */}
      <section className="section bg-ivory">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main body */}
            <div className="lg:col-span-2">
              <div
                className="prose-anastasia text-brown leading-relaxed"
                dangerouslySetInnerHTML={{ __html: service.body }}
              />
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-cream rounded-3xl border border-rose/15 p-7 lg:sticky lg:top-28">
                <h2 className="font-display text-xl text-brown-dark mb-4">{service.name} at a Glance</h2>
                <dl className="facts-list mb-6">
                  <dt>Price</dt>
                  <dd>{priceLine(service.slug)}</dd>
                  <dt>Duration</dt>
                  <dd>{summary.duration} · longer on request</dd>
                  <dt>Location</dt>
                  <dd>In-call · West Kensington, W14</dd>
                  <dt>Hours</dt>
                  <dd>Daily 11:00–22:00</dd>
                  <dt>Payment</dt>
                  <dd>Cash on the day</dd>
                  <dt>Booking</dt>
                  <dd>WhatsApp or phone</dd>
                </dl>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center block"
                >
                  Book on WhatsApp
                </a>
                <a href={`tel:${siteConfig.phone}`} className="btn-secondary w-full text-center block mt-3">
                  {siteConfig.phoneDisplay}
                </a>
              </div>

              <div className="bg-cream rounded-3xl border border-rose/15 p-7">
                <h2 className="font-display text-xl text-brown-dark mb-4">Benefits</h2>
                <ul className="space-y-2.5">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5 text-sm text-brown">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0 mt-1.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section bg-cream">
        <div className="container-site max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display text-display-md text-brown-dark">Who Is {service.name} For?</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.whoFor.map((item) => (
              <AnimatedSection key={item}>
                <div className="bg-ivory rounded-2xl border border-rose/15 p-5 flex items-start gap-3">
                  <span className="text-rose text-sm flex-shrink-0 mt-0.5">✦</span>
                  <span className="text-sm text-brown">{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-ivory">
        <div className="container-site max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-display-md text-brown-dark">{service.name}: Common Questions</h2>
          </div>
          <FaqList faqs={service.faqs} openFirst />
          <p className="text-center text-sm text-brown-muted mt-8">
            More answers on the <Link href="/faq" className="text-rose-dark underline underline-offset-2 hover:text-brown-dark">full FAQ page</Link>.
          </p>
        </div>
      </section>

      {/* Guides */}
      {guides.length > 0 && (
        <section className="section bg-cream">
          <div className="container-site max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-display-md text-brown-dark">Read More About {service.name}</h2>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {guides.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block h-full bg-ivory rounded-2xl border border-rose/15 p-6 card-hover"
                  >
                    <p className="font-display text-lg text-brown-dark leading-snug mb-2">{post.title}</p>
                    <p className="text-sm text-brown-muted line-clamp-2">{post.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="section bg-ivory">
          <div className="container-site">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="font-display text-display-md text-brown-dark">You Might Also Like</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedServices.map(({ detail, summary: s }, i) => (
                <AnimatedSection key={detail.slug} delay={(Math.min(i, 5) as 0 | 1 | 2 | 3 | 4 | 5)}>
                  <Link href={`/services/${detail.slug}`} className="service-card flex flex-col h-full group">
                    <h3 className="font-display text-xl text-brown-dark mb-2 group-hover:text-brown transition-colors">{detail.name}</h3>
                    <p className="text-sm text-brown-muted leading-relaxed line-clamp-2 mb-4">{detail.tagline}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-rose/20">
                      <span className="text-xs text-brown-muted">{s!.price}</span>
                      <span className="text-rose text-xs">→</span>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Areas */}
      <section className="py-14 bg-cream border-t border-rose/10">
        <div className="container-site text-center">
          <h2 className="font-display text-2xl text-brown-dark mb-3">{service.name} Near You</h2>
          <p className="text-sm text-brown mb-6 max-w-xl mx-auto">
            One private studio in West Kensington (W14), within easy reach of:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {nearbyAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/${area.slug}`}
                className="px-5 py-2.5 bg-ivory border border-rose/20 rounded-full text-sm text-brown hover:border-rose/50 hover:text-brown-dark transition-all duration-200"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  )
}

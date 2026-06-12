import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { BookingCTA } from '@/components/home/BookingCTA'
import { siteConfig } from '@/lib/siteConfig'

export const metadata: Metadata = buildMetadata({
  title: 'Sensual Massage London — Anna',
  description:
    'Sensual massage in London by Anna. Sensual, body-to-body, tantric and nuru massage at a private in-call studio in West Kensington (W14). Daily 11:00–22:00. Discreet and unhurried.',
  path: '/massage-london',
  keywords: ['sensual massage london', 'tantric massage london', 'nuru massage london', 'body to body massage london', 'erotic massage london'],
})

const faqs = [
  {
    question: 'What types of sensual massage do you offer in London?',
    answer:
      'Sensual, body-to-body, tantric, nuru, full body, relaxing, aromatherapy and hot stone massage — every session unhurried and tailored to you, at a private in-call studio in West Kensington (W14).',
  },
  {
    question: 'Where is the studio?',
    answer:
      "A private, discreet in-call studio in West Kensington (W14), easily reached from Kensington, Chelsea, Hammersmith, Fulham, Notting Hill and across West and Central London. The exact address is shared once your booking is confirmed.",
  },
  {
    question: 'What are the working hours?',
    answer: 'Available daily from 11:00 to 22:00, including weekends and bank holidays. Same-day appointments are often available.',
  },
  {
    question: 'How much does a sensual massage cost in London?',
    answer: 'Sessions start from £80 for 30 minutes and £120 for a full hour. Body-to-body, tantric and nuru are from £100 / £140. See the pricing page for the full menu.',
  },
  {
    question: 'Do you offer outcall in London?',
    answer: 'No — all sessions are in-call at my private, discreet studio in West Kensington (W14), for complete privacy and comfort.',
  },
]

const areas = [
  { href: '/massage-west-london', name: 'West London' },
  { href: '/massage-kensington', name: 'Kensington' },
  { href: '/massage-chelsea', name: 'Chelsea' },
  { href: '/massage-notting-hill', name: 'Notting Hill' },
  { href: '/massage-paddington', name: 'Paddington' },
  { href: '/massage-westminster', name: 'Westminster' },
  { href: '/massage-central-london', name: 'Central London' },
  { href: '/massage-near-hyde-park', name: 'Hyde Park Area' },
  { href: '/massage-near-me', name: 'Near Me' },
]

export default function MassageLondonPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Massage London', href: '/massage-london' },
  ])
  const faq = faqSchema(faqs)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-cream relative overflow-hidden">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="font-body text-xs tracking-[0.25em] uppercase text-rose mb-4">London · West Kensington W14</p>
            <h1 className="font-display text-display-lg text-brown-dark mb-6">
              Sensual Massage in London
            </h1>
            <p className="text-lg text-brown leading-relaxed mb-8 max-w-xl">
              Sensual, body-to-body, tantric and nuru massage by Anna —
              unhurried, intimate and entirely discreet. Available daily 11:00–22:00
              at a private in-call studio in West Kensington (W14).
            </p>
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

      {/* Services grid */}
      <section className="section bg-ivory">
        <div className="container-site">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-display-md text-brown-dark mb-4">Sensual Massage Services in London</h2>
            <p className="text-brown leading-relaxed">Every experience is unhurried and adapted to you — no templates, no rushing. Just slow, sensual relaxation in a warm, private setting.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {siteConfig.services.map((service, i) => (
              <AnimatedSection key={service.slug} delay={(Math.min(i % 4, 5) as 0 | 1 | 2 | 3 | 4 | 5)}>
                <Link href={`/services/${service.slug}`} className="service-card flex flex-col h-full group">
                  <h3 className="font-display text-xl text-brown-dark mb-2 group-hover:text-brown transition-colors">{service.name}</h3>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-rose/20">
                    <span className="text-xs text-brown-muted">{service.price}</span>
                    <span className="text-rose text-xs">→</span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="font-display text-display-md text-brown-dark mb-6">Why Choose Anna for Sensual Massage in London</h2>
              <div className="space-y-4 text-brown leading-relaxed">
                <p>London has countless massage options. This is for people who want something more intimate — a slow, sensual experience in a private, candlelit space, with complete discretion.</p>
                <p>Every session begins with a relaxed chat about what you're in the mood for, then unfolds entirely at your pace. No rushing, no judgement, no watching the clock.</p>
                <p>All sessions are in-call at my private studio in West Kensington (W14), easily reached from across West and Central London. Bookable daily from 11:00 to 22:00, including weekends.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/about" className="btn-secondary">Learn More</Link>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Book on WhatsApp
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Discreet & Private', icon: '✦' },
                  { label: 'Sensual Specialist', icon: '✦' },
                  { label: 'In-call · W14', icon: '✦' },
                  { label: 'Daily 11–22', icon: '✦' },
                  { label: 'West Kensington', icon: '✦' },
                  { label: 'Same Day Available', icon: '✦' },
                ].map((item) => (
                  <div key={item.label} className="bg-ivory rounded-2xl border border-rose/15 p-5 flex items-center gap-3">
                    <span className="text-rose text-sm">{item.icon}</span>
                    <span className="text-sm text-brown-dark font-body font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Local areas */}
      <section className="section bg-ivory">
        <div className="container-site">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-display-md text-brown-dark mb-4">Sensual Massage Across London</h2>
            <p className="text-brown">Based in West Kensington (W14) — convenient across West &amp; Central London.</p>
          </AnimatedSection>
          <div className="flex flex-wrap gap-3 justify-center">
            {areas.map((area) => (
              <Link key={area.href} href={area.href} className="px-5 py-2.5 bg-cream border border-rose/20 rounded-full text-sm text-brown hover:border-rose/50 hover:text-brown-dark transition-all duration-200">
                Massage {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-cream">
        <div className="container-site max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display text-display-md text-brown-dark">Frequently Asked Questions</h2>
          </AnimatedSection>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={faq.question} delay={(Math.min(i, 5) as 0 | 1 | 2 | 3 | 4 | 5)}>
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

import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { BookingCTA } from '@/components/home/BookingCTA'
import { siteConfig } from '@/lib/siteConfig'

export const metadata: Metadata = buildMetadata({
  title: 'Sensual Massage Prices London',
  description:
    'Transparent pricing for sensual, tantric, nuru and body-to-body massage in West Kensington, London. Discreet in-call studio (W14), daily 11:00–22:00.',
  path: '/pricing',
  keywords: ['sensual massage prices london', 'tantric massage cost london', 'nuru massage price london'],
})

const pricingTiers = [
  {
    name: '30 Minutes',
    tagline: 'The taster',
    description:
      'A shorter sensual introduction — perfect for a first visit or when time is short. A gentle way to experience the magic.',
    treatments: [
      { name: 'Sensual Massage', price: '£80' },
      { name: 'Relaxing Massage', price: '£80' },
      { name: 'Aromatherapy Massage', price: '£90' },
      { name: 'Body to Body Massage', price: '£100' },
      { name: 'Tantric Massage', price: '£100' },
      { name: 'Nuru Massage', price: '£100' },
    ],
    popular: false,
  },
  {
    name: '1 Hour',
    tagline: 'The signature session',
    description:
      'The most popular choice — unhurried time to fully relax, let go, and enjoy the experience as it slowly unfolds.',
    treatments: [
      { name: 'Sensual Massage', price: '£120' },
      { name: 'Relaxing Massage', price: '£120' },
      { name: 'Aromatherapy Massage', price: '£120' },
      { name: 'Full Body Massage', price: '£130' },
      { name: 'Hot Stone Massage', price: '£130' },
      { name: 'Body to Body Massage', price: '£140' },
      { name: 'Tantric Massage', price: '£140' },
      { name: 'Nuru Massage', price: '£140' },
    ],
    popular: true,
  },
  {
    name: 'Bespoke',
    tagline: 'Exclusive & made for you',
    description:
      'Longer sessions, multi-hour bookings and exclusive experiences tailored entirely to you. Arranged discreetly — prices discussed personally on WhatsApp.',
    treatments: [
      { name: 'Tailored experience', price: 'On request' },
      { name: 'Extended & multi-hour', price: 'On request' },
    ],
    popular: false,
  },
]

export default function PricingPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-cream relative overflow-hidden">
        <div className="container-site text-center max-w-3xl mx-auto">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-rose mb-4">Transparent Pricing</p>
          <h1 className="font-display text-display-lg text-brown-dark mb-6">
            Massage Prices in London
          </h1>
          <p className="text-brown leading-relaxed text-lg max-w-xl mx-auto">
            Honest, simple pricing. The final rate depends on the experience you
            choose — and bespoke, exclusive sessions can always be arranged just
            for you. Message me on WhatsApp to discuss.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="section bg-ivory">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {pricingTiers.map((tier, i) => (
              <AnimatedSection key={tier.name} delay={(i + 1) as 1 | 2 | 3}>
                <div className={`relative rounded-4xl border overflow-hidden h-full flex flex-col ${
                  tier.popular
                    ? 'bg-brown-dark border-brown-dark shadow-soft-lg'
                    : 'bg-cream border-rose/20 shadow-soft'
                }`}>
                  {tier.popular && (
                    <div className="bg-rose text-brown-dark text-xs font-body font-medium tracking-widest uppercase py-2 text-center">
                      Most Popular
                    </div>
                  )}

                  <div className="p-8 flex-1 flex flex-col">
                    <h2 className={`font-display text-2xl mb-1 ${tier.popular ? 'text-ivory' : 'text-brown-dark'}`}>
                      {tier.name}
                    </h2>
                    <p className={`font-body text-xs tracking-[0.15em] uppercase mb-4 ${tier.popular ? 'text-rose' : 'text-rose-dark'}`}>
                      {tier.tagline}
                    </p>
                    <p className={`font-body text-sm leading-relaxed mb-6 ${tier.popular ? 'text-ivory/70' : 'text-brown'}`}>
                      {tier.description}
                    </p>

                    <ul className="space-y-3 flex-1 mb-8">
                      {tier.treatments.map((t) => (
                        <li key={t.name} className={`flex items-center justify-between text-sm ${tier.popular ? 'text-ivory/80' : 'text-brown'}`}>
                          <span className="flex items-center gap-2">
                            <span className={`w-1 h-1 rounded-full flex-shrink-0 ${tier.popular ? 'bg-rose' : 'bg-rose'}`} />
                            {t.name}
                          </span>
                          <span className={`font-medium ${tier.popular ? 'text-rose-light' : 'text-brown-dark'}`}>
                            {t.price}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={tier.popular ? 'btn-rose w-full justify-center' : 'btn-secondary w-full justify-center'}
                    >
                      Book on WhatsApp
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Outcall note */}
          <AnimatedSection delay={4} className="mt-10">
            <div className="bg-cream rounded-3xl border border-rose/20 p-8 flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-rose/15 flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D8B5A6" strokeWidth="1.3">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <h3 className="font-display text-xl text-brown-dark mb-2">Your Visit</h3>
                <p className="text-brown text-sm leading-relaxed mb-2">
                  All sessions are in-call at my private, discreet studio in West Kensington (W14). The exact address and simple directions are shared once your booking is confirmed.
                </p>
                <p className="text-brown-muted text-xs">
                  Easy to reach from Kensington, Chelsea, Hammersmith, Fulham, Earl&apos;s Court and across West London — moments from West Kensington and Barons Court stations.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ for pricing */}
      <section className="section bg-cream">
        <div className="container-site max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-display-md text-brown-dark">Pricing Questions</h2>
          </AnimatedSection>
          <div className="space-y-6">
            {[
              { q: 'What payment methods do you accept?', a: 'Cash on the day, please, in a discreet envelope. Card and transfer are not accepted.' },
              { q: 'Is the price inclusive of everything?', a: 'Yes. The price covers the full session, warm oils or Nuru gel, fresh linens and a relaxed, unhurried experience. There are no surprise add-ons.' },
              { q: 'Do you see regular clients?', a: 'Of course — many clients return regularly, and I am always happy to look after you again. Just message me to arrange your next visit.' },
              { q: 'What is the cancellation policy?', a: 'Please give at least 24 hours notice to cancel or reschedule. Late cancellations may be subject to a fee. Life happens — just let me know as early as you can.' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={(Math.min(i + 1, 5) as 1 | 2 | 3 | 4 | 5)}>
                <div className="bg-ivory rounded-2xl border border-rose/15 p-6">
                  <h3 className="font-display text-lg text-brown-dark mb-2">{item.q}</h3>
                  <p className="text-brown text-sm leading-relaxed">{item.a}</p>
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

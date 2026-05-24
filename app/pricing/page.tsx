import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { BookingCTA } from '@/components/home/BookingCTA'
import { siteConfig } from '@/lib/siteConfig'

export const metadata: Metadata = buildMetadata({
  title: 'Massage Prices London',
  description:
    'Transparent massage therapy pricing in London. Swedish, deep tissue, sports, aromatherapy, hot stone and full body massage. In-call and outcall rates.',
  path: '/pricing',
  keywords: ['massage prices london', 'massage cost london', 'how much massage london'],
})

const pricingTiers = [
  {
    name: '30 Minutes',
    tagline: 'Quick targeted relief',
    description:
      'Focused work on one specific area — ideal for a tight back, sore shoulders, tired legs, or a foot treatment after a long day. No filler, just targeted therapy.',
    treatments: [
      { name: 'Back & Shoulders', price: '£50' },
      { name: 'Foot Massage', price: '£50' },
      { name: 'Relaxing / Swedish', price: '£50' },
      { name: 'Sports Massage', price: '£75' },
      { name: 'Head & Scalp', price: '£45' },
    ],
    popular: false,
  },
  {
    name: '60 Minutes',
    tagline: 'The essential session',
    description:
      'Perfect for targeting a specific area — back and shoulders, legs, or a full-body focus with lighter coverage. Enough time for a thorough treatment.',
    treatments: [
      { name: 'Relaxing / Swedish Massage', price: '£80' },
      { name: 'Deep Tissue Massage', price: '£90' },
      { name: 'Sports Massage', price: '£140' },
      { name: 'Aromatherapy Massage', price: '£90' },
      { name: 'Therapeutic Massage', price: '£85' },
      { name: 'Foot Massage', price: '£80' },
    ],
    popular: false,
  },
  {
    name: '90 Minutes',
    tagline: 'The recommended session',
    description:
      'The sweet spot. Enough time for a comprehensive full-body treatment, unhurried and thorough. Most clients find this the most satisfying option.',
    treatments: [
      { name: 'Relaxing / Swedish Massage', price: '£110' },
      { name: 'Deep Tissue Massage', price: '£120' },
      { name: 'Sports Massage', price: '£175' },
      { name: 'Aromatherapy Massage', price: '£120' },
      { name: 'Hot Stone Massage', price: '£130' },
      { name: 'Therapeutic Massage', price: '£115' },
      { name: 'Full Body Massage', price: '£115' },
    ],
    popular: true,
  },
  {
    name: '120 Minutes',
    tagline: 'The full experience',
    description:
      'Two full hours of focused bodywork. Comprehensive coverage, deep work, and the luxury of time. Ideal for a special occasion or a quarterly deep reset.',
    treatments: [
      { name: 'Relaxing / Swedish Massage', price: '£140' },
      { name: 'Deep Tissue Massage', price: '£155' },
      { name: 'Sports Massage', price: '£210' },
      { name: 'Aromatherapy Massage', price: '£155' },
      { name: 'Hot Stone Massage', price: '£165' },
      { name: 'Full Body Massage', price: '£150' },
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
            No hidden fees, no surprises. All prices include everything — no extras
            for different techniques, oils, or location within covered areas.
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

                    <Link
                      href="/booking"
                      className={tier.popular ? 'btn-rose w-full justify-center' : 'btn-secondary w-full justify-center'}
                    >
                      Book Now
                    </Link>
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
                <h3 className="font-display text-xl text-brown-dark mb-2">Outcall Supplement</h3>
                <p className="text-brown text-sm leading-relaxed mb-2">
                  For outcall sessions (where I travel to your home or hotel), a travel supplement applies depending on your location. Central London postcodes are typically £15–£25. Please enquire for your specific area.
                </p>
                <p className="text-brown-muted text-xs">
                  I cover Kensington, Chelsea, Westminster, Paddington, Mayfair, Knightsbridge, Belgravia, Notting Hill, Marylebone, Fitzrovia and surrounding areas.
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
              { q: 'What payment methods do you accept?', a: 'I accept cash and bank transfer (BACS). Please note I do not currently accept card payments.' },
              { q: 'Is the price inclusive of everything?', a: 'Yes. The price you see covers the full treatment, all oils, linens and equipment. There are no hidden extras for technique upgrades or oil selection.' },
              { q: 'Do you offer packages or discount for regular clients?', a: 'Yes, if you book a course of sessions (typically 5 or 10), I can offer a reduced rate. Please get in touch to discuss.' },
              { q: 'What is the cancellation policy?', a: 'I ask for 24 hours notice for cancellations or rescheduling. Late cancellations may be charged at 50% of the session rate.' },
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

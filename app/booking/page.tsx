import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import { siteConfig } from '@/lib/siteConfig'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export const metadata: Metadata = buildMetadata({
  title: 'Book a Sensual Massage in London',
  description:
    'Book a sensual, tantric, nuru or body-to-body massage with Anna in West Kensington, London. Message on WhatsApp or call. Daily 11:00–22:00. Discreet in-call studio (W14).',
  path: '/booking',
  keywords: ['book sensual massage london', 'tantric massage booking london', 'nuru massage london booking'],
})

const messageHints = [
  'The experience you have in mind (sensual, tantric, nuru, body to body…)',
  'Your preferred day and time',
  'Session length — 30 minutes, 1 hour, or bespoke',
  'Anything else you would like me to know',
]

const goodToKnow = [
  'Complete discretion & confidentiality',
  'In-call studio in West Kensington (W14)',
  'Exact address shared on booking',
  'Cash on the day',
  'Please be freshly showered',
]

export default function BookingPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Book', href: '/booking' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-cream">
        <div className="container-site text-center max-w-2xl mx-auto">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-rose mb-4">
            Arrange Your Session
          </p>
          <h1 className="font-display text-display-lg text-brown-dark mb-5">
            Book Your Experience
          </h1>
          <p className="text-brown leading-relaxed">
            The easiest way to book is a quick message on WhatsApp — tell me the
            experience you&apos;re after and the day and time that suit you. Everything
            stays completely private and discreet.
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section className="section bg-ivory">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Primary contact cards */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 bg-cream rounded-3xl border border-rose/15 p-7 card-hover group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="#16a34a">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-display text-2xl text-brown-dark mb-1">Message on WhatsApp</p>
                    <p className="font-body text-sm text-brown-muted">Quickest response · Usually same day · 100% discreet</p>
                  </div>
                </a>
              </AnimatedSection>

              <AnimatedSection delay={1}>
                <a
                  href="https://massagehub.uk/profile/sensual-massage-with-leya-in-west-london-leya"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-5 bg-cream rounded-3xl border border-rose/15 p-7 card-hover group"
                >
                  <div className="flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://massagehub.uk/api/badge/sensual-massage-with-leya-in-west-london-leya?style=dark"
                      alt="Featured on MassageHub.uk"
                      width={160}
                      height={49}
                      style={{border: '0', borderRadius: '10px', display: 'block'}}
                    />
                  </div>
                  <div>
                    <p className="font-display text-xl text-brown-dark mb-1">VIP Featured on MassageHub</p>
                    <p className="font-body text-sm text-brown-muted">Read more details and reviews.</p>
                  </div>
                </a>
              </AnimatedSection>

              <AnimatedSection delay={2}>
                <div className="bg-brown-dark rounded-3xl p-7 text-ivory">
                  <h3 className="font-display text-xl text-ivory mb-3">When you message, let me know:</h3>
                  <ul className="space-y-2.5 text-sm text-ivory/75">
                    {messageHints.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>

            {/* Info sidebar */}
            <div className="space-y-6">
              {/* Hours */}
              <AnimatedSection delay={1}>
                <div className="bg-cream rounded-3xl border border-rose/15 p-7">
                  <h3 className="font-display text-xl text-brown-dark mb-4">Available Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-brown-muted">Monday – Sunday</span>
                      <span className="text-rose-dark font-medium">11:00 – 22:00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-brown-muted">Bank Holidays</span>
                      <span className="text-rose-dark font-medium">11:00 – 22:00</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-rose/15">
                    <p className="text-xs text-brown-muted">Same-day appointments often available. Evening &amp; weekend slots fill fast.</p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Good to know */}
              <AnimatedSection delay={2}>
                <div className="bg-cream rounded-3xl border border-rose/15 p-7">
                  <h3 className="font-display text-xl text-brown-dark mb-4">Good to Know</h3>
                  <ul className="space-y-2.5 text-sm text-brown">
                    {goodToKnow.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-rose mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

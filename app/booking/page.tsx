import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import { BookingForm } from '@/components/booking/BookingForm'
import { siteConfig } from '@/lib/siteConfig'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export const metadata: Metadata = buildMetadata({
  title: 'Book a Massage in London',
  description:
    'Book your massage appointment with Anastasia in London. Available daily 11:00–22:00. Swedish, deep tissue, sports, aromatherapy and more. In-call and outcall.',
  path: '/booking',
  keywords: ['book massage london', 'massage appointment london', 'book massage therapist london'],
})

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
            Reserve Your Session
          </p>
          <h1 className="font-display text-display-lg text-brown-dark mb-5">
            Book an Appointment
          </h1>
          <p className="text-brown leading-relaxed">
            Fill in the form below and I&apos;ll confirm your booking via email or
            WhatsApp within a few hours. Prefer to chat first?{' '}
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose hover:text-rose-dark underline underline-offset-2 transition-colors"
            >
              Message me on WhatsApp
            </a>
            .
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="section bg-ivory">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <BookingForm />
            </div>

            {/* Info sidebar */}
            <div className="space-y-6">
              {/* Contact options */}
              <AnimatedSection delay={1}>
                <div className="bg-cream rounded-3xl border border-rose/15 p-7">
                  <h3 className="font-display text-xl text-brown-dark mb-5">Other Ways to Book</h3>
                  <div className="space-y-4">
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-10 h-10 rounded-2xl bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#16a34a">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-body text-sm font-medium text-brown-dark">WhatsApp</p>
                        <p className="font-body text-xs text-brown-muted">Quickest response · Usually same day</p>
                      </div>
                    </a>

                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-10 h-10 rounded-2xl bg-rose/15 flex items-center justify-center flex-shrink-0 group-hover:bg-rose/25 transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D8B5A6" strokeWidth="1.5">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.63a16 16 0 006.29 6.29l1.15-1.15a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-body text-sm font-medium text-brown-dark">{siteConfig.phoneDisplay}</p>
                        <p className="font-body text-xs text-brown-muted">Call during 11:00–22:00</p>
                      </div>
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Hours */}
              <AnimatedSection delay={2}>
                <div className="bg-brown-dark rounded-3xl p-7 text-ivory">
                  <h3 className="font-display text-xl text-ivory mb-4">Available Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-ivory/70">Monday – Sunday</span>
                      <span className="text-rose-light font-medium">11:00 – 22:00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-ivory/70">Bank Holidays</span>
                      <span className="text-rose-light font-medium">11:00 – 22:00</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-ivory/10">
                    <p className="text-xs text-ivory/50">Same-day bookings often available for weekday mornings. Evening &amp; weekend slots fill fast.</p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Policy */}
              <AnimatedSection delay={3}>
                <div className="bg-cream rounded-3xl border border-rose/15 p-7">
                  <h3 className="font-display text-xl text-brown-dark mb-4">Good to Know</h3>
                  <ul className="space-y-2.5 text-sm text-brown">
                    {[
                      'Confirmation sent within a few hours',
                      'Payment: cash or bank transfer',
                      '24h cancellation notice required',
                      'Outcall travel supplement applies',
                      'Outcall: bring your own space (2.5m × 2m)',
                    ].map((item) => (
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

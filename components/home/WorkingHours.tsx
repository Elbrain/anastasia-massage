import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { siteConfig } from '@/lib/siteConfig'

const days = [
  { day: 'Monday', hours: '11:00 – 22:00', available: true },
  { day: 'Tuesday', hours: '11:00 – 22:00', available: true },
  { day: 'Wednesday', hours: '11:00 – 22:00', available: true },
  { day: 'Thursday', hours: '11:00 – 22:00', available: true },
  { day: 'Friday', hours: '11:00 – 22:00', available: true },
  { day: 'Saturday', hours: '11:00 – 22:00', available: true },
  { day: 'Sunday', hours: '11:00 – 22:00', available: true },
]

export function WorkingHours() {
  return (
    <section className="section bg-ivory">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <AnimatedSection>
              <p className="font-body text-xs tracking-[0.25em] uppercase text-rose mb-4">
                Availability
              </p>
              <h2 className="font-display text-display-md text-brown-dark mb-6">
                Flexible Hours,<br />
                <span className="italic font-light">Every Day</span>
              </h2>
              <p className="text-brown leading-relaxed mb-8">
                I understand that life doesn&apos;t fit into a 9–5 window. That&apos;s why I&apos;m
                available every day of the week, including evenings, so you can fit your
                massage around work, family, or whatever your week looks like.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-cream border border-rose/15">
                  <div className="w-8 h-8 rounded-full bg-rose/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D8B5A6" strokeWidth="1.5">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-body text-sm font-medium text-brown-dark">In-call Studio</p>
                    <p className="font-body text-sm text-brown-muted">
                      West Kensington (W14). Exact address shared once your booking is confirmed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-cream border border-rose/15">
                  <div className="w-8 h-8 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A9AA95" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-body text-sm font-medium text-brown-dark">Easy to Reach</p>
                    <p className="font-body text-sm text-brown-muted">
                      Moments from West Kensington &amp; Barons Court stations, with easy links across West London.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={3}>
              <div className="flex flex-wrap gap-3">
                <Link href="/booking" className="btn-primary">
                  Check Availability
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  WhatsApp Me
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Hours table */}
          <AnimatedSection delay={1}>
            <div className="bg-cream rounded-4xl border border-rose/15 overflow-hidden shadow-soft">
              {/* Header */}
              <div className="bg-brown-dark px-6 py-5 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-rose animate-pulse" />
                <p className="font-display text-lg text-ivory">Opening Hours</p>
              </div>

              {/* Days */}
              <div className="divide-y divide-rose/10">
                {days.map((d) => (
                  <div
                    key={d.day}
                    className="flex items-center justify-between px-6 py-4 hover:bg-ivory/50 transition-colors duration-200"
                  >
                    <span className="font-body text-sm font-medium text-brown-dark">{d.day}</span>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                      <span className="font-body text-sm text-brown">{d.hours}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Note */}
              <div className="px-6 py-4 bg-rose/10 border-t border-rose/15">
                <p className="font-body text-xs text-brown-muted text-center">
                  Last booking accepted at 21:00 · Evening slots fill quickly
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { siteConfig } from '@/lib/siteConfig'

export function BookingCTA() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden bg-cream">
      {/* Background blobs */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-40"
        style={{ background: 'radial-gradient(circle, #E6C7BC 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-3xl opacity-30"
        style={{ background: 'radial-gradient(circle, #A9AA95 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          {/* Decorative */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="block w-12 h-px bg-rose" />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-rose">
              <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            </svg>
            <span className="block w-12 h-px bg-rose" />
          </div>

          <h2 className="font-display text-display-lg text-brown-dark mb-6">
            Ready to Feel the Difference?
          </h2>
          <p className="font-body text-lg text-brown leading-relaxed mb-10 max-w-xl mx-auto">
            Book your appointment online or reach out via WhatsApp to discuss your
            needs first. Same-day appointments are often available.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/booking" className="btn-primary text-base px-9 py-4">
              Book an Appointment
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base px-9 py-4"
            >
              WhatsApp First
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 text-brown hover:text-brown-dark transition-colors text-sm font-body"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.63a16 16 0 006.29 6.29l1.15-1.15a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              {siteConfig.phoneDisplay}
            </a>
          </div>

          {/* Trust micro-copy */}
          <p className="font-body text-xs text-brown-muted mt-8 tracking-wide">
            No commitment required · Simple enquiry form · Usually respond within the hour
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}

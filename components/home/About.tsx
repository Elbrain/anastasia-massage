import Image from 'next/image'
import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export function About() {
  return (
    <section className="section bg-cream overflow-hidden">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image column */}
          <AnimatedSection className="relative">
            <div className="relative rounded-4xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0 bg-ivory">
              {/* Placeholder image frame */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ivory to-cream">
                <Image
                  src="/logo-transparent.png"
                  alt="Anastasia — Certified Massage Therapist London"
                  width={420}
                  height={280}
                  className="object-contain"
                />
              </div>
              {/* Decorative corner */}
              <div
                className="absolute top-6 left-6 w-24 h-24 border border-rose/30 rounded-full"
                aria-hidden="true"
              />
              <div
                className="absolute bottom-6 right-6 w-16 h-16 border border-sage/30 rounded-full"
                aria-hidden="true"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 right-4 lg:right-auto lg:-right-6 bg-ivory rounded-3xl shadow-soft-lg px-6 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-rose/20 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D8B5A6" strokeWidth="1.5">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <p className="font-display text-sm text-brown-dark font-semibold">Certified</p>
                <p className="font-body text-xs text-brown-muted">Professional Therapist</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Text column */}
          <div>
            <AnimatedSection delay={1}>
              <p className="font-body text-xs tracking-[0.25em] uppercase text-rose mb-4">About Anastasia</p>
              <h2 className="font-display text-display-md text-brown-dark mb-6">
                A Dedicated Therapist,<br />
                <span className="italic font-light">Not a Chain</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <div className="space-y-4 mb-8 text-brown leading-relaxed">
                <p>
                  I&apos;m Anastasia, a certified massage therapist based in London. I started
                  practising because I believe that proper, attentive bodywork changes lives —
                  and that everyone deserves access to a therapist who genuinely listens.
                </p>
                <p>
                  Every session I offer is tailored to you. Whether you&apos;re dealing with chronic
                  back tension from desk work, recovering from sport, managing stress, or simply
                  wanting to restore some calm — I take the time to understand what your body
                  actually needs that day.
                </p>
                <p>
                  I work from a dedicated treatment room in Central London three days a week, and
                  offer home visits across the city the rest of the time. No receptionists, no
                  upsells, no noise — just focused, professional massage.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={3}>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { number: '500+', label: 'Sessions Completed' },
                  { number: '8+', label: 'Massage Specialisms' },
                  { number: '100%', label: 'Client Satisfaction' },
                  { number: '7 Days', label: 'Available Weekly' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-ivory rounded-2xl p-5 border border-rose/15">
                    <p className="font-display text-2xl text-brown-dark font-semibold">{stat.number}</p>
                    <p className="font-body text-xs text-brown-muted mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={4}>
              <Link href="/about" className="btn-secondary inline-flex">
                My Full Story
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}

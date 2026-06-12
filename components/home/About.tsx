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
            <div className="relative rounded-4xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0 bg-cream">
              {/* Anna portrait */}
              <Image
                src="/images/anastasia-portrait.jpg"
                alt="Anna — sensual massage therapist in London"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
              />
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
                <p className="font-display text-sm text-brown-dark font-semibold">Discreet</p>
                <p className="font-body text-xs text-brown-muted">Private & Confidential</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Text column */}
          <div>
            <AnimatedSection delay={1}>
              <p className="font-body text-xs tracking-[0.25em] uppercase text-rose mb-4">About Anna</p>
              <h2 className="font-display text-display-md text-brown-dark mb-6">
                An Intimate Experience,<br />
                <span className="italic font-light">Just for You</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={2}>
              <div className="space-y-4 mb-8 text-brown leading-relaxed">
                <p>
                  I&apos;m Anna, a sensual massage therapist based in London. I created this
                  space for people who want more than a routine treatment — a warm, unhurried
                  experience where you can completely let go.
                </p>
                <p>
                  Every session is tailored to you. Whether you long for the slow build of a
                  tantric massage, the closeness of body-to-body and nuru, or simply deep,
                  sensual relaxation — I take the time to understand exactly what you want, and
                  let the experience unfold at your pace.
                </p>
                <p>
                  I work from a private, candlelit in-call studio in West Kensington (W14).
                  No rush, no judgement, complete confidentiality — just you, beautifully
                  looked after, in a calm and discreet space.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={3}>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { number: '100%', label: 'Discreet & Private' },
                  { number: '4', label: 'Signature Rituals' },
                  { number: 'W14', label: 'West Kensington' },
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

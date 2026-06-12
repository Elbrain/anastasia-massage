import type { Metadata } from 'next'
import Image from 'next/image'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { BookingCTA } from '@/components/home/BookingCTA'
import { siteConfig } from '@/lib/siteConfig'

export const metadata: Metadata = buildMetadata({
  title: 'About Anna — Sensual Massage Therapist',
  description:
    'Meet Anna, a sensual massage therapist in West Kensington, London. Sensual, body-to-body, tantric and nuru massage in a warm, private and discreet in-call studio.',
  path: '/about',
  keywords: ['about anastasia massage', 'sensual massage therapist london', 'tantric massage west kensington'],
})

export default function AboutPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-body text-xs tracking-[0.25em] uppercase text-rose mb-4">My Story</p>
              <h1 className="font-display text-display-lg text-brown-dark mb-6">
                Anna
              </h1>
              <p className="font-display text-xl text-rose italic font-light mb-6">
                Sensual Massage Therapist · West Kensington
              </p>
              <p className="text-brown leading-relaxed text-lg mb-8">
                I believe that slow, sensual touch is one of the most restorative things
                you can give yourself — a chance to switch off, feel completely at ease,
                and simply be looked after. That&apos;s exactly what I create for every person
                who visits me.
              </p>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book on WhatsApp
              </a>
            </div>

            <div className="relative rounded-4xl overflow-hidden aspect-[4/5] bg-cream max-w-md mx-auto lg:mx-0">
              <Image
                src="/images/anastasia-portrait.jpg"
                alt="Anna — sensual massage therapist in West Kensington, London"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section bg-ivory">
        <div className="container-site max-w-4xl mx-auto">
          <div className="prose-anastasia">
            <AnimatedSection>
              <h2 className="font-display text-display-md text-brown-dark mb-6">A Little About Me</h2>
              <div className="space-y-5 text-brown leading-relaxed">
                <p>
                  I&apos;m Anna. I created this space for people who want more than a routine
                  treatment — a warm, unhurried, sensual experience where the outside world
                  falls away and you can completely let go.
                </p>
                <p>
                  Over the years I&apos;ve learned that the most memorable sessions are never
                  rushed. They begin slowly, build at your pace, and are guided entirely by what
                  you&apos;re in the mood for that day. There&apos;s no script, no clock-watching,
                  and absolutely no judgement.
                </p>
                <p>
                  I work for myself, from my own private studio, precisely so I can offer that:
                  something genuinely personal, discreet and made for you alone.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={1} className="mt-14">
              <h2 className="font-display text-display-md text-brown-dark mb-6">My Approach</h2>
              <div className="space-y-5 text-brown leading-relaxed">
                <p>
                  Everyone arrives in a different mood, so every session begins with a relaxed
                  chat about what you&apos;d like and how you&apos;re feeling. From there, I simply
                  pay attention — to your breath, your body, and the pace that feels right.
                </p>
                <p>
                  Whether you long for the slow build of a tantric massage, the closeness of
                  body-to-body and nuru, or simply deep, sensual relaxation, I take the time to
                  make it feel effortless and completely natural.
                </p>
                <p>
                  Above all, I want you to feel safe, comfortable and beautifully cared for from
                  the moment you arrive to the moment you leave.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="section bg-cream">
        <div className="container-site max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-display-md text-brown-dark">What to Expect</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: 'Completely Discreet',
                desc: 'Total privacy and confidentiality. A calm, private studio in West Kensington (W14) — no reception, no records, no questions.',
              },
              {
                title: 'Warm & Unhurried',
                desc: 'Candlelit, relaxed and never rushed. Your session is given the time it deserves, every time.',
              },
              {
                title: 'Attentive & Intuitive',
                desc: 'I listen and adapt to exactly what you want, so the whole experience feels natural, easy and made for you.',
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={(i + 1) as 1 | 2 | 3}>
                <div className="bg-ivory rounded-3xl border border-rose/15 p-7 text-center card-hover">
                  <div className="w-12 h-12 rounded-2xl bg-rose/15 flex items-center justify-center text-rose mx-auto mb-4">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                      <path d="M12 21s-6.7-4.35-9.1-8.5C1.3 9.6 2.6 6 6 6c2 0 3.2 1.2 4 2.3C10.8 7.2 12 6 14 6c3.4 0 4.7 3.6 3.1 6.5C18.7 16.65 12 21 12 21z"/>
                    </svg>
                  </div>
                  <h3 className="font-display text-lg text-brown-dark mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-brown leading-relaxed">{item.desc}</p>
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

import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const services = [
  {
    slug: 'sensual-massage',
    name: 'Sensual Massage',
    description:
      'Slow, full-body massage that awakens the senses. Warm oil, unhurried strokes and a deeply relaxing, intimate atmosphere designed to melt away tension and stress.',
    duration: '30 / 60 min',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 21s-6.7-4.35-9.1-8.5C1.3 9.6 2.6 6 6 6c2 0 3.2 1.2 4 2.3C10.8 7.2 12 6 14 6c3.4 0 4.7 3.6 3.1 6.5C18.7 16.65 12 21 12 21z"/>
      </svg>
    ),
  },
  {
    slug: 'body-to-body-massage',
    name: 'Body to Body Massage',
    description:
      'An intimate, skin-on-skin technique using the whole body to apply warm, gliding pressure. Profoundly relaxing, sensual and connecting from the very first touch.',
    duration: '30 / 60 min',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="9" cy="6" r="2.4"/>
        <circle cx="15" cy="6" r="2.4"/>
        <path d="M5 21c0-3.5 1.8-6 4-6s4 2.5 4 6"/>
        <path d="M11 21c0-3.5 1.8-6 4-6s4 2.5 4 6"/>
      </svg>
    ),
  },
  {
    slug: 'tantric-massage',
    name: 'Tantric Massage',
    description:
      'A slow, breath-led full-body ritual rooted in tantra. Builds and channels energy across the whole body for deep relaxation, presence and heightened sensation.',
    duration: '60 min',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 2C12 2 8 6 8 11a4 4 0 0 0 8 0c0-5-4-9-4-9z"/>
        <path d="M5 21c2-3 4.5-4 7-4s5 1 7 4"/>
      </svg>
    ),
  },
  {
    slug: 'nuru-massage',
    name: 'Nuru Massage',
    description:
      'The signature body-to-body experience using silky, odourless Nuru gel for an incredibly smooth, gliding sensation. Warm, slippery and unforgettable.',
    duration: '30 / 60 min',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 3c0 4-4 5-4 9a4 4 0 0 0 8 0c0-4-4-5-4-9z"/>
        <path d="M6 20c1.5-1.5 10.5-1.5 12 0"/>
      </svg>
    ),
  },
  {
    slug: 'full-body-massage',
    name: 'Full Body Massage',
    description:
      'Comprehensive, head-to-toe coverage with warm oil — back, shoulders, arms, legs and feet. A complete, sensual reset for body and mind.',
    duration: '60 min',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    slug: 'relaxing-massage',
    name: 'Relaxing Massage',
    description:
      'Gentle, nurturing massage designed purely for relaxation. Light to medium pressure, soothing movements and a calm, candlelit atmosphere.',
    duration: '30 / 60 min',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" y1="9" x2="9.01" y2="9"/>
        <line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
  },
  {
    slug: 'aromatherapy-massage',
    name: 'Aromatherapy Massage',
    description:
      'Sensual massage enhanced with warm, aromatic oils chosen for the mood — calming, uplifting or warming. A treatment for the senses as much as the body.',
    duration: '30 / 60 min',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
  },
  {
    slug: 'hot-stone-massage',
    name: 'Hot Stone Massage',
    description:
      'Smooth, heated stones glide across the body to spread deep, melting warmth. Grounding, comforting and beautifully relaxing.',
    duration: '60 min',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
]

export function Services() {
  return (
    <section className="section bg-ivory" id="services">
      <div className="container-site">
        {/* Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-rose mb-4">
            What I Offer
          </p>
          <h2 className="font-display text-display-md text-brown-dark mb-5">
            Sensual Massage Menu
          </h2>
          <p className="text-brown leading-relaxed">
            Every session is unhurried and adapted to you. From sensual and tantric to
            nuru and body-to-body — we begin slowly, and let the experience unfold.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <AnimatedSection key={service.slug} delay={(Math.min(i % 4, 5) as 0 | 1 | 2 | 3 | 4 | 5)}>
              <Link href={`/services/${service.slug}`} className="service-card flex flex-col h-full group">
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-rose/15 flex items-center justify-center text-rose mb-5 transition-colors duration-300 group-hover:bg-rose/25">
                  {service.icon}
                </div>

                {/* Name */}
                <h3 className="font-display text-xl text-brown-dark mb-3 group-hover:text-brown transition-colors">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-brown leading-relaxed flex-1 mb-5">
                  {service.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-rose/20">
                  <span className="font-body text-xs text-brown-muted">{service.duration}</span>
                  <span className="text-rose text-xs flex items-center gap-1 font-medium">
                    Learn more
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center mt-12">
          <Link href="/services" className="btn-secondary inline-flex">
            View All Services
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}

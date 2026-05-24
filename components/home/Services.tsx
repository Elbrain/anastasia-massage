import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const services = [
  {
    slug: 'swedish-massage',
    name: 'Swedish Massage',
    description:
      'The classic relaxation treatment. Long, flowing strokes melt away muscle tension and promote deep rest. Perfect as an introduction to massage or a regular self-care ritual.',
    duration: '60 / 90 / 120 min',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    slug: 'deep-tissue-massage',
    name: 'Deep Tissue Massage',
    description:
      'Targeted pressure on the deeper muscle layers to release chronic tension, knots and postural holding patterns. Ideal for desk workers, athletes, and anyone carrying stress in their body.',
    duration: '60 / 90 / 120 min',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
  },
  {
    slug: 'sports-massage',
    name: 'Sports Massage',
    description:
      'Designed for active bodies. Combines deep tissue work, stretching and trigger point therapy to enhance recovery, prevent injury, and prepare muscles for performance.',
    duration: '60 / 90 min',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
  {
    slug: 'aromatherapy-massage',
    name: 'Aromatherapy Massage',
    description:
      'Swedish massage enhanced with carefully chosen essential oils. Each blend is selected for your needs — calming lavender, energising citrus, or muscle-soothing eucalyptus.',
    duration: '60 / 90 / 120 min',
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
      'Heated basalt stones are placed on key points and used in massage strokes to penetrate deep heat into the muscles. Deeply relaxing, warming, and grounding.',
    duration: '90 / 120 min',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    slug: 'therapeutic-massage',
    name: 'Therapeutic Massage',
    description:
      'A clinical approach targeting specific conditions — back pain, headaches, sciatica, frozen shoulder. Combines assessment with targeted soft tissue work to address the root cause.',
    duration: '60 / 90 min',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    slug: 'relaxing-massage',
    name: 'Relaxing Massage',
    description:
      'Gentle, nurturing massage designed purely for relaxation and stress relief. Light to medium pressure, soothing movements, and a deeply calming atmosphere.',
    duration: '60 / 90 / 120 min',
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
    slug: 'full-body-massage',
    name: 'Full Body Massage',
    description:
      'A comprehensive session covering the back, shoulders, arms, legs, and feet — leaving no area of tension unaddressed. The ultimate reset for body and mind.',
    duration: '90 / 120 min',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
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
            Massage Services
          </h2>
          <p className="text-brown leading-relaxed">
            Every treatment is adapted to your body and needs on the day. Nothing is
            copy-pasted from a menu — I listen first, then work accordingly.
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
            View All Services & Pricing
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}

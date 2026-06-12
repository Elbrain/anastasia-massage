import { AnimatedSection } from '@/components/ui/AnimatedSection'

const testimonials = [
  {
    name: 'James T.',
    location: 'Chelsea',
    rating: 5,
    text: "Easily the most relaxing experience I've had in London. Anna is warm, completely discreet, and never once made me feel rushed. The whole evening felt unhurried and indulgent. I've already booked again.",
    service: 'Sensual Massage',
  },
  {
    name: 'M. R.',
    location: 'Mayfair',
    rating: 5,
    text: "I was a little nervous beforehand, but Anna put me at ease instantly. The body-to-body massage was incredible — calm, sensual and beautifully done. Discretion was perfect from start to finish.",
    service: 'Body to Body Massage',
  },
  {
    name: 'D. K.',
    location: 'Kensington',
    rating: 5,
    text: "My first tantric massage and I genuinely didn't want it to end. The breathing, the slow pace, the candlelit room — I left feeling completely present and more relaxed than I have in years.",
    service: 'Tantric Massage',
  },
  {
    name: 'Alex P.',
    location: 'Paddington',
    rating: 5,
    text: "Booked an outcall to my hotel. Anna arrived exactly on time, set everything up beautifully, and was utterly professional and discreet. The nuru massage was unlike anything I've experienced.",
    service: 'Nuru Massage',
  },
  {
    name: 'S. L.',
    location: 'Notting Hill',
    rating: 5,
    text: "The atmosphere she creates is something special — warm, private and so calming. I went for pure relaxation and left floating. Cannot recommend the experience highly enough.",
    service: 'Relaxing Massage',
  },
  {
    name: 'T. W.',
    location: 'Westminster',
    rating: 5,
    text: "I travel a lot and have tried many places. The care, warmth and attention Anna brings is on another level entirely. Completely discreet and genuinely unforgettable.",
    service: 'Full Body Massage',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#D8B5A6">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="section bg-cream overflow-hidden">
      <div className="container-site">
        {/* Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-rose mb-4">
            Client Stories
          </p>
          <h2 className="font-display text-display-md text-brown-dark mb-5">
            What My Clients Say
          </h2>
          <p className="text-brown leading-relaxed">
            These are real words from real people, not marketing copy. Nothing I could
            write would describe the work better than they can.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={(Math.min(i % 3 + 1, 5) as 1 | 2 | 3 | 4 | 5)}>
              <div className="bg-ivory rounded-3xl border border-rose/15 p-7 flex flex-col h-full card-hover shadow-soft">
                {/* Top */}
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-rose/20 flex items-center justify-center mb-3">
                      <span className="font-display text-lg text-rose font-medium">
                        {t.name.charAt(0)}
                      </span>
                    </div>
                    <p className="font-body text-sm font-semibold text-brown-dark">{t.name}</p>
                    <p className="font-body text-xs text-brown-muted">{t.location}</p>
                  </div>
                  <Stars count={t.rating} />
                </div>

                {/* Quote */}
                <blockquote className="font-body text-sm text-brown leading-relaxed flex-1 italic">
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                {/* Service tag */}
                <div className="mt-5 pt-4 border-t border-rose/15">
                  <span className="inline-block text-xs font-body text-rose bg-rose/10 px-3 py-1 rounded-full">
                    {t.service}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

import { AnimatedSection } from '@/components/ui/AnimatedSection'

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Kensington',
    rating: 5,
    text: "I've had a lot of massages over the years, but Anastasia is something else entirely. She actually listened to what was going on with my neck and tailored the whole session around it. I left feeling like a completely different person.",
    service: 'Deep Tissue Massage',
  },
  {
    name: 'James T.',
    location: 'Chelsea',
    rating: 5,
    text: "Booked an outcall after a particularly brutal week at work. Anastasia arrived on time, set everything up quietly and professionally, and delivered one of the best sports massages I've had. My back felt genuinely better for days afterwards.",
    service: 'Sports Massage',
  },
  {
    name: 'Elena P.',
    location: 'Notting Hill',
    rating: 5,
    text: "I was nervous about trying an independent therapist but the whole experience was completely professional and reassuring. The aromatherapy treatment was incredible — I fell asleep on the table, which never happens to me.",
    service: 'Aromatherapy Massage',
  },
  {
    name: 'David R.',
    location: 'Westminster',
    rating: 5,
    text: "I see Anastasia monthly now for my deep tissue work. She has a remarkable ability to find exactly where the tension is sitting and work through it methodically. I genuinely think it's improved my quality of life.",
    service: 'Monthly Deep Tissue',
  },
  {
    name: 'Claire B.',
    location: 'Paddington',
    rating: 5,
    text: "Had the hot stone treatment as a birthday treat and it was absolutely divine. The warmth of the stones, combined with the calm environment Anastasia creates, made it two of the most relaxing hours I've spent in years.",
    service: 'Hot Stone Massage',
  },
  {
    name: 'Michael K.',
    location: 'Mayfair',
    rating: 5,
    text: "I travel frequently and have had massages in hotels across the world. The level of care and technique Anastasia brings to her work genuinely rivals the best places I've been. Exceptional.",
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

import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, serviceSchema } from '@/lib/schema'
import { siteConfig } from '@/lib/siteConfig'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { BookingCTA } from '@/components/home/BookingCTA'

export const metadata: Metadata = buildMetadata({
  title: 'Sensual Massage Services',
  description:
    'Sensual massage services in West Kensington, London: sensual, body-to-body, tantric, nuru, full body, hot stone and more. Discreet in-call studio (W14), daily 11:00–22:00.',
  path: '/services',
  keywords: ['sensual massage london', 'tantric massage london', 'nuru massage london', 'body to body massage london'],
})

const services = [
  {
    slug: 'sensual-massage',
    name: 'Sensual Massage',
    shortDesc: 'Slow, full-body massage that awakens the senses. Warm oil, unhurried touch, deep relaxation.',
    fullDesc:
      "Sensual massage is about slowing right down. Using warm oil and long, flowing, full-body strokes, the treatment quiets a busy mind and gently awakens the senses. There is no rush and no script — we begin softly, your breathing settles, and the tension you have been carrying simply melts away. It is the perfect introduction to sensual bodywork and one of the most soothing, restorative experiences you can give yourself.",
    benefits: ['Deep relaxation', 'Heightened awareness of the body', 'Release of stress and tension', 'A blissful, unhurried escape'],
    duration: '30 / 60 min',
    price: 'From £80',
    who: 'Anyone wanting to unwind, switch off, and enjoy slow, sensual full-body relaxation',
  },
  {
    slug: 'body-to-body-massage',
    name: 'Body to Body Massage',
    shortDesc: 'Intimate, skin-on-skin technique using the whole body for warm, gliding pressure.',
    fullDesc:
      "Body to body massage is one of the most intimate and immersive experiences available. Rather than using the hands alone, I use my whole body to apply warm, gliding pressure — creating a closeness and connection that hands simply cannot replicate. Every movement is slow, deliberate and deeply relaxing. It is sensual, comforting and wonderfully grounding from the very first touch.",
    benefits: ['Profound sense of connection', 'Full-body relaxation', 'Melts away tension and stress', 'Warm, intimate and immersive'],
    duration: '30 / 60 min',
    price: 'From £100',
    who: 'Those who want a closer, more intimate experience than a traditional massage',
  },
  {
    slug: 'tantric-massage',
    name: 'Tantric Massage',
    shortDesc: 'A slow, breath-led full-body ritual that builds and channels energy across the body.',
    fullDesc:
      "Tantric massage is a slow, mindful ritual rooted in ancient tantra. Guided by breath and presence, the treatment works with the whole body to build, move and channel energy — creating waves of relaxation and heightened sensation. It is far more than a massage; it is a meditative journey that leaves you feeling deeply present, alive and beautifully relaxed. Best enjoyed unhurried, over 90 minutes or more.",
    benefits: ['Deep presence and relaxation', 'Breath-led, full-body energy', 'Heightened sensation and awareness', 'A meditative, restorative experience'],
    duration: '60 min',
    price: 'From £100',
    who: 'Those drawn to a slower, more spiritual and full-body sensual experience',
  },
  {
    slug: 'nuru-massage',
    name: 'Nuru Massage',
    shortDesc: 'The signature body-to-body experience using silky, odourless Nuru gel.',
    fullDesc:
      "Nuru is the ultimate body-to-body experience. Originating in Japan, it uses a special odourless, colourless gel made from seaweed that becomes incredibly silky and slippery when warmed. The result is an unbelievably smooth, gliding sensation as the whole body is used to massage yours. Warm, slippery and utterly indulgent, a nuru massage is a one-of-a-kind experience you will not forget.",
    benefits: ['Incredibly smooth, gliding sensation', 'The most immersive body-to-body experience', 'Skin-softening Nuru gel', 'Warm, indulgent and unforgettable'],
    duration: '30 / 60 min',
    price: 'From £100',
    who: 'Those wanting the most immersive and indulgent sensual experience on the menu',
  },
  {
    slug: 'full-body-massage',
    name: 'Full Body Massage',
    shortDesc: 'Comprehensive, head-to-toe coverage with warm oil. A complete sensual reset.',
    fullDesc:
      "A full body massage is exactly what it sounds like — slow, warm-oil attention from the shoulders to the feet, leaving no area untouched. It is the ultimate reset: a complete, sensual journey across the whole body that leaves you glowing, relaxed and fully unwound. Combine it with any of the sensual techniques for a longer, more indulgent experience.",
    benefits: ['Complete head-to-toe relaxation', 'Warm oil and flowing strokes', 'A full sensual reset', 'Deeply restorative'],
    duration: '60 min',
    price: 'From £130',
    who: 'Anyone wanting thorough, unhurried full-body relaxation',
  },
  {
    slug: 'relaxing-massage',
    name: 'Relaxing Massage',
    shortDesc: 'Pure, unhurried relaxation. Gentle pressure, soothing strokes, complete calm.',
    fullDesc:
      "Sometimes you simply need to be looked after, supported, and allowed to let go completely. Relaxing massage uses gentle to medium pressure, slow rhythmic strokes and a calm, candlelit atmosphere to quiet the nervous system and melt away stress. It is the gentlest treatment on the menu and a beautiful way to ease into sensual massage for the very first time.",
    benefits: ['Immediate stress relief', 'Calms the nervous system', 'Improved sleep', 'Soft, soothing and gentle'],
    duration: '30 / 60 min',
    price: 'From £80',
    who: 'Anyone feeling stressed or overwhelmed, and first-timers wanting a gentle start',
  },
  {
    slug: 'aromatherapy-massage',
    name: 'Aromatherapy Massage',
    shortDesc: 'Sensual massage enhanced with warm, aromatic oils chosen for the mood.',
    fullDesc:
      "Aromatherapy massage adds another layer to the senses. Warm, aromatic oils are chosen for the mood you are in — calming and floral, warm and spicy, or soft and uplifting. As the scent fills the room and the oil glides across the skin, the experience becomes as much about the senses as the body. Deeply relaxing, mood-lifting and beautifully indulgent.",
    benefits: ['Multi-sensory relaxation', 'Mood-lifting aromatic oils', 'Soft, nourished skin', 'Warm and indulgent'],
    duration: '30 / 60 min',
    price: 'From £90',
    who: 'Those who love scent and want a richer, multi-sensory experience',
  },
  {
    slug: 'hot-stone-massage',
    name: 'Hot Stone Massage',
    shortDesc: 'Smooth, heated stones glide across the body to spread deep, melting warmth.',
    fullDesc:
      "There is nothing quite like the weight and warmth of smooth heated stones gliding across the body. The deep, radiant heat melts tension away and spreads a comforting, grounding warmth from head to toe. Combined with sensual full-body strokes, hot stone massage is profoundly relaxing — especially in the cooler months, or any time you want to feel completely warmed and cared for.",
    benefits: ['Deep, melting warmth', 'Comforting and grounding', 'Eases tension effortlessly', 'Beautifully relaxing'],
    duration: '60 min',
    price: 'From £130',
    who: 'Those who love warmth and want a cosy, deeply comforting experience',
  },
]

export default function ServicesPage() {
  const schemas = services.map((s) =>
    serviceSchema({ name: s.name, description: s.shortDesc, slug: s.slug })
  )
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
  ])

  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-cream relative overflow-hidden">
        <div className="container-site text-center max-w-3xl mx-auto">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-rose mb-4">What I Offer</p>
          <h1 className="font-display text-display-lg text-brown-dark mb-6">
            Sensual Massage in London
          </h1>
          <p className="text-brown leading-relaxed text-lg">
            A menu of slow, sensual experiences — from sensual and tantric to nuru and
            body-to-body. Each one unhurried and adapted to you, at my discreet in-call
            studio in West Kensington. Available daily from 11:00 to 22:00.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-ivory">
        <div className="container-site space-y-10">
          {services.map((service, i) => (
            <AnimatedSection key={service.slug}>
              <div className="bg-cream rounded-4xl border border-rose/15 overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-3 ${i % 2 !== 0 ? 'lg:direction-rtl' : ''}`}>
                  {/* Info */}
                  <div className="lg:col-span-2 p-8 lg:p-12">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h2 className="font-display text-display-md text-brown-dark">{service.name}</h2>
                      <span className="font-body text-sm text-rose font-medium whitespace-nowrap mt-2">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-brown leading-relaxed mb-6">{service.fullDesc}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                      <div>
                        <p className="font-body text-xs tracking-[0.2em] uppercase text-brown-muted mb-3">Benefits</p>
                        <ul className="space-y-1.5">
                          {service.benefits.map((b) => (
                            <li key={b} className="flex items-center gap-2 text-sm text-brown">
                              <span className="w-1 h-1 rounded-full bg-rose flex-shrink-0" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-body text-xs tracking-[0.2em] uppercase text-brown-muted mb-3">Best For</p>
                        <p className="text-sm text-brown leading-relaxed">{service.who}</p>
                        <p className="font-body text-xs tracking-[0.2em] uppercase text-brown-muted mt-4 mb-1">Duration</p>
                        <p className="text-sm text-brown">{service.duration}</p>
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex"
                    >
                      Book {service.name}
                    </a>
                  </div>

                  {/* Decorative side */}
                  <div className="hidden lg:flex items-center justify-center bg-ivory/50 p-12 border-l border-rose/10">
                    <div className="text-center">
                      <p className="font-display text-5xl text-brown-dark/10 font-semibold mb-2">
                        {String(i + 1).padStart(2, '0')}
                      </p>
                      <div className="w-12 h-px bg-rose/30 mx-auto mb-4" />
                      <p className="font-body text-xs tracking-[0.2em] uppercase text-brown-muted">
                        {service.duration.split('/')[0].trim()}
                      </p>
                      <p className="font-display text-2xl text-rose font-medium mt-1">{service.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <BookingCTA />
    </>
  )
}

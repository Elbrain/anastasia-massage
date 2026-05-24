import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, serviceSchema } from '@/lib/schema'
import { siteConfig } from '@/lib/siteConfig'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { BookingCTA } from '@/components/home/BookingCTA'

export const metadata: Metadata = buildMetadata({
  title: 'Massage Services',
  description:
    'Professional massage services in London: Swedish, deep tissue, sports, aromatherapy, hot stone and more. In-call and outcall available daily 11:00–22:00.',
  path: '/services',
  keywords: ['massage services london', 'types of massage london', 'professional massage treatments'],
})

const services = [
  {
    slug: 'swedish-massage',
    name: 'Swedish Massage',
    shortDesc: 'Classic relaxation. Long, flowing strokes that melt tension and promote deep rest.',
    fullDesc:
      "Swedish massage is the foundation of Western massage therapy — and for good reason. Using long gliding strokes (effleurage), kneading (petrissage), circular movements, vibration, and tapping, Swedish massage improves circulation, eases muscle tension, and promotes a profound sense of relaxation. It's the ideal treatment if you're new to massage, dealing with general stress, or simply want to give your body a proper reset.",
    benefits: ['Reduces stress hormones', 'Improves circulation', 'Eases muscle tension', 'Promotes better sleep'],
    duration: '60 / 90 / 120 min',
    price: 'From £80',
    who: 'Everyone, especially first-timers and those dealing with stress or fatigue',
  },
  {
    slug: 'deep-tissue-massage',
    name: 'Deep Tissue Massage',
    shortDesc: 'Targeted pressure into deeper muscle layers. For chronic tension, knots, and postural issues.',
    fullDesc:
      "Deep tissue massage goes below the surface. Using slow, deliberate strokes and deep finger pressure, I work through the top layers of muscle to reach the deeper tissues where chronic tension, adhesions, and knots accumulate. It's particularly effective for desk workers carrying shoulder and neck tension, people with recurring back pain, and anyone whose body has learned to hold stress in a specific pattern.",
    benefits: ['Breaks down scar tissue', 'Releases chronic tension', 'Reduces inflammation', 'Improves posture'],
    duration: '60 / 90 / 120 min',
    price: 'From £90',
    who: 'Office workers, chronic pain sufferers, people with postural issues',
  },
  {
    slug: 'sports-massage',
    name: 'Sports Massage',
    shortDesc: 'Performance and recovery. Combines deep tissue, stretching and trigger point work.',
    fullDesc:
      "Sports massage isn't just for athletes. Yes, it's designed around the demands of physical training — but the techniques are just as useful for anyone whose body is under physical strain. I combine deep tissue work with passive stretching, trigger point therapy, and myofascial release to address the specific muscles under load. Whether you're preparing for a marathon, recovering from a gym session, or dealing with an overuse injury, sports massage addresses the root cause.",
    benefits: ['Faster recovery', 'Injury prevention', 'Improved flexibility', 'Reduces delayed onset muscle soreness'],
    duration: '60 / 90 min',
    price: 'From £85',
    who: 'Athletes, gym-goers, runners, anyone with repetitive strain or overuse injuries',
  },
  {
    slug: 'aromatherapy-massage',
    name: 'Aromatherapy Massage',
    shortDesc: 'Swedish technique enhanced with therapeutic essential oils chosen for your needs.',
    fullDesc:
      "Aromatherapy massage combines the physical benefits of Swedish massage with the proven therapeutic effects of essential oils. I select the blend based on what you need — calming lavender and chamomile for stress and sleep issues; invigorating citrus and peppermint for fatigue; deep-heating eucalyptus and rosemary for muscle tension. The oils are diluted in a carrier and absorbed through both the skin and inhalation, working on the body and nervous system simultaneously.",
    benefits: ['Enhanced relaxation', 'Mood elevation', 'Skin nourishment', 'Hormonal balance'],
    duration: '60 / 90 / 120 min',
    price: 'From £90',
    who: 'Those dealing with stress, anxiety, hormonal imbalance, poor sleep or skin concerns',
  },
  {
    slug: 'hot-stone-massage',
    name: 'Hot Stone Massage',
    shortDesc: 'Heated basalt stones placed on key points and used in massage strokes for deep warmth.',
    fullDesc:
      "There's nothing quite like the weight and warmth of hot stones on tired muscles. I use smooth basalt lava stones, heated to the perfect temperature, both as placement stones on key meridian points and as extension tools during massage strokes. The heat penetrates deep into the muscle tissue — reaching places that hands alone cannot — and allows for a deeper release with less pressure. The result is profoundly grounding and restorative.",
    benefits: ['Deep muscle relaxation', 'Improved circulation', 'Stress relief', 'Grounding and calming'],
    duration: '90 / 120 min',
    price: 'From £100',
    who: 'Those seeking deep relaxation; particularly good in colder months or for people who feel the cold',
  },
  {
    slug: 'therapeutic-massage',
    name: 'Therapeutic Massage',
    shortDesc: 'Clinical, targeted work for specific conditions. Assessment-led, outcome-focused.',
    fullDesc:
      "Therapeutic massage takes a clinical approach to soft tissue work. I begin with a brief assessment — range of motion, postural observation, palpation — to identify what's actually happening in the body, then design the session around addressing it. This might involve myofascial release for restricted fascia, neuromuscular techniques for trigger points, joint mobilisation, or deep tissue work depending on what's indicated. It's particularly suited for persistent conditions that general massage hasn't resolved.",
    benefits: ['Addresses root causes', 'Pain reduction', 'Improved range of motion', 'Condition-specific outcomes'],
    duration: '60 / 90 min',
    price: 'From £85',
    who: 'Chronic back pain, frozen shoulder, sciatica, tension headaches, repetitive strain injury',
  },
  {
    slug: 'relaxing-massage',
    name: 'Relaxing Massage',
    shortDesc: 'Pure, unhurried relaxation. Gentle pressure, soothing strokes, complete calm.',
    fullDesc:
      "Sometimes you don't need clinical precision — you need to be held, supported, and allowed to let go completely. Relaxing massage uses gentle to medium pressure, slow rhythmic strokes, and a carefully calm environment to switch off your nervous system's fight-or-flight response and activate the parasympathetic rest state. It's deeply beneficial for anxiety, burnout, and overwhelm — and it's also simply one of the most pleasurable things you can do for yourself.",
    benefits: ['Immediate stress relief', 'Lower cortisol levels', 'Improved sleep', 'Mental clarity'],
    duration: '60 / 90 / 120 min',
    price: 'From £80',
    who: 'Anyone experiencing stress, anxiety, burnout, or anyone who simply needs to recharge',
  },
  {
    slug: 'full-body-massage',
    name: 'Full Body Massage',
    shortDesc: 'Comprehensive coverage. Back, shoulders, arms, legs, feet — nothing left unaddressed.',
    fullDesc:
      "A full body massage is exactly what it sounds like: a thorough, comprehensive treatment that works through every major muscle group from the scalp to the feet. It's the ultimate reset — ideal before a holiday, after a particularly stressful period, or simply as a regular maintenance treatment to keep your body in good condition. The approach combines Swedish, deep tissue, and stretching techniques, adapted to what each area of your body needs on the day.",
    benefits: ['Total body reset', 'Complete muscle relaxation', 'Improved body awareness', 'Holistic wellbeing'],
    duration: '90 / 120 min',
    price: 'From £90',
    who: 'Anyone wanting a comprehensive treatment; great as a regular maintenance session',
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
            Massage Services in London
          </h1>
          <p className="text-brown leading-relaxed text-lg">
            Eight distinct treatments, each one adapted to your body and needs on the day.
            Available daily from 11:00 to 22:00, in-call and outcall across London.
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

                    <Link href="/booking" className="btn-primary inline-flex">
                      Book {service.name}
                    </Link>
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

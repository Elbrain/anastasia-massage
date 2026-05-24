import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema, localBusinessSchema } from '@/lib/schema'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { BookingCTA } from '@/components/home/BookingCTA'
import { siteConfig } from '@/lib/siteConfig'

export const metadata: Metadata = buildMetadata({
  title: 'Massage London — Professional Massage Therapist',
  description:
    'Professional massage therapy in London by certified therapist Anastasia. Swedish, deep tissue, sports, aromatherapy and more. In-call and outcall, daily 11:00–22:00.',
  path: '/massage-london',
  keywords: ['massage london', 'massage therapist london', 'professional massage london', 'massage in london'],
})

const faqs = [
  {
    question: 'What types of massage are available in London?',
    answer:
      'Anastasia offers Swedish, deep tissue, sports, aromatherapy, hot stone, therapeutic, relaxing, and full body massage in London. All treatments are available as in-call or outcall.',
  },
  {
    question: 'What areas of London does Anastasia cover?',
    answer:
      'Anastasia works from a treatment room in Central London and offers outcall massage across Kensington, Chelsea, Westminster, Paddington, Mayfair, Notting Hill, Knightsbridge, South Kensington, Belgravia, Marylebone, and surrounding areas.',
  },
  {
    question: 'What are the working hours for massage in London?',
    answer: 'Anastasia is available daily from 11:00 to 22:00, including weekends and bank holidays.',
  },
  {
    question: 'How much does a massage cost in London?',
    answer: 'Sessions start from £80 for 60 minutes. Prices vary by treatment type and duration. View the full pricing page for details.',
  },
  {
    question: 'Can a massage therapist come to my home in London?',
    answer: 'Yes. Outcall massage is available across Central and West London. The therapist brings all equipment and sets up a professional treatment space at your home or hotel.',
  },
]

const areas = [
  { href: '/massage-kensington', name: 'Kensington' },
  { href: '/massage-chelsea', name: 'Chelsea' },
  { href: '/massage-paddington', name: 'Paddington' },
  { href: '/massage-westminster', name: 'Westminster' },
  { href: '/massage-west-london', name: 'West London' },
  { href: '/massage-central-london', name: 'Central London' },
  { href: '/massage-near-me', name: 'Near Me' },
  { href: '/massage-near-hyde-park', name: 'Hyde Park Area' },
  { href: '/massage-notting-hill', name: 'Notting Hill' },
]

export default function MassageLondonPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Massage London', href: '/massage-london' },
  ])
  const faq = faqSchema(faqs)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-cream relative overflow-hidden">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="font-body text-xs tracking-[0.25em] uppercase text-rose mb-4">London, UK</p>
            <h1 className="font-display text-display-lg text-brown-dark mb-6">
              Massage in London
            </h1>
            <p className="text-lg text-brown leading-relaxed mb-8 max-w-xl">
              Professional massage therapy by certified therapist Anastasia.
              Swedish, deep tissue, sports, aromatherapy and more — available
              daily 11:00–22:00, in-call and outcall across the city.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/booking" className="btn-primary">Book Appointment</Link>
              <Link href="/services" className="btn-secondary">View Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section bg-ivory">
        <div className="container-site">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-display-md text-brown-dark mb-4">Massage Services in London</h2>
            <p className="text-brown leading-relaxed">Professional treatments adapted to your individual needs. No templates, no rushing — proper therapeutic massage in London.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {siteConfig.services.map((service, i) => (
              <AnimatedSection key={service.slug} delay={(Math.min(i % 4, 5) as 0 | 1 | 2 | 3 | 4 | 5)}>
                <Link href={`/services/${service.slug}`} className="service-card flex flex-col h-full group">
                  <h3 className="font-display text-xl text-brown-dark mb-2 group-hover:text-brown transition-colors">{service.name}</h3>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-rose/20">
                    <span className="text-xs text-brown-muted">{service.price}</span>
                    <span className="text-rose text-xs">→</span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="font-display text-display-md text-brown-dark mb-6">Why Choose Anastasia for Massage in London</h2>
              <div className="space-y-4 text-brown leading-relaxed">
                <p>London has thousands of massage options. Most are adequate. Anastasia's work is designed for people who want something better — genuinely personalised, outcome-focused massage from a certified professional.</p>
                <p>Every session begins with a consultation. I adapt my approach to your body and your needs on the day. No template treatments, no rushing to finish on the clock.</p>
                <p>Available for in-call at a Central London treatment room, or outcall across the city. Bookable daily from 11:00 to 22:00, including weekends.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/about" className="btn-secondary">Learn More</Link>
                <Link href="/booking" className="btn-primary">Book Now</Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Certified Therapist', icon: '✦' },
                  { label: 'Fully Insured', icon: '✦' },
                  { label: 'In-call & Outcall', icon: '✦' },
                  { label: 'Daily 11–22', icon: '✦' },
                  { label: 'Central London', icon: '✦' },
                  { label: 'Same Day Available', icon: '✦' },
                ].map((item) => (
                  <div key={item.label} className="bg-ivory rounded-2xl border border-rose/15 p-5 flex items-center gap-3">
                    <span className="text-rose text-sm">{item.icon}</span>
                    <span className="text-sm text-brown-dark font-body font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Local areas */}
      <section className="section bg-ivory">
        <div className="container-site">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-display-md text-brown-dark mb-4">Massage Across London</h2>
            <p className="text-brown">In-call in Central London. Outcall across a wide coverage area.</p>
          </AnimatedSection>
          <div className="flex flex-wrap gap-3 justify-center">
            {areas.map((area) => (
              <Link key={area.href} href={area.href} className="px-5 py-2.5 bg-cream border border-rose/20 rounded-full text-sm text-brown hover:border-rose/50 hover:text-brown-dark transition-all duration-200">
                Massage {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-cream">
        <div className="container-site max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display text-display-md text-brown-dark">Frequently Asked Questions</h2>
          </AnimatedSection>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={(Math.min(i + 1, 5) as 1 | 2 | 3 | 4 | 5)}>
                <div className="bg-ivory rounded-2xl border border-rose/15 p-6">
                  <h3 className="font-display text-lg text-brown-dark mb-2">{faq.question}</h3>
                  <p className="text-brown text-sm leading-relaxed">{faq.answer}</p>
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

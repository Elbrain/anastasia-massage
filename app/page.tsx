import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { About } from '@/components/home/About'
import { Services } from '@/components/home/Services'
import { WhyChoose } from '@/components/home/WhyChoose'
import { WorkingHours } from '@/components/home/WorkingHours'
import { Testimonials } from '@/components/home/Testimonials'
import { FAQ } from '@/components/home/FAQ'
import { BookingCTA } from '@/components/home/BookingCTA'
import { faqSchema } from '@/lib/schema'
import { siteConfig } from '@/lib/siteConfig'

export const metadata: Metadata = {
  title: 'Anna — Sensual Massage London',
  description:
    'Private sensual massage in West Kensington, London by Anna. Sensual, body-to-body, tantric and nuru massage in a warm, discreet in-call studio (W14). Daily 11:00–22:00.',
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: 'Anna — Sensual Massage London',
    description:
      'Private sensual, tantric, nuru and body-to-body massage in London. Warm, discreet and unhurried. Available 7 days a week.',
    url: siteConfig.url,
    type: 'website',
  },
}

const homeFaqs = [
  {
    question: 'What types of sensual massage do you offer in London?',
    answer:
      'I offer sensual, body-to-body, tantric, nuru, full body, relaxing, aromatherapy and hot stone massage in London. Every session is unhurried and adapted to you, in a discreet in-call studio in West Kensington (W14).',
  },
  {
    question: 'Are you available for same-day appointments in London?',
    answer:
      'Yes, same-day appointments are often available, particularly for weekday sessions. Evening and weekend slots fill up faster, so messaging ahead is recommended for those.',
  },
  {
    question: 'Where is your studio?',
    answer:
      "My private in-call studio is in West Kensington (W14), easy to reach from Kensington, Chelsea, Hammersmith, Fulham, Earl's Court and across West London. The exact address is shared once your booking is confirmed.",
  },
  {
    question: 'Is everything discreet and private?',
    answer: 'Completely. Every session is private and confidential — no reception, no records. I work daily from 11:00 to 22:00, including weekends.',
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(homeFaqs)),
        }}
      />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <WorkingHours />
      <Testimonials />
      <FAQ />
      <BookingCTA />
    </>
  )
}

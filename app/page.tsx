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
  title: 'Anastasia — Certified Massage Therapist London',
  description:
    'Professional massage therapy in London by Anastasia. Swedish, deep tissue, sports, aromatherapy and more. Available daily 11:00–22:00. In-call and outcall.',
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: 'Anastasia — Certified Massage Therapist London',
    description:
      'Private massage therapy in London. Book Swedish, deep tissue, sports or aromatherapy massage. Available 7 days a week.',
    url: siteConfig.url,
    type: 'website',
  },
}

const homeFaqs = [
  {
    question: 'What types of massage do you offer in London?',
    answer:
      'I offer Swedish, deep tissue, sports, aromatherapy, hot stone, therapeutic, relaxing, and full body massage in London. All treatments are available as in-call or outcall.',
  },
  {
    question: 'Are you available for same-day massage in London?',
    answer:
      'Yes, same-day bookings are often available, particularly for weekday sessions. Evening and weekend slots fill up faster, so booking ahead is recommended for those.',
  },
  {
    question: 'Do you offer outcall massage in London?',
    answer:
      'Yes, I offer outcall massage across Central and West London, including Kensington, Chelsea, Westminster, Paddington, Mayfair, Notting Hill and surrounding areas.',
  },
  {
    question: 'What are your working hours?',
    answer: 'I work daily from 11:00 to 22:00, including weekends and bank holidays.',
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

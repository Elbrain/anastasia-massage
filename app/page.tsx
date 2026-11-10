import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { About } from '@/components/home/About'
import { Services } from '@/components/home/Services'
import { WhyChoose } from '@/components/home/WhyChoose'
import { WorkingHours } from '@/components/home/WorkingHours'
import { Testimonials } from '@/components/home/Testimonials'
import { FAQ } from '@/components/home/FAQ'
import { BookingCTA } from '@/components/home/BookingCTA'
import { AreasServed } from '@/components/home/AreasServed'
import { faqSchema } from '@/lib/schema'
import { homeFaqs } from '@/lib/faqs'
import { siteConfig } from '@/lib/siteConfig'

// Title, description and social tags for the home page come from the root
// layout defaults (app/layout.tsx) — only the canonical URL is set here.
export const metadata: Metadata = {
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function HomePage() {
  return (
    <>
      {/* FAQ structured data mirrors the visible FAQ section exactly */}
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
      <AreasServed />
      <Testimonials />
      <FAQ />
      <BookingCTA />
    </>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { BookingCTA } from '@/components/home/BookingCTA'

export const metadata: Metadata = buildMetadata({
  title: 'About Anastasia — Certified Massage Therapist',
  description:
    "Meet Anastasia, London's certified massage therapist. Specialising in Swedish, deep tissue, sports and aromatherapy massage. Learn about her training, approach and philosophy.",
  path: '/about',
  keywords: ['about anastasia massage', 'certified massage therapist london', 'professional massage therapist'],
})

export default function AboutPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-body text-xs tracking-[0.25em] uppercase text-rose mb-4">My Story</p>
              <h1 className="font-display text-display-lg text-brown-dark mb-6">
                Anastasia
              </h1>
              <p className="font-display text-xl text-rose italic font-light mb-6">
                Certified Massage Therapist, London
              </p>
              <p className="text-brown leading-relaxed text-lg mb-8">
                I believe that skilled, attentive bodywork is one of the most effective things
                you can do for your physical and mental health — and that it should be accessible
                to anyone who needs it, without fuss.
              </p>
              <Link href="/booking" className="btn-primary">
                Book With Me
              </Link>
            </div>

            <div className="relative rounded-4xl overflow-hidden aspect-[4/5] bg-ivory max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ivory to-cream">
                <Image
                  src="/logo.png"
                  alt="Anastasia — Certified Massage Therapist London"
                  width={280}
                  height={280}
                  className="object-contain opacity-50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section bg-ivory">
        <div className="container-site max-w-4xl mx-auto">
          <div className="prose-anastasia">
            <AnimatedSection>
              <h2 className="font-display text-display-md text-brown-dark mb-6">How I Got Here</h2>
              <div className="space-y-5 text-brown leading-relaxed">
                <p>
                  I trained in massage therapy because I&apos;d experienced firsthand how transformative
                  good bodywork could be. I&apos;d had a period of severe back pain in my mid-twenties —
                  the kind that makes you dread sitting down, struggle to sleep, and eventually start
                  cancelling plans. Physio helped, but it was a skilled massage therapist who finally
                  unravelled the tension pattern behind it. I was hooked.
                </p>
                <p>
                  After completing my professional certification, I spent several years working alongside
                  other therapists, learning different approaches and building experience across
                  a wide range of client presentations — from professional athletes managing training
                  load to executives dealing with the physical toll of high-stress careers, to people
                  simply wanting a consistent self-care practice.
                </p>
                <p>
                  I set up independently because I wanted to offer the kind of service I&apos;d always
                  wished was more available: private, unhurried, properly tailored, and honest. No
                  upsells, no pressure, no generic treatments applied by rote.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={1} className="mt-14">
              <h2 className="font-display text-display-md text-brown-dark mb-6">My Approach</h2>
              <div className="space-y-5 text-brown leading-relaxed">
                <p>
                  Every body is different. The same holding patterns, the same chronic tension, the same
                  injury rarely presents exactly the same way in two different people. That&apos;s why
                  I begin every new client relationship with a proper conversation — about what&apos;s
                  bothering you, what you&apos;ve tried, what hasn&apos;t worked, and what you&apos;re
                  hoping to achieve.
                </p>
                <p>
                  I then design each session around what I find when I actually put my hands on you.
                  Tissue doesn&apos;t lie. It tells me where the real tension is sitting, even if that&apos;s
                  not where you thought it was. My job is to listen — to you, and to your body — and
                  respond accordingly.
                </p>
                <p>
                  I work across the full range of massage modalities, but I&apos;m not attached to any
                  one technique. Swedish, deep tissue, myofascial release, trigger point therapy,
                  sports massage, hot stones — I use whatever the situation calls for, and I&apos;m
                  always honest if I think another approach might serve you better.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section bg-cream">
        <div className="container-site max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-display text-display-md text-brown-dark">Training & Credentials</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: 'Certified Therapist',
                desc: 'Fully certified in massage therapy with professional qualification recognised across the UK.',
              },
              {
                title: 'Fully Insured',
                desc: 'Holds full professional indemnity and public liability insurance for all treatments.',
              },
              {
                title: 'Continuing Development',
                desc: 'Regularly updates skills and techniques through ongoing professional development.',
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={(i + 1) as 1 | 2 | 3}>
                <div className="bg-ivory rounded-3xl border border-rose/15 p-7 text-center card-hover">
                  <div className="w-12 h-12 rounded-2xl bg-rose/15 flex items-center justify-center text-rose mx-auto mb-4">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                      <circle cx="12" cy="8" r="4"/>
                      <path d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2"/>
                    </svg>
                  </div>
                  <h3 className="font-display text-lg text-brown-dark mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-brown leading-relaxed">{item.desc}</p>
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

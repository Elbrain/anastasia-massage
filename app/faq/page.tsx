import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import { FaqList } from '@/components/ui/FaqList'
import { BookingCTA } from '@/components/home/BookingCTA'
import { faqGroups, allFaqs } from '@/lib/faqs'
import { siteConfig, whatsappUrl } from '@/lib/siteConfig'

export const metadata: Metadata = buildMetadata({
  title: 'FAQ — Booking, Prices & Etiquette',
  description:
    'Answers to common questions about sensual, tantric and nuru massage with Anna in West Kensington, London W14: booking, prices, location, opening hours, what to expect and discretion.',
  path: '/faq',
  keywords: ['sensual massage faq', 'tantric massage questions', 'massage west kensington booking', 'tantric massage what to expect'],
})

export default function FaqPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'FAQ', href: '/faq' },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(allFaqs)) }} />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-cream">
        <div className="container-site max-w-3xl mx-auto text-center">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-brown-muted mb-6 justify-center">
            <Link href="/" className="hover:text-brown-dark transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brown-dark">FAQ</span>
          </nav>
          <p className="font-body text-xs tracking-[0.25em] uppercase text-rose mb-4">Questions &amp; Answers</p>
          <h1 className="font-display text-display-lg text-brown-dark mb-6">Frequently Asked Questions</h1>
          <p className="text-brown leading-relaxed text-lg max-w-2xl mx-auto">
            Everything people ask before booking a sensual, tantric or nuru massage with me in
            West Kensington — in plain, honest answers.
          </p>
        </div>
      </section>

      {/* The short version */}
      <section className="py-14 bg-ivory border-b border-rose/10">
        <div className="container-site max-w-3xl mx-auto">
          <h2 className="font-display text-2xl text-brown-dark mb-6 text-center">The Short Version</h2>
          <dl className="facts-list bg-cream rounded-3xl border border-rose/15 p-7">
            <dt>Who</dt>
            <dd>Anna — an independent sensual massage therapist</dd>
            <dt>Where</dt>
            <dd>Private in-call studio, West Kensington, London W14</dd>
            <dt>Nearest Tube</dt>
            <dd>West Kensington · Barons Court</dd>
            <dt>Hours</dt>
            <dd>Every day, 11:00–22:00</dd>
            <dt>Massages</dt>
            <dd>Sensual · tantric · nuru · body to body · full body · relaxing · aromatherapy · hot stone</dd>
            <dt>Prices</dt>
            <dd>From £80 (30 min) and £120 (60 min) — <Link href="/pricing" className="underline underline-offset-2">full price list</Link></dd>
            <dt>Payment</dt>
            <dd>Cash on the day</dd>
            <dt>Booking</dt>
            <dd>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">WhatsApp</a>{' '}
              or call {siteConfig.phoneDisplay}
            </dd>
            <dt>Outcall</dt>
            <dd>Not offered — in-call only</dd>
          </dl>
        </div>
      </section>

      {/* Grouped FAQs */}
      <section className="section bg-ivory">
        <div className="container-site max-w-3xl mx-auto space-y-14">
          {faqGroups.map((group) => (
            <div key={group.id} id={group.id} className="scroll-mt-28">
              <h2 className="font-display text-display-md text-brown-dark mb-6">{group.title}</h2>
              <FaqList faqs={group.faqs} />
            </div>
          ))}

          <div className="bg-cream rounded-3xl border border-rose/15 p-8 text-center">
            <h2 className="font-display text-2xl text-brown-dark mb-3">Still Have a Question?</h2>
            <p className="text-brown text-sm leading-relaxed mb-6 max-w-lg mx-auto">
              Message me on WhatsApp — I usually reply quickly, and there is never any pressure to book.
              You might also find these helpful:
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-6">
              <Link href="/services" className="px-5 py-2.5 bg-ivory border border-rose/20 rounded-full text-sm text-brown hover:border-rose/50">Massage menu</Link>
              <Link href="/pricing" className="px-5 py-2.5 bg-ivory border border-rose/20 rounded-full text-sm text-brown hover:border-rose/50">Prices</Link>
              <Link href="/blog/first-sensual-massage-london-what-to-expect" className="px-5 py-2.5 bg-ivory border border-rose/20 rounded-full text-sm text-brown hover:border-rose/50">First-visit guide</Link>
              <Link href="/blog/erotic-massage-types-tantric-nuru-naturist-london" className="px-5 py-2.5 bg-ivory border border-rose/20 rounded-full text-sm text-brown hover:border-rose/50">Massage types explained</Link>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  )
}

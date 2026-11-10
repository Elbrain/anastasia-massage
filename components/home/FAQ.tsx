import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { FaqList } from '@/components/ui/FaqList'
import { homeFaqs } from '@/lib/faqs'
import { whatsappUrl } from '@/lib/siteConfig'

export function FAQ() {
  return (
    <section className="section bg-ivory" id="faq">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <AnimatedSection>
              <p className="font-body text-xs tracking-[0.25em] uppercase text-rose mb-4">
                Questions & Answers
              </p>
              <h2 className="font-display text-display-md text-brown-dark mb-6">
                Frequently Asked<br />
                <span className="italic font-light">Questions</span>
              </h2>
              <p className="text-brown leading-relaxed mb-8">
                Everything you need to know before booking. If your question isn&apos;t
                here, just send me a message on WhatsApp — I usually reply quickly.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-rose inline-flex"
                >
                  Ask on WhatsApp
                </a>
                <Link href="/faq" className="btn-secondary inline-flex">
                  All questions
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — accordion (all answers are in the HTML) */}
          <AnimatedSection delay={1}>
            <FaqList faqs={homeFaqs} openFirst />
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

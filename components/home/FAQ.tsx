'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const faqs = [
  {
    question: 'Do you offer both in-call and outcall massage in London?',
    answer:
      "Yes. I work from a private treatment room in Central London three days per week (address shared upon booking), and I offer outcall sessions — where I travel to your home or hotel — the remaining days. Both options are available daily from 11:00 to 22:00, including weekends.",
  },
  {
    question: 'What areas of London do you cover for outcall?',
    answer:
      "I regularly cover Kensington, Chelsea, Westminster, Paddington, Notting Hill, Mayfair, Knightsbridge, Belgravia, South Kensington, Bayswater, Marylebone, Fitzrovia, Soho, and the wider Central and West London areas. For other locations, please get in touch and I'll do my best to accommodate.",
  },
  {
    question: 'What do I need to prepare for an outcall massage?',
    answer:
      "Very little. I bring everything needed — a professional portable massage table, clean linens, oils and towels. All I ask is that you have a space large enough to set the table up (roughly 2.5m x 2m), and that the room is warm. That's it.",
  },
  {
    question: 'How long is a typical session, and what does it include?',
    answer:
      "Sessions are available in 60, 90 and 120-minute formats depending on the treatment. Every session includes a brief consultation beforehand (so I understand your needs and any contraindications), the massage itself, and a few minutes at the end to let you return to the room gently. I never rush you off the table.",
  },
  {
    question: "I've never had a professional massage before. What should I expect?",
    answer:
      "First time? That's completely fine — most of my first-time clients tell me afterwards they wish they'd done it sooner. We'll chat briefly before your session about what you're hoping to get from it, I'll explain what will happen, and you're in control throughout. There's no pressure, and you can always ask me to adjust pressure, focus on a different area, or stop at any time.",
  },
  {
    question: 'How far in advance should I book?',
    answer:
      "For weekday sessions, I can often accommodate bookings at fairly short notice (sometimes the same day). Weekend and evening slots tend to be in higher demand, so booking a few days ahead is advisable for those. For ongoing weekly or fortnightly clients, I can reserve a regular slot.",
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      "I ask for at least 24 hours' notice for cancellations or rescheduling. Cancellations with less than 24 hours' notice may be subject to a cancellation fee. I completely understand that life happens — if something urgent comes up, please message me as soon as possible and we'll sort something out.",
  },
  {
    question: 'Can massage help with my specific issue (back pain, stress, sports recovery)?',
    answer:
      "Massage therapy is genuinely effective for a wide range of conditions — chronic back and neck pain, tension headaches, sports injury recovery, stress and anxiety, poor sleep, and postural problems are among the most common things I help with. During our initial consultation I'll let you know honestly whether I think massage is likely to help, and what approach would work best.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section bg-ivory" id="faq">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="sticky top-28">
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
              <a
                href={`https://wa.me/447700000000`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-rose inline-flex"
              >
                Ask on WhatsApp
              </a>
            </AnimatedSection>
          </div>

          {/* Right — accordion */}
          <AnimatedSection delay={1}>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-cream border border-rose/15 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={openIndex === i}
                  >
                    <span className="font-display text-base text-brown-dark font-medium leading-snug">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 text-rose">
                      {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  {openIndex === i && (
                    <div className="px-5 pb-5">
                      <p className="font-body text-sm text-brown leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

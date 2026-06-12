'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const faqs = [
  {
    question: 'Where are you based?',
    answer:
      "I work from a private, discreet in-call studio in West Kensington (W14). The exact address is shared once your booking is confirmed. I'm available daily from 11:00 to 22:00, including weekends.",
  },
  {
    question: 'Which areas are you convenient for?',
    answer:
      "My West Kensington (W14) studio is easy to reach from Kensington, Chelsea, Hammersmith, Fulham, Earl's Court, Olympia and Shepherd's Bush, and across West and Central London. West Kensington and Barons Court Underground stations are both close by.",
  },
  {
    question: 'What can I expect when I arrive?',
    answer:
      "My studio is private, clean, warm and completely discreet — everything is taken care of, so all you need to do is arrive freshly showered and relax. The exact address and simple directions are shared once your booking is confirmed.",
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
    question: 'Which massage should I choose?',
    answer:
      "If you're new to sensual massage, a sensual or relaxing massage is the perfect introduction. Tantric massage suits those who want a slower, breath-led full-body ritual, while nuru and body-to-body are the most intimate and immersive of all. Not sure? Just message me on WhatsApp and I'll happily talk you through the options and help you choose.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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
              <a
                href={`https://wa.me/447768164518`}
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

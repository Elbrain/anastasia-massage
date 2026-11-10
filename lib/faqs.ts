/**
 * Single source of truth for the site's general FAQs.
 *
 * The SAME data feeds the visible FAQ sections, the FAQPage structured data
 * and /llms.txt — so what visitors, Google and AI assistants read always match.
 * Keep every answer self-contained: it should make sense quoted on its own.
 */

export interface Faq {
  question: string
  answer: string
}

export interface FaqGroup {
  id: string
  title: string
  faqs: Faq[]
}

export const faqGroups: FaqGroup[] = [
  {
    id: 'booking',
    title: 'Booking & Availability',
    faqs: [
      {
        question: 'How do I book a massage with Anna?',
        answer:
          'The quickest way to book is a WhatsApp message to +44 7452 327 767, or you can call the same number. Tell me which massage you would like, your preferred day and time, and whether you want 30 minutes, an hour or something longer. I confirm discreetly, usually the same day.',
      },
      {
        question: 'What are your opening hours?',
        answer:
          'I am available every day from 11:00 to 22:00, including weekends and bank holidays.',
      },
      {
        question: 'Can I book a same-day massage in London?',
        answer:
          'Often, yes — particularly on weekdays and during the daytime. Evening and weekend slots fill fastest, so for those it is wise to message a day or two ahead.',
      },
      {
        question: 'What is your cancellation policy?',
        answer:
          "Please give at least 24 hours' notice if you need to cancel or reschedule. Late cancellations may be subject to a fee. If something urgent comes up, message me as early as you can and we will sort it out.",
      },
    ],
  },
  {
    id: 'location',
    title: 'Location & Getting Here',
    faqs: [
      {
        question: 'Where is your massage studio?',
        answer:
          'My private in-call studio is in West Kensington, London W14. The exact address and simple directions are shared once your booking is confirmed, which keeps the studio private for everyone who visits.',
      },
      {
        question: 'Which Tube stations are closest?',
        answer:
          "West Kensington (District line) and Barons Court (District and Piccadilly lines) are both close by. Earl's Court is one stop away, and Hammersmith is one to two stops away.",
      },
      {
        question: 'Which areas of London are you convenient for?',
        answer:
          "West Kensington is easy to reach from Earl's Court, Hammersmith, Fulham, Kensington, Olympia, Holland Park, Shepherd's Bush, Chelsea and Notting Hill, and it is a direct District or Piccadilly line journey from Westminster, Victoria and the West End.",
      },
      {
        question: 'Do you offer outcall or hotel visits?',
        answer:
          'No. All sessions are in-call at my own private studio in West Kensington (W14). Working from one dedicated space means the room, the warmth, the oils and the shower are always exactly right, and your visit stays completely private.',
      },
    ],
  },
  {
    id: 'treatments',
    title: 'Treatments',
    faqs: [
      {
        question: 'What types of massage do you offer?',
        answer:
          'I offer sensual, tantric, nuru and body-to-body massage, plus full body, relaxing, aromatherapy and hot stone massage. Naturist-style sessions and four hands sessions with a trusted colleague can be arranged on request.',
      },
      {
        question: 'Which massage should I choose?',
        answer:
          'If you are new to sensual massage, a sensual or relaxing massage is the gentlest introduction. Tantric massage suits anyone who wants a slower, breath-led, meditative session. Nuru and body-to-body are the most immersive styles. If you are unsure, tell me what you are in the mood for and I will help you choose.',
      },
      {
        question: 'What is the difference between tantric, nuru and body-to-body massage?',
        answer:
          'Tantric massage is defined by its pace: slow, breath-led and meditative. Nuru massage is defined by its technique: full-body contact using a warm, silky, odourless seaweed-based gel. Body-to-body massage is also given with the whole body, but with warm oil instead of gel, so it flows more like a classic massage.',
      },
      {
        question: 'How long is a session?',
        answer:
          'Most treatments are available as 30-minute or 60-minute sessions. Full body and hot stone massage are 60 minutes. Longer and bespoke sessions can be arranged on request — just ask when you message.',
      },
    ],
  },
  {
    id: 'prices',
    title: 'Prices & Payment',
    faqs: [
      {
        question: 'How much does a massage with Anna cost?',
        answer:
          'Sensual and relaxing massage are £80 for 30 minutes or £120 for an hour. Aromatherapy massage is £90 or £120. Tantric, nuru and body-to-body massage are £100 for 30 minutes or £140 for an hour. Full body and hot stone massage are £130 for an hour. Bespoke and longer sessions are priced on request.',
      },
      {
        question: 'What payment methods do you accept?',
        answer:
          'Cash on the day, please, in a discreet envelope. Card payments and bank transfers are not accepted.',
      },
      {
        question: 'Is everything included in the price?',
        answer:
          'Yes. The price covers the full session, warm oils or nuru gel, fresh linens and towels. There are no surprise add-ons — the menu and prices are exactly as listed.',
      },
    ],
  },
  {
    id: 'first-visit',
    title: 'Your First Visit',
    faqs: [
      {
        question: 'What should I expect when I arrive?',
        answer:
          'A warm welcome, a private, clean and candlelit room, and a relaxed chat about what you would like before we begin. Nothing is rushed. You are in control throughout and can ask for a slower pace, a lighter or firmer touch, or a pause at any moment.',
      },
      {
        question: 'How should I prepare for my massage?',
        answer:
          'Simply arrive freshly showered, on time and with the exact amount in cash. A shower is also available at the studio before and after your session. Everything else — oils, gel, fresh towels — is provided.',
      },
      {
        question: "I have never had a sensual massage before. Is that okay?",
        answer:
          'Completely. Many of my clients are first-timers, and most are a little nervous. I explain everything before we start, we begin slowly, and there is no pressure at any point. A sensual massage is the easiest place to start.',
      },
      {
        question: 'Is there an age limit?',
        answer: 'Yes. Sessions are strictly for adults aged 18 and over.',
      },
    ],
  },
  {
    id: 'discretion',
    title: 'Privacy & Discretion',
    faqs: [
      {
        question: 'Is my visit private and discreet?',
        answer:
          'Completely. I work alone from my own private studio — there is no reception, no waiting room and no records. Nothing about your visit is shared with anyone.',
      },
      {
        question: 'Are you an independent therapist or part of an agency?',
        answer:
          'I am fully independent. I work for myself, from my own studio, which is how I keep every session personal, unhurried and discreet.',
      },
    ],
  },
]

export const allFaqs: Faq[] = faqGroups.flatMap((g) => g.faqs)

function pick(question: string): Faq {
  const found = allFaqs.find((f) => f.question === question)
  if (!found) throw new Error(`FAQ not found: ${question}`)
  return found
}

/** The shortlist shown on the home page (and mirrored in its FAQPage schema). */
export const homeFaqs: Faq[] = [
  pick('What types of massage do you offer?'),
  pick('Where is your massage studio?'),
  pick('How much does a massage with Anna cost?'),
  pick('What are your opening hours?'),
  pick('How do I book a massage with Anna?'),
  pick('Which massage should I choose?'),
  pick('Do you offer outcall or hotel visits?'),
  pick('Is my visit private and discreet?'),
]

import type { Metadata } from 'next'
import { LocalAreaPage, generateLocalMetadata, type LocalAreaConfig } from '@/lib/localAreaPage'

const config: LocalAreaConfig = {
  area: "Earl's Court",
  slug: 'massage-earls-court',
  postcodes: 'SW5',
  h1: "Sensual & Tantric Massage near Earl's Court",
  metaTitle: "Massage Earl's Court — Tantric & Sensual",
  metaDescription:
    "Sensual, tantric and nuru massage one Tube stop from Earl's Court (SW5). Anna's private in-call studio in West Kensington, W14. From £80. Daily 11:00–22:00.",
  intro:
    "Looking for a massage near Earl's Court? My private studio is one stop away in West Kensington (W14) — two minutes on the District line. Sensual, tantric, nuru and body-to-body massage, daily from 11:00 to 22:00.",
  keywords: [
    'massage earls court',
    'tantric massage earls court',
    'sensual massage earls court',
    'nuru massage earls court',
    'erotic massage earls court',
    'massage sw5',
    'massage near earls court station',
  ],
  body: `
    <h2>Massage One Stop from Earl's Court</h2>
    <p>Earl's Court and West Kensington are next-door neighbours. From Earl's Court station it is a single stop west on the District line to West Kensington — about two minutes — or a pleasant 15–20 minute walk along West Cromwell Road. If you live in the mansion blocks and garden squares of SW5, or you are staying in one of the many hotels around Earl's Court Road and Cromwell Road, you are closer to my studio than to most of central London.</p>

    <h2>A Calm Alternative to the High-Street Parlour</h2>
    <p>My studio is a private, in-call space that I run myself: warm, candlelit, spotlessly clean and completely discreet. There is no reception and no waiting room. You see only me, and the session is never rushed or cut short.</p>

    <h2>Tantric, Sensual and Nuru Massage near Earl's Court</h2>
    <p>Choose from <a href="/services/tantric-massage">tantric massage</a> — slow, breath-led and meditative; <a href="/services/sensual-massage">sensual massage</a> — the gentlest, hands-led introduction; <a href="/services/nuru-massage">nuru massage</a> — the Japanese gel massage; and <a href="/services/body-to-body-massage">body to body massage</a> with warm oil. <a href="/services/relaxing-massage">Relaxing</a>, <a href="/services/aromatherapy-massage">aromatherapy</a>, <a href="/services/full-body-massage">full body</a> and <a href="/services/hot-stone-massage">hot stone massage</a> are available too.</p>
    <p>New to this? Read <a href="/blog/first-sensual-massage-london-what-to-expect">what to expect from your first sensual massage</a> before you book.</p>

    <h2>Visiting from an Earl's Court Hotel</h2>
    <p>Many of my clients are visitors staying in Earl's Court for work, an exhibition at Olympia or a few days in London. Same-day appointments are often available, the studio is one stop from your hotel, and I am open until 22:00 — so an evening session after a long day is easy to arrange. Just send a WhatsApp message with your preferred time.</p>
  `,
  travel: [
    { from: "Earl's Court station", how: 'One stop west on the District line to West Kensington — about 2 minutes' },
    { from: "Earl's Court on foot", how: 'A 15–20 minute walk' },
    { from: 'West Brompton', how: "One stop to Earl's Court, then one stop to West Kensington" },
    { from: 'Gloucester Road', how: 'Two stops on the District line — about 5 minutes' },
    { from: 'By taxi', how: 'About 5 minutes' },
  ],
  faqs: [
    {
      question: "Where can I get a massage near Earl's Court?",
      answer:
        "Anna offers sensual, tantric, nuru and body-to-body massage at a private in-call studio in West Kensington (W14), one stop from Earl's Court on the District line. The exact address is shared once your booking is confirmed.",
    },
    {
      question: "How far is the studio from Earl's Court station?",
      answer:
        "One stop on the District line (about two minutes) to West Kensington, or a 15–20 minute walk. A taxi takes around five minutes.",
    },
    {
      question: "How much does a tantric massage near Earl's Court cost?",
      answer:
        'Tantric massage with Anna is £100 for 30 minutes or £140 for an hour. Sensual massage starts at £80 for 30 minutes. Payment is by cash on the day.',
    },
    {
      question: "Can you come to my hotel in Earl's Court?",
      answer:
        "No — I do not offer outcall. All sessions are in-call at my private studio in West Kensington, which is only one Tube stop from Earl's Court.",
    },
    {
      question: 'Are evening appointments available?',
      answer: 'Yes. I am open every day from 11:00 to 22:00. Evening slots are popular, so message ahead if you can.',
    },
  ],
}

export const metadata: Metadata = generateLocalMetadata(config)

export default function MassageEarlsCourtPage() {
  return <LocalAreaPage config={config} />
}

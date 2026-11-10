import type { Metadata } from 'next'
import { LocalAreaPage, generateLocalMetadata, type LocalAreaConfig } from '@/lib/localAreaPage'

const config: LocalAreaConfig = {
  area: 'Hammersmith',
  slug: 'massage-hammersmith',
  postcodes: 'W6',
  h1: 'Sensual & Tantric Massage near Hammersmith',
  metaTitle: 'Massage Hammersmith — Tantric & Sensual',
  metaDescription:
    "Sensual, tantric and nuru massage one stop from Hammersmith (W6). Anna's private in-call studio in West Kensington, W14. From £80. Daily 11:00–22:00.",
  intro:
    'A private massage studio one Tube stop from Hammersmith. Sensual, tantric, nuru and body-to-body massage with Anna in neighbouring West Kensington (W14) — open every day from 11:00 to 22:00.',
  keywords: [
    'massage hammersmith',
    'sensual massage hammersmith',
    'tantric massage hammersmith',
    'erotic massage hammersmith',
    'nuru massage hammersmith',
    'massage w6',
    'adult massage hammersmith',
  ],
  body: `
    <h2>Massage One Stop from Hammersmith</h2>
    <p>Hammersmith and West Kensington share a border. From Hammersmith station it is one stop on the District or Piccadilly line to Barons Court, or two stops on the District line to West Kensington — either way you are at my studio within minutes. On foot, it is around 20 minutes from Hammersmith Broadway.</p>
    <p>Whether you work in the offices around the Broadway, live near Brook Green or Ravenscourt Park, or are simply passing through one of West London's busiest interchanges, a calm, private hour is closer than you think.</p>

    <h2>What to Expect</h2>
    <p>I work alone, from my own private in-call studio: a warm, candlelit, spotlessly clean room with fresh linen and a shower. There is no reception and nobody else on the premises — just an unhurried session designed around what you are in the mood for.</p>

    <h2>Sensual, Tantric and Nuru Massage near Hammersmith</h2>
    <p>The four styles I am best known for are <a href="/services/sensual-massage">sensual massage</a>, <a href="/services/tantric-massage">tantric massage</a>, <a href="/services/nuru-massage">nuru massage</a> and <a href="/services/body-to-body-massage">body to body massage</a>. If you would simply like to unwind after work, a <a href="/services/relaxing-massage">relaxing</a>, <a href="/services/aromatherapy-massage">aromatherapy</a> or <a href="/services/hot-stone-massage">hot stone massage</a> is ideal.</p>
    <p>Curious about cost first? See my <a href="/blog/sensual-tantric-massage-prices-london">guide to sensual and tantric massage prices in London</a>.</p>

    <h2>After-Work Appointments</h2>
    <p>Early-evening sessions are the most popular with Hammersmith clients — it is an easy stop on the way home. I am open until 22:00 every day, so later appointments are possible too. Message me on WhatsApp with your preferred time and I will confirm discreetly, often the same day.</p>
  `,
  travel: [
    { from: 'Hammersmith station', how: 'One stop to Barons Court (District or Piccadilly line) — about 2 minutes' },
    { from: 'Hammersmith on foot', how: 'Around 20 minutes from Hammersmith Broadway' },
    { from: 'Ravenscourt Park', how: 'District line direct — about 5 minutes' },
    { from: 'Brook Green', how: 'A 10–15 minute walk or a short taxi ride' },
    { from: 'By taxi', how: 'About 5–10 minutes' },
  ],
  faqs: [
    {
      question: 'Where can I get a sensual massage near Hammersmith?',
      answer:
        "Anna offers sensual, tantric, nuru and body-to-body massage at a private in-call studio in West Kensington (W14), one stop from Hammersmith on the District or Piccadilly line. The exact address is shared once your booking is confirmed.",
    },
    {
      question: 'How do I get to the studio from Hammersmith?',
      answer:
        'Take the District or Piccadilly line one stop to Barons Court, or the District line two stops to West Kensington. It takes a few minutes. Walking from Hammersmith Broadway takes around 20 minutes.',
    },
    {
      question: 'How much does a massage near Hammersmith cost?',
      answer:
        'Sensual and relaxing massage are £80 for 30 minutes or £120 for an hour. Tantric, nuru and body-to-body massage are £100 for 30 minutes or £140 for an hour. Payment is by cash on the day.',
    },
    {
      question: 'Do you offer outcall massage in Hammersmith?',
      answer: 'No. All sessions are in-call at my own private studio in neighbouring West Kensington (W14).',
    },
    {
      question: 'Can I book for the same evening?',
      answer: 'Often, yes. I am open daily from 11:00 to 22:00. Evening slots fill fastest, so message as early in the day as you can.',
    },
  ],
}

export const metadata: Metadata = generateLocalMetadata(config)

export default function MassageHammersmithPage() {
  return <LocalAreaPage config={config} />
}

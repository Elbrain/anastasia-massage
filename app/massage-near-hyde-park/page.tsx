import type { Metadata } from 'next'
import { LocalAreaPage, generateLocalMetadata, type LocalAreaConfig } from '@/lib/localAreaPage'

const config: LocalAreaConfig = {
  area: 'Near Hyde Park',
  slug: 'massage-near-hyde-park',
  postcodes: 'W2 · W1',
  intro:
    'Sensual massage near Hyde Park with Anna — sensual, body-to-body, tantric and nuru massage at a private in-call studio in West Kensington (W14), an easy journey from the Hyde Park area (Bayswater, Lancaster Gate, Knightsbridge). Discreet and unhurried, daily 11:00–22:00.',
  keywords: ['sensual massage hyde park', 'sensual massage bayswater', 'tantric massage hyde park', 'nuru massage hyde park', 'erotic massage hyde park'],
  body: `
    <h2>Sensual Massage Near Hyde Park</h2>
    <p>The streets around Hyde Park — Bayswater, Lancaster Gate, Paddington and the edge of Knightsbridge (W2, W1) — are some of London's most elegant. My private studio in West Kensington (W14) is a short journey away, offering a sensual retreat whenever you need to unwind.</p>

    <h2>A Short Journey from Hyde Park</h2>
    <p>All sessions are in-call at my warm, candlelit West Kensington studio, easily reached from the Hyde Park area by tube or taxi. The exact address is shared discreetly once your booking is confirmed.</p>

    <h2>Sensual Treatments to Enjoy</h2>
    <p>Choose sensual massage, body-to-body, tantric or the silky nuru experience, plus relaxing, aromatherapy, full body and hot stone massage — unhurried, as a 30-minute taster, a full hour, or a longer bespoke experience.</p>

    <h2>Booking Near Hyde Park</h2>
    <p>Popular with both locals and visitors staying nearby — same-day appointments are often available. A quick WhatsApp message is all it takes.</p>
  `,
  faqs: [
    {
      question: 'Where do you see clients near Hyde Park?',
      answer: "At my private, discreet in-call studio in West Kensington (W14), a short journey from the Hyde Park area. The exact address is shared once your booking is confirmed. Available daily 11:00–22:00.",
    },
    {
      question: 'Which sensual massages can I book?',
      answer: "Sensual, body-to-body, tantric and nuru massage, plus relaxing, aromatherapy, full body and hot stone — as 30-minute, 1-hour or bespoke sessions.",
    },
    {
      question: 'Do you see hotel guests near Hyde Park?',
      answer: "Yes — many clients visit while staying nearby. Message me on WhatsApp with your preferred time and I'll confirm discreetly, often the same day.",
    },
  ],
}

export const metadata: Metadata = generateLocalMetadata(config)

export default function MassageNearHydeParkPage() {
  return <LocalAreaPage config={config} />
}

import type { Metadata } from 'next'
import { LocalAreaPage, generateLocalMetadata, type LocalAreaConfig } from '@/lib/localAreaPage'

const config: LocalAreaConfig = {
  area: 'Central London',
  slug: 'massage-central-london',
  postcodes: 'W1 · WC2',
  intro:
    'Sensual massage for Central London with Anna — sensual, body-to-body, tantric and nuru massage at a private in-call studio in West Kensington (W14), a short ride from the West End, Mayfair and Soho. Discreet and unhurried, daily 11:00–22:00.',
  keywords: ['sensual massage central london', 'tantric massage central london', 'nuru massage central london', 'erotic massage central london', 'body to body massage central london'],
  body: `
    <h2>Sensual Massage for Central London</h2>
    <p>If you live or work in the heart of the city — the West End, Mayfair, Soho or Fitzrovia (W1, WC2) — a sensual escape is only a short journey away. My private studio in West Kensington (W14) offers an unhurried, candlelit retreat just west of the centre.</p>

    <h2>A Quick Trip from the Centre</h2>
    <p>All sessions are in-call at my warm West Kensington studio, easily reached from Central London by tube or taxi. The exact address is shared discreetly once your booking is confirmed — perfect for slipping away from a busy day.</p>

    <h2>Sensual Treatments for Central London Clients</h2>
    <p>Choose sensual massage, body-to-body, tantric or the signature nuru experience, plus relaxing, aromatherapy, full body and hot stone massage. Sessions run unhurried at 30 minutes, a full hour, or a longer bespoke experience.</p>

    <h2>Booking from Central London</h2>
    <p>After-work and evening slots are in demand — a day's notice is wise. Send a quick WhatsApp message with your preferred time and I'll confirm discreetly, often the same day.</p>
  `,
  faqs: [
    {
      question: 'Where do you see Central London clients?',
      answer: 'At my private, discreet in-call studio in West Kensington (W14), a short ride from Central London. The exact address is shared once your booking is confirmed. Available daily 11:00–22:00.',
    },
    {
      question: 'Which sensual massages can I book?',
      answer: 'Sensual, body-to-body, tantric and nuru massage, plus relaxing, aromatherapy, full body and hot stone — as 30-minute, 1-hour or bespoke sessions.',
    },
    {
      question: 'How do I book?',
      answer: 'Message me on WhatsApp or call with the experience you would like and your preferred time. I will confirm discreetly, often the same day.',
    },
  ],
}

export const metadata: Metadata = generateLocalMetadata(config)

export default function MassageCentralLondonPage() {
  return <LocalAreaPage config={config} />
}

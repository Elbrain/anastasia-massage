import type { Metadata } from 'next'
import { LocalAreaPage, generateLocalMetadata, type LocalAreaConfig } from '@/lib/localAreaPage'

const config: LocalAreaConfig = {
  area: 'Westminster',
  slug: 'massage-westminster',
  postcodes: 'SW1',
  intro:
    'Sensual massage near Westminster with Anna — sensual, body-to-body, tantric and nuru massage at a private in-call studio in West Kensington (W14), an easy journey from Westminster (SW1). Discreet and unhurried, daily 11:00–22:00.',
  keywords: ['sensual massage westminster', 'tantric massage westminster', 'nuru massage westminster', 'erotic massage westminster', 'body to body massage westminster'],
  body: `
    <h2>Sensual Massage Near Westminster</h2>
    <p>Westminster, Victoria, Pimlico and the edges of Belgravia (SW1) sit at the heart of the city. When you want to step away from it all, my private studio in West Kensington (W14) offers a calm, sensual sanctuary just a short journey west.</p>

    <h2>A Direct Journey from Westminster</h2>
    <p>All sessions are in-call at my warm, candlelit studio in West Kensington — easily reached from Victoria and Westminster on the District line, or a quick taxi across town. The exact address is shared discreetly once your booking is confirmed.</p>

    <h2>Sensual Treatments for Westminster Clients</h2>
    <p>Choose sensual massage, body-to-body, tantric or the silky nuru experience, plus relaxing, aromatherapy, full body and hot stone massage. Every session is unhurried — a 30-minute taster, a full hour, or a longer bespoke experience.</p>

    <h2>Booking from Westminster</h2>
    <p>Lunchtime and after-work appointments are popular — message ahead to lock in your preferred slot. A quick WhatsApp message is all it takes, and same-day visits are often available.</p>
  `,
  faqs: [
    {
      question: 'Where do you see Westminster clients?',
      answer: 'At my private, discreet in-call studio in West Kensington (W14), a short journey from Westminster. The exact address is shared once your booking is confirmed. Available daily 11:00–22:00.',
    },
    {
      question: 'Which sensual massages can I book near Westminster?',
      answer: 'Sensual, body-to-body, tantric and nuru massage, plus relaxing, aromatherapy, full body and hot stone — as 30-minute, 1-hour or bespoke sessions.',
    },
    {
      question: 'How do I book?',
      answer: 'Message me on WhatsApp or call with the experience you would like and your preferred time. I will confirm discreetly, often the same day.',
    },
  ],
}

export const metadata: Metadata = generateLocalMetadata(config)

export default function MassageWestminsterPage() {
  return <LocalAreaPage config={config} />
}

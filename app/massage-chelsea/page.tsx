import type { Metadata } from 'next'
import { LocalAreaPage, generateLocalMetadata, type LocalAreaConfig } from '@/lib/localAreaPage'

const config: LocalAreaConfig = {
  area: 'Chelsea',
  slug: 'massage-chelsea',
  postcodes: 'SW3 · SW10',
  intro:
    'Sensual massage near Chelsea with Anna — sensual, body-to-body, tantric and nuru massage at a private in-call studio in West Kensington (W14), an easy journey from Chelsea (SW3, SW10). Discreet and unhurried, daily 11:00–22:00.',
  keywords: ['sensual massage chelsea', 'tantric massage chelsea', 'nuru massage chelsea', 'erotic massage chelsea', 'body to body massage chelsea'],
  body: `
    <h2>Sensual Massage Near Chelsea</h2>
    <p>From the King's Road to Sloane Square and the riverside streets of SW3 and SW10, Chelsea is one of the most desirable corners of London. My private studio in West Kensington (W14) is a short ride away, offering a calm, sensual retreat from the pace of the city.</p>

    <h2>An Easy Journey from Chelsea</h2>
    <p>All sessions are in-call at my warm, candlelit West Kensington studio — reachable from Chelsea in minutes by taxi, or via Fulham Broadway, Earl's Court and West Kensington stations. The exact address is shared discreetly when you book, so everything is effortless from the moment you set off.</p>

    <h2>Sensual Treatments for Chelsea Clients</h2>
    <p>Indulge in sensual massage, body-to-body, tantric or the silky nuru experience, plus relaxing, aromatherapy, full body and hot stone massage. Sessions run unhurried at 30 minutes, a full hour, or a longer bespoke experience designed entirely around you.</p>

    <h2>Booking from Chelsea</h2>
    <p>Weekend and evening appointments fill quickly with Chelsea clients — message ahead to secure your preferred time. A quick WhatsApp message is all it takes, and same-day visits are often possible.</p>
  `,
  faqs: [
    {
      question: 'Where do you see Chelsea clients?',
      answer: 'At my private, discreet in-call studio in West Kensington (W14), a short journey from Chelsea. The exact address is shared once your booking is confirmed. Available daily 11:00–22:00.',
    },
    {
      question: 'Which sensual massages can I book near Chelsea?',
      answer: 'Sensual, body-to-body, tantric and nuru massage, plus relaxing, aromatherapy, full body and hot stone — as 30-minute, 1-hour or bespoke sessions.',
    },
    {
      question: 'How do I book?',
      answer: 'Message me on WhatsApp or call with the experience you would like and your preferred time. I will confirm discreetly, often the same day.',
    },
  ],
}

export const metadata: Metadata = generateLocalMetadata(config)

export default function MassageChelseaPage() {
  return <LocalAreaPage config={config} />
}

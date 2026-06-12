import type { Metadata } from 'next'
import { LocalAreaPage, generateLocalMetadata, type LocalAreaConfig } from '@/lib/localAreaPage'

const config: LocalAreaConfig = {
  area: 'Kensington',
  slug: 'massage-kensington',
  postcodes: 'W8 · SW7',
  intro:
    'Sensual massage near Kensington with Anna — sensual, body-to-body, tantric and nuru massage at a private in-call studio in West Kensington (W14), just minutes from Kensington (W8, SW7). Discreet and unhurried, daily 11:00–22:00.',
  keywords: ['sensual massage kensington', 'tantric massage kensington', 'nuru massage kensington', 'erotic massage kensington', 'body to body massage kensington'],
  body: `
    <h2>Sensual Massage Near Kensington</h2>
    <p>Kensington is one of London's most elegant neighbourhoods, and my private studio in neighbouring West Kensington (W14) sits just minutes away. If you live or work around High Street Kensington, Holland Park or South Kensington (W8, SW7), a slow, sensual escape is closer than you think.</p>

    <h2>A Discreet Studio, Moments Away</h2>
    <p>All sessions are in-call at my warm, candlelit studio in West Kensington — a short hop from Kensington by tube or taxi, with High Street Kensington, Earl's Court and West Kensington stations all close by. The exact address is shared discreetly once your booking is confirmed, so you can simply arrive and relax.</p>

    <h2>Sensual Treatments for Kensington Clients</h2>
    <p>Choose from sensual massage, body-to-body, tantric and the signature nuru experience, alongside relaxing, aromatherapy, full body and hot stone massage. Every session is unhurried and tailored to exactly what you're in the mood for — whether that's a 30-minute taster or a full, indulgent hour.</p>

    <h2>Booking from Kensington</h2>
    <p>Evening slots are popular with Kensington clients, so a day or two's notice is wise for those. Message me on WhatsApp to arrange your visit — discreet, relaxed, and often available the same day.</p>
  `,
  faqs: [
    {
      question: 'Where do you see Kensington clients?',
      answer: 'At my private, discreet in-call studio in West Kensington (W14), just minutes from Kensington. The exact address is shared once your booking is confirmed. Available daily 11:00–22:00.',
    },
    {
      question: 'Which sensual massages can I book near Kensington?',
      answer: 'Sensual, body-to-body, tantric and nuru massage, plus relaxing, aromatherapy, full body and hot stone — all available as 30-minute, 1-hour or bespoke sessions.',
    },
    {
      question: 'How do I book?',
      answer: 'Simply message me on WhatsApp or call. Tell me the experience you would like and your preferred time, and I will confirm discreetly — often the same day.',
    },
  ],
}

export const metadata: Metadata = generateLocalMetadata(config)

export default function MassageKensingtonPage() {
  return <LocalAreaPage config={config} />
}

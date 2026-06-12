import type { Metadata } from 'next'
import { LocalAreaPage, generateLocalMetadata, type LocalAreaConfig } from '@/lib/localAreaPage'

const config: LocalAreaConfig = {
  area: 'Paddington',
  slug: 'massage-paddington',
  postcodes: 'W2',
  intro:
    'Sensual massage near Paddington with Anna — sensual, body-to-body, tantric and nuru massage at a private in-call studio in West Kensington (W14), an easy journey from Paddington (W2). Discreet and unhurried, daily 11:00–22:00.',
  keywords: ['sensual massage paddington', 'tantric massage paddington', 'nuru massage paddington', 'erotic massage paddington', 'body to body massage paddington'],
  body: `
    <h2>Sensual Massage Near Paddington</h2>
    <p>Whether you're arriving into Paddington station, staying in one of the area's W2 hotels, or living around Bayswater and Lancaster Gate, a sensual escape is close at hand. My private studio in West Kensington (W14) is a short, direct journey away.</p>

    <h2>A Short Journey from Paddington</h2>
    <p>All sessions are in-call at my warm, candlelit studio in West Kensington — quickly reached from Paddington by tube or taxi. The exact address is shared discreetly once your booking is confirmed, ideal whether you're a local or visiting the city.</p>

    <h2>Sensual Treatments for Paddington Clients</h2>
    <p>Choose sensual massage, body-to-body, tantric or the silky nuru experience, plus relaxing, aromatherapy, full body and hot stone massage. Sessions run unhurried at 30 minutes, a full hour, or a longer bespoke experience.</p>

    <h2>Booking from Paddington</h2>
    <p>Visiting for business or pleasure? Same-day appointments are often available. A quick WhatsApp message with your preferred time is all it takes.</p>
  `,
  faqs: [
    {
      question: 'Where do you see Paddington clients?',
      answer: 'At my private, discreet in-call studio in West Kensington (W14), a short journey from Paddington. The exact address is shared once your booking is confirmed. Available daily 11:00–22:00.',
    },
    {
      question: 'Which sensual massages can I book near Paddington?',
      answer: 'Sensual, body-to-body, tantric and nuru massage, plus relaxing, aromatherapy, full body and hot stone — as 30-minute, 1-hour or bespoke sessions.',
    },
    {
      question: 'Do you see visitors and hotel guests?',
      answer: 'Yes — many clients visit while staying nearby. Message me on WhatsApp with your preferred time and I will confirm discreetly, often the same day.',
    },
  ],
}

export const metadata: Metadata = generateLocalMetadata(config)

export default function MassagePaddingtonPage() {
  return <LocalAreaPage config={config} />
}

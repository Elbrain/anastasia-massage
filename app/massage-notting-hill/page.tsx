import type { Metadata } from 'next'
import { LocalAreaPage, generateLocalMetadata, type LocalAreaConfig } from '@/lib/localAreaPage'

const config: LocalAreaConfig = {
  area: 'Notting Hill',
  slug: 'massage-notting-hill',
  postcodes: 'W11 · W2',
  intro:
    'Sensual massage near Notting Hill with Anna — sensual, body-to-body, tantric and nuru massage at a private in-call studio in West Kensington (W14), close to Notting Hill (W11). Discreet and unhurried, daily 11:00–22:00.',
  keywords: ['sensual massage notting hill', 'tantric massage notting hill', 'nuru massage notting hill', 'erotic massage notting hill', 'body to body massage notting hill'],
  body: `
    <h2>Sensual Massage Near Notting Hill</h2>
    <p>Notting Hill, with its pastel terraces, Portobello Road and W11 charm, is one of West London's most loved neighbourhoods. My private studio in West Kensington (W14) is just down the road — an easy, discreet escape whenever you want to slow down and unwind.</p>

    <h2>Just Minutes Away</h2>
    <p>All sessions are in-call at my warm, candlelit studio in West Kensington, a short ride from Notting Hill via Holland Park, Shepherd's Bush or Kensington. The exact address is shared once your booking is confirmed, so you can simply arrive, relax and let go.</p>

    <h2>Sensual Treatments for Notting Hill Clients</h2>
    <p>Enjoy sensual massage, body-to-body, tantric and the signature nuru experience, alongside relaxing, aromatherapy, full body and hot stone massage. Every session is unhurried — pick a 30-minute taster, a full hour, or a longer bespoke experience.</p>

    <h2>Booking from Notting Hill</h2>
    <p>Same-day appointments are often available, though evenings can fill fast. Send a quick WhatsApp message with your preferred time and I'll confirm discreetly.</p>
  `,
  faqs: [
    {
      question: 'Where do you see Notting Hill clients?',
      answer: 'At my private, discreet in-call studio in West Kensington (W14), just minutes from Notting Hill. The exact address is shared once your booking is confirmed. Available daily 11:00–22:00.',
    },
    {
      question: 'Which sensual massages can I book near Notting Hill?',
      answer: 'Sensual, body-to-body, tantric and nuru massage, plus relaxing, aromatherapy, full body and hot stone — as 30-minute, 1-hour or bespoke sessions.',
    },
    {
      question: 'How do I book?',
      answer: 'Message me on WhatsApp or call with the experience you would like and your preferred time. I will confirm discreetly, often the same day.',
    },
  ],
}

export const metadata: Metadata = generateLocalMetadata(config)

export default function MassageNottingHillPage() {
  return <LocalAreaPage config={config} />
}

import type { Metadata } from 'next'
import { LocalAreaPage, generateLocalMetadata, type LocalAreaConfig } from '@/lib/localAreaPage'

const config: LocalAreaConfig = {
  area: 'West London',
  slug: 'massage-west-london',
  postcodes: 'W6 · W14 · SW6',
  intro:
    'Sensual massage in West London with Anna — sensual, body-to-body, tantric and nuru massage at a private in-call studio right here in West Kensington (W14), at the heart of West London. Discreet and unhurried, daily 11:00–22:00.',
  keywords: ['sensual massage west london', 'tantric massage west london', 'nuru massage west london', 'erotic massage west london', 'body to body massage west kensington'],
  body: `
    <h2>Sensual Massage in West London</h2>
    <p>West London is home — my private, candlelit studio is right here in West Kensington (W14). For residents of Hammersmith, Fulham, Shepherd's Bush, Chiswick, Earl's Court and Olympia, a slow, sensual escape is genuinely on your doorstep.</p>

    <h2>Right on Your Doorstep</h2>
    <p>All sessions are in-call at my West Kensington studio, moments from West Kensington and Barons Court stations and well connected across W6, W14 and SW6. The exact address is shared discreetly once your booking is confirmed.</p>

    <h2>Sensual Treatments for West London Clients</h2>
    <p>Enjoy sensual massage, body-to-body, tantric and the silky nuru experience, alongside relaxing, aromatherapy, full body and hot stone massage. Every session is unhurried — choose a 30-minute taster, a full hour, or a longer bespoke experience.</p>

    <h2>Booking in West London</h2>
    <p>Being local, same-day appointments are often easy to arrange. Just send a quick WhatsApp message with your preferred time and I'll confirm discreetly.</p>
  `,
  faqs: [
    {
      question: 'Where is your West London studio?',
      answer: "My private, discreet in-call studio is in West Kensington (W14), at the heart of West London. The exact address is shared once your booking is confirmed. Available daily 11:00–22:00.",
    },
    {
      question: 'Which areas of West London do you serve?',
      answer: "Clients visit from Hammersmith, Fulham, Shepherd's Bush, Chiswick, Earl's Court, Olympia, Kensington and across W6, W14 and SW6 — all within easy reach of the studio.",
    },
    {
      question: 'How do I book?',
      answer: "Message me on WhatsApp or call with the experience you would like and your preferred time. I will confirm discreetly, often the same day.",
    },
  ],
}

export const metadata: Metadata = generateLocalMetadata(config)

export default function MassageWestLondonPage() {
  return <LocalAreaPage config={config} />
}

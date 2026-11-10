import type { Metadata } from 'next'
import { LocalAreaPage, generateLocalMetadata, type LocalAreaConfig } from '@/lib/localAreaPage'

const config: LocalAreaConfig = {
  area: 'West & Central London',
  label: 'Massage Near Me',
  h1: 'Sensual & Tantric Massage Near Me in West London',
  metaTitle: 'Sensual & Tantric Massage Near Me — West London',
  metaDescription:
    "Sensual, tantric or nuru massage near you? Anna's private in-call studio is in West Kensington, W14 — close to Earl's Court, Hammersmith and Fulham. From £80.",
  slug: 'massage-near-me',
  postcodes: 'West London',
  intro:
    'Searching for sensual massage near me? Anna offers sensual, body-to-body, tantric and nuru massage at a private in-call studio in West Kensington (W14), close to much of West and Central London. Discreet and unhurried, daily 11:00–22:00.',
  keywords: ['sensual massage near me', 'tantric massage near me', 'nuru massage near me', 'erotic massage near me', 'body to body massage near me'],
  body: `
    <h2>Sensual Massage Near You in West London</h2>
    <p>If you're searching for a sensual massage "near me" in West or Central London, my private studio in West Kensington (W14) is likely closer than you expect. It's a calm, candlelit space designed for one thing: unhurried, sensual relaxation.</p>

    <h2>A Convenient, Discreet Location</h2>
    <p>All sessions are in-call at my West Kensington studio, moments from West Kensington and Barons Court stations and within easy reach of Hammersmith, Fulham, Kensington, Chelsea, Notting Hill and beyond. The exact address is shared discreetly once your booking is confirmed.</p>

    <h2>Sensual Treatments to Choose From</h2>
    <p>Sensual massage, body-to-body, tantric and nuru, plus relaxing, aromatherapy, full body and hot stone — all unhurried, and available as a 30-minute taster, a full hour, or a longer bespoke experience.</p>

    <h2>Book in Minutes</h2>
    <p>The quickest way to book is a WhatsApp message. Tell me what you're in the mood for and your preferred time, and I'll confirm discreetly — often the same day.</p>
  `,
  travel: [
    { from: "West Kensington station", how: "District line — the closest station" },
    { from: "Barons Court station", how: "District and Piccadilly lines — also close by" },
    { from: "Earl's Court", how: "One stop away on the District line" },
    { from: "Hammersmith", how: "One to two stops away" },
    { from: "West End (Piccadilly Circus)", how: "Piccadilly line direct to Barons Court — about 15–20 minutes" },
  ],
  faqs: [
    {
      question: 'Where exactly are you located?',
      answer: "At a private, discreet in-call studio in West Kensington (W14), close to much of West and Central London. The exact address is shared once your booking is confirmed.",
    },
    {
      question: 'What are your opening hours?',
      answer: "I'm available every day from 11:00 to 22:00, including weekends. Same-day appointments are often available.",
    },
    {
      question: 'How do I book a massage near me?',
      answer: "Message me on WhatsApp or call with your preferred time and the experience you would like. I'll confirm discreetly, usually within the hour.",
    },
  ],
}

export const metadata: Metadata = generateLocalMetadata(config)

export default function MassageNearMePage() {
  return <LocalAreaPage config={config} />
}

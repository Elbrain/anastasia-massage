import type { Metadata } from 'next'
import { LocalAreaPage, generateLocalMetadata, type LocalAreaConfig } from '@/lib/localAreaPage'

const config: LocalAreaConfig = {
  area: 'West Kensington',
  slug: 'massage-west-kensington',
  postcodes: 'W14',
  h1: 'Sensual & Tantric Massage in West Kensington (W14)',
  metaTitle: 'Massage West Kensington W14 — Tantric & Sensual',
  metaDescription:
    'Sensual, tantric and nuru massage in West Kensington, London W14 with Anna. Private in-call studio near West Kensington and Barons Court stations. From £80.',
  intro:
    'My private massage studio is right here in West Kensington, W14 — a few minutes from West Kensington and Barons Court stations. Sensual, tantric, nuru and body-to-body massage in a warm, candlelit room, every day from 11:00 to 22:00.',
  keywords: [
    'massage west kensington',
    'sensual massage west kensington',
    'tantric massage west kensington',
    'nuru massage west kensington',
    'erotic massage w14',
    'massage w14',
    'massage barons court',
  ],
  body: `
    <h2>A Private Massage Studio in West Kensington</h2>
    <p>West Kensington is where I work. My studio is a private, in-call space in W14 — not a shop front and not a shared salon, but a warm, quiet, candlelit room that I look after myself. There is no reception and no waiting room: you arrive, you are welcomed, and the time is entirely yours.</p>
    <p>If you live or work around North End Road, Barons Court, Olympia or the streets between Talgarth Road and Hammersmith Road, you are quite literally around the corner.</p>

    <h2>What I Offer in W14</h2>
    <p>The menu is built around four signature styles — <a href="/services/sensual-massage">sensual massage</a>, <a href="/services/tantric-massage">tantric massage</a>, <a href="/services/nuru-massage">nuru massage</a> and <a href="/services/body-to-body-massage">body to body massage</a> — alongside <a href="/services/full-body-massage">full body</a>, <a href="/services/relaxing-massage">relaxing</a>, <a href="/services/aromatherapy-massage">aromatherapy</a> and <a href="/services/hot-stone-massage">hot stone massage</a>. Most are available as a 30-minute taster or a full hour, and longer bespoke sessions can be arranged.</p>
    <p>Not sure which to choose? My guide to <a href="/blog/erotic-massage-types-tantric-nuru-naturist-london">the different types of erotic massage</a> explains how they differ, and I am always happy to help you decide when you message.</p>

    <h2>Why an In-Call Studio</h2>
    <p>I work only from my own studio, never outcall. A dedicated room means the temperature, the lighting, the oils, the fresh linen and the shower are right every single time — and it keeps your visit completely private. I explain the difference in more detail in <a href="/blog/incall-vs-outcall-massage-london">in-call vs outcall massage</a>.</p>

    <h2>Booking a Massage in West Kensington</h2>
    <p>Send a WhatsApp message with the massage you would like and your preferred time. I confirm discreetly and share the exact address and simple directions. Because I am local, same-day appointments are often possible — evenings and weekends fill fastest.</p>
  `,
  travel: [
    { from: 'West Kensington station', how: 'District line — the closest station, a few minutes away' },
    { from: 'Barons Court station', how: 'District and Piccadilly lines — a few minutes away' },
    { from: 'Kensington (Olympia)', how: 'A 10–15 minute walk' },
    { from: "Earl's Court", how: 'One stop on the District line' },
    { from: 'Hammersmith', how: 'One stop to Barons Court' },
  ],
  faqs: [
    {
      question: 'Where can I get a massage in West Kensington?',
      answer:
        "Anna offers sensual, tantric, nuru and body-to-body massage at a private in-call studio in West Kensington, London W14, a few minutes from West Kensington and Barons Court Underground stations. The exact address is shared once your booking is confirmed.",
    },
    {
      question: 'How much is a massage in West Kensington?',
      answer:
        'Prices start at £80 for a 30-minute sensual or relaxing massage and £120 for an hour. Tantric, nuru and body-to-body massage are £100 for 30 minutes or £140 for an hour. Payment is by cash on the day.',
    },
    {
      question: 'What are the opening hours?',
      answer: 'Every day from 11:00 to 22:00, including weekends and bank holidays. Same-day appointments are often available.',
    },
    {
      question: 'Which station is closest to the studio?',
      answer:
        'West Kensington (District line) and Barons Court (District and Piccadilly lines) are both a few minutes away. Kensington (Olympia) is a 10–15 minute walk.',
    },
    {
      question: 'Do you visit homes or hotels in West Kensington?',
      answer: 'No — all sessions are in-call at my own private studio in W14, which keeps every visit comfortable, consistent and completely discreet.',
    },
  ],
}

export const metadata: Metadata = generateLocalMetadata(config)

export default function MassageWestKensingtonPage() {
  return <LocalAreaPage config={config} />
}

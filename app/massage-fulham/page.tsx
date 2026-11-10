import type { Metadata } from 'next'
import { LocalAreaPage, generateLocalMetadata, type LocalAreaConfig } from '@/lib/localAreaPage'

const config: LocalAreaConfig = {
  area: 'Fulham',
  slug: 'massage-fulham',
  postcodes: 'SW6',
  h1: 'Sensual & Tantric Massage near Fulham',
  metaTitle: 'Massage Fulham — Tantric & Sensual',
  metaDescription:
    "Sensual, tantric and nuru massage near Fulham (SW6). Anna's private in-call studio is next door in West Kensington, W14. From £80. Open daily 11:00–22:00.",
  intro:
    'A private massage studio next door to Fulham. Sensual, tantric, nuru and body-to-body massage with Anna in West Kensington (W14), the neighbourhood at the top of North End Road — open daily from 11:00 to 22:00.',
  keywords: [
    'massage fulham',
    'tantric massage fulham',
    'sensual massage fulham',
    'nuru massage fulham',
    'erotic massage fulham',
    'massage sw6',
    'massage fulham broadway',
  ],
  body: `
    <h2>Massage Next Door to Fulham</h2>
    <p>Fulham and West Kensington run into each other along North End Road: walk north from Fulham Broadway past the market and you arrive in W14. From most of SW6, my studio is a short walk, a quick bus ride or a five-to-ten minute taxi away — closer than Chelsea, and far closer than the West End.</p>
    <p>It suits anyone living around Fulham Broadway, Parsons Green, Munster Village or Bishop's Park who would like a private, unhurried massage without crossing London for it.</p>

    <h2>A Private Studio, Not a Salon</h2>
    <p>I work alone from my own in-call studio — warm, candlelit and immaculately clean, with fresh linen and a shower. No reception, no waiting room and no other clients passing through. Your visit is entirely private.</p>

    <h2>Tantric, Sensual and Nuru Massage near Fulham</h2>
    <p>My signature styles are <a href="/services/tantric-massage">tantric massage</a>, <a href="/services/sensual-massage">sensual massage</a>, <a href="/services/nuru-massage">nuru massage</a> and <a href="/services/body-to-body-massage">body to body massage</a>. For pure relaxation there is also <a href="/services/relaxing-massage">relaxing</a>, <a href="/services/aromatherapy-massage">aromatherapy</a>, <a href="/services/full-body-massage">full body</a> and <a href="/services/hot-stone-massage">hot stone massage</a>.</p>
    <p>If you are deciding between styles, my guide to <a href="/blog/what-is-tantric-massage-london">what tantric massage is</a> and the comparison of <a href="/blog/nuru-body-to-body-massage-london">nuru and body-to-body massage</a> are good places to start.</p>

    <h2>Booking from Fulham</h2>
    <p>Message me on WhatsApp with the massage you would like and a time that suits you. Being so close, same-day and after-work appointments are often easy to arrange. I will confirm discreetly and send the exact address and directions.</p>
  `,
  travel: [
    { from: 'Fulham Broadway', how: "District line to Earl's Court, then one stop to West Kensington — about 10–15 minutes" },
    { from: 'North End Road', how: 'Walk or take a bus north — the road leads straight to West Kensington' },
    { from: 'Parsons Green / Putney Bridge', how: "District line via Earl's Court — about 15–20 minutes" },
    { from: 'By taxi', how: '5–10 minutes from most of SW6' },
  ],
  faqs: [
    {
      question: 'Where can I get a tantric massage near Fulham?',
      answer:
        "Anna offers tantric, sensual, nuru and body-to-body massage at a private in-call studio in West Kensington (W14), which borders Fulham at the top of North End Road. The exact address is shared once your booking is confirmed.",
    },
    {
      question: 'How far is the studio from Fulham Broadway?',
      answer:
        "About 10–15 minutes by Tube (District line, changing at Earl's Court), 5–10 minutes by taxi, or a walk of around 20 minutes straight up North End Road.",
    },
    {
      question: 'How much does a massage near Fulham cost?',
      answer:
        'Sensual and relaxing massage are £80 for 30 minutes or £120 for an hour. Tantric, nuru and body-to-body massage are £100 for 30 minutes or £140 for an hour. Payment is by cash on the day.',
    },
    {
      question: 'Do you offer outcall massage in Fulham?',
      answer: 'No. All sessions are in-call at my own private studio in neighbouring West Kensington (W14).',
    },
    {
      question: 'What are your opening hours?',
      answer: 'Every day from 11:00 to 22:00, including weekends. Same-day appointments are often available.',
    },
  ],
}

export const metadata: Metadata = generateLocalMetadata(config)

export default function MassageFulhamPage() {
  return <LocalAreaPage config={config} />
}

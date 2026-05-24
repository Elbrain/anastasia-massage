import type { Metadata } from 'next'
import { LocalAreaPage, generateLocalMetadata, type LocalAreaConfig } from '@/lib/localAreaPage'

const config: LocalAreaConfig = {
  area: 'West London',
  slug: 'massage-west-london',
  postcodes: 'W1 · W2 · W6 · W8 · W11',
  intro:
    'Professional massage therapy across West London by certified therapist Anastasia. Serving Notting Hill, Kensington, Chelsea, Hammersmith, Chiswick and surrounding areas. In-call and outcall daily 11:00–22:00.',
  keywords: ['massage west london', 'massage therapist west london', 'outcall massage west london', 'mobile massage west london', 'best massage west london'],
  body: `
    <h2>Massage Across West London</h2>
    <p>West London covers a wide sweep of residential and professional London — from the grand streets of Holland Park and Notting Hill, through Hammersmith and Chiswick, to the riverside neighbourhoods of Fulham and Barnes. The area is home to a highly active professional population, many of whom travel regularly, work long hours, and carry the physical consequence of both.</p>

    <h2>Outcall Coverage</h2>
    <p>Outcall massage is available across the main West London postcodes: W2, W6, W8, W11, W14, SW6, SW13, and adjacent areas. This covers Notting Hill, Holland Park, Kensington, Hammersmith, Shepherd's Bush, Chiswick, Fulham, and Barnes. Travel supplement applies and varies by distance from Central London.</p>
    <p>For hotels — and West London has a significant number, particularly around Hammersmith and Kensington — outcall to your room is straightforward. A booking form or WhatsApp message is all that's needed to confirm the slot.</p>

    <h2>In-Call from West London</h2>
    <p>The Central London treatment room is well connected from all West London areas. The District, Circle, Piccadilly, and Central lines all serve the western zones, giving good access to Central London in 20-30 minutes from most West London starting points.</p>
    <p>For clients who prefer a dedicated treatment room environment — better equipment, greater privacy, no need to prepare space at home — in-call remains the better option for many.</p>

    <h2>Common Needs Across the Area</h2>
    <p>West London's demographic skews towards active, health-conscious professionals. Common treatment requests include sports massage for regular runners and gym-goers (Chiswick, Barnes, and Richmond Park are popular running routes), deep tissue for tech and finance professionals who commute to Central London, and relaxation and Swedish massage for general stress management and sleep.</p>
    <p>Evening appointments — particularly 18:00–21:00 — are most popular across West London given the commute times involved. Availability up to 22:00 daily accommodates late-evening slots.</p>
  `,
  faqs: [
    {
      question: 'Do you offer massage across West London?',
      answer: 'Yes. Outcall massage covers W2, W6, W8, W11, W14, SW6, SW13 and adjacent postcodes. In-call at Central London treatment room also available. Daily 11:00–22:00.',
    },
    {
      question: 'Which areas of West London do you cover for outcall?',
      answer: 'Notting Hill, Holland Park, Kensington, Hammersmith, Shepherd\'s Bush, Chiswick, Fulham, Barnes, and most surrounding West London areas. Travel supplement applies.',
    },
    {
      question: 'What type of massage is most popular in West London?',
      answer: 'Sports massage and deep tissue are most requested. Swedish and relaxation massage are also popular for stress relief and sleep. All massage types are available for both outcall and in-call.',
    },
  ],
}

export const metadata: Metadata = generateLocalMetadata(config)

export default function MassageWestLondonPage() {
  return <LocalAreaPage config={config} />
}

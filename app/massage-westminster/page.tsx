import type { Metadata } from 'next'
import { LocalAreaPage, generateLocalMetadata, type LocalAreaConfig } from '@/lib/localAreaPage'

const config: LocalAreaConfig = {
  area: 'Westminster',
  slug: 'massage-westminster',
  postcodes: 'SW1 · WC2',
  intro:
    'Professional massage in Westminster by certified therapist Anastasia. Central London, easily accessible for Westminster residents and professionals. In-call and outcall daily 11:00–22:00.',
  keywords: ['massage westminster', 'massage therapist westminster', 'massage central london sw1', 'outcall massage westminster', 'professional massage westminster'],
  body: `
    <h2>Massage in Westminster</h2>
    <p>Westminster sits at the heart of London's professional and civic life. Pimlico, Belgravia, Victoria, St James's, Covent Garden, and the immediate surroundings form one of the most densely occupied professional environments in the UK. The physical and psychological demands of working in this environment are correspondingly significant.</p>

    <h2>The Westminster Professional</h2>
    <p>Whether you work in government, finance, law, or media — or live in one of Westminster's residential areas — the combination of sustained desk work, long hours, and high-pressure environments creates predictable physical patterns: upper back and neck tension, headaches, lower back pain, disrupted sleep.</p>
    <p>Regular massage addresses these patterns directly. Deep tissue work for the accumulated tension, Swedish or relaxation massage for nervous system regulation, and the improved sleep that follows an evening session on the same night.</p>

    <h2>In-Call and Outcall</h2>
    <p>Westminster is close to Central London's treatment room options — accessible from Victoria, St James's Park, Westminster, and Covent Garden stations in under 15 minutes.</p>
    <p>For SW1 residents, outcall to Pimlico, Belgravia, Victoria, and the surrounding areas is within standard coverage. Travel supplement applies.</p>

    <h2>Evening Appointments</h2>
    <p>Evening appointments (18:00–21:00) are most popular with Westminster's professional population. Availability up to 22:00 daily accommodates the later finish times common in this area.</p>
  `,
  faqs: [
    {
      question: 'Do you offer massage in Westminster?',
      answer: 'Yes. Both in-call at Central London treatment room (short journey from Westminster) and outcall to SW1 addresses. Daily 11:00–22:00.',
    },
    {
      question: 'What massage is best for professionals in Westminster?',
      answer: 'Deep tissue massage for desk work tension and upper back/neck pain is most popular. Swedish massage for stress relief and sleep improvement. Sports massage for those who train.',
    },
    {
      question: 'Can I book a same-day massage in Westminster?',
      answer: 'Same-day bookings are sometimes available for weekday morning and afternoon slots. Evening and weekend slots are best booked in advance.',
    },
  ],
}

export const metadata: Metadata = generateLocalMetadata(config)

export default function MassageWestminsterPage() {
  return <LocalAreaPage config={config} />
}

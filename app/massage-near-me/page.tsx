import type { Metadata } from 'next'
import { LocalAreaPage, generateLocalMetadata, type LocalAreaConfig } from '@/lib/localAreaPage'

const config: LocalAreaConfig = {
  area: 'Near Me',
  slug: 'massage-near-me',
  postcodes: 'London-wide',
  intro:
    'Looking for a massage therapist near you in London? Anastasia is a certified massage therapist offering in-call at a Central London treatment room and outcall across most London postcodes. Daily 11:00–22:00.',
  keywords: ['massage near me london', 'massage therapist near me london', 'mobile massage near me', 'outcall massage near me london', 'best massage near me london'],
  body: `
    <h2>Finding Massage Near You in London</h2>
    <p>If you're searching for massage near you in London, the two key factors are where you want the treatment to happen and what type of therapist you're looking for. For most London residents, the choice is between outcall massage (the therapist comes to you) and in-call massage (you travel to a treatment room).</p>

    <h2>Outcall Massage — The Therapist Comes to You</h2>
    <p>Outcall massage is available across Central and West London, covering most major postcodes in zones 1 and 2. If you're in Westminster, Kensington, Chelsea, Paddington, Marylebone, Notting Hill, Fulham, or the surrounding areas, outcall to your home or hotel is within the standard service area.</p>
    <p>The advantages of outcall are clear: you don't have to travel, you don't have to dress or go anywhere after the treatment, and the recovery time starts immediately. For evening sessions, this is particularly useful — you can go directly to bed if that's what the treatment calls for.</p>
    <p>A portable professional treatment table, clean linens, and all required oils and equipment are brought to your location. You need a clear space of approximately 250cm × 200cm.</p>

    <h2>In-Call — Visit the Treatment Room</h2>
    <p>For clients who prefer the environment of a dedicated treatment room, in-call at the Central London practice is the better option. The room is specifically set up for professional massage — with proper equipment, heating and lighting control, and a focused atmosphere that can be harder to replicate in a home or hotel setting.</p>
    <p>The treatment room is accessible from most London tube lines and is a short journey from Central, West, and South West London. The exact address is confirmed on booking.</p>

    <h2>Same-Day and Short-Notice Bookings</h2>
    <p>Short-notice bookings are sometimes available, particularly for midweek daytime slots. Evening and weekend slots are more consistently available with 24–48 hours' notice. If you need a massage today, the best approach is to message on WhatsApp directly — this gives the fastest response to check real-time availability.</p>

    <h2>What to Expect</h2>
    <p>Whether you book outcall or in-call, the treatment is personalised to your needs. A short consultation at the start of each session covers what areas to focus on, pressure preference, any injuries or conditions, and what outcome you're looking for (relaxation, pain relief, recovery, etc.).</p>
    <p>All treatments are professional, certified, and tailored — not the rushed, one-size-fits-all experience common in chain spas or high-street salons.</p>
  `,
  faqs: [
    {
      question: 'Is there a massage therapist near me in London?',
      answer: 'Yes. Anastasia offers outcall massage across Central and West London, plus in-call at a Central London treatment room. Daily 11:00–22:00. Use the booking form or WhatsApp to check availability.',
    },
    {
      question: 'Can I get a massage at home in London?',
      answer: 'Yes. Outcall massage to your home is available across most Central and West London postcodes. The therapist brings all equipment. Travel supplement applies.',
    },
    {
      question: 'How quickly can I get a massage near me in London?',
      answer: 'Weekday daytime slots are sometimes available same-day. Evening and weekend slots typically need 24–48 hours notice. For fastest availability check, message via WhatsApp.',
    },
    {
      question: 'What areas do you cover for mobile massage in London?',
      answer: 'Coverage includes Westminster, Kensington, Chelsea, Paddington, Marylebone, Notting Hill, Fulham, Hammersmith, and most Central and West London postcodes in zones 1-2.',
    },
  ],
}

export const metadata: Metadata = generateLocalMetadata(config)

export default function MassageNearMePage() {
  return <LocalAreaPage config={config} />
}

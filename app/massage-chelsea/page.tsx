import type { Metadata } from 'next'
import { LocalAreaPage, generateLocalMetadata, type LocalAreaConfig } from '@/lib/localAreaPage'

const config: LocalAreaConfig = {
  area: 'Chelsea',
  slug: 'massage-chelsea',
  postcodes: 'SW3 · SW10',
  intro:
    'Professional massage therapy in Chelsea by certified therapist Anastasia. In-call at the Central London treatment room or outcall to your home in SW3 or SW10. Available daily 11:00–22:00.',
  keywords: ['massage chelsea', 'massage therapist chelsea', 'deep tissue massage chelsea', 'outcall massage chelsea london', 'mobile massage sw3'],
  body: `
    <h2>Massage Therapy in Chelsea</h2>
    <p>Chelsea combines a premium residential address with a strongly professional population — the combination creates consistent demand for quality, personalised massage therapy. Whether you're dealing with the physical toll of a demanding career or want to establish a regular self-care routine, professional massage in Chelsea is accessible both as outcall to your home and as in-call at a Central London treatment room.</p>

    <h2>Chelsea's Specific Needs</h2>
    <p>The Chelsea demographic — finance and law professionals, creative industry workers, active residents — creates demand for specific types of massage therapy. Deep tissue work for the accumulated shoulder and neck tension of sustained desk work is among the most common requests. Sports massage for regular gym-goers and runners. Swedish and relaxation massage for stress relief and sleep improvement.</p>
    <p>The Kings Road and Fulham Road both have wellness options, but for genuinely personalised, therapeutic work from a certified independent therapist, an in-call or outcall arrangement typically offers better value and better outcomes.</p>

    <h2>In-Call and Outcall</h2>
    <p>Chelsea (SW3, SW10) is within Anastasia's standard outcall coverage area. Travel supplement applies. The area's substantial housing stock — period conversions, garden flats, larger houses — typically provides appropriate space for a professional portable treatment setup.</p>
    <p>For in-call, the Central London treatment room is accessible from Chelsea in 15-20 minutes by transport.</p>

    <h2>Evening Availability</h2>
    <p>Chelsea professionals often have limited daytime flexibility but increasing availability from 18:00 onwards. Evening slots are available up to 22:00 daily, including weekends.</p>
  `,
  faqs: [
    {
      question: 'Do you offer massage in Chelsea, London?',
      answer: 'Yes. Anastasia offers outcall massage to Chelsea (SW3, SW10) and in-call at the Central London treatment room. Available daily 11:00–22:00.',
    },
    {
      question: 'What is the best massage for Chelsea residents?',
      answer: 'Deep tissue massage for desk work tension, sports massage for active residents, and Swedish/relaxation massage for stress management are most popular in this area.',
    },
    {
      question: 'How do I book a massage in Chelsea?',
      answer: 'Use the online booking form or message on WhatsApp. Include your Chelsea address when booking an outcall session.',
    },
  ],
}

export const metadata: Metadata = generateLocalMetadata(config)

export default function MassageChelseaPage() {
  return <LocalAreaPage config={config} />
}

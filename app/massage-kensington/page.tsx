import type { Metadata } from 'next'
import { LocalAreaPage, generateLocalMetadata, type LocalAreaConfig } from '@/lib/localAreaPage'

const config: LocalAreaConfig = {
  area: 'Kensington',
  slug: 'massage-kensington',
  postcodes: 'W8 · SW7',
  intro:
    'Professional massage therapy in Kensington by certified therapist Anastasia. Swedish, deep tissue, sports, aromatherapy, hot stone and more — in-call and outcall available daily 11:00–22:00.',
  keywords: ['massage kensington', 'massage therapist kensington', 'deep tissue massage kensington', 'outcall massage kensington london', 'mobile massage kensington'],
  body: `
    <h2>Professional Massage in Kensington</h2>
    <p>Kensington is one of London's most desirable residential areas — and one of the best-served when it comes to professional massage therapy. Whether you're based in the W8 streets near Holland Park or the SW7 postcodes of South Kensington, professional in-call and outcall massage is straightforwardly available.</p>

    <h2>In-Call and Outcall Options</h2>
    <p>For residents who prefer the dedicated environment of a treatment room, Anastasia's Central London practice is a short journey from Kensington — accessible via High Street Kensington or Gloucester Road tube stations.</p>
    <p>For those who prefer massage at home, outcall to Kensington (W8, SW7) is available within the standard service area. A travel supplement applies on top of the treatment rate. You'll need a clear space of approximately 250cm × 200cm — Kensington's substantial housing stock means this is rarely an issue.</p>

    <h2>Popular Treatments in Kensington</h2>
    <p>The most frequently requested treatments in this area reflect the client demographic: deep tissue massage for professionals managing the physical toll of demanding careers; sports massage for residents who train regularly at nearby facilities; Swedish and relaxation massage for stress management and regular self-care.</p>
    <p>Hot stone massage is particularly popular in the autumn and winter months — the deep warmth of the stones suits the season perfectly.</p>

    <h2>Booking</h2>
    <p>Evening appointments (17:00–21:00) are particularly in demand in Kensington. Booking 2-3 days ahead for these slots is advisable. Weekday morning and afternoon appointments are generally more available at shorter notice.</p>
  `,
  faqs: [
    {
      question: 'Do you offer outcall massage to Kensington?',
      answer: 'Yes. Anastasia covers Kensington (W8) and South Kensington (SW7) for outcall massage. A travel supplement applies. Available daily 11:00–22:00.',
    },
    {
      question: 'What massage types are available in Kensington?',
      answer: 'Swedish, deep tissue, sports, aromatherapy, hot stone, therapeutic, relaxing and full body massage are all available — either as outcall to Kensington or in-call at the Central London treatment room.',
    },
    {
      question: 'How do I book a massage in Kensington?',
      answer: 'Book via the online booking form or message on WhatsApp. Confirm your Kensington address when booking an outcall. Response within a few hours.',
    },
  ],
}

export const metadata: Metadata = generateLocalMetadata(config)

export default function MassageKensingtonPage() {
  return <LocalAreaPage config={config} />
}

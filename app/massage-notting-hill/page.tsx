import type { Metadata } from 'next'
import { LocalAreaPage, generateLocalMetadata, type LocalAreaConfig } from '@/lib/localAreaPage'

const config: LocalAreaConfig = {
  area: 'Notting Hill',
  slug: 'massage-notting-hill',
  postcodes: 'W11 · W10',
  intro:
    'Professional massage therapy in Notting Hill by certified therapist Anastasia. Outcall to W11 homes and in-call at Central London treatment room. Available daily 11:00–22:00.',
  keywords: ['massage notting hill', 'massage therapist notting hill', 'outcall massage notting hill', 'mobile massage w11', 'deep tissue massage notting hill'],
  body: `
    <h2>Massage in Notting Hill</h2>
    <p>Notting Hill occupies a particular position in West London — genuinely residential, with a strong community character, but close enough to Central London that many residents commute daily into the city's financial and creative industries. The W11 postcode is home to a wide range of professionals, creatives, families, and active residents who make regular use of Holland Park, Portobello Road, and Westbourne Grove.</p>

    <h2>Outcall to Notting Hill</h2>
    <p>Outcall massage to Notting Hill (W11, W10) is available within the standard service area. The area's housing stock — Victorian terraces, converted flats, townhouses — typically provides comfortable space for a professional portable setup. You need a clear area of approximately 250cm × 200cm, which is easily achieved in most living rooms or bedrooms.</p>
    <p>Evening appointments are popular in Notting Hill given the area's relatively relaxed pace compared to Central London. A 19:00 or 20:00 treatment is a practical way to decompress after a working day before settling in for the evening.</p>

    <h2>Holland Park and Active Residents</h2>
    <p>Holland Park is one of the finest green spaces in London — a frequent running route for Notting Hill residents. Sports massage and recovery work are natural requests from this demographic. Deep tissue and sports massage are the most frequently requested treatments, followed by Swedish for general relaxation and stress management.</p>

    <h2>Access from Notting Hill</h2>
    <p>For in-call, the Central London treatment room is accessible from Notting Hill Gate station in under 20 minutes via the Central or Circle/District lines. An alternative to the home-based session for clients who prefer a dedicated treatment environment.</p>

    <h2>Regular Bookings</h2>
    <p>Regular fortnightly or monthly massage is popular among Notting Hill's professional population. Once a regular booking is established, a consistent day and time is usually possible to hold — providing the routine continuity that makes therapeutic massage most effective.</p>
  `,
  faqs: [
    {
      question: 'Do you offer massage in Notting Hill?',
      answer: 'Yes. Anastasia offers outcall to Notting Hill (W11, W10) and in-call at the Central London treatment room. Daily 11:00–22:00. Travel supplement applies for outcall.',
    },
    {
      question: 'What is the best massage for Notting Hill residents?',
      answer: 'Deep tissue and sports massage for active residents, Swedish for relaxation and stress management. Evening outcall sessions are most popular. All treatments available in-call or outcall.',
    },
    {
      question: 'Can I set up a regular massage in Notting Hill?',
      answer: 'Yes. Regular weekly, fortnightly or monthly slots are available. Once a recurring booking is confirmed, a consistent day and time can usually be held.',
    },
  ],
}

export const metadata: Metadata = generateLocalMetadata(config)

export default function MassageNottingHillPage() {
  return <LocalAreaPage config={config} />
}

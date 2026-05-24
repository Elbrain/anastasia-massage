import type { Metadata } from 'next'
import { LocalAreaPage, generateLocalMetadata, type LocalAreaConfig } from '@/lib/localAreaPage'

const config: LocalAreaConfig = {
  area: 'Paddington',
  slug: 'massage-paddington',
  postcodes: 'W2 · W9',
  intro:
    'Professional massage near Paddington by certified therapist Anastasia. Central London treatment room minutes away, or outcall to your home or hotel in W2. Available daily 11:00–22:00.',
  keywords: ['massage paddington', 'massage near paddington', 'massage therapist paddington', 'massage w2', 'hotel massage paddington london'],
  body: `
    <h2>Massage Near Paddington Station</h2>
    <p>Paddington is one of London's most central transport hubs — a convenient location for both residents of the W2 area and visitors arriving via train, the Heathrow Express, or the Elizabeth Line. Professional massage is available both as outcall to hotels and homes in the area and as in-call at the Central London treatment room.</p>

    <h2>Hotel Guests Near Paddington</h2>
    <p>Paddington and Bayswater have a significant concentration of hotels, from budget traveller accommodation to comfortable four-stars. For hotel guests, outcall massage to your room is a straightforward option — avoiding the need to travel after a long journey or a full day of meetings.</p>
    <p>A jet-lag protocol or travel recovery massage in the early evening (around 17:00–19:00) is one of the best possible uses of a first London evening. The parasympathetic activation from a good Swedish or relaxation massage helps reset the nervous system and supports the transition to the local time zone.</p>

    <h2>Residents of the Paddington Area</h2>
    <p>The residential parts of W2 — Bayswater, Little Venice, the streets around the basin — have a resident population that includes long-term locals, professionals, and international residents. Outcall massage to W2 addresses is within the standard service area.</p>

    <h2>In-Call Access</h2>
    <p>The Central London treatment room is accessible from Paddington in 10-15 minutes by tube. Multiple lines serve Paddington, making the connection to Central London straightforward.</p>
  `,
  faqs: [
    {
      question: 'Is there a massage therapist near Paddington Station?',
      answer: 'Yes. Anastasia\'s Central London treatment room is a short journey from Paddington, and outcall massage covers W2 addresses including hotels. Daily 11:00–22:00.',
    },
    {
      question: 'Can a massage therapist come to my Paddington hotel?',
      answer: 'Yes. Outcall massage is available to hotels in the W2 and Paddington area. Travel supplement applies. Book via the booking form or WhatsApp.',
    },
    {
      question: 'What massage is available near Paddington?',
      answer: 'Swedish, deep tissue, sports, aromatherapy, hot stone, therapeutic and relaxation massage. Both outcall to Paddington addresses and in-call at Central London treatment room.',
    },
  ],
}

export const metadata: Metadata = generateLocalMetadata(config)

export default function MassagePaddingtonPage() {
  return <LocalAreaPage config={config} />
}

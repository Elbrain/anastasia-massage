export interface ServiceSummary {
  slug: string
  name: string
  /** Display string, e.g. "30 / 60 min" */
  duration: string
  /** Display string, e.g. "From £80" */
  price: string
  /** Price in GBP for a 30-minute session, if offered */
  price30?: number
  /** Price in GBP for a 60-minute session */
  price60: number
  /** One-sentence plain-language summary (used in llms.txt, schema and cards) */
  summary: string
}

export interface AreaSummary {
  slug: string
  /** Short area name, e.g. "Kensington" */
  name: string
  postcodes: string
  /** One-line note on how close the studio is */
  proximity: string
}

export const siteConfig = {
  name: 'Anna',
  fullName: 'Anna — Sensual Massage London',
  /** Short brand used as the <title> suffix */
  titleBrand: 'Anna Massage London',
  tagline: 'Sensual, Tantric & Nuru Massage in London',
  description:
    'Private sensual massage in West Kensington, London by Anna. Sensual, body-to-body, tantric and nuru massage in a warm, discreet in-call studio (W14). Daily 11:00–22:00. Book via WhatsApp.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.anamassage4u.co.uk',
  /** Date the site content was last reviewed — used for sitemap lastmod and llms.txt */
  lastUpdated: '2026-11-10',
  phone: '+447452327767',
  phoneDisplay: '+44 7452 327 767',
  whatsapp: '447452327767',
  payment: 'Cash',
  address: {
    street: 'In-call studio — exact address shared on booking',
    area: 'West Kensington',
    city: 'London',
    postcode: 'W14',
    country: 'GB',
  },
  /** Nearest Underground stations to the studio */
  stations: ['West Kensington (District line)', 'Barons Court (District & Piccadilly lines)'],
  hours: {
    weekdays: '11:00 – 22:00',
    weekends: '11:00 – 22:00',
    opens: '11:00',
    closes: '22:00',
    note: 'Daily, including weekends',
  },
  geo: {
    lat: 51.4905,
    lng: -0.2060,
  },
  services: [
    {
      slug: 'sensual-massage',
      name: 'Sensual Massage',
      duration: '30 / 60 min',
      price: 'From £80',
      price30: 80,
      price60: 120,
      summary: 'A slow, hands-led full-body massage with warm oil — the gentlest introduction to sensual bodywork.',
    },
    {
      slug: 'body-to-body-massage',
      name: 'Body to Body Massage',
      duration: '30 / 60 min',
      price: 'From £100',
      price30: 100,
      price60: 140,
      summary: 'A warm-oil massage given with the whole body rather than the hands alone — the closest, most immersive style.',
    },
    {
      slug: 'tantric-massage',
      name: 'Tantric Massage',
      duration: '30 / 60 min',
      price: 'From £100',
      price30: 100,
      price60: 140,
      summary: 'A slow, breath-led full-body ritual rooted in tantra, built around presence and gradually building energy.',
    },
    {
      slug: 'nuru-massage',
      name: 'Nuru Massage',
      duration: '30 / 60 min',
      price: 'From £100',
      price30: 100,
      price60: 140,
      summary: 'The Japanese body-to-body massage using warm, silky, odourless seaweed-based nuru gel.',
    },
    {
      slug: 'full-body-massage',
      name: 'Full Body Massage',
      duration: '60 min',
      price: 'From £130',
      price60: 130,
      summary: 'Unhurried head-to-toe warm-oil massage covering the whole body in one flowing session.',
    },
    {
      slug: 'relaxing-massage',
      name: 'Relaxing Massage',
      duration: '30 / 60 min',
      price: 'From £80',
      price30: 80,
      price60: 120,
      summary: 'Gentle, soothing massage with light-to-medium pressure, designed purely to help you switch off.',
    },
    {
      slug: 'aromatherapy-massage',
      name: 'Aromatherapy Massage',
      duration: '30 / 60 min',
      price: 'From £90',
      price30: 90,
      price60: 120,
      summary: 'A relaxing massage with warm aromatic oils chosen to suit your mood.',
    },
    {
      slug: 'hot-stone-massage',
      name: 'Hot Stone Massage',
      duration: '60 min',
      price: 'From £130',
      price60: 130,
      summary: 'Smooth heated stones and warm oil for deep, melting, comforting warmth.',
    },
  ] as ServiceSummary[],
  /** Local landing pages. Order = order shown in hubs and the footer. */
  areas: [
    { slug: 'massage-west-kensington', name: 'West Kensington', postcodes: 'W14', proximity: 'The studio is here' },
    { slug: 'massage-earls-court', name: "Earl's Court", postcodes: 'SW5', proximity: 'One Tube stop away' },
    { slug: 'massage-hammersmith', name: 'Hammersmith', postcodes: 'W6', proximity: 'One to two Tube stops away' },
    { slug: 'massage-fulham', name: 'Fulham', postcodes: 'SW6', proximity: 'Next door, via North End Road' },
    { slug: 'massage-kensington', name: 'Kensington', postcodes: 'W8 · SW7', proximity: 'Minutes away' },
    { slug: 'massage-chelsea', name: 'Chelsea', postcodes: 'SW3 · SW10', proximity: 'A short taxi or Tube ride' },
    { slug: 'massage-notting-hill', name: 'Notting Hill', postcodes: 'W11', proximity: 'A short taxi or bus ride' },
    { slug: 'massage-paddington', name: 'Paddington', postcodes: 'W2', proximity: 'About 15–20 minutes by Tube' },
    { slug: 'massage-near-hyde-park', name: 'Hyde Park', postcodes: 'W2 · SW7 · W1', proximity: 'About 15 minutes away' },
    { slug: 'massage-westminster', name: 'Westminster', postcodes: 'SW1', proximity: 'Direct on the District line' },
    { slug: 'massage-central-london', name: 'Central London', postcodes: 'W1 · WC · SW1', proximity: '15–25 minutes by Tube' },
    { slug: 'massage-west-london', name: 'West London', postcodes: 'W · SW', proximity: 'Based in the heart of it' },
  ] as AreaSummary[],
}

export function getService(slug: string): ServiceSummary | undefined {
  return siteConfig.services.find((s) => s.slug === slug)
}

export const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}`

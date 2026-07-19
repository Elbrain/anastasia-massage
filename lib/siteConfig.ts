export const siteConfig = {
  name: 'Anna',
  fullName: 'Anna — Sensual Massage London',
  tagline: 'Sensual, Tantric & Nuru Massage in London',
  description:
    'Private sensual massage in West Kensington, London by Anna. Sensual, body-to-body, tantric and nuru massage in a warm, discreet in-call studio (W14). Daily 11:00–22:00. Book via WhatsApp.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.anamassage4u.co.uk',
  phone: '+447452327767',
  phoneDisplay: '+44 7452 327 767',
  whatsapp: '447452327767',
  address: {
    street: 'In-call studio — exact address shared on booking',
    area: 'West Kensington',
    city: 'London',
    postcode: 'W14',
    country: 'GB',
  },
  hours: {
    weekdays: '11:00 – 22:00',
    weekends: '11:00 – 22:00',
    note: 'Daily, including weekends',
  },
  geo: {
    lat: 51.4905,
    lng: -0.2060,
  },
  services: [
    { slug: 'sensual-massage', name: 'Sensual Massage', duration: '30 / 60 min', price: 'From £80' },
    { slug: 'body-to-body-massage', name: 'Body to Body Massage', duration: '30 / 60 min', price: 'From £100' },
    { slug: 'tantric-massage', name: 'Tantric Massage', duration: '30 / 60 min', price: 'From £100' },
    { slug: 'nuru-massage', name: 'Nuru Massage', duration: '30 / 60 min', price: 'From £100' },
    { slug: 'full-body-massage', name: 'Full Body Massage', duration: '60 min', price: 'From £130' },
    { slug: 'relaxing-massage', name: 'Relaxing Massage', duration: '30 / 60 min', price: 'From £80' },
    { slug: 'aromatherapy-massage', name: 'Aromatherapy Massage', duration: '30 / 60 min', price: 'From £90' },
    { slug: 'hot-stone-massage', name: 'Hot Stone Massage', duration: '60 min', price: 'From £130' },
  ],
}

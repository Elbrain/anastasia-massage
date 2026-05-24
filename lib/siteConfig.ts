export const siteConfig = {
  name: 'Anastasia',
  fullName: 'Anastasia — Massage Therapist London',
  tagline: 'Certified Massage Therapist in London',
  description:
    'Professional massage therapy in London. Swedish, deep tissue, sports, aromatherapy and more. In-call and outcall available. Book your appointment today.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://anastassiamassage.co.uk',
  phone: '+44 7700 000000',
  phoneDisplay: '+44 7700 000 000',
  whatsapp: '447700000000',
  email: 'hello@anastassiamassage.co.uk',
  address: {
    street: 'Treatment room address — coming soon',
    area: 'Central London',
    city: 'London',
    postcode: 'W1',
    country: 'GB',
  },
  hours: {
    weekdays: '11:00 – 22:00',
    weekends: '11:00 – 22:00',
    note: 'Daily, including weekends',
  },
  geo: {
    lat: 51.5074,
    lng: -0.1278,
  },
  social: {
    instagram: 'https://instagram.com/anastassiamassage',
    facebook: 'https://facebook.com/anastassiamassage',
  },
  services: [
    { slug: 'swedish-massage', name: 'Swedish Massage', duration: '60 / 90 / 120 min', price: 'From £80' },
    { slug: 'deep-tissue-massage', name: 'Deep Tissue Massage', duration: '60 / 90 / 120 min', price: 'From £90' },
    { slug: 'sports-massage', name: 'Sports Massage', duration: '60 / 90 min', price: 'From £85' },
    { slug: 'aromatherapy-massage', name: 'Aromatherapy Massage', duration: '60 / 90 / 120 min', price: 'From £90' },
    { slug: 'hot-stone-massage', name: 'Hot Stone Massage', duration: '90 / 120 min', price: 'From £100' },
    { slug: 'therapeutic-massage', name: 'Therapeutic Massage', duration: '60 / 90 min', price: 'From £85' },
    { slug: 'relaxing-massage', name: 'Relaxing Massage', duration: '60 / 90 / 120 min', price: 'From £80' },
    { slug: 'full-body-massage', name: 'Full Body Massage', duration: '90 / 120 min', price: 'From £90' },
  ],
}

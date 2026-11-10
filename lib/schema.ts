import { siteConfig, getService } from './siteConfig'

/**
 * Stable entity IDs. Every schema block on the site points back to these so
 * search engines and AI assistants resolve them to ONE business and ONE person.
 */
export const BUSINESS_ID = `${siteConfig.url}/#business`
export const PERSON_ID = `${siteConfig.url}/#anna`
export const WEBSITE_ID = `${siteConfig.url}/#website`

const AREA_SERVED = [
  'West Kensington',
  "Earl's Court",
  'Barons Court',
  'Olympia',
  'Hammersmith',
  'Fulham',
  'Kensington',
  'South Kensington',
  'Holland Park',
  "Shepherd's Bush",
  'Chelsea',
  'Notting Hill',
  'Paddington',
  'Westminster',
  'West London',
  'Central London',
]

function serviceOffers(slug: string) {
  const service = getService(slug)
  if (!service) return undefined
  const offers = []
  if (service.price30) {
    offers.push({
      '@type': 'Offer',
      name: `${service.name} — 30 minutes`,
      price: service.price30,
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
      url: `${siteConfig.url}/services/${service.slug}`,
    })
  }
  offers.push({
    '@type': 'Offer',
    name: `${service.name} — 60 minutes`,
    price: service.price60,
    priceCurrency: 'GBP',
    availability: 'https://schema.org/InStock',
    url: `${siteConfig.url}/services/${service.slug}`,
  })
  return offers
}

export function personSchema() {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: siteConfig.name,
    jobTitle: 'Independent sensual massage therapist',
    description:
      'Anna is an independent sensual massage therapist working from her own private in-call studio in West Kensington, London W14. She offers sensual, tantric, nuru and body-to-body massage.',
    url: `${siteConfig.url}/about`,
    image: `${siteConfig.url}/images/anastasia-portrait.jpg`,
    worksFor: { '@id': BUSINESS_ID },
    workLocation: {
      '@type': 'Place',
      name: 'West Kensington, London W14',
    },
    knowsAbout: [
      'Sensual massage',
      'Tantric massage',
      'Nuru massage',
      'Body to body massage',
      'Aromatherapy massage',
      'Hot stone massage',
    ],
  }
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: siteConfig.url,
    name: siteConfig.fullName,
    alternateName: ['Anna Massage London', 'Anna Sensual Massage'],
    description: siteConfig.description,
    inLanguage: 'en-GB',
    publisher: { '@id': BUSINESS_ID },
  }
}

export function localBusinessSchema() {
  const lowPrice = Math.min(...siteConfig.services.map((s) => s.price30 ?? s.price60))
  const highPrice = Math.max(...siteConfig.services.map((s) => s.price60))

  return {
    '@type': ['LocalBusiness', 'HealthAndBeautyBusiness'],
    '@id': BUSINESS_ID,
    name: siteConfig.fullName,
    alternateName: 'Anna Massage London',
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    image: [`${siteConfig.url}/og-default.jpg`, `${siteConfig.url}/images/anastasia-portrait.jpg`],
    logo: `${siteConfig.url}/logo.png`,
    priceRange: `£${lowPrice}–£${highPrice}`,
    currenciesAccepted: 'GBP',
    paymentAccepted: siteConfig.payment,
    founder: { '@id': PERSON_ID },
    employee: { '@id': PERSON_ID },
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.address.area,
      addressRegion: 'London',
      postalCode: siteConfig.address.postcode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: siteConfig.hours.opens,
        closes: siteConfig.hours.closes,
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'reservations',
      telephone: siteConfig.phone,
      url: `https://wa.me/${siteConfig.whatsapp}`,
      availableLanguage: ['English'],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Massage menu',
      itemListElement: siteConfig.services.map((s) => ({
        '@type': 'Offer',
        name: s.name,
        description: s.summary,
        url: `${siteConfig.url}/services/${s.slug}`,
        priceCurrency: 'GBP',
        price: s.price30 ?? s.price60,
        itemOffered: {
          '@type': 'Service',
          '@id': `${siteConfig.url}/services/${s.slug}#service`,
          name: s.name,
        },
      })),
    },
    areaServed: AREA_SERVED.map((name) => ({ '@type': 'Place', name })),
    knowsAbout: ['Sensual massage', 'Tantric massage', 'Nuru massage', 'Body to body massage'],
  }
}

/** Site-wide graph: one business, one person, one website — all cross-linked. */
export function siteGraphSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [localBusinessSchema(), personSchema(), websiteSchema()],
  }
}

export function blogPostingSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  image,
  category,
  keywords,
  wordCount,
}: {
  title: string
  description: string
  slug: string
  datePublished: string
  dateModified?: string
  image?: string
  category?: string
  keywords?: string[]
  wordCount?: number
}) {
  const url = `${siteConfig.url}/blog/${slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: title,
    description,
    url,
    // Local images are stored as site-relative paths; schema needs absolute URLs.
    image: image ? (image.startsWith('/') ? `${siteConfig.url}${image}` : image) : `${siteConfig.url}/og-default.jpg`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    inLanguage: 'en-GB',
    ...(category ? { articleSection: category } : {}),
    ...(keywords && keywords.length > 0 ? { keywords: keywords.join(', ') } : {}),
    ...(wordCount ? { wordCount } : {}),
    author: { '@id': PERSON_ID, '@type': 'Person', name: siteConfig.name, url: `${siteConfig.url}/about` },
    publisher: {
      '@id': BUSINESS_ID,
      '@type': 'Organization',
      name: siteConfig.fullName,
      logo: { '@type': 'ImageObject', url: `${siteConfig.url}/logo.png` },
    },
    isPartOf: { '@id': WEBSITE_ID },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  }
}

export function serviceSchema({
  name,
  description,
  slug,
}: {
  name: string
  description: string
  slug: string
}) {
  const offers = serviceOffers(slug)
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/services/${slug}#service`,
    name: `${name} in London`,
    description,
    url: `${siteConfig.url}/services/${slug}`,
    serviceType: name,
    provider: { '@id': BUSINESS_ID },
    areaServed: { '@type': 'City', name: 'London' },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceLocation: {
        '@type': 'Place',
        name: 'Private in-call studio, West Kensington, London W14',
      },
      servicePhone: siteConfig.phone,
      serviceUrl: `https://wa.me/${siteConfig.whatsapp}`,
    },
    ...(offers ? { offers } : {}),
  }
}

/** For local landing pages: the business as it serves one named area. */
export function areaServiceSchema({ area, slug }: { area: string; slug: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Sensual and tantric massage near ${area}`,
    url: `${siteConfig.url}/${slug}`,
    serviceType: 'Sensual massage',
    provider: { '@id': BUSINESS_ID },
    areaServed: { '@type': 'Place', name: `${area}, London` },
  }
}

export function aboutPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: `${siteConfig.url}/about`,
    name: 'About Anna',
    mainEntity: { '@id': PERSON_ID },
    isPartOf: { '@id': WEBSITE_ID },
  }
}

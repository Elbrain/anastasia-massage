import { siteConfig } from './siteConfig'

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HealthAndBeautyBusiness'],
    '@id': `${siteConfig.url}/#business`,
    name: siteConfig.fullName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    image: `${siteConfig.url}/logo.png`,
    logo: `${siteConfig.url}/logo.png`,
    priceRange: '££',
    currenciesAccepted: 'GBP',
    paymentAccepted: 'Cash, Bank Transfer',
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
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '11:00',
        closes: '22:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Massage Services',
      itemListElement: siteConfig.services.map((s, i) => ({
        '@type': 'Offer',
        position: i + 1,
        name: s.name,
        url: `${siteConfig.url}/services/${s.slug}`,
      })),
    },
    areaServed: [
      'Kensington',
      'Chelsea',
      'Westminster',
      'Paddington',
      'Notting Hill',
      'Hyde Park',
      'Mayfair',
      'Knightsbridge',
      'Belgravia',
      'South Kensington',
      'Bayswater',
      'Marylebone',
      'Fitzrovia',
      'Soho',
      'London',
    ],
  }
}

export function blogPostingSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  image,
}: {
  title: string
  description: string
  slug: string
  datePublished: string
  dateModified?: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url: `${siteConfig.url}/blog/${slug}`,
    image: image ?? `${siteConfig.url}/og-default.jpg`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      '@type': 'Person',
      name: 'Anna',
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.fullName,
      logo: { '@type': 'ImageObject', url: `${siteConfig.url}/logo.png` },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${slug}`,
    },
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

export function breadcrumbSchema(
  items: { name: string; href: string }[]
) {
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
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${siteConfig.url}/services/${slug}`,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.fullName,
      url: siteConfig.url,
    },
    areaServed: { '@type': 'City', name: 'London' },
    serviceType: 'Massage Therapy',
  }
}

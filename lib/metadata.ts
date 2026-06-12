import type { Metadata } from 'next'
import { siteConfig } from './siteConfig'

interface MetaOptions {
  title: string
  description: string
  path?: string
  image?: string
  keywords?: string[]
  noIndex?: boolean
}

export function buildMetadata({
  title,
  description,
  path = '',
  image,
  keywords = [],
  noIndex = false,
}: MetaOptions): Metadata {
  const url = `${siteConfig.url}${path}`
  const ogImage = image ?? `${siteConfig.url}/og-default.jpg`

  return {
    title: `${title} | Anna — Massage Therapist London`,
    description,
    keywords: [
      'massage london',
      'massage therapist london',
      'professional massage london',
      ...keywords,
    ],
    authors: [{ name: 'Anna', url: siteConfig.url }],
    creator: 'Anna',
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      url,
      title: `${title} | Anna — Massage Therapist London`,
      description,
      siteName: siteConfig.fullName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Anna — Massage Therapist London`,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  }
}

export function buildBlogMetadata({
  title,
  description,
  slug,
  image,
  keywords = [],
  datePublished,
}: {
  title: string
  description: string
  slug: string
  image?: string
  keywords?: string[]
  datePublished: string
}): Metadata {
  const url = `${siteConfig.url}/blog/${slug}`
  const ogImage = image ?? `${siteConfig.url}/og-default.jpg`

  return {
    title: `${title} | Anna Massage London`,
    description,
    keywords: ['massage london', ...keywords],
    authors: [{ name: 'Anna', url: siteConfig.url }],
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      siteName: siteConfig.fullName,
      publishedTime: datePublished,
      authors: ['Anna'],
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

import type { Metadata } from 'next'
import { siteConfig } from './siteConfig'

/** Default social share image (1200×630). Lives in /public. */
export const DEFAULT_OG_IMAGE = '/og-default.jpg'

const robotsIndex: Metadata['robots'] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
}

interface MetaOptions {
  /**
   * Page title WITHOUT the brand. The root layout's title template appends
   * " | Anna Massage London" automatically — never add the brand here.
   */
  title: string
  description: string
  path?: string
  image?: string
  keywords?: string[]
  noIndex?: boolean
  /** Use the title exactly as given, with no brand suffix (for long titles). */
  absoluteTitle?: boolean
}

function withBrand(title: string) {
  return `${title} | ${siteConfig.titleBrand}`
}

export function buildMetadata({
  title,
  description,
  path = '',
  image,
  keywords = [],
  noIndex = false,
  absoluteTitle = false,
}: MetaOptions): Metadata {
  const url = `${siteConfig.url}${path}`
  const ogImage = image ?? DEFAULT_OG_IMAGE
  const fullTitle = absoluteTitle ? title : withBrand(title)

  return {
    // `absolute` bypasses the layout template so the brand is never doubled.
    title: { absolute: fullTitle },
    description,
    ...(keywords.length > 0 ? { keywords } : {}),
    authors: [{ name: siteConfig.name, url: `${siteConfig.url}/about` }],
    creator: siteConfig.name,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'en_GB',
      url,
      title: fullTitle,
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
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex ? { index: false, follow: true } : robotsIndex,
  }
}

export function buildBlogMetadata({
  title,
  seoTitle,
  description,
  slug,
  image,
  keywords = [],
  datePublished,
  dateModified,
}: {
  title: string
  /** Optional shorter title for the <title> tag / search results */
  seoTitle?: string
  description: string
  slug: string
  image?: string
  keywords?: string[]
  datePublished: string
  dateModified?: string
}): Metadata {
  const url = `${siteConfig.url}/blog/${slug}`
  const ogImage = image ?? DEFAULT_OG_IMAGE
  const base = seoTitle ?? title
  // Long article titles already fill the ~60 characters Google shows —
  // only short ones get the brand appended.
  const fullTitle = base.length <= 38 ? withBrand(base) : base

  return {
    title: { absolute: fullTitle },
    description,
    ...(keywords.length > 0 ? { keywords } : {}),
    authors: [{ name: siteConfig.name, url: `${siteConfig.url}/about` }],
    creator: siteConfig.name,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      locale: 'en_GB',
      url,
      title,
      description,
      siteName: siteConfig.fullName,
      publishedTime: datePublished,
      modifiedTime: dateModified ?? datePublished,
      authors: [`${siteConfig.url}/about`],
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: robotsIndex,
  }
}

import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { siteGraphSchema } from '@/lib/schema'
import { siteConfig } from '@/lib/siteConfig'
import { DEFAULT_OG_IMAGE } from '@/lib/metadata'

// Self-hosted, preloaded fonts (no render-blocking request to Google Fonts).
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const HOME_TITLE = 'Sensual, Tantric & Nuru Massage London | Anna (W14)'
const HOME_DESCRIPTION =
  'Private sensual, tantric, nuru and body-to-body massage with Anna at a discreet in-call studio in West Kensington, London W14. From £80. Open daily 11:00–22:00. Book on WhatsApp.'

// Search-engine ownership tags are only emitted when the real codes are set
// as environment variables — a placeholder value is worse than no tag at all.
const verification: Metadata['verification'] = {
  ...(process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : {}),
  ...(process.env.BING_SITE_VERIFICATION
    ? { other: { 'msvalidate.01': process.env.BING_SITE_VERIFICATION } }
    : {}),
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: HOME_TITLE,
    template: `%s | ${siteConfig.titleBrand}`,
  },
  description: HOME_DESCRIPTION,
  applicationName: siteConfig.fullName,
  authors: [{ name: siteConfig.name, url: `${siteConfig.url}/about` }],
  creator: siteConfig.name,
  publisher: siteConfig.fullName,
  category: 'Massage',
  formatDetection: { telephone: true, address: false, email: false },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteConfig.url,
    siteName: siteConfig.fullName,
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Anna — sensual, tantric and nuru massage in West Kensington, London',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
  ...(Object.keys(verification ?? {}).length > 0 ? { verification } : {}),
}

export const viewport: Viewport = {
  themeColor: '#EFE0D4',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={`grain ${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteGraphSchema()),
          }}
        />
        {/* Scroll-reveal sections start hidden; keep content visible without JavaScript. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="bg-ivory text-brown font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

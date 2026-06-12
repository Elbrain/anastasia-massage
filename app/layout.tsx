import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { localBusinessSchema } from '@/lib/schema'
import { siteConfig } from '@/lib/siteConfig'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Anna — Sensual Massage London',
    template: '%s | Anna Sensual Massage London',
  },
  description:
    'Private sensual massage in West Kensington, London by Anna. Sensual, body-to-body, tantric and nuru massage in a warm, discreet in-call studio (W14). Daily 11:00–22:00.',
  keywords: [
    'sensual massage london',
    'tantric massage london',
    'nuru massage london',
    'body to body massage london',
    'massage west kensington',
    'erotic massage london',
  ],
  authors: [{ name: 'Anna', url: siteConfig.url }],
  creator: 'Anna',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteConfig.url,
    siteName: siteConfig.fullName,
    title: 'Anna — Sensual Massage London',
    description:
      'Private sensual, tantric, nuru and body-to-body massage in London. Warm, discreet and unhurried. Book via WhatsApp.',
    images: [
      {
        url: `${siteConfig.url}/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: 'Anna — Sensual Massage London',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anna — Sensual Massage London',
    description: 'Private sensual massage in London. Discreet, warm and unhurried. Book via WhatsApp.',
    images: [`${siteConfig.url}/og-default.jpg`],
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
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className="grain">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#EFE0D4" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema()),
          }}
        />
      </head>
      <body className="bg-ivory text-brown font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

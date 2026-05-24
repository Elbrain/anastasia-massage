import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { localBusinessSchema } from '@/lib/schema'
import { siteConfig } from '@/lib/siteConfig'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Anastasia — Certified Massage Therapist London',
    template: '%s | Anastasia Massage London',
  },
  description:
    'Professional massage therapy in London by Anastasia. Swedish, deep tissue, sports, aromatherapy and more. In-call and outcall available daily 11:00–22:00.',
  keywords: [
    'massage london',
    'massage therapist london',
    'swedish massage london',
    'deep tissue massage london',
    'outcall massage london',
    'professional massage',
  ],
  authors: [{ name: 'Anastasia', url: siteConfig.url }],
  creator: 'Anastasia',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteConfig.url,
    siteName: siteConfig.fullName,
    title: 'Anastasia — Certified Massage Therapist London',
    description:
      'Professional massage therapy in London. Swedish, deep tissue, sports, aromatherapy and more. Book today.',
    images: [
      {
        url: `${siteConfig.url}/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: 'Anastasia — Massage Therapist London',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anastasia — Certified Massage Therapist London',
    description: 'Professional massage therapy in London. Book your appointment today.',
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
        <meta name="theme-color" content="#EFE6DF" />
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

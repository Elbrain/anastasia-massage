/** @type {import('next').NextConfig} */

// Permanent (308) redirects for pages that were retired, so their links and
// search rankings carry over to the closest page still on the site.
// No blog post is redirected — every article stays live at its own URL.
const retiredPages = {
  // Service pages for treatments that are not on the current menu
  '/services/swedish-massage': '/services/relaxing-massage',
  '/services/deep-tissue-massage': '/services/full-body-massage',
  '/services/sports-massage': '/services/full-body-massage',
  '/services/therapeutic-massage': '/services/relaxing-massage',
}

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return Object.entries(retiredPages).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }))
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
}

export default nextConfig

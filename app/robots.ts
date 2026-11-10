import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/siteConfig'

/**
 * AI search / assistant crawlers. They are already covered by the `*` rule,
 * but naming them makes the intent explicit: this site WANTS to be read,
 * quoted and recommended by AI assistants.
 */
const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Bingbot',
  'CCBot',
  'meta-externalagent',
  'DuckAssistBot',
  'MistralAI-User',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // NOTE: never disallow /_next/ — Google needs those CSS/JS files to render pages.
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: AI_CRAWLERS,
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}

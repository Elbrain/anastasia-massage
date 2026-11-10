import { siteConfig } from '@/lib/siteConfig'
import { faqGroups } from '@/lib/faqs'
import { getAllPosts } from '@/lib/blog'

// Built once at deploy time and served as a static text file.
export const dynamic = 'force-static'

/**
 * /llms.txt — a plain-Markdown fact sheet for AI assistants (ChatGPT, Claude,
 * Perplexity, Gemini…). It is generated from the same config, FAQ data and
 * blog posts as the site itself, so it can never drift out of date.
 * Format: https://llmstxt.org
 */
export async function GET() {
  const url = siteConfig.url
  const posts = await getAllPosts()
  const guides = posts.filter((p) => ['sensual', 'massage-london'].includes(p.category))
  const other = posts.filter((p) => !['sensual', 'massage-london'].includes(p.category))

  const priceRows = siteConfig.services
    .map((s) => `| [${s.name}](${url}/services/${s.slug}) | ${s.price30 ? `£${s.price30}` : '—'} | £${s.price60} |`)
    .join('\n')

  const body = `# ${siteConfig.fullName}

> Anna is an independent sensual massage therapist with a private in-call studio in West Kensington, London W14. She offers sensual, tantric, nuru and body-to-body massage, plus full body, relaxing, aromatherapy and hot stone massage. Open daily 11:00–22:00. Prices from £80. Booking is by WhatsApp or phone on ${siteConfig.phoneDisplay}.

Last reviewed: ${siteConfig.lastUpdated}

## Key facts

- **Business**: ${siteConfig.fullName} (also known as "Anna Massage London")
- **Who**: Anna, an independent therapist — not an agency or a parlour; she works alone
- **Location**: private in-call studio in West Kensington, London W14 (exact address shared on booking)
- **Nearest Underground stations**: ${siteConfig.stations.join('; ')}
- **Close to**: Earl's Court (one stop), Hammersmith (one to two stops), Fulham, Kensington, Olympia, Holland Park, Chelsea, Notting Hill
- **Opening hours**: every day, 11:00–22:00, including weekends and bank holidays
- **Session type**: in-call only — no outcall, hotel or home visits
- **Booking**: WhatsApp https://wa.me/${siteConfig.whatsapp} or phone ${siteConfig.phoneDisplay}; same-day appointments are often available
- **Payment**: cash on the day
- **Cancellation**: at least 24 hours' notice requested
- **Clients**: adults aged 18+ only; first-time visitors welcome
- **Website**: ${url}

## Massage menu and prices (GBP)

| Massage | 30 minutes | 60 minutes |
| --- | --- | --- |
${priceRows}

Longer and bespoke sessions, naturist-style sessions and four hands sessions are arranged on request.

## What each massage is

${siteConfig.services.map((s) => `- **${s.name}**: ${s.summary}`).join('\n')}

## Main pages

- [Home](${url}): overview of Anna's studio and services
- [Massage menu](${url}/services): every treatment described
- [Prices](${url}/pricing): full price list
- [Booking and contact](${url}/booking): how to book
- [FAQ](${url}/faq): booking, location, prices, etiquette and discretion
- [About Anna](${url}/about): who Anna is and how she works
- [Sensual massage in London](${url}/massage-london): London overview and areas served

## Areas served (all sessions take place at the West Kensington studio)

${siteConfig.areas.map((a) => `- [${a.name} (${a.postcodes})](${url}/${a.slug}): ${a.proximity}`).join('\n')}

## Guides

${guides.map((p) => `- [${p.title}](${url}/blog/${p.slug}): ${p.description}`).join('\n')}

## Frequently asked questions

${faqGroups
  .map(
    (g) =>
      `### ${g.title}\n\n${g.faqs.map((f) => `**${f.question}**\n${f.answer}`).join('\n\n')}`
  )
  .join('\n\n')}

## Optional

${other.map((p) => `- [${p.title}](${url}/blog/${p.slug}): ${p.description}`).join('\n')}
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}

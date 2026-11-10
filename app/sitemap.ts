import { MetadataRoute } from 'next'
import { getAllPosts, BLOG_CATEGORIES } from '@/lib/blog'
import { siteConfig } from '@/lib/siteConfig'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts()
  const baseUrl = siteConfig.url

  // Real "last reviewed" dates rather than the build time, so search engines
  // can trust <lastmod> and re-crawl only what actually changed.
  const siteUpdated = new Date(siteConfig.lastUpdated)
  const newestPost = posts.length > 0 ? new Date(posts[0].updated || posts[0].date) : siteUpdated

  const corePages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: siteUpdated, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: siteUpdated, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/massage-london`, lastModified: siteUpdated, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified: siteUpdated, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/booking`, lastModified: siteUpdated, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: siteUpdated, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: siteUpdated, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/portfolio`, lastModified: siteUpdated, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/blog`, lastModified: newestPost, changeFrequency: 'weekly', priority: 0.7 },
  ]

  const servicePages: MetadataRoute.Sitemap = siteConfig.services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: siteUpdated,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  const areaPages: MetadataRoute.Sitemap = siteConfig.areas.map((a) => ({
    url: `${baseUrl}/${a.slug}`,
    lastModified: siteUpdated,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const nearMe: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/massage-near-me`, lastModified: siteUpdated, changeFrequency: 'monthly', priority: 0.8 },
  ]

  const categoryPages: MetadataRoute.Sitemap = BLOG_CATEGORIES.filter((c) =>
    posts.some((p) => p.category === c.slug)
  ).map((c) => ({
    url: `${baseUrl}/blog/category/${c.slug}`,
    lastModified: newestPost,
    changeFrequency: 'weekly',
    priority: 0.5,
  }))

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated || post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...corePages, ...servicePages, ...areaPages, ...nearMe, ...categoryPages, ...blogPages]
}

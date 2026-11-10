import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export interface BlogPost {
  slug: string
  title: string
  /** Optional shorter title for the <title> tag */
  seoTitle?: string
  description: string
  date: string
  /** Date of the last meaningful edit (falls back to `date`) */
  updated: string
  category: string
  keywords: string[]
  image: string
  imageAlt: string
  readingTime: string
  wordCount: number
  content: string
  excerpt: string
  featured?: boolean
  faqs?: { question: string; answer: string }[]
  /** Service slugs this article relates to — drives the "Related treatments" links */
  services: string[]
}

export type BlogPostMeta = Omit<BlogPost, 'content'>

export const BLOG_CATEGORIES = [
  { slug: 'sensual', label: 'Sensual Massage', description: 'Honest guides to sensual, tantric, nuru and body-to-body massage — what each one is, what to expect and how to choose.' },
  { slug: 'massage-london', label: 'Massage in London', description: 'Practical guides to booking a massage in London — prices, etiquette, in-call studios and what to look for.' },
  { slug: 'massage-techniques', label: 'Massage Techniques', description: 'How different massage techniques work, from aromatherapy to hot stone and full body massage.' },
  { slug: 'wellness', label: 'Wellness', description: 'How massage supports stress relief, sleep and everyday wellbeing.' },
  { slug: 'health', label: 'Health & Recovery', description: 'What massage can and cannot do for tension, aches and recovery.' },
  { slug: 'local', label: 'London Locations', description: 'Area-by-area guides to finding a good massage in London — and how to reach my West Kensington studio from each.' },
]

export function categoryLabel(slug: string): string {
  return (
    BLOG_CATEGORIES.find((c) => c.slug === slug)?.label ??
    slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
  )
}

function ensureBlogDir() {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true })
  }
}

function parsePost(slug: string, raw: string): BlogPost {
  const { data, content } = matter(raw)
  const stats = readingTime(content)

  return {
    slug,
    title: data.title ?? '',
    seoTitle: data.seoTitle,
    description: data.description ?? '',
    date: data.date ?? '',
    updated: data.updated ?? data.date ?? '',
    category: data.category ?? 'General',
    keywords: data.keywords ?? [],
    image: data.image ?? '/og-default.jpg',
    imageAlt: data.imageAlt ?? data.title ?? '',
    readingTime: stats.text,
    wordCount: stats.words,
    content,
    excerpt: data.excerpt ?? content.slice(0, 180).replace(/[#*`]/g, '') + '…',
    featured: data.featured ?? false,
    faqs: data.faqs ?? [],
    services: data.services ?? [],
  }
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  ensureBlogDir()
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '')
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf-8')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { content, ...meta } = parsePost(slug, raw)
    return meta as BlogPostMeta
  })

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  ensureBlogDir()
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  return parsePost(slug, fs.readFileSync(filePath, 'utf-8'))
}

export async function getPostsByCategory(category: string): Promise<BlogPostMeta[]> {
  const posts = await getAllPosts()
  return posts.filter((p) => p.category.toLowerCase() === category.toLowerCase())
}

/**
 * Related posts: same category first, then posts sharing a related service,
 * then the newest posts — so every article always links on to three others.
 */
export async function getRelatedPosts(
  slug: string,
  category: string,
  limit = 3,
  services: string[] = []
): Promise<BlogPostMeta[]> {
  const posts = (await getAllPosts()).filter((p) => p.slug !== slug)
  const picked: BlogPostMeta[] = []
  const add = (candidates: BlogPostMeta[]) => {
    for (const p of candidates) {
      if (picked.length >= limit) return
      if (!picked.some((x) => x.slug === p.slug)) picked.push(p)
    }
  }

  add(posts.filter((p) => p.category === category))
  add(posts.filter((p) => p.services.some((s) => services.includes(s))))
  add(posts)
  return picked
}

/** Posts that relate to a given service — used on service pages. */
export async function getPostsForService(serviceSlug: string, limit = 4): Promise<BlogPostMeta[]> {
  const posts = await getAllPosts()
  // `services` lists the most relevant treatment first, so rank by that position
  // (newest first within the same rank).
  return posts
    .filter((p) => p.services.includes(serviceSlug))
    .sort((a, b) => a.services.indexOf(serviceSlug) - b.services.indexOf(serviceSlug))
    .slice(0, limit)
}

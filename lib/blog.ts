import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  category: string
  keywords: string[]
  image: string
  imageAlt: string
  readingTime: string
  content: string
  excerpt: string
  featured?: boolean
  faqs?: { question: string; answer: string }[]
}

export type BlogPostMeta = Omit<BlogPost, 'content'>

function ensureBlogDir() {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true })
  }
}

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  ensureBlogDir()
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '')
    const filePath = path.join(BLOG_DIR, filename)
    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(raw)
    const stats = readingTime(content)

    return {
      slug,
      title: data.title ?? '',
      description: data.description ?? '',
      date: data.date ?? '',
      category: data.category ?? 'General',
      keywords: data.keywords ?? [],
      image: data.image ?? '/images/blog/default.jpg',
      imageAlt: data.imageAlt ?? data.title ?? '',
      readingTime: stats.text,
      excerpt: data.excerpt ?? content.slice(0, 180).replace(/[#*`]/g, '') + '…',
      featured: data.featured ?? false,
      faqs: data.faqs ?? [],
    } as BlogPostMeta
  })

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  ensureBlogDir()
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const stats = readingTime(content)

  return {
    slug,
    title: data.title ?? '',
    description: data.description ?? '',
    date: data.date ?? '',
    category: data.category ?? 'General',
    keywords: data.keywords ?? [],
    image: data.image ?? '/images/blog/default.jpg',
    imageAlt: data.imageAlt ?? data.title ?? '',
    readingTime: stats.text,
    content,
    excerpt: data.excerpt ?? content.slice(0, 180).replace(/[#*`]/g, '') + '…',
    featured: data.featured ?? false,
    faqs: data.faqs ?? [],
  }
}

export async function getPostsByCategory(category: string): Promise<BlogPostMeta[]> {
  const posts = await getAllPosts()
  return posts.filter((p) => p.category.toLowerCase() === category.toLowerCase())
}

export async function getRelatedPosts(
  slug: string,
  category: string,
  limit = 3
): Promise<BlogPostMeta[]> {
  const posts = await getAllPosts()
  return posts
    .filter((p) => p.slug !== slug && p.category === category)
    .slice(0, limit)
}

export const BLOG_CATEGORIES = [
  { slug: 'sensual', label: 'Sensual Massage' },
  { slug: 'massage-techniques', label: 'Massage Techniques' },
  { slug: 'massage-london', label: 'Massage in London' },
  { slug: 'wellness', label: 'Wellness' },
  { slug: 'health', label: 'Health & Recovery' },
  { slug: 'local', label: 'London Locations' },
]

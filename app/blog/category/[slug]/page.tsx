import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostsByCategory, BLOG_CATEGORIES } from '@/lib/blog'
import { BlogCard } from '@/components/blog/BlogCard'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export async function generateStaticParams() {
  return BLOG_CATEGORIES.map((cat) => ({ slug: cat.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const category = BLOG_CATEGORIES.find((c) => c.slug === params.slug)
  if (!category) return {}

  return buildMetadata({
    title: `${category.label} — Massage Blog`,
    description: `Articles about ${category.label.toLowerCase()} from Anna, certified massage therapist in London.`,
    path: `/blog/category/${category.slug}`,
    keywords: [`${category.label.toLowerCase()} massage`, 'massage blog london', 'massage advice'],
  })
}

export default async function BlogCategoryPage({ params }: { params: { slug: string } }) {
  const category = BLOG_CATEGORIES.find((c) => c.slug === params.slug)
  if (!category) notFound()

  const posts = await getPostsByCategory(category.slug)

  const breadcrumb = breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: category.label, href: `/blog/category/${category.slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-16 bg-cream">
        <div className="container-site max-w-3xl mx-auto text-center">
          <nav className="flex items-center gap-2 text-xs text-brown-muted mb-6 justify-center flex-wrap">
            <Link href="/" className="hover:text-brown-dark transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-brown-dark transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-brown-dark">{category.label}</span>
          </nav>
          <p className="font-body text-xs tracking-[0.25em] uppercase text-rose mb-4">Category</p>
          <h1 className="font-display text-display-lg text-brown-dark mb-5">{category.label}</h1>
          <p className="text-brown text-lg">
            {posts.length} article{posts.length !== 1 ? 's' : ''} in this category
          </p>
        </div>
      </section>

      {/* Category nav */}
      <section className="bg-ivory border-b border-rose/10 py-5">
        <div className="container-site">
          <div className="flex flex-wrap gap-2 justify-center">
            <Link
              href="/blog"
              className="px-5 py-2 rounded-full bg-cream border border-rose/20 text-brown hover:border-rose/50 text-sm font-body transition-all duration-200"
            >
              All Posts
            </Link>
            {BLOG_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className={`px-5 py-2 rounded-full text-sm font-body transition-all duration-200 ${
                  cat.slug === params.slug
                    ? 'bg-brown-dark text-ivory'
                    : 'bg-cream border border-rose/20 text-brown hover:border-rose/50'
                }`}
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="section bg-ivory">
        <div className="container-site">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <AnimatedSection key={post.slug} delay={(Math.min(i % 3 + 1, 5) as 1 | 2 | 3 | 4 | 5)}>
                  <BlogCard post={post} />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-display text-2xl text-brown-dark mb-3">Articles coming soon</p>
              <p className="text-brown">Check back shortly for {category.label.toLowerCase()} content.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

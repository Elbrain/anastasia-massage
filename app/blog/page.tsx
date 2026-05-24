import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts, BLOG_CATEGORIES } from '@/lib/blog'
import { BlogCard } from '@/components/blog/BlogCard'
import { buildMetadata } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

export const metadata: Metadata = buildMetadata({
  title: 'Massage Blog — London Tips, Techniques & Wellness',
  description:
    'Expert advice on massage techniques, wellness, sports recovery, stress relief and massage in London. Written by Anastasia, certified massage therapist.',
  path: '/blog',
  keywords: ['massage blog', 'massage advice london', 'massage tips', 'wellness advice london'],
})

export default async function BlogPage() {
  const posts = await getAllPosts()
  const featured = posts.find((p) => p.featured) ?? posts[0]
  const rest = posts.filter((p) => p.slug !== featured?.slug)

  const breadcrumb = breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
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
          <p className="font-body text-xs tracking-[0.25em] uppercase text-rose mb-4">Insights & Advice</p>
          <h1 className="font-display text-display-lg text-brown-dark mb-5">
            The Massage Blog
          </h1>
          <p className="text-brown leading-relaxed text-lg max-w-xl mx-auto">
            Guides on massage techniques, local London finds, wellness and recovery —
            written for anyone who wants to look after their body properly.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-ivory border-b border-rose/10 py-5">
        <div className="container-site">
          <div className="flex flex-wrap gap-2 justify-center">
            <Link
              href="/blog"
              className="px-5 py-2 rounded-full bg-brown-dark text-ivory text-sm font-body transition-all duration-200"
            >
              All Posts
            </Link>
            {BLOG_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className="px-5 py-2 rounded-full bg-cream border border-rose/20 text-brown hover:border-rose/50 text-sm font-body transition-all duration-200"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory">
        <div className="container-site space-y-8">
          {/* Featured */}
          {featured && (
            <AnimatedSection>
              <BlogCard post={featured} featured />
            </AnimatedSection>
          )}

          {/* Rest grid */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post, i) => (
                <AnimatedSection key={post.slug} delay={(Math.min(i % 3 + 1, 5) as 1 | 2 | 3 | 4 | 5)}>
                  <BlogCard post={post} />
                </AnimatedSection>
              ))}
            </div>
          )}

          {posts.length === 0 && (
            <div className="text-center py-20">
              <p className="font-display text-2xl text-brown-dark mb-3">Articles coming soon</p>
              <p className="text-brown">Check back shortly for expert massage and wellness content.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

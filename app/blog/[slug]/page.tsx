import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/blog'
import { buildBlogMetadata } from '@/lib/metadata'
import { blogPostingSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { BlogCard } from '@/components/blog/BlogCard'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { siteConfig } from '@/lib/siteConfig'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) return {}

  return buildBlogMetadata({
    title: post.title,
    description: post.description,
    slug: post.slug,
    image: post.image,
    keywords: post.keywords,
    datePublished: post.date,
  })
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()

  const related = await getRelatedPosts(post.slug, post.category)

  const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const blogSchema = blogPostingSchema({
    title: post.title,
    description: post.description,
    slug: post.slug,
    datePublished: post.date,
    image: post.image,
  })

  const faqData = post.faqs && post.faqs.length > 0 ? faqSchema(post.faqs) : null

  const breadcrumb = breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: post.category, href: `/blog/category/${post.category}` },
    { name: post.title, href: `/blog/${post.slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      {faqData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section className="pt-36 pb-12 bg-cream">
        <div className="container-site max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-brown-muted mb-8 flex-wrap">
            <Link href="/" className="hover:text-brown-dark transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-brown-dark transition-colors">Blog</Link>
            <span>/</span>
            <Link
              href={`/blog/category/${post.category}`}
              className="hover:text-brown-dark transition-colors capitalize"
            >
              {post.category.replace(/-/g, ' ')}
            </Link>
          </nav>

          {/* Category + meta */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-body text-rose bg-rose/10 px-3 py-1 rounded-full capitalize">
              {post.category.replace(/-/g, ' ')}
            </span>
            <span className="text-xs text-brown-muted">{formattedDate}</span>
            <span className="text-xs text-brown-muted">{post.readingTime}</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-display-md text-brown-dark mb-5 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-brown leading-relaxed">{post.description}</p>
        </div>
      </section>

      {/* Hero image */}
      {post.image && (
        <div className="bg-cream pb-0">
          <div className="container-site max-w-4xl mx-auto">
            <div className="relative aspect-[16/7] rounded-3xl overflow-hidden shadow-soft">
              <Image
                src={post.image}
                alt={post.imageAlt || post.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1100px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/20 to-transparent" />
            </div>
          </div>
        </div>
      )}

      {/* Article */}
      <article className="section bg-ivory">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main content */}
            <div className="lg:col-span-3">
              <div className="prose-anastasia">
                <MDXRemote source={post.content} />
              </div>

              {/* FAQ section */}
              {post.faqs && post.faqs.length > 0 && (
                <div className="mt-16">
                  <h2 className="font-display text-2xl text-brown-dark mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {post.faqs.map((faq, i) => (
                      <div key={i} className="bg-cream rounded-2xl border border-rose/15 p-6">
                        <h3 className="font-display text-lg text-brown-dark mb-2">{faq.question}</h3>
                        <p className="text-brown text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Keywords */}
              {post.keywords.length > 0 && (
                <div className="mt-10 flex flex-wrap gap-2">
                  {post.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="text-xs font-body text-brown-muted bg-cream border border-rose/15 px-3 py-1 rounded-full"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* CTA */}
                <div className="bg-brown-dark rounded-3xl p-6 text-ivory">
                  <p className="font-display text-xl text-ivory mb-2">Book a Session</p>
                  <p className="text-ivory/60 text-sm mb-5 leading-relaxed">
                    Ready to experience the benefits yourself? Book with Anastasia in London.
                  </p>
                  <Link href="/booking" className="btn-rose w-full justify-center text-sm">
                    Book Now
                  </Link>
                </div>

                {/* Author */}
                <div className="bg-cream rounded-3xl border border-rose/15 p-6">
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-brown-muted mb-3">Written by</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-rose/20 flex items-center justify-center">
                      <span className="font-display text-lg text-rose">A</span>
                    </div>
                    <div>
                      <p className="font-body text-sm font-medium text-brown-dark">Anastasia</p>
                      <p className="font-body text-xs text-brown-muted">Certified Massage Therapist</p>
                    </div>
                  </div>
                </div>

                {/* Services CTA */}
                <div className="bg-cream rounded-3xl border border-rose/15 p-6">
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-brown-muted mb-3">Services</p>
                  <ul className="space-y-2">
                    {siteConfig.services.slice(0, 5).map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="text-sm text-brown hover:text-rose transition-colors flex items-center gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-rose flex-shrink-0" />
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="section bg-cream">
          <div className="container-site">
            <AnimatedSection className="mb-10">
              <h2 className="font-display text-2xl text-brown-dark">Related Articles</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((post, i) => (
                <AnimatedSection key={post.slug} delay={(i + 1) as 1 | 2 | 3}>
                  <BlogCard post={post} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

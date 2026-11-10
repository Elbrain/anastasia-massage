import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts, getPostBySlug, getRelatedPosts, categoryLabel } from '@/lib/blog'
import { buildBlogMetadata } from '@/lib/metadata'
import { blogPostingSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { BlogCard } from '@/components/blog/BlogCard'
import { FaqList } from '@/components/ui/FaqList'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { siteConfig, getService, whatsappUrl } from '@/lib/siteConfig'

interface Props {
  params: { slug: string }
}

export const dynamicParams = false

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) return {}

  return buildBlogMetadata({
    title: post.title,
    seoTitle: post.seoTitle,
    description: post.description,
    slug: post.slug,
    image: post.image,
    keywords: post.keywords,
    datePublished: post.date,
    dateModified: post.updated,
  })
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()

  const related = await getRelatedPosts(post.slug, post.category, 3, post.services)
  const label = categoryLabel(post.category)
  const wasUpdated = post.updated && post.updated !== post.date

  // Treatments this article relates to; falls back to the four signature styles.
  const relatedServices = (post.services.length > 0
    ? post.services
    : ['sensual-massage', 'tantric-massage', 'nuru-massage', 'body-to-body-massage']
  )
    .map((slug) => getService(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))

  const blogSchema = blogPostingSchema({
    title: post.title,
    description: post.description,
    slug: post.slug,
    datePublished: post.date,
    dateModified: post.updated,
    image: post.image,
    category: label,
    keywords: post.keywords,
    wordCount: post.wordCount,
  })

  const faqData = post.faqs && post.faqs.length > 0 ? faqSchema(post.faqs) : null

  const breadcrumb = breadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Journal', href: '/blog' },
    { name: label, href: `/blog/category/${post.category}` },
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
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-brown-muted mb-8 flex-wrap">
            <Link href="/" className="hover:text-brown-dark transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-brown-dark transition-colors">Journal</Link>
            <span>/</span>
            <Link
              href={`/blog/category/${post.category}`}
              className="hover:text-brown-dark transition-colors"
            >
              {label}
            </Link>
          </nav>

          {/* Category + meta */}
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="text-xs font-body text-rose bg-rose/10 px-3 py-1 rounded-full">
              {label}
            </span>
            <time dateTime={post.date} className="text-xs text-brown-muted">{formatDate(post.date)}</time>
            {wasUpdated && (
              <span className="text-xs text-brown-muted">
                Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
              </span>
            )}
            <span className="text-xs text-brown-muted">{post.readingTime}</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-display-md text-brown-dark mb-5 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-brown leading-relaxed">{post.description}</p>
          <p className="text-sm text-brown-muted mt-5">
            By{' '}
            <Link href="/about" className="text-brown-dark underline underline-offset-2 hover:text-rose-dark">
              Anna
            </Link>
            , independent sensual massage therapist in West Kensington, London
          </p>
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

              {/* FAQ section — every answer is in the HTML and mirrored in FAQPage schema */}
              {post.faqs && post.faqs.length > 0 && (
                <div className="mt-16">
                  <h2 className="font-display text-2xl text-brown-dark mb-6">
                    Frequently Asked Questions
                  </h2>
                  <FaqList faqs={post.faqs} openFirst />
                </div>
              )}

              {/* Booking box — the same facts on every article */}
              <div className="mt-14 bg-cream rounded-3xl border border-rose/15 p-7">
                <h2 className="font-display text-2xl text-brown-dark mb-2">Book with Anna in West Kensington</h2>
                <p className="text-sm text-brown leading-relaxed mb-5">
                  Private in-call studio in West Kensington, London W14 — near West Kensington and Barons
                  Court stations. Open daily 11:00–22:00. From £80. Cash on the day.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {relatedServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="px-4 py-2 bg-ivory border border-rose/20 rounded-full text-sm text-brown hover:border-rose/50 hover:text-brown-dark transition-colors"
                    >
                      {s.name} · {s.price}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Book on WhatsApp
                  </a>
                  <Link href="/pricing" className="btn-secondary">See Prices</Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* CTA */}
                <div className="bg-brown-dark rounded-3xl p-6 text-ivory">
                  <p className="font-display text-xl text-ivory mb-2">Book a Session</p>
                  <p className="text-ivory/60 text-sm mb-5 leading-relaxed">
                    Sensual, tantric and nuru massage with Anna in West Kensington (W14). Daily 11:00–22:00.
                  </p>
                  <Link href="/booking" className="btn-rose w-full justify-center text-sm">
                    Book Now
                  </Link>
                </div>

                {/* Author */}
                <div className="bg-cream rounded-3xl border border-rose/15 p-6">
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-brown-muted mb-3">Written by</p>
                  <Link href="/about" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-rose/20 flex items-center justify-center flex-shrink-0">
                      <span className="font-display text-lg text-rose">A</span>
                    </div>
                    <div>
                      <p className="font-body text-sm font-medium text-brown-dark group-hover:text-rose-dark transition-colors">Anna</p>
                      <p className="font-body text-xs text-brown-muted">Independent sensual massage therapist, West Kensington</p>
                    </div>
                  </Link>
                </div>

                {/* Services */}
                <div className="bg-cream rounded-3xl border border-rose/15 p-6">
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-brown-muted mb-3">Massage Menu</p>
                  <ul className="space-y-2">
                    {siteConfig.services.map((s) => (
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

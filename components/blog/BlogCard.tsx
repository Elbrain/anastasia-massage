import Link from 'next/link'
import Image from 'next/image'
import { Clock } from 'lucide-react'
import type { BlogPostMeta } from '@/lib/blog'

interface BlogCardProps {
  post: BlogPostMeta
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group">
        <article className="bg-cream rounded-4xl border border-rose/15 overflow-hidden card-hover shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="aspect-[4/3] lg:aspect-auto relative overflow-hidden bg-gradient-to-br from-ivory to-cream">
              {post.image ? (
                <Image
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-rose/10 via-transparent to-sage/10" />
              )}
              <div className="absolute top-4 left-4">
                <span className="bg-rose text-brown-dark text-xs font-body font-medium px-3 py-1.5 rounded-full uppercase tracking-wide">
                  Featured
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-body text-rose bg-rose/10 px-3 py-1 rounded-full capitalize">
                  {post.category.replace(/-/g, ' ')}
                </span>
                <span className="text-xs text-brown-muted flex items-center gap-1">
                  <Clock size={11} />
                  {post.readingTime}
                </span>
              </div>

              <h2 className="font-display text-2xl lg:text-3xl text-brown-dark mb-4 group-hover:text-brown transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-brown text-sm leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-brown-muted">{formattedDate}</span>
                <span className="text-rose text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                  Read article
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <article className="bg-cream rounded-3xl border border-rose/15 overflow-hidden h-full flex flex-col card-hover shadow-soft">
        {/* Image */}
        <div className="aspect-[16/9] relative overflow-hidden bg-gradient-to-br from-ivory to-cream flex-shrink-0">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-rose/8 via-transparent to-sage/8" />
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-body text-rose bg-rose/10 px-2.5 py-1 rounded-full capitalize">
              {post.category.replace(/-/g, ' ')}
            </span>
            <span className="text-xs text-brown-muted flex items-center gap-1">
              <Clock size={10} />
              {post.readingTime}
            </span>
          </div>

          <h2 className="font-display text-xl text-brown-dark mb-3 group-hover:text-brown transition-colors leading-snug flex-1">
            {post.title}
          </h2>
          <p className="text-brown text-sm leading-relaxed mb-4 line-clamp-2">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between mt-auto pt-4 border-t border-rose/15">
            <span className="text-xs text-brown-muted">{formattedDate}</span>
            <span className="text-rose text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
              Read
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}

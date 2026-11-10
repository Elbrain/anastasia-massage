import type { Faq } from '@/lib/faqs'

/**
 * Accessible FAQ accordion built on native <details>/<summary>.
 *
 * Every answer is present in the server-rendered HTML (no JavaScript needed),
 * so search engines and AI assistants can read all of them — a JS accordion
 * that only renders the open item hides the rest from crawlers.
 */
export function FaqList({
  faqs,
  openFirst = false,
  tone = 'cream',
}: {
  faqs: Faq[]
  openFirst?: boolean
  tone?: 'cream' | 'ivory'
}) {
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <details
          key={faq.question}
          open={openFirst && i === 0}
          className={`faq-item group border border-rose/15 rounded-2xl overflow-hidden ${
            tone === 'cream' ? 'bg-cream' : 'bg-ivory'
          }`}
        >
          <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none">
            <h3 className="font-display text-base lg:text-lg text-brown-dark font-medium leading-snug">
              {faq.question}
            </h3>
            <span
              className="flex-shrink-0 text-rose text-xl leading-none transition-transform duration-200 group-open:rotate-45"
              aria-hidden="true"
            >
              +
            </span>
          </summary>
          <div className="px-5 pb-5">
            <p className="font-body text-sm text-brown leading-relaxed">{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  )
}

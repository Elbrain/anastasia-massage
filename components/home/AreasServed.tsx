import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { siteConfig } from '@/lib/siteConfig'

/** Home-page hub linking to every local landing page. */
export function AreasServed() {
  return (
    <section className="section bg-cream" id="areas">
      <div className="container-site">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-rose mb-4">Where to Find Me</p>
          <h2 className="font-display text-display-md text-brown-dark mb-5">
            West Kensington, <span className="italic font-light">Close to Everywhere</span>
          </h2>
          <p className="text-brown leading-relaxed">
            My studio is in West Kensington (W14), a few minutes from West Kensington and Barons Court
            stations — one stop from Earl&apos;s Court and Hammersmith, and a direct Tube ride from
            Westminster and the West End.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {siteConfig.areas.map((area, i) => (
            <AnimatedSection key={area.slug} delay={(Math.min(i % 4, 5) as 0 | 1 | 2 | 3 | 4 | 5)}>
              <Link
                href={`/${area.slug}`}
                className="block h-full bg-ivory rounded-2xl border border-rose/15 p-5 card-hover"
              >
                <p className="font-display text-lg text-brown-dark leading-snug">Massage {area.name}</p>
                <p className="font-body text-[11px] tracking-[0.15em] uppercase text-rose mt-1">{area.postcodes}</p>
                <p className="font-body text-xs text-brown-muted mt-2">{area.proximity}</p>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-10">
          <Link href="/massage-london" className="btn-secondary inline-flex">
            Sensual Massage Across London
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}

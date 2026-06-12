import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/siteConfig'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-ivory">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 bg-hero-pattern" aria-hidden="true" />
      <div
        className="absolute top-1/4 right-0 w-[700px] h-[700px] rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, #E4BEAE 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[460px] h-[460px] rounded-full opacity-25 blur-3xl"
        style={{ background: 'radial-gradient(circle, #7B3540 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: text ── */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8 animate-fade-in">
              <span className="block w-8 h-px bg-rose" />
              <span className="font-body text-xs tracking-[0.25em] uppercase text-brown-muted">
                Sensual Massage · London
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-display-xl text-brown-dark mb-6 leading-none">
              <span className="block">Private Sensual</span>
              <span className="block italic font-light" style={{ color: 'var(--rose-dark)' }}>
                Massage
              </span>
              <span className="block">in London</span>
            </h1>

            {/* Divider with lotus */}
            <div className="flex items-center gap-4 mb-8">
              <span className="flex-1 h-px bg-gradient-to-r from-rose/60 to-transparent" />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-rose flex-shrink-0">
                <path d="M12 3C12 3 8 7 8 12C8 15.31 9.89 18.05 12 19.5C14.11 18.05 16 15.31 16 12C16 7 12 3 12 3Z" stroke="currentColor" strokeWidth="1" fill="none"/>
                <path d="M12 19.5C10 17 6 15 4 16C5 19 8 21 12 21" stroke="currentColor" strokeWidth="1" fill="none"/>
                <path d="M12 19.5C14 17 18 15 20 16C19 19 16 21 12 21" stroke="currentColor" strokeWidth="1" fill="none"/>
                <path d="M12 21V23" stroke="currentColor" strokeWidth="1"/>
              </svg>
              <span className="flex-1 h-px bg-gradient-to-l from-rose/60 to-transparent" />
            </div>

            {/* Subtext */}
            <p className="font-body text-lg text-brown leading-relaxed mb-10 max-w-lg">
              Sensual, body-to-body, tantric and nuru massage — slow, intimate and
              entirely discreet. Available daily 11:00–22:00 at my private in-call
              studio in West Kensington (W14).
            </p>
            {/* MassageHub badge */}
            <div className="mb-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <a href="https://massagehub.uk/profile/sensual-massage-with-leya-in-west-london-leya" target="_blank" rel="noopener" title="Featured on MassageHub.uk">
                <img
                  src="https://massagehub.uk/api/badge/sensual-massage-with-leya-in-west-london-leya?style=dark"
                  alt="Featured on MassageHub.uk"
                  width={200} height={61}
                  style={{
                    border: '0',
                    borderRadius: '12px',
                    opacity: 0.88,
                    boxShadow: '0 4px 16px rgba(60,39,28,0.13)',
                    transition: 'opacity 0.2s ease, transform 0.2s ease',
                  }}
                  onMouseOver={(e) => { (e.target as HTMLImageElement).style.opacity = '1'; (e.target as HTMLImageElement).style.transform = 'translateY(-1px)'; }}
                  onMouseOut={(e) => { (e.target as HTMLImageElement).style.opacity = '0.88'; (e.target as HTMLImageElement).style.transform = 'translateY(0)'; }}
                />
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8 py-4"
              >
                Book on WhatsApp
              </a>
              <Link href="/services" className="btn-secondary text-base px-8 py-4">
                View Services
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-12 pt-10 border-t border-rose/20">
              {[
                { icon: '✦', label: 'Discreet & Private' },
                { icon: '✦', label: 'In-call · West Kensington' },
                { icon: '✦', label: 'Daily 11:00–22:00' },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-2">
                  <span className="text-rose text-xs">{badge.icon}</span>
                  <span className="font-body text-xs tracking-wide text-brown-muted uppercase">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: oval portrait ── */}
          <div className="flex justify-center items-center relative py-8 lg:py-0">
            {/* Outer decorative ring — desktop only */}
            <div
              className="hidden lg:block absolute w-[420px] h-[540px] border border-rose/25 rounded-[50%] rotate-6"
              aria-hidden="true"
            />
            <div
              className="hidden lg:block absolute w-[400px] h-[520px] border border-rose/15 rounded-[50%] -rotate-3"
              aria-hidden="true"
            />

            {/* Oval image frame */}
            <div
              className="relative overflow-hidden shadow-2xl w-[260px] h-[340px] lg:w-[380px] lg:h-[500px]"
              style={{ borderRadius: '50%' }}
            >
              <Image
                src="/images/anastasia-hero.jpg"
                alt="Anna — sensual massage therapist in London"
                fill
                priority
                sizes="(max-width: 1024px) 260px, 380px"
                className="object-cover"
                style={{ objectPosition: '50% 15%' }}
              />
              {/* Subtle warm overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(74,52,40,0.15) 100%)' }}
              />
            </div>

            {/* Floating badge — experience */}
            <div className="absolute bottom-4 lg:bottom-10 -left-2 lg:-left-4 bg-ivory border border-rose/20 rounded-2xl px-4 py-2 lg:px-5 lg:py-3 shadow-soft">
              <p className="font-display text-xl lg:text-2xl text-brown-dark leading-none">5★</p>
              <p className="font-body text-[10px] tracking-[0.15em] uppercase text-brown-muted mt-1">
                Rated London
              </p>
            </div>

            {/* Floating badge — availability */}
            <div className="absolute top-6 lg:top-12 -right-2 bg-brown-dark rounded-2xl px-4 py-2 lg:px-5 lg:py-3 shadow-soft">
              <p className="font-body text-[10px] tracking-[0.15em] uppercase text-ivory/60 mb-0.5">Available</p>
              <p className="font-display text-sm text-ivory">Daily · 11–22</p>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="font-body text-[10px] tracking-[0.2em] uppercase text-brown-muted">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-rose/60 to-transparent" />
      </div>
    </section>
  )
}

import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/siteConfig'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-ivory">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 bg-hero-pattern" aria-hidden="true" />
      <div
        className="absolute top-1/4 right-0 w-[700px] h-[700px] rounded-full opacity-25 blur-3xl"
        style={{ background: 'radial-gradient(circle, #E6C7BC 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #A9AA95 0%, transparent 70%)' }}
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
                Certified Massage Therapist
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-display-xl text-brown-dark mb-6 leading-none">
              <span className="block">Private Massage</span>
              <span className="block italic font-light" style={{ color: 'var(--rose-dark)' }}>
                Therapy
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
              Swedish, deep tissue, sports, aromatherapy and more. Available daily
              11:00–22:00 across Central London — in-call, outcall, and treatment room.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="/booking" className="btn-primary text-base px-8 py-4">
                Book Appointment
              </Link>
              <Link href="/services" className="btn-secondary text-base px-8 py-4">
                View Services
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-12 pt-10 border-t border-rose/20">
              {[
                { icon: '✦', label: 'Certified Therapist' },
                { icon: '✦', label: 'In-call & Outcall' },
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
          <div className="hidden lg:flex justify-center items-center relative">
            {/* Outer decorative ring */}
            <div
              className="absolute w-[420px] h-[540px] border border-rose/25 rounded-[50%] rotate-6"
              aria-hidden="true"
            />
            <div
              className="absolute w-[400px] h-[520px] border border-rose/15 rounded-[50%] -rotate-3"
              aria-hidden="true"
            />

            {/* Oval image frame */}
            <div
              className="relative w-[380px] h-[500px] overflow-hidden shadow-2xl"
              style={{ borderRadius: '50%' }}
            >
              <Image
                src="/images/anastasia-hero.jpg"
                alt="Anastasia — certified massage therapist in London"
                fill
                priority
                sizes="380px"
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
            <div className="absolute bottom-10 -left-4 bg-ivory border border-rose/20 rounded-2xl px-5 py-3 shadow-soft">
              <p className="font-display text-2xl text-brown-dark leading-none">5★</p>
              <p className="font-body text-[10px] tracking-[0.15em] uppercase text-brown-muted mt-1">
                Rated London
              </p>
            </div>

            {/* Floating badge — availability */}
            <div className="absolute top-12 -right-2 bg-brown-dark rounded-2xl px-5 py-3 shadow-soft">
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

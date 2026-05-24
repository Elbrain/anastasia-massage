import { AnimatedSection } from '@/components/ui/AnimatedSection'

const reasons = [
  {
    title: 'Genuinely Personalised',
    body: "Every session begins with a conversation. I ask about your body, your stress levels, and what you need that day — then adapt my approach accordingly. You'll never receive a one-size-fits-all treatment.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    title: 'Certified & Insured',
    body: "I hold professional certification in massage therapy and maintain full professional indemnity insurance. You can relax knowing you're in qualified, covered hands.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: 'Flexible Booking',
    body: "Available daily from 11:00 to 22:00, including weekends. I offer in-call at my Central London treatment room, or I come to you across the city — whatever suits your schedule.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    title: 'A Private Experience',
    body: "No waiting rooms, no receptionists, no interruptions. When you book with me, the session is entirely yours. Discreet, professional, and focused on your wellbeing.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
  },
  {
    title: 'Results You Feel',
    body: "I measure my success by how you feel when you leave. Whether that's a specific pain point resolved, a knot finally released, or simply the deepest sleep you've had in months.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    title: 'Across Central London',
    body: "My treatment room is in Central London, and outcall covers Kensington, Chelsea, Mayfair, Westminster, Paddington, Notting Hill, and the surrounding areas.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
]

export function WhyChoose() {
  return (
    <section className="section bg-brown-dark overflow-hidden relative">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(247,242,237,0.4) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-rose mb-4">
            Why Work With Me
          </p>
          <h2 className="font-display text-display-md text-ivory mb-5">
            The Difference a Dedicated<br />
            <span className="italic font-light text-rose-light">Therapist Makes</span>
          </h2>
          <p className="text-ivory/60 leading-relaxed">
            In a city full of chain spas and walk-in clinics, I offer something
            different: attentive, skilled, one-to-one care.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <AnimatedSection key={reason.title} delay={(Math.min(i % 3 + 1, 5) as 1 | 2 | 3 | 4 | 5)}>
              <div className="bg-ivory/5 border border-ivory/10 rounded-3xl p-7 hover:bg-ivory/10 hover:border-rose/30 transition-all duration-300 card-hover">
                <div className="w-11 h-11 rounded-2xl bg-rose/20 flex items-center justify-center text-rose mb-5">
                  {reason.icon}
                </div>
                <h3 className="font-display text-xl text-ivory mb-3">{reason.title}</h3>
                <p className="font-body text-sm text-ivory/60 leading-relaxed">{reason.body}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Terms & Conditions — Anna Massage Therapist London',
  description: 'Terms and conditions for booking and using Anna Massage Therapist services in London.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <section className="pt-36 pb-24 bg-ivory">
      <div className="container-site max-w-3xl">
        <nav className="flex items-center gap-2 text-xs text-brown-muted mb-8 flex-wrap">
          <Link href="/" className="hover:text-brown-dark transition-colors">Home</Link>
          <span>/</span>
          <span className="text-brown-dark">Terms &amp; Conditions</span>
        </nav>

        <h1 className="font-display text-display-md text-brown-dark mb-4">Terms &amp; Conditions</h1>
        <p className="text-sm text-brown-muted mb-12">Last updated: January 2025</p>

        <div className="prose-anastasia text-brown leading-relaxed space-y-8">

          <div>
            <h2 className="font-display text-xl text-brown-dark mb-3">1. Service Provider</h2>
            <p>These terms govern the use of sensual massage services provided by Anna, an independent sensual massage therapist based in London, UK (&quot;the Therapist&quot;). By booking an appointment, you confirm that you are 18 or over and agree to these terms and conditions.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-brown-dark mb-3">2. Booking and Confirmation</h2>
            <p>All bookings are requests until confirmed by the Therapist. Sending an enquiry does not guarantee an appointment. Confirmation is provided via phone or WhatsApp. Payment terms and any deposit requirements will be communicated at the time of booking confirmation.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-brown-dark mb-3">3. Cancellation Policy</h2>
            <p>We understand that plans change. We ask that you give as much notice as possible if you need to cancel or reschedule your appointment. The following applies:</p>
            <ul className="mt-3 space-y-2 list-none pl-0">
              {[
                'More than 24 hours notice: Full refund or free rescheduling',
                'Less than 24 hours notice: A cancellation fee may apply',
                'No-show without notice: Full session fee may be charged',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">The Therapist reserves the right to cancel appointments with reasonable notice. In such cases, a full refund will be provided or the appointment will be rescheduled at your convenience.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-brown-dark mb-3">4. Health and Safety</h2>
            <p>You are responsible for disclosing any medical conditions, injuries, pregnancy, or other health circumstances that may affect the suitability of massage therapy. The Therapist may decline to provide treatment or modify treatment based on this information.</p>
            <p className="mt-3">Massage therapy is not a substitute for medical treatment. If you are under medical care, please consult your GP or specialist before booking. The Therapist reserves the right to decline treatment if they believe it is not appropriate or safe.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-brown-dark mb-3">5. Conduct &amp; Respect</h2>
            <p>All sessions take place between consenting adults (18+) in an atmosphere of mutual respect, comfort and discretion. Personal boundaries are agreed and honoured at all times, and either party may pause or end the session at any point. Disrespectful, aggressive or intoxicated behaviour, or any attempt to record or photograph the session without consent, will result in immediate termination with no refund. Good personal hygiene is expected. The Therapist reserves the right to decline or end a booking at her discretion.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-brown-dark mb-3">6. In-call Appointments</h2>
            <p>All appointments are in-call at the Therapist&apos;s private studio in West Kensington (W14). The exact address and directions are shared once a booking is confirmed. Please arrive freshly showered and on time; the session runs from the booked start time.</p>
            <p className="mt-3">The studio is a private space — discretion and considerate, respectful conduct are expected at all times.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-brown-dark mb-3">7. Pricing</h2>
            <p>All prices are as stated at the time of booking confirmation. Prices are subject to change with reasonable notice. The Therapist reserves the right to adjust pricing for new bookings.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-brown-dark mb-3">8. Liability</h2>
            <p>While every care is taken to provide a safe and professional service, the Therapist&apos;s liability is limited to the cost of the treatment session. We are not liable for any indirect or consequential loss or damage. By booking an appointment, you accept that massage therapy carries inherent risks and that you are receiving treatment voluntarily.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-brown-dark mb-3">9. Intellectual Property</h2>
            <p>All content on this website — including text, images, and design — is the property of Anna Massage Therapist and may not be reproduced without permission.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-brown-dark mb-3">10. Governing Law</h2>
            <p>These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-brown-dark mb-3">11. Contact</h2>
            <p>Questions about these terms should be directed to us on <a href="https://wa.me/447768164518" target="_blank" rel="noopener noreferrer" className="text-rose hover:underline">WhatsApp</a>.</p>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-rose/15">
                    <Link href="/" className="text-sm text-rose hover:underline">← Back to Home</Link>
        </div>
      </div>
    </section>
  )
}

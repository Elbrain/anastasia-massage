import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Terms & Conditions — Anastasia Massage Therapist London',
  description: 'Terms and conditions for booking and using Anastasia Massage Therapist services in London.',
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
            <p>These terms govern the use of massage therapy services provided by Anastasia, an independent certified massage therapist based in London, UK (&quot;the Therapist&quot;). By booking an appointment, you agree to these terms and conditions.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-brown-dark mb-3">2. Booking and Confirmation</h2>
            <p>All bookings are requests until confirmed by the Therapist. Submitting a booking form does not guarantee an appointment. Confirmation is provided via phone, WhatsApp, or email. Payment terms and any deposit requirements will be communicated at the time of booking confirmation.</p>
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
            <h2 className="font-display text-xl text-brown-dark mb-3">5. Conduct</h2>
            <p>All services are provided in a strictly professional therapeutic context. Any inappropriate behaviour, requests, or suggestions will result in the immediate termination of the session. No refund will be given in such circumstances. The Therapist reserves the right to refuse service to anyone.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-brown-dark mb-3">6. Outcall Appointments</h2>
            <p>For outcall appointments, you are responsible for providing a safe, clean, and appropriate space for treatment. This includes a clear area of approximately 250cm × 200cm with adequate lighting and reasonable ambient temperature. The Therapist may decline to continue if the environment is deemed unsuitable or unsafe.</p>
            <p className="mt-3">A travel supplement applies to all outcall appointments. The supplement is calculated based on the distance from the Central London treatment room and will be communicated at the time of booking.</p>
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
            <p>All content on this website — including text, images, and design — is the property of Anastasia Massage Therapist and may not be reproduced without permission.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-brown-dark mb-3">10. Governing Law</h2>
            <p>These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-brown-dark mb-3">11. Contact</h2>
            <p>Questions about these terms should be directed to: <a href="mailto:hello@anastassiamassage.co.uk" className="text-rose hover:underline">hello@anastassiamassage.co.uk</a></p>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-rose/15">
          <Link href="/" className="text-sm text-rose hover:text-rose-dark transition-colors">← Back to Home</Link>
        </div>
      </div>
    </section>
  )
}

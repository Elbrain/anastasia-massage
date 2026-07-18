import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy — Anna Massage Therapist London',
  description: 'Privacy policy for Anna Massage Therapist. How we collect, use and protect your personal information.',
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <section className="pt-36 pb-24 bg-ivory">
      <div className="container-site max-w-3xl">
        <nav className="flex items-center gap-2 text-xs text-brown-muted mb-8 flex-wrap">
          <Link href="/" className="hover:text-brown-dark transition-colors">Home</Link>
          <span>/</span>
          <span className="text-brown-dark">Privacy Policy</span>
        </nav>

        <h1 className="font-display text-display-md text-brown-dark mb-4">Privacy Policy</h1>
        <p className="text-sm text-brown-muted mb-12">Last updated: January 2025</p>

        <div className="prose-anastasia text-brown leading-relaxed space-y-8">

          <div>
            <h2 className="font-display text-xl text-brown-dark mb-3">1. Who We Are</h2>
            <p>This website is operated by Anna, an independent sensual massage therapist based in London, UK. References to &quot;we&quot;, &quot;us&quot; or &quot;our&quot; in this policy refer to Anna.</p>
            <p className="mt-3">If you have any questions about this privacy policy or how we handle your data, please contact us on <a href="https://wa.me/447741020371" target="_blank" rel="noopener noreferrer" className="text-rose hover:underline">WhatsApp</a>.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-brown-dark mb-3">2. What Information We Collect</h2>
            <p>We collect information you provide directly to us when you:</p>
            <ul className="mt-3 space-y-2 list-none pl-0">
              {[
                'Contact us via WhatsApp',
                'Call or text us by telephone',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">The information collected may include your name, phone number, preferred appointment date and time, and any preferences you share when arranging your session. We keep this to the minimum needed to arrange and provide your appointment.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-brown-dark mb-3">3. How We Use Your Information</h2>
            <p>We use the information we collect solely to:</p>
            <ul className="mt-3 space-y-2 list-none pl-0">
              {[
                'Respond to your booking request and confirm appointments',
                'Contact you regarding your appointment',
                'Provide the massage therapy service you have requested',
                'Send appointment reminders where you have consented',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">We do not use your information for marketing purposes without your explicit consent. We do not sell, rent or share your personal information with any third parties for marketing purposes.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-brown-dark mb-3">4. Legal Basis for Processing</h2>
            <p>We process your personal data on the following legal bases under the UK GDPR:</p>
            <ul className="mt-3 space-y-2 list-none pl-0">
              {[
                'Contract performance — to fulfil the booking and treatment service you have requested',
                'Legitimate interests — to manage our appointment schedule and communicate with clients',
                'Consent — where you have explicitly agreed to receive communications from us',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl text-brown-dark mb-3">5. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to provide our services and comply with our legal obligations. Booking records are typically retained for 3 years for accounting and legal purposes. You may request deletion of your data at any time (subject to any legal retention requirements).</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-brown-dark mb-3">6. Third-Party Services</h2>
            <p>Our website is hosted on Vercel. Enquiries are made directly via WhatsApp or telephone, which are governed by their own privacy policies. We do not collect personal data through the website itself.</p>
            <p className="mt-3">We do not use tracking cookies, advertising networks, or analytics services that collect personal data beyond standard server logs.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-brown-dark mb-3">7. Your Rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul className="mt-3 space-y-2 list-none pl-0">
              {[
                'Access the personal data we hold about you',
                'Correct inaccurate personal data',
                'Request deletion of your personal data',
                'Object to or restrict our processing of your data',
                'Data portability — receive your data in a structured format',
                'Withdraw consent at any time where processing is based on consent',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">To exercise any of these rights, contact us at <a href="https://wa.me/447741020371" target="_blank" rel="noopener noreferrer" className="text-rose hover:underline">WhatsApp</a>. You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-rose hover:underline">ico.org.uk</a>.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-brown-dark mb-3">8. Security</h2>
            <p>We take reasonable technical and organisational measures to protect your personal information against unauthorised access, loss, or misuse. Our website uses HTTPS encryption for all data in transit.</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-brown-dark mb-3">9. Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.</p>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-rose/15">
          <Link href="/" className="text-sm text-rose hover:text-rose-dark transition-colors">← Back to Home</Link>
        </div>
      </div>
    </section>
  )
}

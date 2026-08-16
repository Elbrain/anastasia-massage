import Link from 'next/link'
import { Phone, Clock, MapPin } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'
import { HomeOnly } from './HomeOnly'

const quickLinks = [
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/booking', label: 'Book / Contact' },
  { href: '/portfolio', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Journal' },
]

const localLinks = [
  { href: '/massage-london', label: 'Massage in London' },
  { href: '/massage-kensington', label: 'Massage Kensington' },
  { href: '/massage-chelsea', label: 'Massage Chelsea' },
  { href: '/massage-paddington', label: 'Massage Paddington' },
  { href: '/massage-westminster', label: 'Massage Westminster' },
  { href: '/massage-central-london', label: 'Massage Central London' },
  { href: '/massage-west-london', label: 'Massage West London' },
  { href: '/massage-near-me', label: 'Massage Near Me' },
]

export function Footer() {
  return (
    <footer className="bg-brown-dark text-ivory/80">
      {/* Top section */}
      <div className="container-site py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 group">
              <div className="flex flex-col items-start">
                {/* Cursive name */}
                <span
                  className="font-display text-[2.4rem] leading-none text-ivory/90 group-hover:text-ivory transition-colors"
                  style={{ fontStyle: 'italic', fontWeight: 300, letterSpacing: '-0.01em' }}
                >
                  Anna
                </span>
                {/* Decorative divider */}
                <div className="flex items-center gap-2 my-2 w-full">
                  <span className="flex-1 h-px bg-rose/40" />
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-rose/60 flex-shrink-0">
                    <path d="M12 3C12 3 8 7 8 12C8 15.31 9.89 18.05 12 19.5C14.11 18.05 16 15.31 16 12C16 7 12 3 12 3Z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                    <path d="M12 19.5C10 17 6 15 4 16C5 19 8 21 12 21" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                    <path d="M12 19.5C14 17 18 15 20 16C19 19 16 21 12 21" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                  </svg>
                  <span className="flex-1 h-px bg-rose/40" />
                </div>
                {/* Subtitle */}
                <span className="font-body text-[9px] tracking-[0.32em] uppercase text-ivory/40 self-stretch text-center">
                  Sensual Massage · London
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-ivory/60 mb-6 max-w-xs">
              Private sensual massage in London. Sensual, body-to-body, tantric and nuru
              massage in a warm, discreet and unhurried setting.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-ivory/10 flex items-center justify-center hover:bg-rose/30 transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-lg text-ivory mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory/60 hover:text-rose transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Local areas */}
          <div>
            <h3 className="font-display text-lg text-ivory mb-5">Locations</h3>
            <ul className="space-y-2.5">
              {localLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory/60 hover:text-rose transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="font-display text-lg text-ivory mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-rose mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-ivory/80 font-medium">Opening Hours</p>
                  <p className="text-sm text-ivory/50">{siteConfig.hours.weekdays}</p>
                  <p className="text-xs text-ivory/40">{siteConfig.hours.note}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-rose mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-ivory/80 font-medium">Location</p>
                  <p className="text-sm text-ivory/50">West Kensington, W14</p>
                  <p className="text-xs text-ivory/40">In-call only · Address shared on booking</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-rose flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-sm text-ivory/60 hover:text-rose transition-colors duration-200"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-rose flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ivory/60 hover:text-rose transition-colors duration-200"
                >
                  Message on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Developer credit */}
      <div className="border-t border-ivory/10">
        <div className="container-site py-5">
          <p className="text-center text-xs text-ivory/40">
            Developed with <span className="text-rose">♥</span> by{' '}
            <a
              href="https://boost18.co.uk/"
              target="_blank"
              rel="noopener"
              className="text-ivory/60 hover:text-rose transition-colors duration-200"
            >
              boost18
            </a>
          </p>
        </div>
      </div>

      {/* Partner banners / backlinks */}
      <div className="border-t border-ivory/10">
        <div className="container-site py-8">
          <p className="text-center font-body text-[10px] tracking-[0.3em] uppercase text-ivory/30 mb-5">
            Featured On
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <HomeOnly>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <a href="https://www.eurogirlsescort.com" target="_blank" title="EuroGirlsEscort.com"><img src="https://www.eurogirlsescort.com/dist/images/banners/234X60.jpg" alt="EuroGirlsEscort.com" title="EuroGirlsEscort.com" /></a>
            </HomeOnly>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <a href="https://massagehub.uk/profile/sensual-massage-with-leya-in-west-london-leya" target="_blank" rel="noopener" title="Featured on MassageHub.uk — UK massage directory"><img src="https://massagehub.uk/api/badge/sensual-massage-with-leya-in-west-london-leya?style=dark" alt="Featured on MassageHub.uk — UK massage directory" width={250} height={76} style={{border: '0', borderRadius: '10px'}} /></a>

            <HomeOnly>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <a href="https://best-escortgirls.com" target="_blank" rel="noopener" title="best-escortgirls.com"><img src="https://best-escortgirls.com/images/banners/b120x60.jpg" alt="best-escortgirls.com" title="best-escortgirls.com" width={120} height={60} /></a>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <a href="https://www.escort.co.uk" target="_blank" rel="noopener" title="London Escorts At Escort.co.uk"><img src="https://www.escort.co.uk/assets/images/escortcouk.gif" alt="London Escorts At Escort.co.uk" title="London Escorts At Escort.co.uk" width={240} height={60} style={{border: '0'}} /></a>

              {/* LMB banner */}
              <div className="flex flex-col items-center gap-1.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <a href="https://londonmassagebook.co.uk/" target="_blank" rel="noopener"><img src="https://londonmassagebook.co.uk/img/lmb/lmb-black.png" alt="LMB London Erotic Massage Guide" width={181} height={60} style={{border: '0'}} /></a>
                <strong className="text-xs text-ivory/60 font-normal">My business Listed in <a href="https://londonmassagebook.co.uk/" target="_blank" rel="noopener" className="text-ivory/80 hover:text-rose transition-colors duration-200">London Massage Book</a></strong>
              </div>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <a title="London & UK Sensual Massage Directory" href="https://www.tantric-angels.co.uk/" target="_blank" rel="noopener"><img loading="lazy" decoding="async" src="https://www.tantric-angels.co.uk/wp-content/uploads/2024/12/300_39_tantric_angels_banner.png" alt="Tantric Angels Directory" width={300} height={39} /></a>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <a href="https://www.world-escort-guide.com/" title="Escort Directory" target="_blank" rel="noopener"><img src="https://www.world-escort-guide.com/assets/escortguide/weg7.jpg" alt="Escort Directory" /></a>
            </HomeOnly>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ivory/10">
        <div className="container-site py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/40">
            © {new Date().getFullYear()} Anna — Sensual Massage London. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-xs text-ivory/40 hover:text-ivory/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-ivory/40 hover:text-ivory/60 transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

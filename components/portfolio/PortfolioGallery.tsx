'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const galleryItems = [
  {
    id: 101,
    src: '/images/anastasia-hero.jpg',
    alt: 'Anna in red — sensual massage therapist in London',
    category: 'Anna',
    aspect: 'portrait',
  },
  {
    id: 102,
    src: '/images/anastasia-portrait.jpg',
    alt: 'Anna — sensual massage in London',
    category: 'Anna',
    aspect: 'portrait',
  },
  {
    id: 103,
    src: '/images/anastasia-gallery-1.jpg',
    alt: 'Anna — private sensual massage in London',
    category: 'Anna',
    aspect: 'portrait',
  },
  {
    id: 1,
    src: '/images/portfolio/portfolio-07-treatment-room.jpg',
    alt: 'Private sensual massage studio in West Kensington — warm lighting and massage table',
    category: 'Room',
    aspect: 'landscape',
  },
  {
    id: 2,
    src: '/images/portfolio/portfolio-02-hot-stones.jpg',
    alt: 'Hot basalt stones steaming before a hot stone massage treatment',
    category: 'Equipment',
    aspect: 'portrait',
  },
  {
    id: 3,
    src: '/images/portfolio/portfolio-01-towels.jpg',
    alt: 'Fresh white towels and treatment essentials laid out before a session',
    category: 'Details',
    aspect: 'landscape',
  },
  {
    id: 4,
    src: '/images/portfolio/portfolio-04-candles.jpg',
    alt: 'Candles and aromatherapy oils creating a relaxing atmosphere',
    category: 'Atmosphere',
    aspect: 'portrait',
  },
  {
    id: 5,
    src: '/images/portfolio/portfolio-03-table-detail.jpg',
    alt: 'Professional massage table with face cradle and treatment oils',
    category: 'Equipment',
    aspect: 'landscape',
  },
  {
    id: 6,
    src: '/images/portfolio/portfolio-06-stones-tray.jpg',
    alt: 'Heated basalt stones on wooden tray ready for treatment',
    category: 'Equipment',
    aspect: 'portrait',
  },
  {
    id: 7,
    src: '/images/portfolio/portfolio-05-oils.jpg',
    alt: 'Collection of essential oils and aromatherapy blends',
    category: 'Details',
    aspect: 'landscape',
  },
]

const CATEGORIES = ['All', 'Anna', 'Room', 'Equipment', 'Atmosphere', 'Details']

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const prev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null))
  const next = () => setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null))

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-body transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-brown-dark text-ivory'
                : 'bg-cream text-brown border border-rose/20 hover:border-rose/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
        {filtered.map((item, i) => (
          <AnimatedSection key={item.id} delay={(Math.min(i % 3 + 1, 5) as 1 | 2 | 3 | 4 | 5)}>
            <button
              onClick={() => openLightbox(i)}
              className="block w-full break-inside-avoid rounded-3xl overflow-hidden cursor-zoom-in group"
              aria-label={`View: ${item.alt}`}
            >
              <div
                className={`relative w-full bg-cream ${item.aspect === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-brown-dark/0 group-hover:bg-brown-dark/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-ivory/90 rounded-full p-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A3428" strokeWidth="1.5">
                      <circle cx="11" cy="11" r="8"/>
                      <path d="M21 21l-4.35-4.35"/>
                      <path d="M11 8v6M8 11h6"/>
                    </svg>
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="bg-ivory/80 backdrop-blur-sm text-brown-dark text-xs font-body px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            </button>
          </AnimatedSection>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div
            className="relative max-w-4xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`relative w-full bg-brown-dark rounded-2xl overflow-hidden ${
                filtered[lightboxIndex].aspect === 'portrait' ? 'aspect-[3/4] max-w-md mx-auto' : 'aspect-[4/3]'
              }`}
            >
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 900px"
                priority
              />
            </div>
            <p className="text-center text-ivory/70 text-sm font-body mt-4">
              {filtered[lightboxIndex].alt}
            </p>
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 bg-ivory/20 rounded-full flex items-center justify-center text-ivory hover:bg-ivory/30 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 bg-ivory/20 rounded-full flex items-center justify-center text-ivory hover:bg-ivory/30 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

'use client'

import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const galleryItems = [
  { id: 1, alt: 'Treatment room — massage table set with fresh linens', category: 'Room', aspect: 'landscape' },
  { id: 2, alt: 'Aromatherapy oils and candles', category: 'Atmosphere', aspect: 'portrait' },
  { id: 3, alt: 'Warm lighting and soft furnishings in the treatment room', category: 'Room', aspect: 'landscape' },
  { id: 4, alt: 'Hot stone arrangement before treatment', category: 'Equipment', aspect: 'portrait' },
  { id: 5, alt: 'Soft towels and treatment essentials', category: 'Details', aspect: 'landscape' },
  { id: 6, alt: 'Treatment room ambience — warm and private', category: 'Atmosphere', aspect: 'portrait' },
  { id: 7, alt: 'Essential oil collection', category: 'Equipment', aspect: 'landscape' },
  { id: 8, alt: 'Clean, minimal treatment space', category: 'Room', aspect: 'portrait' },
  { id: 9, alt: 'Professional massage table and accessories', category: 'Equipment', aspect: 'landscape' },
]

const CATEGORIES = ['All', 'Room', 'Atmosphere', 'Equipment', 'Details']

function PlaceholderImage({ alt, index }: { alt: string; index: number }) {
  const hues = ['#EFE6DF', '#E6C7BC', '#D8B5A6', '#C4C5B2', '#EFE6DF']
  const bg = hues[index % hues.length]
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ background: bg }}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9E8276" strokeWidth="1">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <path d="M21 15l-5-5L5 21"/>
      </svg>
      <p className="font-body text-xs text-brown-muted text-center mt-3 px-4 leading-tight">{alt}</p>
    </div>
  )
}

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
                <PlaceholderImage alt={item.alt} index={i} />
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
            <div className="relative aspect-[4/3] w-full bg-cream rounded-2xl overflow-hidden">
              <PlaceholderImage alt={filtered[lightboxIndex].alt} index={lightboxIndex} />
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
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 w-10 h-10 bg-ivory/20 rounded-full flex items-center justify-center text-ivory hover:bg-ivory/30 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

'use client'

import { useState } from 'react'
import { siteConfig } from '@/lib/siteConfig'

interface FormData {
  name: string
  phone: string
  email: string
  date: string
  time: string
  massageType: string
  location: string
  duration: string
  notes: string
}

const massageTypes = [
  'Swedish Massage',
  'Deep Tissue Massage',
  'Sports Massage',
  'Aromatherapy Massage',
  'Hot Stone Massage',
  'Therapeutic Massage',
  'Relaxing Massage',
  'Full Body Massage',
  'Not sure — please advise',
]

const timeSlots = [
  '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
  '20:00', '20:30', '21:00',
]

type Status = 'idle' | 'loading' | 'success' | 'error'

export function BookingForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    massageType: '',
    location: 'in-call',
    duration: '90',
    notes: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({
          name: '', phone: '', email: '', date: '', time: '',
          massageType: '', location: 'in-call', duration: '90', notes: '',
        })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-cream rounded-4xl border border-rose/20 p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-rose/20 flex items-center justify-center mx-auto mb-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D8B5A6" strokeWidth="1.5">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
        </div>
        <h2 className="font-display text-2xl text-brown-dark mb-3">Request Received</h2>
        <p className="text-brown leading-relaxed mb-6">
          Thank you, your request has been received. I&apos;ll confirm your booking
          via email or WhatsApp within a few hours.
        </p>
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex"
        >
          Message on WhatsApp
        </a>
      </div>
    )
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-ivory border border-rose/20 text-brown placeholder-brown-muted text-sm focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose/30 transition-colors duration-200'

  const labelClass = 'block font-body text-sm font-medium text-brown-dark mb-2'

  return (
    <form onSubmit={handleSubmit} className="bg-cream rounded-4xl border border-rose/15 p-8 lg:p-10">
      <h2 className="font-display text-2xl text-brown-dark mb-8">Booking Enquiry</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClass}>Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputClass}
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClass}>Phone *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+44 7700 000000"
            className={inputClass}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className={labelClass}>Session Type *</label>
          <select
            id="location"
            name="location"
            required
            value={formData.location}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="in-call">In-call (Treatment Room)</option>
            <option value="outcall">Outcall (I come to you)</option>
          </select>
        </div>

        {/* Massage type */}
        <div className="sm:col-span-2">
          <label htmlFor="massageType" className={labelClass}>Massage Type *</label>
          <select
            id="massageType"
            name="massageType"
            required
            value={formData.massageType}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select a treatment…</option>
            {massageTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {/* Duration */}
        <div>
          <label htmlFor="duration" className={labelClass}>Duration *</label>
          <select
            id="duration"
            name="duration"
            required
            value={formData.duration}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="60">60 minutes</option>
            <option value="90">90 minutes</option>
            <option value="120">120 minutes</option>
          </select>
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className={labelClass}>Preferred Date *</label>
          <input
            id="date"
            name="date"
            type="date"
            required
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className={inputClass}
          />
        </div>

        {/* Time */}
        <div>
          <label htmlFor="time" className={labelClass}>Preferred Time *</label>
          <select
            id="time"
            name="time"
            required
            value={formData.time}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select a time…</option>
            {timeSlots.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {/* Notes */}
        <div className="sm:col-span-2">
          <label htmlFor="notes" className={labelClass}>Any Notes or Questions</label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            value={formData.notes}
            onChange={handleChange}
            placeholder="Tell me about any areas you'd like focused on, any injuries or contraindications, your address for outcall, or anything else that would help me prepare…"
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      {status === 'error' && (
        <div className="mt-5 p-4 bg-red-50 border border-red-100 rounded-xl">
          <p className="text-sm text-red-700">
            Something went wrong. Please try again or contact me via WhatsApp.
          </p>
        </div>
      )}

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary justify-center sm:flex-1 disabled:opacity-60"
        >
          {status === 'loading' ? 'Sending…' : 'Send Booking Request'}
        </button>
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary justify-center sm:flex-none"
        >
          WhatsApp Instead
        </a>
      </div>

      <p className="mt-4 text-xs text-brown-muted text-center">
        This is an enquiry form — not a confirmed booking. I&apos;ll confirm availability and details within a few hours.
      </p>
    </form>
  )
}

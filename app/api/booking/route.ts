import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const {
      name, phone, email, date, time,
      massageType, location, duration, notes,
    } = data

    if (!name || !phone || !email || !date || !time || !massageType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? 'hello@anastassiamassage.co.uk'

    if (RESEND_API_KEY) {
      const emailBody = `
New Booking Request
═══════════════════════════════

Name:         ${name}
Phone:        ${phone}
Email:        ${email}

Date:         ${date}
Time:         ${time}
Duration:     ${duration} minutes
Type:         ${massageType}
Location:     ${location}

Notes:
${notes || '—'}

═══════════════════════════════
Sent from anastassiamassage.co.uk
      `.trim()

      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Bookings <noreply@anastassiamassage.co.uk>',
          to: [CONTACT_EMAIL],
          reply_to: email,
          subject: `New Booking Request — ${name} — ${date} at ${time}`,
          text: emailBody,
        }),
      })

      if (!res.ok) {
        console.error('Resend error:', await res.text())
      }
    } else {
      // Fallback: just log the booking (useful for dev / before Resend is configured)
      console.log('Booking request received (Resend not configured):', {
        name, phone, email, date, time, massageType, location, duration, notes,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Booking API error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}

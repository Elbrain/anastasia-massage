import { NextResponse } from 'next/server'

// The on-site booking form has been removed.
// Enquiries are now handled directly via WhatsApp or phone.
export async function POST() {
  return NextResponse.json(
    { message: 'Please contact us on WhatsApp to arrange your appointment.' },
    { status: 410 }
  )
}

export async function GET() {
  return NextResponse.json(
    { message: 'Please contact us on WhatsApp to arrange your appointment.' },
    { status: 410 }
  )
}

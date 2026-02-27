import { NextRequest, NextResponse } from 'next/server'

interface InquiryData {
  name: string
  email: string
  phone?: string
  program?: string
  message?: string
}

// In-memory storage (in production, use a proper database)
const inquiries: InquiryData[] = []

export async function POST(request: NextRequest) {
  try {
    const body: InquiryData = await request.json()

    // Validate required fields
    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Store the inquiry
    const inquiry = {
      ...body,
      timestamp: new Date().toISOString(),
    }

    inquiries.push(inquiry)

    // In production, you would:
    // 1. Save to a database
    // 2. Send a confirmation email to the user
    // 3. Send a notification email to admin
    // For now, we'll just log it
    console.log('New inquiry received:', inquiry)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your inquiry! We will get back to you soon.',
        inquiry: {
          name: inquiry.name,
          email: inquiry.email,
        }
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing inquiry:', error)
    return NextResponse.json(
      { error: 'Failed to process inquiry' },
      { status: 500 }
    )
  }
}

export async function GET() {
  // This endpoint returns all inquiries (for admin dashboard in future)
  // In production, this should be protected with authentication
  return NextResponse.json({
    inquiries,
    count: inquiries.length,
  })
}

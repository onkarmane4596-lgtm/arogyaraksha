import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Outfit, Poppins, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#4d5b4d',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export const metadata: Metadata = {
  title: 'Best Yoga Classes in Pune & Online Yoga across India | Arogya Raksha',
  description: 'Join Pune’s trusted 5⭐ yoga studio for therapeutic weight loss, PCOD/PCOS yoga, prenatal, and medical yoga therapy. Expert offline classes in Pimple Saudagar & high-results online yoga sessions across India.',
  generator: 'v0.app',
  keywords: ['yoga classes near me', 'yoga classes in Pimple Saudagar', 'best yoga classes in Pune', 'medical yoga therapy', 'therapeutic yoga near me', 'yoga therapy centre', 'Pimpri Chinchwad', 'online PCOD yoga India', 'online weight loss yoga India', 'best yoga classes in Wakad', 'best yoga classes in Pimpri Chinchwad', 'best yoga classes in Pimple Saudagar'],
  authors: [{ name: 'Arogya Raksha Yoga' }],
  icons: {
    icon: [
      {
        url: '/images/logo.png',
        type: 'image/png',
      },
    ],
  },
}

import { FloatingContact } from '@/components/floating-contact'
import { LoadingScreen } from '@/components/loading-screen'
import { SmoothScroll } from '@/components/smooth-scroll'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${outfit.variable} ${poppins.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden" suppressHydrationWarning>
        <SmoothScroll>
          <LoadingScreen />
          {children}
          <FloatingContact />
        </SmoothScroll>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "MedicalBusiness"],
              "name": "Arogya Raksha Yoga",
              "image": "https://www.arogyaraksha.com/images/programs/programs-hero.jpg",
              "@id": "https://www.arogyaraksha.com",
              "url": "https://www.arogyaraksha.com",
              "telephone": "+917030705472",
              "email": "info@arogya.yoga",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Main gate, opposite Kundan Estate, Kate Vasti, Kunj Colony, Pimple Saudagar",
                "addressLocality": "Pimpri-Chinchwad",
                "addressRegion": "Maharashtra",
                "postalCode": "411027",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 18.5993,
                "longitude": 73.7913
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "06:00",
                  "closes": "20:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "07:00",
                  "closes": "18:00"
                }
              ],
              "medicalSpecialty": [
                "Endocrinology", "Obstetric", "Geriatric", "Sports Medicine", "Physical Therapy"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Yoga Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "PCOD & PCOS Therapeutic Yoga",
                      "description": "Specialized yoga therapy for hormonal balance and PCOD/PCOS management."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Therapeutic Weight Loss Yoga",
                      "description": "Results-driven yoga programs for healthy and sustainable weight loss."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Online Yoga Classes India",
                      "description": "High-quality virtual yoga sessions accessible across India for various health goals."
                    }
                  }
                ]
              }
            })
          }}
        />
      </body>
    </html>
  )
}

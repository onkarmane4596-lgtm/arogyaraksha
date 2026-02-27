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
  title: 'Yoga Classes in Pimple Saudagar | Medical Yoga Therapy Pune',
  description: 'Arogya Raksha is Pimpri Chinchwad\'s premier Therapeutic Yoga & Medical Wellness Studio in Pimple Saudagar. Specializing in PCOS, prenatal, and senior mobility therapies.',
  generator: 'v0.app',
  keywords: ['yoga classes near me', 'yoga classes in Pimple Saudagar', 'best yoga classes in Pune', 'medical yoga therapy', 'therapeutic yoga near me', 'yoga therapy centre', 'Pimpri Chinchwad'],
  authors: [{ name: 'Arogya Raksha Yoga' }],
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
}

import { FloatingContact } from '@/components/floating-contact'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${outfit.variable} ${poppins.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground scroll-smooth overflow-x-hidden" suppressHydrationWarning>
        {children}
        <FloatingContact />
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
                "Endocrinology", "Obstetric", "Geriatric"
              ]
            })
          }}
        />
      </body>
    </html>
  )
}

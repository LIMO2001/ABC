import './globals.css'
import './browser-support.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'ABC Law Advocates LLP - Professional Legal Services in Nairobi',
    template: '%s | ABC Law Advocates LLP'
  },
  description: 'Professional legal services in Nairobi, Kenya. Specialized in real estate, intellectual property, corporate law, litigation, debt recovery, and alternative dispute resolution. Commissioners for Oath & Notaries Public.',
  keywords: [
    'law firm Nairobi',
    'legal services Kenya',
    'real estate lawyers Nairobi',
    'intellectual property law Kenya',
    'corporate law Nairobi',
    'litigation lawyers Kenya',
    'debt recovery Nairobi',
    'commissioners for oath Kenya',
    'notaries public Nairobi',
    'ABC Law Advocates',
    'legal consultancy Kenya'
  ],
  authors: [{ name: 'ABC Law Advocates LLP' }],
  creator: 'ABC Law Advocates LLP',
  publisher: 'ABC Law Advocates LLP',
  metadataBase: new URL('https://abclawadvocates.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ABC Law Advocates LLP - Professional Legal Services in Nairobi',
    description: 'Professional legal services in Nairobi, Kenya. Specialized in real estate, intellectual property, corporate law, litigation, debt recovery, and alternative dispute resolution.',
    url: 'https://abclawadvocates.com',
    siteName: 'ABC Law Advocates LLP',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ABC Law Advocates LLP - Professional Legal Services',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABC Law Advocates LLP - Professional Legal Services in Nairobi',
    description: 'Professional legal services in Nairobi, Kenya. Specialized in real estate, intellectual property, corporate law, litigation, debt recovery, and alternative dispute resolution.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "ABC Law Advocates LLP",
    "description": "Professional legal services in Nairobi, Kenya. Specialized in real estate, intellectual property, corporate law, litigation, debt recovery, and alternative dispute resolution.",
    "url": "https://abclawadvocates.com",
    "logo": "https://abclawadvocates.com/images/logo.png",
    "image": "https://abclawadvocates.com/images/og-image.jpg",
    "telephone": ["+2547123456789", "+2547123456789"],
    "email": "info@abclawadvocates.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Greyville Hub, 4, Wing 4, HH",
      "addressLocality": "CBD",
      "addressRegion": "Nairobi",
      "addressCountry": "Kenya"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -1.259438,
      "longitude": 36.9839557
    },
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 09:00-14:00"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Kenya"
    },
    "serviceType": [
      "Real Estate & Conveyancing",
      "Intellectual Property Law",
      "Corporate & Commercial Law",
      "Litigation",
      "Debt Recovery",
      "Alternative Dispute Resolution",
      "Commissioners for Oath",
      "Notaries Public"
    ],
    "foundingDate": "2020",
    "sameAs": [
      "https://www.google.com/maps/place/GREYVILLE+HUB/@-1.259438,36.9839557,17z"
    ]
  }

  return (
    <html lang="en-KE">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
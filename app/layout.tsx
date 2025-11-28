import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hardin Contracting | Roofing & Fencing Athens Decatur Madison County AL",
  description:
    "Premium roofing and fencing services in Athens, Decatur, and Madison County, Alabama. Licensed, insured, 5-star rated. Get your free estimate today!",
  generator: "v0.app",
  keywords: "roofing, fencing, contractor, Athens AL, Decatur, Madison County, roof repair, fence installation",
  openGraph: {
    title: "Hardin Contracting - Roofing & Fencing Experts",
    description: "Serving Athens, Madison County & Decatur, Alabama with premium roofing and fencing services",
    images: [
      {
        url: "/images/hardincontracting.jpg",
        width: 1200,
        height: 800,
      },
    ],
  },
  icons: {
    icon: [
      {
        url: "/images/hardincontracting.jpg",
      },
    ],
    apple: "/images/hardincontracting.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Hardin Contracting",
              image: "/images/hardincontracting.jpg",
              description:
                "Premium roofing and fencing contractor serving Athens, Madison County, and Decatur, Alabama",
              telephone: "256-905-5232",
              email: "Jthardin624@gmail.com",
              url: "https://hardincontracting.com",
              address: {
                "@type": "PostalAddress",
                addressRegion: "AL",
                areaServed: ["Athens, AL", "Madison County, AL", "Decatur, AL"],
              },
              priceRange: "$$",
              ratingValue: "5",
              reviewCount: "50+",
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

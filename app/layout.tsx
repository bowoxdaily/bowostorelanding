import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hosting Murah Indonesia Mulai 15K | LiteSpeed & SSD | Bowo Host",
  description: "Hosting Indonesia murah mulai Rp 15.000/bulan dengan LiteSpeed, SSD NVMe, SSL Gratis, & Support 24/7. Reseller hosting, domain .com, .id tersedia. Garansi uptime 99.9%",
  keywords: "hosting murah, hosting indonesia, web hosting murah, hosting murah unlimited, hosting terbaik indonesia, litespeed hosting, ssd hosting, reseller hosting murah, domain murah, cpanel murah",
  authors: [{ name: "Bowo Host" }],
  creator: "Bowo Host",
  publisher: "Bowo Host",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bowo-store.id'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Hosting Murah Indonesia Mulai 15K | LiteSpeed & SSD",
    description: "Hosting Indonesia murah mulai Rp 15.000/bulan dengan LiteSpeed, SSD NVMe, SSL Gratis, & Support 24/7. Garansi uptime 99.9%",
    url: 'https://bowo-store.id',
    siteName: 'Bowo Store',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Buat image 1200x630px
        width: 1200,
        height: 630,
        alt: 'Hosting Murah Indonesia - Bowo Host',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hosting Murah Indonesia Mulai 15K | LiteSpeed & SSD",
    description: "Hosting Indonesia murah dengan LiteSpeed, SSD NVMe, SSL Gratis. Mulai Rp 15.000/bulan",
    images: ['/og-image.jpg'],
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
    google: 'your-google-verification-code', // Tambahkan dari Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Bowo Store",
              "url": "https://bowo-store.id",
              "logo": "https://bowo-store.id/logo.png",
              "description": "Penyedia layanan hosting murah Indonesia dengan LiteSpeed, SSD, dan support 24/7",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "ID",
                "addressLocality": "Indonesia"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+62-xxx-xxxx-xxxx",
                "contactType": "customer service",
                "availableLanguage": ["id", "en"]
              },
              "sameAs": [
                "https://facebook.com/bowohost",
                "https://twitter.com/bowohost",
                "https://instagram.com/bowohost"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "1000"
              },
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "IDR",
                "lowPrice": "15000",
                "highPrice": "55000",
                "offerCount": "6"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reseller Hosting Murah Mulai 30 Ribu | WHM cPanel Unlimited | Bowo Store",
  description: "Paket reseller hosting murah mulai 30rb/bulan dengan WHM, cPanel unlimited, LiteSpeed, SSD, white label. Cocok untuk bisnis hosting dan digital agency. Support 24/7!",
  keywords: "reseller hosting, reseller hosting murah, whm cpanel, reseller unlimited, bisnis hosting, white label hosting",
  openGraph: {
    title: "Reseller Hosting Murah Mulai 30 Ribu dengan WHM & cPanel",
    description: "Reseller hosting Indonesia terbaik dengan WHM, cPanel unlimited, LiteSpeed, SSD. White label ready. Mulai dari 30rb/bulan!",
    url: "https://bowo-store.id/reseller",
    type: "website",
    images: [
      {
        url: "https://bowo-store.id/logo.png",
        width: 1200,
        height: 630,
        alt: "Bowo Store - Reseller Hosting Murah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reseller Hosting Murah Mulai 30 Ribu | WHM & cPanel",
    description: "Reseller hosting dengan WHM, cPanel unlimited, LiteSpeed. Mulai 30rb/bulan. White label!",
  },
  alternates: {
    canonical: "https://bowo-store.id/reseller",
  },
};

export default function ResellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hosting Murah Indonesia Mulai 15 Ribu | LiteSpeed SSD Unlimited | Bowo Store",
  description: "Paket hosting murah Indonesia mulai 15rb/bulan dengan LiteSpeed, SSD, SSL gratis, unlimited bandwidth. Cocok untuk WordPress, toko online, dan bisnis. Garansi 30 hari!",
  keywords: "hosting murah, hosting indonesia, hosting litespeed, hosting ssd, hosting unlimited, hosting wordpress, web hosting murah",
  openGraph: {
    title: "Hosting Murah Indonesia Mulai 15 Ribu dengan LiteSpeed & SSD",
    description: "Web hosting Indonesia terbaik dengan LiteSpeed, SSD storage, SSL gratis, dan unlimited bandwidth. Support 24/7. Mulai dari 15rb/bulan!",
    url: "https://bowo-store.id/hosting",
    type: "website",
    images: [
      {
        url: "https://bowo-store.id/logo.png",
        width: 1200,
        height: 630,
        alt: "Bowo Store - Hosting Murah Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hosting Murah Indonesia Mulai 15 Ribu | LiteSpeed & SSD",
    description: "Web hosting murah dengan LiteSpeed, SSD, SSL gratis. Mulai 15rb/bulan. Support 24/7!",
  },
  alternates: {
    canonical: "https://bowo-store.id/hosting",
  },
};

export default function HostingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

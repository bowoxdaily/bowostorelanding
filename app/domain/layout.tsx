import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Domain Murah Indonesia | Registrasi Domain .COM, .ID, .MY.ID | Bowo Store",
  description: "Beli domain murah Indonesia: .COM 150rb, .ID 200rb, .MY.ID 35rb/tahun. Registrasi cepat, DNS gratis, WHOIS privacy. Domain untuk website dan email profesional Anda!",
  keywords: "domain murah, domain indonesia, domain .com, domain .id, domain .my.id, beli domain, registrasi domain",
  openGraph: {
    title: "Domain Murah Indonesia | .COM .ID .MY.ID - Bowo Store",
    description: "Domain murah: .COM 150rb, .ID 200rb, .MY.ID 35rb/tahun. DNS gratis, WHOIS privacy, transfer mudah!",
    url: "https://bowo-store.id/domain",
    type: "website",
    images: [
      {
        url: "https://bowo-store.id/logo.png",
        width: 1200,
        height: 630,
        alt: "Bowo Store - Domain Murah Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Domain Murah Indonesia | .COM .ID .MY.ID",
    description: "Domain murah mulai 35rb/tahun. DNS gratis, WHOIS privacy!",
  },
  alternates: {
    canonical: "https://bowo-store.id/domain",
  },
};

export default function DomainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

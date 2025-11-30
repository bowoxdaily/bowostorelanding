"use client"

import { useState } from "react";
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
};

export default function HostingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const packages = [
    {
      name: "Starter",
      monthlyPrice: "15.000",
      description: "Sempurna untuk blog & website pribadi",
      icon: "🚀",
      features: [
        "1 GB SSD Storage",
        "FREE SSL Certificates",
        "LiteSpeed with LSCache",
        "24/7 Phone Support",
      ],
      pid: 1,
      orderUrl: "https://client.bowo-store.id/index.php?rp=/store/shared-hosting/cpanel-mini",
      gradient: "from-blue-500 to-cyan-500",
      badge: "Pemula",
      badgeColor: "bg-blue-100 text-blue-700",
    },
    {
      name: "Basic",
      monthlyPrice: "25.000",
      description: "Ideal untuk bisnis & toko online",
      icon: "⚡",
      features: [
        "2 GB SSD Storage",
        "FREE SSL Certificates",
        "LiteSpeed with LSCache",
        "24/7 Phone Support",
      ],
      pid: 2,
      orderUrl: "https://client.bowo-store.id/index.php?rp=/store/shared-hosting/basic",
      popular: true,
      gradient: "from-purple-500 to-pink-500",
      badge: "Terpopuler",
      badgeColor: "bg-yellow-100 text-yellow-700",
    },
    {
      name: "Standard",
      monthlyPrice: "35.000",
      description: "Untuk website dengan traffic tinggi",
      icon: "💎",
      features: [
        "3 GB SSD Storage",
        "FREE SSL Certificates",
        "Unlimited Bandwidth",
        "LiteSpeed with LSCache",
        "24/7 Phone Support",
      ],
      pid: 3,
      orderUrl: "https://client.bowo-store.id/index.php?rp=/store/shared-hosting/standard",
      gradient: "from-orange-500 to-red-500",
      badge: "Best Value",
      badgeColor: "bg-orange-100 text-orange-700",
    },
    {
      name: "Premium",
      monthlyPrice: "45.000",
      description: "Maksimal untuk website profesional",
      icon: "👑",
      features: [
        "10 GB SSD Storage",
        "FREE SSL Certificates",
        "Unlimited Bandwidth",
        "LiteSpeed with LSCache",
        "24/7 Phone Support",
      ],
      pid: 4,
      orderUrl: "https://client.bowo-store.id/index.php?rp=/store/shared-hosting/premium",
      gradient: "from-green-500 to-emerald-500",
      badge: "Premium",
      badgeColor: "bg-green-100 text-green-700",
    },
  ];

  const calculatePrice = (monthlyPrice: string) => {
    const price = parseInt(monthlyPrice.replace(".", ""));
    if (billingPeriod === "yearly") {
      return (price * 12).toLocaleString("id-ID");
    }
    return monthlyPrice;
  };

  const getPeriodLabel = () => {
    return billingPeriod === "monthly" ? "/bulan" : "/tahun";
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Hosting Murah Indonesia",
            "description": "Web hosting murah Indonesia dengan LiteSpeed, SSD, SSL gratis, dan unlimited bandwidth mulai 15rb/bulan",
            "brand": {
              "@type": "Brand",
              "name": "Bowo Store"
            },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "15000",
              "highPrice": "45000",
              "priceCurrency": "IDR",
              "offerCount": "4"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "2150"
            }
          }),
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 pt-24 pb-16">
        {/* Hero Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center">
            <div className="inline-block mb-4">
              <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                🌟 Shared Hosting Premium
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Hosting Murah Indonesia Mulai <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">15 Ribu</span> dengan LiteSpeed
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Web hosting unlimited dengan teknologi LiteSpeed tercepat, SSD storage, SSL gratis, dan support 24/7. Cocok untuk WordPress, toko online, dan website bisnis Anda.
            </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
              <span className="text-green-500 text-lg">✓</span>
              <span className="font-semibold">99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
              <span className="text-green-500 text-lg">✓</span>
              <span className="font-semibold">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
              <span className="text-green-500 text-lg">✓</span>
              <span className="font-semibold">30 Hari Garansi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Billing Period Toggle */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-2 inline-flex gap-2">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                billingPeriod === "monthly"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Bulanan
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 relative ${
                billingPeriod === "yearly"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Tahunan
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                Hemat
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition transform hover:-translate-y-2 hover:shadow-2xl duration-300 ${
                pkg.popular ? "scale-105 border-4 border-purple-400" : ""
              }`}
            >
              {/* Header with Gradient */}
              <div className={`bg-gradient-to-r ${pkg.gradient} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>
                
                {pkg.popular && (
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-bl-xl rounded-tr-xl text-xs font-bold shadow-lg flex items-center gap-1">
                      ⭐ TERLARIS
                    </div>
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className="text-5xl mb-3">{pkg.icon}</div>
                  <div className={`inline-block ${pkg.badgeColor} px-3 py-1 rounded-full text-xs font-bold mb-2`}>
                    {pkg.badge}
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-white text-opacity-90 text-sm">{pkg.description}</p>
                </div>
              </div>

              {/* Price Section */}
              <div className="p-6 text-center bg-gray-50">
                <div className="flex items-baseline justify-center">
                  <span className="text-gray-500 text-lg">Rp</span>
                  <span className="text-4xl font-extrabold text-gray-900 mx-2">
                    {calculatePrice(pkg.monthlyPrice).split(".")[0]}
                  </span>
                  {calculatePrice(pkg.monthlyPrice).includes(".") && (
                    <span className="text-gray-500">.{calculatePrice(pkg.monthlyPrice).split(".")[1]}</span>
                  )}
                </div>
                <div className="text-gray-500 text-sm mt-1">{getPeriodLabel()}</div>
                {billingPeriod === "yearly" && (
                  <div className="mt-2 text-green-600 text-xs font-semibold">
                    💰 Bayar {billingPeriod === "yearly" ? "12 bulan sekaligus" : "per bulan"}
                  </div>
                )}
              </div>

              {/* Features List */}
              <div className="p-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start group">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm group-hover:text-gray-900 transition">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="p-6 pt-0">
                <a
                  href={pkg.orderUrl || `https://client.example.com/cart.php?a=add&pid=${pkg.pid}`}
                  className={`block w-full bg-gradient-to-r ${pkg.gradient} text-white text-center py-4 rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition duration-300`}
                >
                  Pilih Paket {pkg.name}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Semua Paket Termasuk Fitur Premium
            </h2>
            <p className="text-gray-600">Teknologi terkini untuk performa website maksimal</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition">🎛️</div>
              <h3 className="font-bold text-gray-900 mb-2">cPanel Control Panel</h3>
              <p className="text-gray-600 text-sm">Interface mudah untuk mengelola hosting Anda</p>
            </div>
            
            <div className="group p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition">⚡</div>
              <h3 className="font-bold text-gray-900 mb-2">LiteSpeed Web Server</h3>
              <p className="text-gray-600 text-sm">Server tercepat, hingga 40x lebih cepat dari Apache</p>
            </div>
            
            <div className="group p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition">🚀</div>
              <h3 className="font-bold text-gray-900 mb-2">Softaculous Installer</h3>
              <p className="text-gray-600 text-sm">Install WordPress, Joomla, dan 400+ aplikasi 1-klik</p>
            </div>
            
            <div className="group p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 transition duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition">📧</div>
              <h3 className="font-bold text-gray-900 mb-2">Email Unlimited</h3>
              <p className="text-gray-600 text-sm">Buat email profesional tanpa batas dengan domain sendiri</p>
            </div>
            
            <div className="group p-6 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200 transition duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition">🔒</div>
              <h3 className="font-bold text-gray-900 mb-2">Gratis SSL Certificate</h3>
              <p className="text-gray-600 text-sm">Amankan website dengan SSL selamanya tanpa biaya</p>
            </div>
            
            <div className="group p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-100 hover:from-cyan-100 hover:to-cyan-200 transition duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition">💾</div>
              <h3 className="font-bold text-gray-900 mb-2">Daily Backup</h3>
              <p className="text-gray-600 text-sm">Backup otomatis setiap hari untuk keamanan data</p>
            </div>
            
            <div className="group p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 hover:from-indigo-100 hover:to-indigo-200 transition duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition">🛡️</div>
              <h3 className="font-bold text-gray-900 mb-2">Imunify360 Security</h3>
              <p className="text-gray-600 text-sm">Proteksi maksimal dari malware dan serangan hacker</p>
            </div>
            
            <div className="group p-6 rounded-xl bg-gradient-to-br from-yellow-50 to-yellow-100 hover:from-yellow-100 hover:to-yellow-200 transition duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition">🌐</div>
              <h3 className="font-bold text-gray-900 mb-2">CloudFlare CDN</h3>
              <p className="text-gray-600 text-sm">Akselerasi website dengan jaringan CDN global</p>
            </div>
          </div>
        </div>

        {/* Guarantee Banner */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
          <div className="text-5xl mb-4">💯</div>
          <h2 className="text-3xl font-bold mb-4">Garansi 30 Hari Uang Kembali</h2>
          <p className="text-lg text-green-50 mb-6 max-w-2xl mx-auto">
            Tidak puas dengan layanan kami? Dapatkan refund 100% dalam 30 hari pertama, tanpa pertanyaan.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>No Questions Asked</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Full Refund</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Risk Free</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

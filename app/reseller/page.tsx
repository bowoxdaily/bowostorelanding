"use client"

import { useState } from "react";

export default function ResellerPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const packages = [
    {
      name: "Starter Reseller",
      monthlyPrice: "30.000",
      features: [
        "15 GB SSD Storage",
        "Unlimited Bandwidth",
        "FREE SSL Certificates",
        "LiteSpeed with LSCache",
        "24/7 Phone Support",
        "15 Account",
      ],
      pid: 10,
      orderUrl: "https://client.bowo-store.id/index.php?rp=/store/reseller/pemula",
      gradient: "from-orange-500 to-amber-500",
      popular: false,
    },
    {
      name: "Growth Reseller",
      monthlyPrice: "45.000",
      features: [
        "25 GB SSD Storage",
        "Unlimited Bandwidth",
        "FREE SSL Certificates",
        "LiteSpeed with LSCache",
        "24/7 Phone Support",
        "25 Account",
      ],
      pid: 11,
      orderUrl: "https://client.bowo-store.id/index.php?rp=/store/reseller/growth-reseller",
      gradient: "from-gray-400 to-gray-600",
      popular: true,
    },
    {
      name: "Elite Reseller",
      monthlyPrice: "55.000",
      features: [
        "35 GB SSD Storage",
        "Unlimited Bandwidth",
        "FREE SSL Certificates",
        "LiteSpeed with LSCache",
        "24/7 Phone Support",
        "35 Account",
      ],
      pid: 12,
      orderUrl: "https://client.bowo-store.id/index.php?rp=/store/reseller/elite-reseller",
      gradient: "from-yellow-400 to-yellow-600",
      popular: false,
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
            "name": "Reseller Hosting Murah Indonesia",
            "description": "Paket reseller hosting murah dengan WHM, cPanel unlimited, LiteSpeed mulai 30rb/bulan. Cocok untuk bisnis hosting dan digital agency",
            "brand": {
              "@type": "Brand",
              "name": "Bowo Store"
            },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "30000",
              "highPrice": "55000",
              "priceCurrency": "IDR",
              "offerCount": "3"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "850"
            }
          }),
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                💼 Reseller Program
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Reseller Hosting Murah Mulai <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">30 Ribu</span> dengan WHM cPanel
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mulai bisnis hosting Anda sendiri dengan paket reseller hosting unlimited, WHM, cPanel, LiteSpeed, dan white label ready. Support 24/7!
            </p>
        </div>

        {/* Billing Period Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-2 inline-flex gap-2">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                billingPeriod === "monthly"
                  ? "bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Bulanan
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 relative ${
                billingPeriod === "yearly"
                  ? "bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg"
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

        {/* Package Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition transform hover:-translate-y-2 duration-300 border-2 ${
                pkg.popular ? "border-yellow-400 scale-105" : "border-gray-100"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                    ⭐ PALING POPULER
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${pkg.gradient} text-white text-3xl font-bold mb-4 shadow-lg`}>
                  {pkg.name === "Starter Reseller" && "🚀"}
                  {pkg.name === "Growth Reseller" && "📈"}
                  {pkg.name === "Elite Reseller" && "👑"}
                </div>
                <h3 className="text-3xl font-bold text-gray-900">{pkg.name}</h3>
              </div>
              
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center mb-1">
                  <span className="text-gray-500 text-sm">Mulai dari</span>
                </div>
                <div className="flex items-baseline justify-center">
                  <span className="text-gray-500 text-lg">Rp</span>
                  <span className="text-4xl font-extrabold text-gray-900 mx-1">
                    {calculatePrice(pkg.monthlyPrice).split(".")[0]}
                  </span>
                  {calculatePrice(pkg.monthlyPrice).includes(".") && (
                    <span className="text-gray-500 text-sm">.{calculatePrice(pkg.monthlyPrice).split(".")[1]}</span>
                  )}
                </div>
                <div className="text-gray-500 text-sm mt-1">{getPeriodLabel()}</div>
                {billingPeriod === "yearly" && (
                  <div className="mt-2 text-green-600 text-xs font-semibold">
                    💰 Bayar 12 bulan sekaligus
                  </div>
                )}
              </div>
              
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={pkg.orderUrl || `https://client.example.com/cart.php?a=add&pid=${pkg.pid}`}
                className={`block w-full bg-gradient-to-r ${pkg.gradient} text-white text-center py-4 rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition duration-300`}
              >
                Jadi Reseller
              </a>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Keuntungan Menjadi Reseller</h2>
            <p className="text-gray-600">Dapatkan benefit maksimal untuk mengembangkan bisnis hosting Anda</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group p-6 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 hover:from-orange-100 hover:to-amber-100 transition duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition">💼</div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Bisnis dengan Brand Sendiri</h3>
              <p className="text-gray-600">Jual hosting dengan nama brand Anda sendiri, bangun reputasi bisnis yang kuat</p>
            </div>
            
            <div className="group p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition">🏷️</div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Atur Harga Sendiri</h3>
              <p className="text-gray-600">Tentukan harga jual dan profit margin sesuai target pasar Anda</p>
            </div>
            
            <div className="group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 transition duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition">🔧</div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">WHM Control Panel</h3>
              <p className="text-gray-600">Kelola semua akun klien dengan mudah melalui interface yang powerful</p>
            </div>
            
            <div className="group p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition">📊</div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">WHMCS Gratis</h3>
              <p className="text-gray-600">Sistem billing dan manajemen klien otomatis untuk kemudahan operasional</p>
            </div>
            
            <div className="group p-6 rounded-xl bg-gradient-to-br from-red-50 to-orange-50 hover:from-red-100 hover:to-orange-100 transition duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition">🚀</div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">White Label Nameserver</h3>
              <p className="text-gray-600">Nameserver dengan domain Anda sendiri untuk profesionalitas maksimal</p>
            </div>
            
            <div className="group p-6 rounded-xl bg-gradient-to-br from-yellow-50 to-amber-50 hover:from-yellow-100 hover:to-amber-100 transition duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition">💬</div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Support Prioritas</h3>
              <p className="text-gray-600">Dapatkan bantuan teknis prioritas untuk melancarkan bisnis Anda</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
          <div className="text-5xl mb-4">🌟</div>
          <h2 className="text-3xl font-bold mb-4">Siap Memulai Bisnis Hosting?</h2>
          <p className="text-lg text-orange-50 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ratusan reseller sukses yang telah membangun bisnis hosting mereka bersama kami
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/kontak"
              className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg text-lg"
            >
              Konsultasi Gratis
            </a>
            <a
              href="https://wa.me/6281234567890"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-orange-600 transition text-lg flex items-center gap-2"
            >
              <span>💬</span> Chat WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

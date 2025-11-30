"use client"

import { useState } from "react";

export default function DomainPage() {
  const [domainName, setDomainName] = useState("");
  const [domainExt, setDomainExt] = useState(".com");

  const handleDomainCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (domainName.trim()) {
      window.location.href = `https://client.bowo-store.id/cart.php?a=add&domain=register&query=${domainName}${domainExt}`;
    }
  };

  const domainPrices = [
    { ext: ".com", price: "150.000", icon: "🌐", color: "from-blue-500 to-cyan-500", popular: true },
    { ext: ".id", price: "200.000", icon: "🇮🇩", color: "from-red-500 to-pink-500", popular: true },
    { ext: ".my.id", price: "35.000", icon: "🎯", color: "from-green-500 to-emerald-500", popular: true },
    { ext: ".net", price: "180.000", icon: "🔗", color: "from-purple-500 to-indigo-500", popular: false },
    { ext: ".org", price: "185.000", icon: "🏛️", color: "from-orange-500 to-amber-500", popular: false },
    { ext: ".info", price: "160.000", icon: "ℹ️", color: "from-teal-500 to-cyan-500", popular: false },
    { ext: ".co.id", price: "220.000", icon: "🏢", color: "from-indigo-500 to-blue-500", popular: false },
    { ext: ".web.id", price: "45.000", icon: "🌟", color: "from-pink-500 to-rose-500", popular: true },
  ];

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Domain Murah Indonesia",
            "description": "Registrasi domain murah: .COM 150rb, .ID 200rb, .MY.ID 35rb/tahun. DNS gratis, WHOIS privacy, transfer mudah",
            "brand": {
              "@type": "Brand",
              "name": "Bowo Store"
            },
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "35000",
              "highPrice": "220000",
              "priceCurrency": "IDR",
              "offerCount": "8"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "1800"
            }
          }),
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-24 pb-16">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                🌐 Domain Registration
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Domain Murah Indonesia: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">.COM .ID .MY.ID</span> Terpercaya
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Registrasi domain murah untuk website dan email profesional. .COM 150rb, .ID 200rb, .MY.ID 35rb/tahun. DNS gratis, WHOIS privacy!
            </p>
        </div>

        {/* Domain Search Box */}
        <div className="max-w-4xl mx-auto mb-8">
          <form onSubmit={handleDomainCheck} className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Cek Ketersediaan Domain</h2>
              <p className="text-gray-600">Masukkan nama domain yang Anda inginkan</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 min-w-0">
                <input
                  type="text"
                  value={domainName}
                  onChange={(e) => setDomainName(e.target.value)}
                  placeholder="namadomainanda"
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg text-gray-900 bg-white placeholder:text-gray-400"
                  required
                />
              </div>
              <div className="flex gap-4">
                <select
                  value={domainExt}
                  onChange={(e) => setDomainExt(e.target.value)}
                  className="px-6 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-lg font-semibold bg-white min-w-[140px] text-gray-900"
                >
                  <option value=".com">.com</option>
                  <option value=".id">.id</option>
                  <option value=".my.id">.my.id</option>
                  <option value=".net">.net</option>
                  <option value=".org">.org</option>
                  <option value=".info">.info</option>
                  <option value=".co.id">.co.id</option>
                  <option value=".web.id">.web.id</option>
                </select>
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition duration-300 text-lg whitespace-nowrap"
                >
                  🔍 Cek
                </button>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-gray-600">
              <span className="flex items-center gap-1">✓ Instant Activation</span>
              <span className="flex items-center gap-1">✓ Free DNS Management</span>
              <span className="flex items-center gap-1">✓ 24/7 Support</span>
            </div>
          </form>
        </div>

        {/* Popular Domains Quick View */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <div className="bg-white px-6 py-3 rounded-full shadow-md flex items-center gap-2">
            <span className="text-2xl">🌐</span>
            <span className="font-semibold">.com</span>
            <span className="text-gray-500">dari</span>
            <span className="font-bold text-blue-600">Rp 150K</span>
          </div>
          <div className="bg-white px-6 py-3 rounded-full shadow-md flex items-center gap-2">
            <span className="text-2xl">🇮🇩</span>
            <span className="font-semibold">.id</span>
            <span className="text-gray-500">dari</span>
            <span className="font-bold text-red-600">Rp 200K</span>
          </div>
          <div className="bg-white px-6 py-3 rounded-full shadow-md flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            <span className="font-semibold">.my.id</span>
            <span className="text-gray-500">dari</span>
            <span className="font-bold text-green-600">Rp 35K</span>
          </div>
        </div>
      </div>

      {/* Domain Pricing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Harga Domain Terjangkau</h2>
          <p className="text-gray-600">Pilih ekstensi domain yang sesuai dengan kebutuhan Anda</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {domainPrices.map((domain) => (
            <div
              key={domain.ext}
              className={`relative bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition transform hover:-translate-y-2 duration-300 border-2 ${
                domain.popular ? "border-yellow-400 scale-105" : "border-gray-100"
              }`}
            >
              {domain.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                    ⭐ POPULER
                  </span>
                </div>
              )}
              <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${domain.color} rounded-full flex items-center justify-center text-4xl shadow-lg`}>
                {domain.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{domain.ext}</div>
              <div className="text-sm text-gray-500 mb-3">per tahun</div>
              <div className="flex items-baseline justify-center mb-4">
                <span className="text-gray-500 text-sm">Rp</span>
                <span className="text-3xl font-extrabold text-gray-900 mx-1">{domain.price.split('.')[0]}</span>
                <span className="text-gray-500 text-sm">.{domain.price.split('.')[1]}</span>
              </div>
              <a
                href={`https://client.bowo-store.id/cart.php?a=add&domain=register&query=${domain.ext}`}
                className={`block w-full bg-gradient-to-r ${domain.color} text-white py-3 rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition duration-300`}
              >
                Daftar Sekarang
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Keuntungan Daftar Domain Bersama Kami</h2>
            <p className="text-gray-600">Layanan terlengkap untuk manajemen domain Anda</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition">🔒</div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Domain Privacy</h3>
              <p className="text-gray-600 text-sm">Lindungi informasi pribadi dari public WHOIS database</p>
            </div>
            
            <div className="group p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition">🔄</div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Transfer Mudah</h3>
              <p className="text-gray-600 text-sm">Proses transfer domain dari provider lain sangat simple</p>
            </div>
            
            <div className="group p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition">⚡</div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">DNS Management</h3>
              <p className="text-gray-600 text-sm">Kelola DNS record dengan panel yang user-friendly</p>
            </div>
            
            <div className="group p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 transition duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition">🔐</div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Domain Lock</h3>
              <p className="text-gray-600 text-sm">Proteksi maksimal mencegah transfer tidak sah</p>
            </div>
            
            <div className="group p-6 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200 transition duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition">🌐</div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Global DNS</h3>
              <p className="text-gray-600 text-sm">Server DNS tersebar di seluruh dunia untuk performa terbaik</p>
            </div>
            
            <div className="group p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-100 hover:from-cyan-100 hover:to-cyan-200 transition duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition">📧</div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Email Forwarding</h3>
              <p className="text-gray-600 text-sm">Forward email ke alamat lain dengan mudah</p>
            </div>
            
            <div className="group p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 hover:from-indigo-100 hover:to-indigo-200 transition duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition">🔔</div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Auto-Renewal</h3>
              <p className="text-gray-600 text-sm">Domain otomatis diperpanjang, tidak perlu khawatir expired</p>
            </div>
            
            <div className="group p-6 rounded-xl bg-gradient-to-br from-yellow-50 to-yellow-100 hover:from-yellow-100 hover:to-yellow-200 transition duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition">💬</div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Support 24/7</h3>
              <p className="text-gray-600 text-sm">Tim support siap membantu kapan saja Anda butuhkan</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold mb-4">Siap Memulai dengan Domain Baru?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Daftarkan domain Anda sekarang dan mulai bangun presence online yang kuat
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg text-lg"
            >
              Cek Domain Sekarang
            </button>
            <a
              href="/kontak"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition text-lg"
            >
              Butuh Bantuan?
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

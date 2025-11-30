"use client"

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="grid grid-cols-8 gap-4 p-8">
              {[...Array(64)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-white rounded animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="z-10">
              <div className="inline-block mb-4">
                <span className="bg-blue-500 bg-opacity-30 text-blue-100 px-4 py-2 rounded-full text-sm font-semibold border border-blue-400">
                  🚀 Hosting Terbaik Indonesia
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                <span className="text-blue-300">Hosting Murah Indonesia</span> Mulai 15 Ribu dengan LiteSpeed
              </h1>
              
              <p className="text-xl mb-8 text-blue-50 leading-relaxed">
                <strong className="text-white">Hosting murah terbaik Indonesia</strong> dengan <span className="font-semibold text-white">NVMe SSD Storage</span>, <span className="font-semibold text-white">LiteSpeed Web Server</span>, dan <span className="font-semibold text-white">SSL Gratis Selamanya</span>. Hosting berkualitas untuk website WordPress, Toko Online, dan Company Profile dengan <strong className="text-white">garansi uptime 99.9%</strong>.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300">99.9%</div>
                  <div className="text-sm text-blue-100">Uptime</div>
                </div>
                <div className="text-center border-x border-white border-opacity-20">
                  <div className="text-3xl font-bold text-blue-300">24/7</div>
                  <div className="text-sm text-blue-100">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300">1000+</div>
                  <div className="text-sm text-blue-100">Customer</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/hosting"
                  className="group bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition text-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    Lihat Paket Hosting
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </Link>
                <Link
                  href="/reseller"
                  className="group border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition text-center shadow-xl transform hover:-translate-y-1 duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    Jadi Reseller
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </Link>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-400 text-lg">✓</span>
                  <span>LiteSpeed Server</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400 text-lg">✓</span>
                  <span>Gratis SSL Selamanya</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400 text-lg">✓</span>
                  <span>NVMe SSD Storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400 text-lg">✓</span>
                  <span>Gratis Migrasi Website</span>
                </div>
              </div>
            </div>

            {/* Right Side - Server Visual */}
            <div className="hidden lg:block relative">
              <div className="relative">
                {/* Server Tower */}
                <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-3xl p-1 shadow-2xl">
                  <div className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-3xl p-8">
                    {/* Top Panel with lights */}
                    <div className="bg-gray-800 rounded-xl p-4 mb-6 border border-gray-700">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-green-400 shadow-lg shadow-green-400/50 animate-pulse"></div>
                          <div className="w-3 h-3 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                          <div className="w-3 h-3 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                        </div>
                        <span className="text-xs text-green-400 font-mono">ACTIVE</span>
                      </div>
                      <div className="text-xs text-gray-400 font-mono">ID: SVR-IDN-001</div>
                    </div>

                    {/* Server Bays */}
                    <div className="space-y-3 mb-6">
                      {[
                        { label: 'Web Server', load: 35, color: 'blue' },
                        { label: 'Database', load: 48, color: 'green' },
                        { label: 'Mail Server', load: 22, color: 'purple' },
                        { label: 'DNS Server', load: 15, color: 'cyan' },
                      ].map((server, i) => (
                        <div key={i} className="bg-gray-800 rounded-lg p-3 border border-gray-700 hover:border-blue-500 transition-colors">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-gray-300 font-semibold">{server.label}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-400">{server.load}%</span>
                              <div className={`w-2 h-2 rounded-full bg-${server.color}-400 animate-pulse`}></div>
                            </div>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                            <div 
                              className={`bg-gradient-to-r from-${server.color}-400 to-${server.color}-600 h-2 rounded-full transition-all duration-1000`}
                              style={{ width: `${server.load}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Network Activity */}
                    <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                      <div className="text-xs text-gray-400 mb-3 font-semibold">Network Activity</div>
                      <div className="flex items-end justify-between h-20 gap-1">
                        {[65, 40, 75, 30, 85, 45, 70, 55, 90, 35, 60, 80, 50, 95, 40, 65, 75, 55, 85, 45].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t animate-pulse"
                            style={{
                              height: `${height}%`,
                              animationDelay: `${i * 0.1}s`,
                            }}
                          ></div>
                        ))}
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-gray-500">
                        <span>↓ 125 Mbps</span>
                        <span>↑ 89 Mbps</span>
                      </div>
                    </div>

                    {/* Cooling Fans */}
                    <div className="mt-6 flex gap-3">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex-1 bg-gray-800 rounded-lg p-3 border border-gray-700">
                          <div className="w-full aspect-square rounded-full border-4 border-gray-600 border-t-blue-400 animate-spin" style={{ animationDuration: '2s' }}></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -top-6 -right-6 bg-green-500 text-white px-4 py-3 rounded-2xl shadow-2xl animate-bounce">
                  <div className="text-xs font-semibold">UPTIME</div>
                  <div className="text-2xl font-bold">99.9%</div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-blue-500 text-white px-4 py-3 rounded-2xl shadow-2xl">
                  <div className="text-xs font-semibold">SPEED</div>
                  <div className="text-2xl font-bold">Fast</div>
                </div>
                <div className="absolute top-1/2 -right-8 bg-purple-500 text-white px-3 py-2 rounded-xl shadow-2xl transform -translate-y-1/2">
                  <div className="text-xs">🔒 Secure</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#f9fafb"
              fillOpacity="1"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white" aria-label="Keunggulan Hosting Kami">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Keunggulan Hosting Murah Indonesia Kami</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Server Cepat</h3>
              <p className="text-gray-600">Teknologi SSD dan LiteSpeed untuk performa maksimal</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Uptime Tinggi</h3>
              <p className="text-gray-600">Jaminan uptime 99.9% untuk bisnis yang selalu online</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Support Responsif</h3>
              <p className="text-gray-600">Tim support siap membantu 24/7 via live chat</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Gratis Migrasi</h3>
              <p className="text-gray-600">Kami bantu pindahkan website Anda secara gratis</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Products Section */}
      <section className="py-16 bg-white" aria-label="Produk Hosting dan Layanan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Semua Produk & Layanan</h2>
            <p className="text-gray-700">Solusi lengkap untuk kebutuhan website dan bisnis online Anda</p>
          </div>

          {/* Hosting Packages */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Paket Hosting Murah Indonesia</h2>
                <p className="text-gray-700">Web hosting murah unlimited dengan LiteSpeed dan SSD NVMe</p>
              </div>
              <Link href="/hosting" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                Lihat Semua <span>→</span>
              </Link>
            </div>

            {/* Billing Period Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-2xl shadow-lg p-2 inline-flex gap-2">
                <button
                  onClick={() => setBillingPeriod("monthly")}
                  className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 text-sm ${
                    billingPeriod === "monthly"
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Bulanan
                </button>
                <button
                  onClick={() => setBillingPeriod("yearly")}
                  className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 relative text-sm ${
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

            <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Starter Package */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:border-blue-500 hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
              <div className="text-center mb-6">
                <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Starter
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">
                  Rp {calculatePrice("15.000")}K
                  <span className="text-lg text-gray-500 font-normal">{getPeriodLabel()}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>1 GB SSD Storage</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>FREE SSL Certificates</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>LiteSpeed with LSCache</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>24/7 Phone Support</span>
                </li>
              </ul>
              <Link
                href="/hosting"
                className="block w-full bg-gray-800 text-white text-center py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
              >
                Pilih Paket
              </Link>
            </div>

            {/* Pro Package - Featured */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-2xl p-8 border-4 border-blue-400 relative transform scale-105 hover:scale-110 transition duration-300">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  ⭐ TERPOPULER
                </span>
              </div>
              <div className="text-center mb-6 mt-4">
                <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Basic
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  Rp {calculatePrice("25.000")}K
                  <span className="text-lg text-white font-normal">{getPeriodLabel()}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-white">
                  <svg className="w-5 h-5 text-yellow-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>2 GB SSD Storage</span>
                </li>
                <li className="flex items-center text-white">
                  <svg className="w-5 h-5 text-yellow-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>FREE SSL Certificates</span>
                </li>
                <li className="flex items-center text-white">
                  <svg className="w-5 h-5 text-yellow-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>LiteSpeed with LSCache</span>
                </li>
                <li className="flex items-center text-white">
                  <svg className="w-5 h-5 text-yellow-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>24/7 Phone Support</span>
                </li>
              </ul>
              <Link
                href="/hosting"
                className="block w-full bg-white text-blue-600 text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
              >
                Pilih Paket
              </Link>
            </div>

            {/* Standard Package */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:border-blue-500 hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
              <div className="text-center mb-6">
                <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Standard
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">
                  Rp {calculatePrice("35.000")}K
                  <span className="text-lg text-gray-500 font-normal">{getPeriodLabel()}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>3 GB SSD Storage</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>FREE SSL Certificates</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Unlimited Bandwidth</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>LiteSpeed with LSCache</span>
                </li>
              </ul>
              <Link
                href="/hosting"
                className="block w-full bg-gray-800 text-white text-center py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
              >
                Pilih Paket
              </Link>
            </div>
          </div>
          </div>

          {/* Reseller Packages */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Reseller Hosting Murah Indonesia</h2>
                <p className="text-gray-700">Paket reseller hosting murah untuk memulai bisnis web hosting</p>
              </div>
              <Link href="/reseller" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                Lihat Semua <span>→</span>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Starter Reseller */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:border-orange-500 hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
                <div className="text-center mb-6">
                  <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Starter Reseller
                  </div>
                  <div className="text-4xl font-bold text-gray-800 mb-2">
                    Rp {calculatePrice("30.000")}K
                    <span className="text-lg text-gray-500 font-normal">{getPeriodLabel()}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>15 GB SSD Storage</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Unlimited Bandwidth</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>15 Account</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>FREE SSL Certificates</span>
                  </li>
                </ul>
                <Link
                  href="/reseller"
                  className="block w-full bg-gray-800 text-white text-center py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
                >
                  Pilih Paket
                </Link>
              </div>

              {/* Growth Reseller */}
              <div className="bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl shadow-2xl p-8 border-4 border-gray-400 relative transform scale-105 hover:scale-110 transition duration-300">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ TERPOPULER
                  </span>
                </div>
                <div className="text-center mb-6 mt-4">
                  <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Growth Reseler
                </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    Rp {calculatePrice("45.000")}K
                    <span className="text-lg text-white font-normal">{getPeriodLabel()}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-white">
                    <svg className="w-5 h-5 text-yellow-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>25 GB SSD Storage</span>
                  </li>
                  <li className="flex items-center text-white">
                    <svg className="w-5 h-5 text-yellow-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Unlimited Bandwidth</span>
                  </li>
                  <li className="flex items-center text-white">
                    <svg className="w-5 h-5 text-yellow-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>25 Account</span>
                  </li>
                  <li className="flex items-center text-white">
                    <svg className="w-5 h-5 text-yellow-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>FREE SSL Certificates</span>
                  </li>
                </ul>
                <Link
                  href="/reseller"
                  className="block w-full bg-white text-gray-800 text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
                >
                  Pilih Paket
                </Link>
              </div>

              {/* Elite Reseller */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:border-yellow-500 hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
                <div className="text-center mb-6">
                  <div className="inline-block bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Elite Reseller
                  </div>
                  <div className="text-4xl font-bold text-gray-800 mb-2">
                    Rp {calculatePrice("55.000")}K
                    <span className="text-lg text-gray-500 font-normal">{getPeriodLabel()}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>35 GB SSD Storage</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Unlimited Bandwidth</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>35 Account</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>FREE SSL Certificates</span>
                  </li>
                </ul>
                <Link
                  href="/reseller"
                  className="block w-full bg-gray-800 text-white text-center py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
                >
                  Pilih Paket
                </Link>
              </div>
            </div>
          </div>

          {/* Domain Section */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Domain Murah .COM .ID Indonesia</h2>
                <p className="text-gray-700">Daftar domain murah .com, .id, .co.id dengan harga terjangkau</p>
              </div>
              <Link href="/domain" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                Lihat Semua <span>→</span>
              </Link>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { ext: ".com", price: "150K", icon: "🌐", color: "blue" },
                { ext: ".id", price: "200K", icon: "🇮🇩", color: "red" },
                { ext: ".net", price: "180K", icon: "🔗", color: "purple" },
                { ext: ".co.id", price: "100K", icon: "🏢", color: "green" },
              ].map((domain) => (
                <div key={domain.ext} className={`bg-gradient-to-br from-${domain.color}-50 to-${domain.color}-100 rounded-xl p-6 text-center hover:shadow-xl transition transform hover:-translate-y-2 duration-300 border border-${domain.color}-200`}>
                  <div className="text-5xl mb-3">{domain.icon}</div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{domain.ext}</div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    Rp {domain.price}
                  </div>
                  <div className="text-sm text-gray-700 mb-4">/tahun</div>
                  <Link
                    href="/domain"
                    className={`inline-block bg-${domain.color}-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-${domain.color}-700 transition`}
                  >
                    Daftar
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* License Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Lisensi cPanel & LiteSpeed Murah</h2>
                <p className="text-gray-700">Lisensi original cPanel, LiteSpeed, CloudLinux dengan harga terbaik</p>
              </div>
              <Link href="/lisensi" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                Lihat Semua <span>→</span>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "cPanel", type: "VPS & Dedicated", price: "350K", icon: "🎛️", gradient: "from-orange-500 to-red-500" },
                { name: "LiteSpeed", type: "Web Server", price: "250K", icon: "⚡", gradient: "from-blue-500 to-cyan-500" },
                { name: "CloudLinux", type: "OS License", price: "200K", icon: "☁️", gradient: "from-purple-500 to-pink-500" },
              ].map((license) => (
                <div key={license.name} className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:border-blue-500 hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${license.gradient} rounded-full flex items-center justify-center text-3xl mb-4 mx-auto`}>
                    {license.icon}
                  </div>
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-gray-900 mb-1">{license.name}</h4>
                    <p className="text-sm text-gray-700 mb-4">{license.type}</p>
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      Rp {license.price}
                    </div>
                    <div className="text-sm text-gray-600 mb-6">/bulan</div>
                    <Link
                      href="/lisensi"
                      className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
                    >
                      Detail Lisensi
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Siap Memulai Website Anda?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Dapatkan hosting berkualitas dengan support terbaik untuk kesuksesan online Anda
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/hosting"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg text-lg"
            >
              Mulai Sekarang
            </Link>
            <Link
              href="/kontak"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition text-lg"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

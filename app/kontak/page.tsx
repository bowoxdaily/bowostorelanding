"use client"

import { useState } from "react";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Terima kasih! Pesan Anda akan segera kami proses.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              💬 Contact Us
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Butuh Bantuan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Memilih Paket?</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tim kami siap membantu Anda menemukan solusi hosting terbaik untuk bisnis Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="text-center mb-6">
              <div className="text-5xl mb-3">📧</div>
              <h2 className="text-3xl font-bold text-gray-900">Kirim Pesan</h2>
              <p className="text-gray-600 text-sm mt-2">Isi form di bawah dan kami akan segera merespon</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition text-gray-900 bg-white placeholder:text-gray-400"
                  placeholder="Masukkan nama lengkap Anda"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition text-gray-900 bg-white placeholder:text-gray-400"
                  placeholder="nama@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition resize-none text-gray-900 bg-white placeholder:text-gray-400"
                  placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition duration-300"
              >
                📨 Kirim Pesan
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6 border border-gray-100">
              <div className="text-center mb-8">
                <div className="text-5xl mb-3">📞</div>
                <h2 className="text-3xl font-bold text-gray-900">Hubungi Kami</h2>
                <p className="text-gray-600 text-sm mt-2">Pilih cara tercepat untuk berkomunikasi</p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-2xl mr-4 flex-shrink-0">
                    💬
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1 text-lg">WhatsApp</h3>
                    <p className="text-gray-600 text-sm mb-3">Chat langsung dengan tim support kami</p>
                    <a
                      href="https://wa.me/6285353549107"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transform hover:scale-105 transition font-semibold text-sm"
                    >
                      Chat Admin
                    </a>
                  </div>
                </div>
                <div className="flex items-start p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-2xl mr-4 flex-shrink-0">
                    📧
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1 text-lg">Email</h3>
                    <p className="text-gray-600 text-sm mb-2">Kirim email ke:</p>
                    <a
                      href="mailto:support@example.com"
                      className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
                    >
                      support@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-2xl mr-4 flex-shrink-0">
                    ⏰
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1 text-lg">Jam Operasional</h3>
                    <p className="text-gray-900 font-semibold">Support 24/7</p>
                    <p className="text-sm text-gray-600">Kami siap membantu kapan saja</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-2xl p-8">
              <div className="text-5xl mb-4 text-center">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Butuh Konsultasi Gratis?</h3>
              <p className="mb-6 text-center text-blue-50">
                Tidak yakin paket mana yang tepat? Tim kami siap membantu Anda memilih solusi terbaik untuk kebutuhan bisnis Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition text-center shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
                >
                  💬 Chat Sekarang
                </a>
                <a
                  href="mailto:support@example.com"
                  className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition text-center transform hover:scale-105 duration-300"
                >
                  📧 Email Kami
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="group bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition transform hover:-translate-y-2 duration-300 border border-gray-100">
            <div className="text-6xl mb-4 group-hover:scale-110 transition">🚀</div>
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Response Cepat</h3>
            <p className="text-gray-600">Tim support kami merespon dalam hitungan menit</p>
          </div>
          <div className="group bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition transform hover:-translate-y-2 duration-300 border border-gray-100">
            <div className="text-6xl mb-4 group-hover:scale-110 transition">🎯</div>
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Solusi Tepat</h3>
            <p className="text-gray-600">Kami bantu pilih paket sesuai kebutuhan Anda</p>
          </div>
          <div className="group bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition transform hover:-translate-y-2 duration-300 border border-gray-100">
            <div className="text-6xl mb-4 group-hover:scale-110 transition">💯</div>
            <h3 className="font-bold text-gray-900 mb-3 text-lg">100% Gratis</h3>
            <p className="text-gray-600">Konsultasi tanpa biaya, tanpa komitmen</p>
          </div>
        </div>
      </div>
    </div>
  );
}

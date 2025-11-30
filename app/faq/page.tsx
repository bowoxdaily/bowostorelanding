"use client"

import { useState } from "react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Apa itu Shared Hosting?",
      answer: "Shared Hosting adalah layanan hosting dimana satu server digunakan oleh banyak website. Cocok untuk website pribadi, blog, dan bisnis kecil dengan harga terjangkau. Server resources dibagi secara fair antar semua pengguna.",
    },
    {
      question: "Apakah saya mendapat gratis SSL?",
      answer: "Ya, semua paket hosting kami sudah termasuk SSL gratis selamanya. SSL Certificate penting untuk mengamankan website Anda, meningkatkan kepercayaan pengunjung, dan membantu SEO di search engine.",
    },
    {
      question: "Bagaimana cara migrasi website saya?",
      answer: "Kami menyediakan layanan migrasi gratis. Tim support kami akan membantu memindahkan website Anda dari provider lama ke server kami tanpa downtime. Cukup hubungi tim support dan berikan akses ke hosting lama Anda.",
    },
    {
      question: "Apa keuntungan menjadi reseller hosting?",
      answer: "Sebagai reseller, Anda bisa menjual hosting dengan brand sendiri, mendapat white label nameserver, dan mengatur harga sendiri. Cocok untuk membangun bisnis hosting atau agency yang manage banyak client. Anda juga mendapat akses WHM untuk manage semua akun.",
    },
    {
      question: "Berapa lama proses aktivasi layanan?",
      answer: "Aktivasi otomatis dan instant setelah pembayaran dikonfirmasi. Anda langsung bisa menggunakan layanan dalam hitungan menit. Email berisi detail akses akan dikirim segera setelah pembayaran terverifikasi.",
    },
    {
      question: "Apakah ada garansi uang kembali?",
      answer: "Ya, kami memberikan garansi uang kembali 30 hari untuk paket hosting. Jika Anda tidak puas dengan layanan kami dalam 30 hari pertama, kami akan mengembalikan uang Anda 100% tanpa pertanyaan.",
    },
    {
      question: "Bagaimana sistem pembayarannya?",
      answer: "Kami menerima berbagai metode pembayaran termasuk transfer bank, e-wallet (GoPay, OVO, DANA), dan kartu kredit. Pembayaran dapat dilakukan bulanan, 3 bulanan, 6 bulanan, atau tahunan.",
    },
    {
      question: "Apakah bisa upgrade atau downgrade paket?",
      answer: "Tentu saja! Anda bisa upgrade paket kapan saja sesuai kebutuhan. Untuk downgrade, Anda bisa melakukannya pada periode billing berikutnya. Tim support kami akan membantu proses perpindahan paket.",
    },
    {
      question: "Apa yang dimaksud dengan bandwidth unlimited?",
      answer: "Bandwidth unlimited artinya tidak ada batasan jumlah data transfer per bulan, selama penggunaan normal dan sesuai Terms of Service. Cocok untuk website dengan traffic tinggi.",
    },
    {
      question: "Bagaimana jika website saya terkena malware?",
      answer: "Kami menyediakan daily malware scanning dan removal. Jika website Anda terinfeksi, tim support kami akan membantu membersihkan malware secara gratis. Kami juga menyarankan untuk selalu update CMS dan plugin Anda.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Pertanyaan yang Sering Diajukan</h1>
          <p className="text-xl text-gray-600">
            Temukan jawaban untuk pertanyaan umum seputar layanan kami
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition rounded-lg"
              >
                <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                <span className="text-2xl text-blue-600 flex-shrink-0">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
          <h3 className="font-semibold text-blue-800 mb-2">Masih ada pertanyaan?</h3>
          <p className="text-blue-700 mb-4">
            Tim support kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami!
          </p>
          <a
            href="/kontak"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  );
}

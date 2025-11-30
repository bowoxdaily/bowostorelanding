export default function TestimoniPage() {
  const testimonials = [
    {
      name: "Ahmad Rizki",
      business: "Toko Online Fashion",
      text: "Pelayanan sangat memuaskan! Server cepat dan support selalu responsif membantu saat ada kendala. Recommended untuk yang cari hosting berkualitas.",
      rating: 5,
    },
    {
      name: "Siti Nurhaliza",
      business: "Reseller Hosting",
      text: "Sudah 2 tahun pakai reseller hosting di sini. Bisnis hosting saya berkembang pesat. Sistem white label dan support sangat membantu.",
      rating: 5,
    },
    {
      name: "Budi Santoso",
      business: "Blog Personal & Affiliate",
      text: "Harga terjangkau dengan kualitas premium. Website saya jadi lebih cepat setelah pindah ke sini. Proses migrasi juga dibantu dengan baik.",
      rating: 5,
    },
    {
      name: "Dewi Lestari",
      business: "Agensi Digital Marketing",
      text: "Kami manage puluhan website klien di hosting ini. Uptime sangat stabil dan performa konsisten. Tim support juga sangat helpful.",
      rating: 5,
    },
    {
      name: "Andi Wijaya",
      business: "Developer Freelance",
      text: "Sebagai developer, saya butuh hosting yang reliable untuk project klien. Bowo Host memenuhi semua kebutuhan saya dengan harga yang masuk akal.",
      rating: 5,
    },
    {
      name: "Linda Kusuma",
      business: "Online Course Platform",
      text: "Platform kursus online saya handle traffic tinggi tanpa masalah. Server sangat powerful dan customer service always ready to help!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Apa Kata Pelanggan</h1>
          <p className="text-xl text-gray-600">
            Kepercayaan pelanggan adalah prioritas utama kami
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition"
            >
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">&quot;{testimonial.text}&quot;</p>
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-800">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.business}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Puas dengan Layanan Kami?</h2>
          <p className="text-gray-600 mb-6">
            Bagikan pengalaman Anda dan bantu orang lain menemukan solusi hosting terbaik
          </p>
          <a
            href="/kontak"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Kirim Testimoni Anda
          </a>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600">Pelanggan Puas</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime Guarantee</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Customer Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}

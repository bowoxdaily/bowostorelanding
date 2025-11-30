export default function LisensiPage() {
  const licenses = [
    {
      name: "cPanel VPS",
      icon: "🎛️",
      description: "Lisensi cPanel untuk VPS dengan 5 akun",
      price: "200.000",
      pid: 20,
      gradient: "from-orange-500 to-red-500",
      popular: false,
    },
    {
      name: "cPanel Dedicated",
      icon: "⚙️",
      description: "Lisensi cPanel untuk Dedicated Server unlimited akun",
      price: "600.000",
      pid: 21,
      gradient: "from-red-500 to-pink-500",
      popular: true,
    },
    {
      name: "LiteSpeed",
      icon: "⚡",
      description: "Web server tercepat untuk meningkatkan performa website",
      price: "150.000",
      pid: 22,
      gradient: "from-blue-500 to-cyan-500",
      popular: true,
    },
    {
      name: "Imunify360",
      icon: "🛡️",
      description: "Security suite untuk melindungi server dari malware dan serangan",
      price: "250.000",
      pid: 23,
      gradient: "from-green-500 to-emerald-500",
      popular: false,
    },
    {
      name: "CloudLinux",
      icon: "☁️",
      description: "OS khusus hosting untuk stabilitas dan keamanan maksimal",
      price: "180.000",
      pid: 24,
      gradient: "from-purple-500 to-indigo-500",
      popular: false,
    },
    {
      name: "JetBackup",
      icon: "💾",
      description: "Solusi backup profesional untuk data server Anda",
      price: "120.000",
      pid: 25,
      gradient: "from-teal-500 to-cyan-500",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 pt-24 pb-16">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              🔑 Software Licenses
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Lisensi <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Original</span> & Legal
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lengkapi server Anda dengan lisensi software original untuk performa dan keamanan maksimal
          </p>
        </div>

        {/* License Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {licenses.map((license) => (
            <div
              key={license.name}
              className={`relative bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition transform hover:-translate-y-2 duration-300 border-2 ${
                license.popular ? "border-yellow-400 scale-105" : "border-gray-100"
              }`}
            >
              {license.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                    ⭐ POPULER
                  </span>
                </div>
              )}
              
              <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${license.gradient} rounded-2xl flex items-center justify-center text-4xl shadow-lg transform hover:rotate-6 transition duration-300`}>
                {license.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-gray-900 text-center">{license.name}</h3>
              <p className="text-gray-600 mb-6 text-center text-sm leading-relaxed">{license.description}</p>
              
              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center mb-1">
                  <span className="text-gray-500 text-sm">Mulai</span>
                </div>
                <div className="flex items-baseline justify-center">
                  <span className="text-gray-500 text-lg">Rp</span>
                  <span className="text-4xl font-extrabold text-gray-900 mx-1">{license.price.split('.')[0]}</span>
                  <span className="text-gray-500 text-sm">.{license.price.split('.')[1]}</span>
                </div>
                <div className="text-gray-500 text-sm mt-1">/bulan</div>
              </div>
              
              <a
                href={`https://client.example.com/cart.php?a=add&pid=${license.pid}`}
                className={`block w-full bg-gradient-to-r ${license.gradient} text-white text-center py-4 rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition duration-300`}
              >
                Order Sekarang
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Mengapa Membeli Lisensi dari Kami?</h2>
            <p className="text-gray-600">Dapatkan keuntungan maksimal dengan lisensi original</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition">💰</div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Harga Kompetitif</h3>
              <p className="text-gray-600 text-sm">Dapatkan harga terbaik untuk semua jenis lisensi original</p>
            </div>
            
            <div className="group p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition">⚡</div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Aktivasi Instan</h3>
              <p className="text-gray-600 text-sm">Lisensi aktif otomatis dalam hitungan menit setelah pembayaran</p>
            </div>
            
            <div className="group p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition">🔧</div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Support Teknis</h3>
              <p className="text-gray-600 text-sm">Tim expert kami siap bantu instalasi dan konfigurasi</p>
            </div>
            
            <div className="group p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 transition duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition">✅</div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Official Reseller</h3>
              <p className="text-gray-600 text-sm">Semua lisensi dijamin 100% original, legal, dan bergaransi</p>
            </div>
            
            <div className="group p-6 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200 transition duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition">📱</div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Management Panel</h3>
              <p className="text-gray-600 text-sm">Dashboard mudah untuk kelola dan monitor semua lisensi</p>
            </div>
            
            <div className="group p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-100 hover:from-cyan-100 hover:to-cyan-200 transition duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition">🔄</div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Auto-Renewal</h3>
              <p className="text-gray-600 text-sm">Perpanjangan otomatis agar lisensi tidak pernah expired</p>
            </div>
            
            <div className="group p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 hover:from-indigo-100 hover:to-indigo-200 transition duration-300">
              <div className="text-5xl mb-4 group-hover:scale-110 transition">📊</div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Real-time Monitor</h3>
              <p className="text-gray-600 text-sm">Pantau status dan penggunaan lisensi secara real-time</p>
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
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
          <div className="text-5xl mb-4">💡</div>
          <h2 className="text-3xl font-bold mb-4">Butuh Lisensi Custom atau Konsultasi?</h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Hubungi tim kami untuk mendapatkan penawaran lisensi khusus sesuai kebutuhan server Anda
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/kontak"
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg text-lg"
            >
              Hubungi Kami
            </a>
            <a
              href="https://wa.me/6285353549107"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-purple-600 transition text-lg flex items-center gap-2"
            >
              <span>💬</span> Chat WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

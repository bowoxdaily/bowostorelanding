import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/logo.png" 
                alt="Bowo Host - Hosting Murah Indonesia" 
                width={150} 
                height={40}
                className="h-10 w-auto mix-blend-lighten"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              Penyedia layanan hosting terpercaya dengan support 24/7.
            </p>
          </div>

          {/* Produk */}
          <div>
            <h4 className="text-white font-semibold mb-3">Produk</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/hosting" className="text-gray-400 hover:text-white transition">
                  Shared Hosting
                </Link>
              </li>
              <li>
                <Link href="/reseller" className="text-gray-400 hover:text-white transition">
                  Reseller Hosting
                </Link>
              </li>
              <li>
                <Link href="/domain" className="text-gray-400 hover:text-white transition">
                  Domain
                </Link>
              </li>
              <li>
                <Link href="/lisensi" className="text-gray-400 hover:text-white transition">
                  Lisensi
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/testimoni" className="text-gray-400 hover:text-white transition">
                  Testimoni
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-gray-400 hover:text-white transition">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-white font-semibold mb-3">Hubungi Kami</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">
                Email: support@example.com
              </li>
              <li className="text-gray-400">
                WA: +62 812-3456-7890
              </li>
              <li className="text-gray-400">
                Support: 24/7
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
            <p className="text-gray-400">
              © 2025 Bowo Host. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/terms" className="text-gray-400 hover:text-white transition">
                Syarat & Ketentuan
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition">
                Kebijakan Privasi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

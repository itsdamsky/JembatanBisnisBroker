const navigasi = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang-kami" },
  { label: "Layanan", href: "#layanan" },
  { label: "Hubungi Kami", href: "#hubungi-kami" },
];

const layanan = [
  { label: "Profil Perusahaan", href: "#layanan" },
  { label: "Penilaian Bisnis", href: "#layanan" },
  { label: "Jual & Beli Bisnis", href: "#layanan" },
];

export default function Footer() {
  return (
    <footer id="hubungi-kami" className="bg-navy-900 text-white pt-16">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              {/* Logo */}
              <a href="#beranda" className="flex items-center shrink-0">
                <img
                  src="/images/logo-jembatan-bisnis-navy.svg"
                  alt="Jembatan Bisnis Broker"
                  className="h-16 w-auto brightness-0 invert"
                />
              </a>
            </div>
            <p className="text-slate-300 text-[14px] leading-relaxed mb-5 max-w-xs">
              Menghubungkan ide, peluang, dan pelaku bisnis secara tepat untuk
              membantu Anda mencapai kesuksesan jangka panjang.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V21h-4V9z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="white" strokeWidth="1.7" />
                  <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.7" />
                  <circle cx="17.3" cy="6.7" r="1.1" fill="white" />
                </svg>
              </a>
              <a
                href="mailto:hello@jembatanbisnis.com"
                aria-label="Email"
                className="w-9 h-9 rounded-full border border-white/25 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="white" strokeWidth="1.7" />
                  <path d="M3 7l9 6 9-6" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="font-semibold text-[15px] mb-5">Navigasi</h4>
            <ul className="space-y-3">
              {navigasi.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-slate-300 text-[14px] hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-semibold text-[15px] mb-5">Layanan</h4>
            <ul className="space-y-3">
              {layanan.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-slate-300 text-[14px] hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hubungi Kami */}
          <div>
            <h4 className="font-semibold text-[15px] mb-5">Hubungi Kami</h4>
            <ul className="space-y-3 text-slate-300 text-[14px]">
              <li className="flex gap-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5">
                  <path d="M12 21s-7-4.6-7-10.6C5 6.8 8.1 4 12 4s7 2.8 7 6.4C19 16.4 12 21 12 21z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                  <circle cx="12" cy="10.5" r="2" stroke="white" strokeWidth="1.3" />
                </svg>
                <span>
                  Sampoerna Strategic Square
                  <br />
                  Jl. Jendral Sudirman No.45 – 46 3, RT.3/RW.4, Karet
                  Semanggi, Setiabudi, Jakarta Selatan 12930
                </span>
              </li>
              <li className="flex gap-2.5 items-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0">
                  <path d="M4 4h4l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v4a2 2 0 01-2 2C9.6 21 3 14.4 3 6a2 2 0 012-2z" stroke="white" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
                <a href="tel:+6285777082278" className="hover:text-white transition-colors">
                  +62 857-7708-2278
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="white" strokeWidth="1.4" />
                  <path d="M3 7l9 6 9-6" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <a href="mailto:hello@jembatanbisnis.com" className="hover:text-white transition-colors">
                  hello@jembatanbisnis.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 text-center text-slate-400 text-[13px]">
          © 2024 Jembatan Bisnis Broker. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

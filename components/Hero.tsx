import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative bg-slate-50 overflow-hidden h-[calc(100vh-90px)] lg:h-[calc(100vh-148px)] flex flex-col justify-center"
      // Perhitungan tinggi Hero:
      // - Header tingginya 80px (h-20)
      // - Card FeaturesBar ditarik naik -mt-[110px] (mobile) / -mt-[130px] (lg)
      //   → itu KIRA-KIRA setengah tinggi card, jadi separuh card nongol
      //   di BAWAH batas Hero (separuhnya lagi nimpa foto di dalam Hero)
      // - Supaya total (Header + Hero + separuh card yang nongol) = 100vh:
      //     Hero = 100vh - 80px(header) - 110px(separuh card, mobile)
      //          = 100vh - 190px
      //     Hero = 100vh - 80px(header) - 130px(separuh card, lg)
      //          = 100vh - 210px
      // Kalau nanti tinggi card berubah (misal py-8 diganti py-10, atau
      // font/icon berubah), angka 110/130 di sini HARUS disesuaikan lagi
      // supaya tetap pas — dan angka -mt di FeaturesBar.tsx juga harus sama.
    >
      {/* Gambar full-bleed: absolute, menutupi sisi kanan section dari atas sampai bawah,
          nempel ke tepi kanan browser */}
      <div className="absolute inset-y-0 right-0 w-[62%] lg:w-[58%]">
        <Image
          src="/images/hero-office.webp"
          alt="Ruang rapat Jembatan Bisnis Broker dengan pemandangan kota Jakarta"
          fill
          priority
          className="object-cover object-right"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 8%, rgba(0,0,0,0.55) 18%, rgba(0,0,0,0.9) 30%, black 42%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 8%, rgba(0,0,0,0.55) 18%, rgba(0,0,0,0.9) 30%, black 42%)",
          }}
          sizes="62vw"
        />
      </div>

      {/* Konten teks tetap dalam container max-w-[1600px], di atas gambar (z-10) */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-8 w-full -translate-y-6 lg:-translate-y-10">
        {/*                                                                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
            Geser konten teks sedikit ke atas dari posisi center penuh,
            supaya secara visual terasa lebih "pas di tengah" (bukan
            benar-benar mepet ke tengah matematis). Sesuaikan angka
            translate-y ini kalau masih kurang naik / kelewat naik.
        */}
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-navy-900 leading-[1.12] mb-6">
            Perantara Keberhasilan Bisnis Anda
          </h1>
          <p className="text-slate-500 text-[17px] leading-relaxed mb-9 max-w-md">
            Kami menghubungkan ide, peluang, dan pelaku bisnis secara tepat
            untuk membantu Anda mencapai kesuksesan jangka panjang.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#konsultasi"
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 text-white text-sm font-semibold px-7 py-3.5 hover:bg-brand transition-colors"
            >
              Konsultasi Gratis
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 text-navy-900 text-sm font-semibold px-7 py-3.5 hover:border-navy-900 transition-colors"
            >
              Pelajari Layanan
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6.3" stroke="currentColor" strokeWidth="1.4" />
                <path
                  d="M8 5v3l2 1.2"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

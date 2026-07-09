import Image from "next/image";

const mainServices = [
  {
    title: "Penilaian Bisnis",
    desc: "Kami menawarkan jasa penilaian bisnis untuk beragam situasi, mulai dari perencanaan jangka panjang hingga penyelesaian sengketa. Industri yang kami kuasai sangat luas, mencakup manufaktur, jasa, perdagangan, dan masih banyak lagi.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
    href: "#",
  },
  {
    title: "Jasa Konsultasi dan Penasihat Bisnis",
    desc: "Kami menawarkan layanan konsultasi yang komprehensif untuk membantu bisnis mencapai potensi maksimalnya. Melalui analisis mendalam dan strategi yang terukur, kami membantu klien dalam mengoptimalkan operasi, meningkatkan efisiensi, dan mencapai pertumbuhan yang berkelanjutan.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    href: "#",
  },
  {
    title: "Jasa Brokerage Bisnis untuk Usaha Mikro, Kecil, dan Menengah",
    desc: "Kami memfasilitasi transaksi jual beli berbagai jenis usaha, baik skala mikro, kecil, menengah, maupun besar.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
    href: "#",
  },
];

const buySell = [
  {
    tag: "PEMBELI BISNIS",
    title: "Temukan Bisnis yang Tepat untuk Anda",
    desc: "Mencari bisnis dengan harga terbaik akan memakan banyak waktu. Bersama, kami akan membantu menyiapkan perjalanan bisnis Anda dan memberikan bantuan selama proses pembelian bisnis yang berkualitas dan terpercaya.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    href: "#",
  },
  {
    tag: "PENJUAL BISNIS",
    title: "Jual Bisnis Anda dengan Nilai Terbaik",
    desc: "Menjual sebuah bisnis butuh pertimbangan matang karena banyak sekali risiko yang didapat apabila penjual salah langkah. Tim kami akan membantu penjual menentukan harga terbaik tanpa menghambat proses bekerja, jadi bisnis Anda masih punya ruang untuk tumbuh lebih.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80",
    href: "#",
  },
];

export default function LayananPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 pt-24 pb-20 lg:pt-28 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=2000&q=80"
            alt=""
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-navy-900/80 to-navy-900" />
        </div>

        <div className="relative z-10 max-w-container mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm font-bold text-blue-300 mb-3 uppercase tracking-wide">
            Layanan Kami
          </p>
          <h1 className="text-3xl lg:text-[44px] font-bold text-white leading-tight max-w-2xl mx-auto">
            Kepercayaan yang Menguntungkan
          </h1>
          <p className="text-slate-300 text-[15px] lg:text-[16px] mt-5 max-w-xl mx-auto leading-relaxed">
            Perantara keberhasilan bisnis Anda — menghubungkan ide, peluang,
            dan pelaku bisnis untuk mencapai kesuksesan jangka panjang.
          </p>
        </div>
      </section>

      {/* Layanan Utama */}
      <section className="py-20 lg:py-24">
        <div className="max-w-container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow text-sm font-bold text-brand mb-3 uppercase">
              Apa yang Kami Tawarkan
            </p>
            <h2 className="text-3xl lg:text-[38px] font-bold text-navy-900">
              Layanan Utama Kami
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {mainServices.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-card transition-shadow flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-navy-900 text-[17px] mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-[13px] leading-relaxed flex-1 mb-4">
                    {service.desc}
                  </p>
                  <a
                    href={service.href}
                    className="group/link inline-flex items-center gap-1.5 text-brand text-sm font-semibold hover:gap-2.5 transition-all"
                  >
                    Baca Selengkapnya
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2.5 7h9M11.5 7l-3.5-3.5M11.5 7L8 10.5"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jual & Beli Bisnis */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow text-sm font-bold text-brand mb-3 uppercase">
              Jual &amp; Beli Bisnis
            </p>
            <h2 className="text-3xl lg:text-[38px] font-bold text-navy-900 mb-4">
              Kami Dampingi Dua Sisi Transaksi
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed">
              Konsultasi yang mudah dan nyaman membuat pembeli dan penjual
              mempercayakan bisnisnya kepada Jembatan Bisnis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {buySell.map((item) => (
              <div
                key={item.tag}
                className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-card transition-shadow flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/10 to-transparent" />
                  <span className="absolute bottom-4 left-6 text-white text-xs font-bold uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-navy-900 text-[18px] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-[14px] leading-relaxed flex-1 mb-4">
                    {item.desc}
                  </p>
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-brand text-sm font-semibold hover:gap-2.5 transition-all"
                  >
                    Baca Selengkapnya
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2.5 7h9M11.5 7l-3.5-3.5M11.5 7L8 10.5"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1080px] mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden bg-navy-900 rounded-3xl px-6 lg:px-10 py-6 lg:py-7 flex flex-col lg:flex-row items-center gap-5 lg:gap-8">
            <div className="relative shrink-0 w-16 h-16 rounded-full flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(59,130,246,0.55) 0%, rgba(59,130,246,0) 70%)",
                }}
              />
              <div className="relative w-12 h-12 rounded-full bg-blue-600/40 flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M11 13l2-2M8 12l-2.5 2.5a1.5 1.5 0 002.12 2.12L10 14M13 9l2.5-2.5a1.5 1.5 0 012.12 2.12L15 11M4 20l1.5-4.5L14 7l3 3-8.5 8.5L4 20z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  />
                </svg>
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-lg lg:text-xl font-bold text-white mb-1">
                Butuh Bantuan Menentukan Layanan yang Tepat?
              </h2>
              <p className="text-slate-300 text-[13px] lg:text-[14px] leading-snug">
                Konsultasikan kebutuhan bisnis Anda bersama tim kami
                <br className="hidden lg:block" /> secara gratis dan tanpa komitmen.
              </p>
            </div>

            <a
              href="/#hubungi-kami"
              className="group shrink-0 inline-flex items-center gap-0 rounded-full bg-white text-navy-900 text-sm font-semibold px-6 py-3 hover:bg-blue-50 transition-colors"
            >
              Konsultasi Gratis
              <span className="inline-block max-w-0 group-hover:max-w-[28px] overflow-hidden transition-all duration-300 ease-out">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="ml-2"
                >
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

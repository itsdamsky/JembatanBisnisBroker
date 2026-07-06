"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    number: "01",
    title: "Setiap Transaksi, Kami Kawal Sampai Tuntas",
    desc: "Ratusan proses jual-beli bisnis telah kami dampingi dengan sistem yang terstruktur, legal, dan transparan — memastikan kedua belah pihak merasa aman dari awal hingga akhir.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80",
  },
  {
    number: "02",
    title: "Akuisisi Bisnis Tanpa Tebak-Tebakan",
    desc: "Tim kami membantu perusahaan mengidentifikasi peluang akuisisi yang benar-benar sesuai — didukung analisis mendalam, valuasi akurat, dan pendampingan penuh dari negosiasi hingga serah terima.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
  },
  {
    number: "03",
    title: "Menemukan Pembeli yang Tepat, Bukan Sekadar Pembeli",
    desc: "Kami menyaring calon pembeli secara serius agar bisnis Anda jatuh ke tangan yang tepat — melayani berbagai sektor usaha di seluruh Jawa dan Bali dengan pendekatan profesional.",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1200&q=80",
  },
];

const n = slides.length;

export default function TentangKamiSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % n);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => setActive(index);

  // -1 = kartu di kiri (sebelumnya), 0 = tengah (aktif), 1 = kanan (berikutnya)
  const signedOffset = (i: number) => {
    const raw = (i - active + n) % n;
    return raw > n / 2 ? raw - n : raw;
  };

  const cardStyle = (signed: number): React.CSSProperties => {
    if (signed === 0) {
      return {
        transform: "translate(-50%, 0) translateZ(0) rotateY(0deg) scale(1)",
        zIndex: 30,
        opacity: 1,
      };
    }
    const dir = signed > 0 ? 1 : -1;
    return {
      transform: `translate(calc(-50% + ${dir * 62}%), 0) translateZ(-180px) rotateY(${-dir * 32}deg) scale(0.82)`,
      zIndex: 20,
      opacity: 0.55,
    };
  };

  return (
    <section className="relative bg-slate-50 pt-20 pb-28 lg:pt-28 lg:pb-36 overflow-hidden">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-x-8 items-start">
          {/* TEXT */}
          <div className="lg:col-span-5 lg:col-start-1 lg:mt-24 relative z-40 order-2 lg:order-1">

            <div className="min-h-[240px]">
              {slides.map((s, i) => (
                <div
                  key={s.number}
                  className={`transition-all duration-700 ease-in-out ${
                    i === active
                      ? "opacity-100 translate-y-0 relative"
                      : "opacity-0 translate-y-3 absolute inset-x-0 top-0 pointer-events-none"
                  }`}
                >
                  <h2 className="text-2xl lg:text-[36px] font-bold text-navy-900 leading-[1.15] mb-5">
                    {s.title}
                  </h2>
                  <p className="text-slate-500 text-[15px] lg:text-[16px] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-10">
              {slides.map((s, i) => (
                <button
                  key={s.number}
                  onClick={() => goTo(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    active === i ? "w-8 bg-brand" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* IMAGE STACK — true 3D coverflow */}
          <div
            className="lg:col-span-7 lg:col-start-6 relative order-1 lg:order-2 mb-16 lg:mb-0 h-72 lg:h-[440px]"
            style={{ perspective: "1400px" }}
          >
            <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
              {slides.map((s, i) => {
                const signed = signedOffset(i);
                return (
                  <button
                    key={s.number}
                    onClick={() => goTo(i)}
                    aria-label={`Lihat slide ${i + 1}`}
                    className="absolute top-0 left-1/2 w-[78%] h-full rounded-3xl overflow-hidden shadow-card transition-all duration-700 ease-in-out cursor-pointer"
                    style={cardStyle(signed)}
                  >
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      priority={i === 0}
                      className="object-cover"
                      sizes="(min-width: 1024px) 45vw, 78vw"
                    />
                    {signed !== 0 && (
                      <div className="absolute inset-0 bg-navy-900/40" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Floating number badge */}
            <div className="absolute -top-6 left-[11%] lg:-top-8 z-40 w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-white shadow-card flex items-center justify-center">
              <span
                key={slides[active].number}
                className="text-2xl lg:text-3xl font-bold text-brand"
              >
                {slides[active].number}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
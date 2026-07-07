"use client";

import Image from "next/image";
import { useState } from "react";
import Carousel3D from "@/components/Carousel3D";
import { motion, AnimatePresence } from "framer-motion";

interface SlideData {
  number: string;
  title: string;
  desc: string;
  image: string;
}

const slides: SlideData[] = [
  {
    number: "01",
    title: "Setiap Transaksi, Kami Kawal Sampai Tuntas",
    desc: "Ratusan proses jual-beli bisnis telah kami dampingi dengan sistem yang terstruktur, legal, dan transparan.",
    image:
      "https://images.unsplash.com/photo-1782279702290-49e82fd28324?w=2400&q=85",
  },
  {
    number: "02",
    title: "Akuisisi Bisnis Tanpa Tebak-Tebakan",
    desc: "Tim kami membantu perusahaan mengidentifikasi peluang akuisisi yang benar-benar sesuai, didukung analisis mendalam.",
    image:
      "https://images.unsplash.com/photo-1711097383282-28097ae16b1d?w=2400&q=85",
  },
  {
    number: "03",
    title: "Menemukan Pembeli yang Tepat untuk Bisnis Anda",
    desc: "Kami menyaring calon pembeli secara serius agar bisnis Anda jatuh ke tangan yang tepat.",
    image:
      "https://images.unsplash.com/photo-1714974528703-e5ad41abc259?w=1600&q=80",
  },
];

export default function TentangKamiSlider() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-navy-900 pt-24 pb-32 lg:pt-32 lg:pb-40 overflow-hidden min-h-[720px]">
      {/* FULL-BLEED BACKGROUND — mengikuti slide aktif, crossfade */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={s.number}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === active ? 1 : 0 }}
          >
            <Image
              src={s.image}
              alt=""
              fill
              priority={i === 0}
              className="object-cover scale-110"
              sizes="100vw"
            />
          </div>
        ))}
        {/* dark gradient supaya teks tetap terbaca */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/85 to-navy-900/40" />
        <div className="absolute inset-0 bg-navy-900/30" />
      </div>

      <div className="relative z-10 max-w-container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT — teks + tombol, animasi satu kesatuan */}
          <div className="min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.09 } },
                  exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                }}
              >
                {[
                  <h2
                    key="title"
                    className="text-3xl lg:text-[44px] font-bold text-white leading-[1.1] mb-5"
                  >
                    {slides[active].title}
                  </h2>,
                  <p
                    key="desc"
                    className="text-slate-300 text-[15px] lg:text-[16px] leading-relaxed max-w-lg"
                  >
                    {slides[active].desc}
                  </p>,
                ].map((el, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                      },
                      exit: {
                        opacity: 0,
                        y: -16,
                        filter: "blur(6px)",
                        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                  >
                    {el}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Tombol statis — tidak ikut animasi ganti slide */}
            <a
              href="/#hubungi-kami"
              className="group inline-flex items-center gap-0 rounded-full bg-white text-navy-900 text-sm font-semibold px-7 py-3.5 mt-8 hover:bg-blue-50 transition-colors"
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

          {/* RIGHT — carousel kartu kecil */}
          <div>
            <Carousel3D
              items={slides}
              activeWidth={380}
              thumbWidth={190}
              cardHeight={420}
              gap={20}
              autoPlay
              autoPlayInterval={4500}
              dotClassName="bg-white/25 hover:bg-white/50"
              activeDotClassName="bg-white"
              onActiveChange={setActive}
              renderCard={(slide, isActive) => (
                <div
                  className={`w-full h-full rounded-3xl overflow-hidden relative border-2 transition-colors ${
                    isActive ? "border-white shadow-2xl" : "border-white/20"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    draggable={false}
                    quality={90}
                    className="object-cover pointer-events-none"
                    sizes={isActive ? "400px" : "220px"}
                  />

                  <span className="absolute top-4 left-4 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/90 text-brand text-sm font-bold shadow-md">
                    {slide.number}
                  </span>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
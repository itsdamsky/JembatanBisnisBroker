import Image from "next/image";

export default function About() {
  return (
    <section id="tentang-kami" className="py-4">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="bg-navy-900 rounded-3xl overflow-hidden grid lg:grid-cols-2 items-center">
          {/* Text */}
          <div className="px-8 py-14 lg:px-14 lg:py-0">
            <h2 className="text-3xl lg:text-[34px] font-bold text-white leading-tight mb-5">
              Partner Terpercaya dalam Setiap Langkah Bisnis Anda
            </h2>
            <p className="text-slate-300 text-[15px] leading-relaxed mb-8 max-w-md">
              Jembatan Bisnis Broker hadir untuk menjadi penghubung yang tepat
              antara ide, peluang, dan pelaku bisnis. Dengan pengalaman dan
              jaringan yang luas, kami berkomitmen memberikan layanan terbaik
              untuk keberhasilan bisnis Anda.
            </p>
            <a
              href="#hubungi-kami"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 text-white text-sm font-semibold px-7 py-3.5 hover:bg-white hover:text-navy-900 transition-colors"
            >
              Pelajari Tentang Kami
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
          </div>

          {/* Image */}
          <div className="relative h-64 lg:h-full lg:min-h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
              alt="Jabat tangan kemitraan bisnis"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

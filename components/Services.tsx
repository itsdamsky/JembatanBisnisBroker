const services = [
  {
    title: "Profil Perusahaan",
    desc: "Kami membantu Anda memperkenalkan bisnis secara profesional dan meyakinkan.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="4" y="4" width="13" height="17" rx="1.5" stroke="#123B87" strokeWidth="1.5" />
        <path d="M7.5 8.5h6M7.5 12h6M7.5 15.5h3.5" stroke="#123B87" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="18.5" cy="17.5" r="4" fill="white" stroke="#123B87" strokeWidth="1.5" />
        <path d="M17 17.5l1 1 2-2" stroke="#123B87" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Penilaian Bisnis",
    desc: "Analisis mendalam untuk menentukan nilai bisnis Anda secara akurat dan objektif.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M4 21V9M10.5 21V5M17 21V13M23 21V9" stroke="#123B87" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 21h19" stroke="#123B87" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 12l6-5 6 3 6-6" stroke="#123B87" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Jual & Beli Bisnis",
    desc: "Mempertemukan penjual dan pembeli dengan proses aman, transparan, dan terpercaya.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M3 12l4-4h6l-3 3M3 12v4l4 4h6l3-3M3 12h6" stroke="#123B87" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M23 12l-4-4h-6l3 3M23 12v4l-4 4h-6l-3-3M23 12h-6" stroke="#123B87" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="layanan" className="py-24 lg:py-28">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl lg:text-[38px] font-bold text-navy-900 mb-4">
            Solusi Tepat untuk Setiap Tahap Bisnis Anda
          </h2>
          <p className="text-slate-500 text-[16px] leading-relaxed">
            Kami hadir sebagai mitra strategis yang membantu Anda menenukan
            peluang, menilai potensi, dan mencapai hasil terbaik.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-card transition-shadow"
            >
              <div className="mb-5">{s.icon}</div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2.5">
                {s.title}
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-5">
                {s.desc}
              </p>
              <a
                href="#hubungi-kami"
                className="inline-flex items-center gap-1.5 text-brand text-sm font-semibold hover:gap-2.5 transition-all"
              >
                Selengkapnya
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
          ))}
        </div>
      </div>
    </section>
  );
}

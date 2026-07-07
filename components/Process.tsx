const steps = [
  {
    title: "Konsultasi",
    desc: "Kami memahami kebutuhan dan tujuan bisnis Anda.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 5h16v10H9l-4 4v-4H4V5z"
          stroke="#123B87"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Analisis & Penilaian",
    desc: "Kami melakukan analisis menyeluruh dan penilaian akurat.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="10.5" cy="10.5" r="6.5" stroke="#123B87" strokeWidth="1.6" />
        <path d="M15.3 15.3L20 20" stroke="#123B87" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Strategi & Rekomendasi",
    desc: "Kami menyusun strategi terbaik yang sesuai dengan tujuan Anda.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="3" width="14" height="18" rx="1.5" stroke="#123B87" strokeWidth="1.6" />
        <path d="M8.5 8h7M8.5 12h7M8.5 16h4" stroke="#123B87" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="17.5" cy="17" r="3.2" fill="white" stroke="#123B87" strokeWidth="1.4" />
        <path d="M16.3 17l.8.8 1.6-1.6" stroke="#123B87" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Eksekusi",
    desc: "Kami menjalankan proses dengan profesional dan aman.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 21s-7-4.6-7-10.6C5 6.8 8.1 4 12 4s7 2.8 7 6.4C19 16.4 12 21 12 21z"
          stroke="#123B87"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10.5" r="2.2" stroke="#123B87" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: "Hasil & Kemitraan",
    desc: "Kami memastikan hasil optimal dan kemitraan berkelanjutan.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 20V13M9.5 20V9M15 20V15M20 20V5" stroke="#123B87" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M4 11l5.5-5 5.5 3 5-6" stroke="#123B87" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section className="py-24 lg:py-28 bg-slate-50">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow text-sm font-bold text-brand mb-3 uppercase">
            Proses Kerja Kami
          </p>
          <h2 className="text-3xl lg:text-[38px] font-bold text-navy-900">
            Sederhana, Transparan, dan Efektif
          </h2>
        </div>

        <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-6">
          {/* Dashed connecting line (desktop only) */}
          <div
            className="hidden lg:block absolute top-7 left-[10%] right-[10%] border-t-2 border-dashed border-slate-300 -z-0"
            aria-hidden="true"
          />
          {steps.map((step) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 w-14 h-14 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-5">
                {step.icon}
              </div>
              <h3 className="font-semibold text-navy-900 text-[15px] mb-1.5">
                {step.title}
              </h3>
              <p className="text-slate-500 text-[13px] leading-relaxed max-w-[160px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

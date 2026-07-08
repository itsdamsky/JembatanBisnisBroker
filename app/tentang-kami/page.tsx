import Image from "next/image";
import TentangKamiSlider from "@/components/TentangKamiSlider";

const stats = [
  {
    label: "Transaksi Sukses",
    value: "200+",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M17 20c0-2.8-2.2-5-5-5s-5 2.2-5 5M12 12a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM21 20c0-2.2-1.5-4-3.5-4.5M16.5 11.5A3 3 0 1015 6M3 20c0-2.2 1.5-4 3.5-4.5M7.5 11.5A3 3 0 119 6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Tahun Pengalaman",
    value: "10+",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 21V9l8-5 8 5v12M4 21h16M9 21v-6h6v6M9 12h.01M15 12h.01M12 12h.01M9 9h.01M15 9h.01M12 9h.01"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Kepuasan Klien",
    value: "98%",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 12l2 2 4-4M12 3l7 4v5c0 4.5-3 8.5-7 9.5-4-1-7-5-7-9.5V7l7-4z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Kerahasiaan Klien",
    value: "Menjaga",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect
          x="5"
          y="11"
          width="14"
          height="9"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M8 11V7a4 4 0 018 0v4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const values = [
  {
    title: "Integritas",
    desc: "Kami menjunjung tinggi kejujuran dan profesionalisme dalam setiap proses.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3l7 4v5c0 4.5-3 8.5-7 9.5-4-1-7-5-7-9.5V7l7-4z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Transparansi",
    desc: "Informasi disampaikan secara terbuka dan jelas sejak awal hingga selesai.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M4 20c0-3 2.2-5.4 5-5.4s5 2.4 5 5.4M15 20c0-2-.9-3.7-2.3-4.6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Komitmen",
    desc: "Kami berkomitmen penuh mengutamakan kepentingan dan tujuan klien.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path
          d="M8 12l2 2 6-6M3 12l4 3-1 5 6-3 6 3-1-5 4-3-4-3 1-5-6 3-6-3 1 5-4 3z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Kerahasiaan",
    desc: "Identitas dan data klien selalu kami jaga dengan standar kerahasiaan tertinggi.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect
          x="5"
          y="11"
          width="14"
          height="9"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M8 11V7a4 4 0 018 0v4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const steps = [
  {
    number: "01",
    title: "Analisis & Valuasi",
    desc: "Kami menganalisis bisnis Anda untuk menentukan nilai yang tepat.",
  },
  {
    number: "02",
    title: "Pencarian Pembeli",
    desc: "Kami mengakses jaringan luas untuk menemukan pembeli yang serius dan sesuai.",
  },
  {
    number: "03",
    title: "Negosiasi & Deal",
    desc: "Kami memfasilitasi negosiasi agar tercapai kesepakatan terbaik bagi kedua pihak.",
  },
  {
    number: "04",
    title: "Pendampingan Closing",
    desc: "Kami dampingi hingga proses legal dan serah terima bisnis selesai dengan lancar.",
  },
];

const team = [
  {
    name: "Rendy Pratama",
    role: "CEO & Business Broker",
    linkedin: "#",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "Dewi Lestari",
    role: "Business Broker",
    linkedin: "#",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
  {
    name: "Budi Santoso",
    role: "Legal Advisor",
    linkedin: "#",
    photo:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
  },
  {
    name: "Fajar Nugroho",
    role: "Financial Advisor",
    linkedin: "#",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
];

export default function TentangKamiPage() {
  return (
    <>
      {/* Hero Slider + Stats Bar = 100vh */}
      <div className="flex flex-col h-screen">
        <div className="flex-1 min-h-0">
          <TentangKamiSlider />
        </div>

        {/* Stats Bar */}
        <section className="shrink-0 py-8 lg:py-10">
          <div className="max-w-[1080px] mx-auto px-6 lg:px-8">
            <div className="bg-slate-50 rounded-2xl px-6 lg:px-10 py-7 lg:py-8 grid grid-cols-2 lg:grid-cols-4 gap-y-6">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex items-center gap-3 lg:px-6 ${
                    i !== 0 ? "lg:border-l lg:border-slate-200" : ""
                  }`}
                >
                  <div className="w-12 h-12 shrink-0 text-navy-900 flex items-center justify-center [&_svg]:w-8 [&_svg]:h-8">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-base lg:text-lg font-bold text-navy-900 leading-none mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-slate-500 leading-tight whitespace-nowrap">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Intro + Image */}
      <section className="py-20 lg:py-24">
        <div className="max-w-container mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow text-sm font-bold text-brand mb-3 uppercase">
              Tentang Kami
            </p>
            <h2 className="text-2xl lg:text-[32px] font-bold text-navy-900 leading-tight mb-5">
              Menghubungkan Peluang, Menciptakan Kesepakatan Terbaik
            </h2>
            <p className="text-slate-500 text-[16px] leading-relaxed mb-4">
              Kami melihat banyak pemilik bisnis kesulitan menjual usaha
              mereka dengan aman, transparan, dan mendapatkan nilai yang
              layak. Di sisi lain, banyak calon pembeli kesulitan menemukan
              bisnis yang tepat dan terpercaya.
            </p>
            <p className="text-slate-500 text-[16px] leading-relaxed">
              Jembatan Bisnis Broker hadir untuk menjembatani keduanya,
              memberikan proses yang terstruktur, legal, dan mengutamakan
              kepentingan klien.
            </p>
          </div>
          <div className="relative h-72 lg:h-96 rounded-3xl overflow-hidden">
            <Image
              src="/images/hero-office.webp"
              alt="Tim Jembatan Bisnis Broker"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Nilai yang Kami Pegang */}
      <section className="pb-20 lg:pb-24">
        <div className="max-w-container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl lg:text-3xl font-bold text-navy-900">
              Nilai yang Kami Pegang
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-card transition-shadow"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-blue-50 text-brand flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-navy-900 text-[16px] mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-500 text-[13px] leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proses yang Terstruktur dan Terpercaya */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow text-sm font-bold text-brand mb-3 uppercase">
              Cara Kami Bekerja
            </p>
            <h2 className="text-3xl lg:text-[38px] font-bold text-navy-900">
              Proses yang Terstruktur dan Terpercaya
            </h2>
          </div>

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {/* connecting line for desktop */}
            <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-slate-200" />

            {steps.map((step) => (
              <div key={step.number} className="relative text-center">
                <div className="relative z-10 w-12 h-12 mx-auto mb-5 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
                <h3 className="font-semibold text-navy-900 text-[16px] mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-[13px] leading-relaxed max-w-[220px] mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tim Kami */}
      <section className="py-20 lg:py-24">
        <div className="max-w-container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow text-sm font-bold text-brand mb-3 uppercase">
              Tim Kami
            </p>
            <h2 className="text-3xl lg:text-[38px] font-bold text-navy-900">
              Profesional yang Siap Membantu Anda
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center hover:shadow-card transition-shadow"
              >
                <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 bg-slate-100">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <h3 className="font-semibold text-navy-900 text-[16px] mb-1">
                  {member.name}
                </h3>
                <p className="text-brand text-xs font-semibold uppercase tracking-wide mb-3">
                  {member.role}
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-brand hover:bg-brand hover:text-white transition-colors"
                  aria-label={`LinkedIn ${member.name}`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.75h4V23h-4V8.75zM8.5 8.75h3.84v1.96h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V23h-4v-6.5c0-1.55-.03-3.55-2.17-3.55-2.17 0-2.5 1.7-2.5 3.44V23h-4V8.75z" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 lg:pb-24">
        <div className="max-w-container mx-auto px-6 lg:px-8">
          <div className="bg-navy-900 rounded-3xl px-8 py-14 lg:py-16 text-center">
            <h2 className="text-2xl lg:text-[32px] font-bold text-white mb-4">
              Siap Memulai Perjalanan Bisnis Anda?
            </h2>
            <p className="text-slate-300 text-[15px] mb-8 max-w-lg mx-auto">
              Konsultasikan kebutuhan bisnis Anda bersama tim kami secara
              gratis dan tanpa komitmen.
            </p>
            <a
              href="/#hubungi-kami"
              className="inline-flex items-center gap-2 rounded-full bg-white text-navy-900 text-sm font-semibold px-7 py-3.5 hover:bg-blue-50 transition-colors"
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
          </div>
        </div>
      </section>
    </>
  );
}

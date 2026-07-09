import Image from "next/image";
import TentangKamiSlider from "@/components/TentangKamiSlider";
import StatCounter from "@/components/StatCounter";

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
    value: "100%",
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
        <circle cx="12" cy="10" r="6" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M9 10l2 2 3.5-3.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 15.5L7 21l5-2 5 2-1.5-5.5"
          stroke="currentColor"
          strokeWidth="1.6"
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
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 19V13M9 19V9M14 19V5M19 19v-8M4 19h16"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Pencarian Pembeli",
    desc: "Kami mengakses jaringan luas untuk menemukan pembeli yang serius dan sesuai.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="10.5" cy="10.5" r="6" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M20 20l-4.8-4.8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Negosiasi & Deal",
    desc: "Kami memfasilitasi negosiasi agar tercapai kesepakatan terbaik bagi kedua pihak.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M8.5 12.5l2.2 2.2L16 9.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Pendampingan Closing",
    desc: "Kami dampingi hingga proses legal dan serah terima bisnis selesai dengan lancar.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M14 3v5h5M9 14l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const team = [
  {
    name: "Phrisella",
    role: "CEO",
    linkedin: "https://www.linkedin.com/in/phrisella-elstar-josel15",
    bio: "Didasari dari keinginan untuk membantu pebisnis, Phrisella menyadari bahwa broker bisnis adalah cara untuk membantu pebisnis mempunyai bisnis dengan mudah namun tetap aman dan terpercaya. Pengetahuan dan pengalamannya dalam dunia bisnis broker menjadi bala bantuan bagi pebisnis untuk mencari bisnis yang sesuai.",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
];

export default function TentangKamiPage() {
  return (
    <>
      {/* Hero Slider + Stats Bar */}
      <div className="flex flex-col">
        <div className="h-[600px] lg:h-[650px]">
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
                    <StatCounter
                      value={stat.value}
                      className="text-base lg:text-lg font-bold text-navy-900 leading-none mb-1"
                    />
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch cursor-pointer">
            {values.map((value) => (
              <div
                key={value.title}
                className="group h-full flex flex-col text-center rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-card hover:border-navy-900/20 transition-all"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-white border-2 border-slate-200 text-navy-900 flex items-center justify-center transition-all duration-300 group-hover:bg-navy-900 group-hover:border-navy-900 group-hover:scale-110 group-hover:text-white">
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
            <div
              className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] border-t-2 border-dashed border-slate-300"
            />

            {steps.map((step) => (
              <div key={step.number} className="group relative text-center">
                <div className="relative z-10 w-14 h-14 mx-auto mb-5 rounded-full bg-white border-2 border-slate-200 text-navy-900 flex items-center justify-center transition-all duration-300 group-hover:bg-navy-900 group-hover:border-navy-900 group-hover:scale-110 group-hover:text-white">
                  {step.icon}
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

          <div className="flex justify-center">
            {team.map((member) => (
              <div
                key={member.name}
                className="group relative rounded-2xl border border-slate-200 overflow-hidden h-[420px] w-full max-w-[320px] hover:shadow-card transition-shadow"
              >
                {/* FRONT — foto full-card + nameplate, terlihat default */}
                <div className="absolute inset-0">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 25vw, 50vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <div className="bg-white/90 backdrop-blur rounded-xl px-4 py-3 text-center">
                      <h3 className="font-bold text-navy-900 text-[16px]">
                        {member.name}
                      </h3>
                      <div className="h-px bg-slate-300 my-1.5 mx-auto w-16" />
                      <p className="text-slate-500 italic text-[13px]">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* BACK — bio + LinkedIn, muncul saat hover */}
                <div className="absolute inset-0 bg-white p-5 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-slate-500 text-[16px] leading-relaxed flex-1 overflow-y-auto">
                    {member.bio}
                  </p>
                  <div className="flex justify-end pt-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand text-white hover:bg-navy-900 transition-colors"
                      aria-label={`LinkedIn ${member.name}`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.75h4V23h-4V8.75zM8.5 8.75h3.84v1.96h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V23h-4v-6.5c0-1.55-.03-3.55-2.17-3.55-2.17 0-2.5 1.7-2.5 3.44V23h-4V8.75z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 lg:pb-24">
        <div className="max-w-[1080px] mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden bg-navy-900 rounded-3xl px-6 lg:px-10 py-6 lg:py-7 flex flex-col lg:flex-row items-center gap-5 lg:gap-8">
            {/* Icon with radial glow */}
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

            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-lg lg:text-xl font-bold text-white mb-1">
                Siap Memulai Perjalanan Bisnis Anda?
              </h2>
              <p className="text-slate-300 text-[13px] lg:text-[14px] leading-snug">
                Konsultasikan kebutuhan bisnis Anda bersama tim kami
                <br className="hidden lg:block" /> secara gratis dan tanpa komitmen.
              </p>
            </div>

            {/* CTA button */}
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

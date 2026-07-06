import Image from "next/image";
import TentangKamiSlider from "@/components/TentangKamiSlider";

const team = [
  {
    name: "Phrisella",
    role: "Business Broker",
    bio: "Didasari dari keinginan untuk membantu pebisnis, Phrisella menyadari bahwa broker bisnis adalah cara untuk membantu pebisnis mempunyai bisnis dengan mudah namun tetap aman dan terpercaya. Pengetahuan dan pengalamannya dalam dunia bisnis broker menjadi bala bantuan bagi pebisnis untuk mencari bisnis yang sesuai.",
    linkedin: "https://www.linkedin.com/in/phrisella-elstar-josel15",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
];

export default function TentangKamiPage() {
  return (
    <>
      {/* Hero Slider */}
      <TentangKamiSlider />

      {/* Intro + Image */}
      <section className="py-20 lg:py-24">
        <div className="max-w-container mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow text-sm font-bold text-brand mb-3 uppercase">
              Kenapa Jembatan Bisnis
            </p>
            <h2 className="text-2xl lg:text-[32px] font-bold text-navy-900 leading-tight mb-5">
              Solusi Bagi Pengusaha yang Ingin Bertumbuh Lebih Cepat
            </h2>
            <p className="text-slate-500 text-[16px] leading-relaxed">
              Mendirikan bisnis baru membutuhkan usaha yang signifikan. Banyak
              pengusaha memilih untuk mengakuisisi bisnis yang sudah berjalan.
              Namun, menemukan bisnis yang sesuai dengan minat dan kemampuan
              bukanlah hal yang sederhana. Jembatan Bisnis Brokerage hadir
              sebagai solusi untuk membantu pengusaha menemukan berbagai
              pilihan bisnis, mulai dari skala kecil hingga besar, yang sesuai
              dengan preferensi mereka.
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

      {/* Profil Perusahaan */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow text-sm font-bold text-brand mb-3 uppercase">
              Profil Perusahaan
            </p>
            <h2 className="text-3xl lg:text-[38px] font-bold text-navy-900">
              Siapa Kami
            </h2>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-8 lg:p-12 max-w-4xl mx-auto space-y-6">
            <p className="text-slate-500 text-[16px] leading-relaxed">
              Diawali dengan keinginan mengutamakan satu jenis jasa dalam jual
              beli bisnis di berbagai industri dan skala — mulai dari kecil,
              menengah, hingga besar — business brokerage muncul sebagai
              layanan yang dibutuhkan untuk mempertemukan pemilik bisnis
              dengan individu yang mencari bisnis sesuai budget dan preferensi
              mereka.
            </p>
            <p className="text-slate-500 text-[16px] leading-relaxed">
              Jembatan Bisnis Brokerage adalah layanan jasa spesialis jual
              beli bisnis yang berlokasi di Indonesia. Didasari oleh
              pemahaman pendiri tentang betapa kompleksnya mengurus keperluan
              jual beli bisnis, kami ingin memberikan layanan di mana para
              pencari dan penjual bisnis bisa bertransaksi dengan aman,
              transparan, dan terpercaya. Tim kami adalah tim profesional
              yang berpengalaman dalam menangani perdagangan bisnis dan mampu
              memberikan pelayanan maksimal bagi penjual maupun pembeli.
            </p>
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
              Orang-Orang di Balik Jembatan Bisnis
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
                <p className="text-slate-500 text-[13px] leading-relaxed mb-4">
                  {member.bio}
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brand text-sm font-semibold hover:gap-2.5 transition-all"
                >
                  LinkedIn
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
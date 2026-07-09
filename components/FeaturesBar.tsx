const features = [
  {
    title: "Berfokus pada Anda",
    desc: (
      <>
        Kami mengutamakan kebutuhan
        <br />
        dan tujuan bisnis Anda.
      </>
    ),
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <circle cx="10.5" cy="9.5" r="3.3" stroke="white" strokeWidth="1.5" />
        <circle cx="20" cy="10.5" r="2.6" stroke="white" strokeWidth="1.5" />
        <path
          d="M4 24c0-3.6 2.9-6.5 6.5-6.5S17 20.4 17 24"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M18 18.5c3 .3 5.3 2.8 5.3 5.9"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Profesional & Terpercaya",
    desc: (
      <>
        Didukung oleh tim berpengalaman
        <br />
        dan berintegritas tinggi.
      </>
    ),
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path
          d="M15 4l9 4v6.5c0 6.2-3.9 10.5-9 11.5-5.1-1-9-4.8-9-11.5V8l9-4z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M11 15l2.7 2.7L19.5 12"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Solusi Tepat",
    desc: (
      <>
        Pendekatan strategis untuk hasil
        <br />
        yang optimal.
      </>
    ),
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <circle cx="15" cy="15" r="10.5" stroke="white" strokeWidth="1.5" />
        <circle cx="15" cy="15" r="6" stroke="white" strokeWidth="1.5" />
        <circle cx="15" cy="15" r="1.7" fill="white" />
      </svg>
    ),
  },
  {
    title: "Kemitraan Jangka Panjang",
    desc: (
      <>
        Kami tumbuh bersama
        <br />
        kesuksesan Anda.
      </>
    ),
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path
          d="M9 13l-3.5 3.5a2 2 0 000 2.8v0a2 2 0 002.8 0"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M12.5 16.5L9 20a2 2 0 000 2.8v0a2 2 0 002.8 0l1-1"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M9.5 9.5l6.7-3.9a2.2 2.2 0 012.6.3l6 6a1.6 1.6 0 010 2.3l-1.1 1.1a2.2 2.2 0 01-2.9.2L18 13"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 13.5l3.2 3"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

// Section terpisah, ditarik naik dengan -mt supaya ujung Hero (batas bawah
// section Hero / foto) jatuh persis di TENGAH-TENGAH card ini — separuh
// card menimpa foto, separuh lagi berada di section putih berikutnya.
export default function FeaturesBar() {
  return (
    <div className="relative z-10 -mt-[110px] lg:-mt-[130px] px-6 lg:px-8">
      {/*                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
          INI ANGKA YANG DIUBAH KALAU MAU CARD DINAIKKAN/DITURUNKAN:
          - Perbesar angkanya (mis. -mt-[150px] lg:-mt-[170px]) → card NAIK lebih tinggi
          - Perkecil angkanya (mis. -mt-[70px] lg:-mt-[90px])   → card TURUN lebih rendah
          PENTING: kalau angka ini diubah, angka di Hero.tsx
          (calc(100vh-190px) / calc(100vh-210px)) HARUS ikut disesuaikan
          juga (lihat rumus di komentar Hero.tsx), supaya total tetap 100vh.
      */}
      <div className="max-w-[1080px] mx-auto bg-navy-900 rounded-3xl px-8 py-8 lg:py-10 shadow-2xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 text-center">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center">
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-white font-semibold text-[15px] mb-1.5">
                {f.title}
              </h3>
              <p className="text-slate-300 text-[13px] leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

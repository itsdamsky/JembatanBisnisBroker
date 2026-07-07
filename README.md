# Jembatan Bisnis Broker — Website

Website landing page untuk **Jembatan Bisnis Broker**, dibangun dengan **Next.js 14 (App Router)** dan **Tailwind CSS**, meniru layout referensi (header, hero, fitur unggulan, layanan, tentang kami, proses kerja, dan footer).

## Menjalankan proyek

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Build produksi

```bash
npm run build
npm run start
```

## Struktur proyek

```
app/
  layout.tsx      # Root layout + font Inter
  page.tsx        # Merakit semua section
  globals.css     # Tailwind directives
components/
  Header.tsx      # Navbar + logo + menu mobile
  Hero.tsx        # Hero section (pakai gambar kantor yang di-upload)
  FeaturesBar.tsx # Bar navy 4 keunggulan (overlap di bawah hero)
  Services.tsx    # 3 kartu layanan
  About.tsx       # Section navy "Tentang Kami" + foto jabat tangan
  Process.tsx     # 5 langkah alur kerja
  Footer.tsx      # Footer 4 kolom + copyright
public/
  images/hero-office.webp  # Gambar hero yang di-upload
```

## Catatan

- Gambar hero (`hero-office.webp`) sudah memakai file yang Anda upload dan disimpan di `public/images/`.
- Foto jabat tangan di section "Tentang Kami" sementara memakai gambar placeholder dari Unsplash — silakan ganti dengan foto asli perusahaan Anda di `components/About.tsx`.
- Semua warna, spacing, dan komponen disusun agar semirip mungkin dengan desain referensi. Sesuaikan warna di `tailwind.config.ts` (kelas `navy` & `brand`) bila diperlukan.
- Konten teks (alamat, nomor telepon, email) mengikuti apa yang terlihat di desain referensi — cek kembali dan sesuaikan dengan data resmi perusahaan.

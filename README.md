# Bariba Tao — Website Company Profile

Website frontend company profile untuk **Bariba Tao**, layanan jasa pengiriman barang. Proyek ini sepenuhnya berjalan di sisi klien (tanpa backend, database, autentikasi, atau API buatan sendiri).

## Mengapa Vite + React + TypeScript?

- **Vite** memberikan development server cepat dan build produksi yang ringan untuk situs statis.
- **React** memudahkan pemisahan komponen reusable (navbar, kartu layanan, FAQ, kontak, dll.).
- **TypeScript** membantu menjaga konsistensi data konfigurasi perusahaan.
- Cocok untuk hosting statis (Netlify, Vercel, GitHub Pages, atau folder `dist`).

## Struktur Folder

```text
baribatao/
├── index.html
├── package.json
├── vite.config.ts
├── public/
│   └── favicon.svg
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── data/
│   │   └── company.ts          # Konfigurasi & konten yang mudah diganti
│   ├── utils/
│   │   └── whatsapp.ts         # Pembuat tautan WhatsApp
│   ├── hooks/
│   │   └── useScrollReveal.ts
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── WhyUs.tsx
│       ├── Coverage.tsx
│       ├── HowItWorks.tsx
│       ├── InfoPromo.tsx
│       ├── Testimonials.tsx
│       ├── FAQ.tsx
│       ├── Contact.tsx
│       ├── Footer.tsx
│       ├── BackToTop.tsx
│       ├── Logo.tsx
│       ├── SafeImage.tsx
│       ├── ScrollReveal.tsx
│       └── SectionHeading.tsx
└── README.md
```

## Menjalankan Secara Lokal

### Prasyarat

- Node.js 18 atau lebih baru
- npm (terpasang bersama Node.js)

### Langkah instalasi

```bash
# 1. Masuk ke folder proyek
cd baribatao

# 2. Instal dependensi
npm install

# 3. Jalankan development server
npm run dev
```

Buka browser di alamat yang ditampilkan terminal (biasanya `http://localhost:5173`).

### Build produksi

```bash
npm run build
npm run preview
```

Hasil build berada di folder `dist/` dan siap diunggah ke hosting statis.

## Placeholder yang Harus Diganti

Edit file `src/data/company.ts`:

| Field | Keterangan |
| --- | --- |
| `whatsappNumber` | Nomor WhatsApp resmi, format internasional tanpa `+` (contoh: `6281234567890`) |
| `phone` | Nomor telepon (opsional) |
| `email` | Email resmi (opsional) |
| `address` | Alamat kantor / lokasi usaha |
| `operatingHours` | Jam operasional |
| `mapEmbedUrl` | URL embed Google Maps jika alamat sudah dikonfirmasi |
| `social.instagram` / `facebook` / `tiktok` | Tautan media sosial |
| `coverageAreas` | Daftar wilayah layanan yang sudah dikonfirmasi |
| `services` | Sesuaikan kategori layanan dengan layanan aktual |
| `infoArticles` | Update informasi, promo, atau pengumuman operasional |

Sampai `whatsappNumber` diisi dengan nomor valid, tombol WhatsApp akan menampilkan peringatan konfigurasi—bukan membuka nomor fiktif.

## Catatan Konten

- Tidak ada testimoni palsu; bagian testimoni berupa placeholder.
- Tidak ada klaim statistik tanpa data.
- Formulir kontak menyusun pesan di browser lalu membuka WhatsApp.
- Logo sementara (SVG wordmark) mudah diganti di `Logo.tsx` / `favicon.svg`.

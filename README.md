# Cretivox Internship Experience — Endurance Test (Front-end Developer)

Di Cretivox, Front-end Developer bukan cuma tentang baris kode atau sekadar menyusun layout yang rapi. Front-end adalah wajah dari seluruh produk—titik di mana apa yang dilihat, diklik, dan dirasakan oleh pengguna saling bertemu. 

Website ini dibangun bukan sekadar sebagai portofolio formal, melainkan sebuah ruang interaktif, hidup, dan responsif yang merepresentasikan cara gue berpikir, ngoding, sekaligus menuangkan "rasa" terhadap sebuah desain, animasi, dan pengalaman pengguna (*user experience*).

**Live Link:** [rey-porto-cretivox.vercel.app](https://rey-porto-cretivox.vercel.app/login)

---

## Eksplorasi Fitur & Pemenuhan Tantangan

Seluruh komponen dalam proyek ini dirancang agar terasa *smooth*, interaktif, dan memiliki alur cerita (*engaging*) untuk membuat pengunjung betah mengeksplorasi halaman:

1. **Personal Website (The Core Identity):** Halaman tunggal yang didedikasikan penuh untuk mengenalkan identitas, karakter, keahlian, dan sudut pandang visual gue.
2. **Fierce Dynamic Showcase:** Ruang visual yang menampilkan 3 foto ekspresi *FIERCE* (Sisi Depan, Kanan, dan Kiri) dalam aspek rasio potret 9:16, diintegrasikan secara presisi agar menyatu dengan sinematik halaman.
3. **Fluid Animation (GSAP & ScrollTrigger):** Implementasi animasi tingkat lanjut menggunakan GSAP agar transisi elemen tidak kaku. Setiap guliran (*scroll*) memicu interaksi visual yang natural dan dinamis.
4. **Micro-Interactions:** Penyematan detail kecil seperti efek kustom kursor pelacak, grain/noise latar belakang, serta teks berjalan (*marquee*) untuk memperkuat kesan premium dan eksperimental.
5. **Robust Integration (Bonus Point ++):** Mengintegrasikan alur masuk halaman lewat REST API Login pada *endpoint* resmi yang disediakan tim rekruter via Postman, memisahkan lapisan UI dengan manajemen autentikasi secara aman.

---

## Struktur Arsitektur Kode

Kode di dalam proyek ini disusun menggunakan standar arsitektur modular Next.js (App Router) dengan TypeScript. Pemisahan folder dilakukan secara ketat berdasarkan fungsinya agar kode tetap bersih (*clean code*), mudah dirawat, dan skalabel:

```text
REY_PORTO
├── src
│   ├── app/                  # Router utama Next.js (Logika halaman /login & halaman utama)
│   ├── components/           # Komponen UI modular yang reusable
│   │   ├── layout/           # Struktur makro global (Navbar dengan Logo Cretivox, Footer)
│   │   ├── sections/         # Bagian utama satu halaman (Hero, About, Photo Showcase)
│   │   └── ui/               # Komponen mikro/interaktif (Cursor Tracker, Marquee, Noise Effect)
│   ├── services/             # Isolasi logika pemanggilan API eksternal (Auth/Login handler)
│   ├── types/                # Definisi tipe data TypeScript global demi keamanan kode
│   └── utils/                # Fungsi pembantu eksternal (Helper & utility configs)
├── public/                   # Aset statis (Logo Cretivox PNG, File Foto Eksperimental)
├── next.config.ts            # Konfigurasi Next.js Compiler
├── package.json              # Manajemen package dependency & skrip proyek
└── tsconfig.json             # Konfigurasi compiler TypeScript

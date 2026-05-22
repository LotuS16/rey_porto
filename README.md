# Cretivox Internship Endurance Test - Web Application

Project ini adalah aplikasi web berbasis Next.js yang dikembangkan khusus untuk memenuhi kebutuhan tugas atau seleksi Cretivox Internship Endurance Test. Aplikasi ini mentransformasikan halaman landing page portfolio interaktif yang awalnya berbentuk single-file HTML konvensional menjadi sebuah aplikasi modern yang modular, terstruktur, dan siap untuk dikembangkan lebih lanjut dalam skala besar menggunakan Next.js App Router.

Fokus utama dari migrasi arsitektur ini adalah memisahkan urusan tampilan (User Interface), logika bisnis (API fetch), penataan gaya (CSS), dan animasi (GSAP) agar kode tetap bersih, mudah dirawat, dan scalable.

## Fitur Utama

Aplikasi ini dilengkapi dengan beberapa fitur esensial yang mendukung fungsionalitas dan aspek estetikanya:

1. Autentikasi Login
Halaman depan bertindak sebagai pelindung konten utama. Pengguna diwajibkan memasukkan kredensial yang valid sebelum diberikan izin untuk mengeksplorasi portfolio. Layar login ini terintegrasi langsung dengan verifikasi API pihak ketiga secara real-time.

2. Landing Page & Portfolio Interaktif
Setelah berhasil masuk, pengguna disuguhkan dengan konten portfolio utama yang mencakup seksi Hero dengan teks paralaks, teks berjalan otomatis (Marquee Grid), galeri foto dengan aspek rasio sinematik (9:16), seksi informasi biografi, hingga kutipan personal di bagian penutup.

3. Kursor Kustom Dinamis
Aplikasi menggantikan kursor bawaan peramban dengan komponen kursor kustom yang terdiri dari titik pusat dan lingkaran pelacak (ring tracking). Lingkaran kursor ini memiliki efek perlambatan (easing) saat mengikuti pergerakan mouse dan akan membesar secara otomatis ketika berada di atas elemen interaktif seperti tombol atau tautan.

4. Animasi Lanjutan dengan GSAP dan ScrollTrigger
Seluruh seksi di dalam konten utama memanfaatkan pustaka GSAP untuk mengatur urutan kemunculan elemen (staggered animation) saat situs pertama kali dimuat. Selain itu, fitur ScrollTrigger digunakan untuk memicu animasi secara presisi berdasarkan posisi gulir layar pengguna.

5. Lapisan Efek Noise Estetis
Terdapat overlay tekstur noise menggunakan SVG yang berjalan secara konstan di latar belakang aplikasi. Efek ini memberikan impresi visual yang lebih hidup, analog, dan menyatu dengan tema desain gelap yang diusung.

## Arsitektur Project (Modular Architecture)

Untuk menjaga kebersihan kode dan memudahkan proses kolaborasi atau pengembangan jangka panjang, project ini menerapkan struktur arsitektur berbasis modular (Feature/Component-Based Layout) di dalam App Router Next.js. Pemisahan tugas dilakukan secara ketat dengan pembagian direktori sebagai berikut:

```text
src/
├── app/
│   ├── globals.css        # Berisi seluruh konfigurasi gaya, variabel warna, efek noise, dan kursor
│   ├── layout.tsx         # Setup font eksternal (Bebas Neue, Cormorant Garamond, DM Mono) dan pembungkus root
│   └── page.tsx           # Halaman utama yang mengelola state autentikasi dan inisialisasi urutan animasi
├── components/
│   ├── sections/
│   │   ├── LoginScreen.tsx # Komponen mandiri yang menangani UI dan logika interaksi form login
│   │   └── MainContent.tsx # Komponen yang menampung seluruh elemen visual portfolio setelah login sukses
│   └── ui/
│       └── CustomCursor.tsx # Komponen terisolasi untuk melacak gerakan mouse dan merender kursor kustom
└── services/
    └── auth.service.ts    # Lapisan abstraksi data untuk menangani komunikasi HTTP request ke API autentikasi
```
## Cara Menjalankan Project
Ikuti langkah di bawah untuk menjalankan aplikasi di lokal device.

Prasyarat
Sebelum memulai, pastikan perangkat lunak berikut sudah terinstal di komputer:

Node.js (versi 18.x atau yang lebih baru direkomendasikan)
npm (bawaan dari Node.js) atau yarn

#Langkah Instalasi
Ekstrak atau klon repositori project ini ke direktori lokal Anda.
Buka terminal atau command prompt, lalu arahkan ke folder root project.
Jalankan perintah berikut untuk menginstal semua pustaka dan dependensi yang diperlukan (termasuk Next.js, GSAP, dan TypeScript):

# bash
```
npm run dev
```


buka [http://localhost:3000](http://localhost:3000) dengan browser kamu untuk melihat hasilnya.

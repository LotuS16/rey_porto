# Cretivox Internship Experience - Endurance Test (Front-end Developer)

Repository ini berisi kode sumber untuk website personal branding/portofolio interaktif yang dibangun sebagai pemenuhan tugas **Endurance Test** untuk posisi **Front-end Developer** di Cretivox. Proyek ini berfokus pada performa, animasi modern, interaktivitas, dan integrasi API.

**Tautan Demo Live:** [rey-porto-cretivox.vercel.app](https://rey-porto-cretivox.vercel.app/login)

---

## 🚀 Fitur Utama & Pemenuhan Tugas (Task)

Aplikasi ini telah memenuhi seluruh kriteria spesifikasi yang diminta dalam dokumen *Endurance Test*:

1. **Personal Branding Page:** Halaman web satu halaman (1-page website) yang dirancang secara mendalam untuk memperkenalkan identitas, keahlian, dan representasi personal.
2. **Fierce Photo Showcase:** Menampilkan 3 foto ekspresi *FIERCE* dengan variasi sudut pandang (Sisi Depan, Kanan, dan Kiri) menggunakan aset potret beresolusi tinggi dengan aspek rasio 9:16.
3. **Modern Framework Stack:** Menggunakan **Next.js** (App Router) dengan **TypeScript** untuk memastikan performa maksimal, optimasi SEO, dan pengetikan kode yang aman (*type-safe*).
4. **Advanced GSAP Animation & Scroll-Triggered:** Memanfaatkan **GSAP (GreenSock Animation Platform)** untuk menciptakan animasi transisi yang halus dan efek interaktif berbasis guliran (*scroll-triggered*) agar website terasa hidup dan sinematik.
5. **High Interactivity:** Dilengkapi dengan komponen interaktif, efek kursor kustom, efek *marquee*, dan transisi antar-elemen untuk menjaga retensi pengunjung agar betah menjelajahi halaman.
6. **Live Deployment:** Aplikasi telah dideploy secara publik dan dioptimasi menggunakan platform **Vercel**.
7. **API Integration (POINT ++):** Mengintegrasikan sistem otentikasi pada halaman login (`/login`) dengan mengonsumsi REST API resmi yang disediakan rekruter melalui dokumentasi Postman.

---

## 📂 Struktur Arsitektur Proyek

Proyek ini menerapkan standar arsitektur **Next.js Modular Architecture** yang memisahkan tanggung jawab (*separation of concerns*) setiap lapisan kode, sehingga memudahkan proses *maintenance* dan pengembangan skalabel.

```text
REY_PORTO
├── src
│   ├── app/                  # Next.js App Router (Routing, Pages, & Layouts)
│   ├── components/           # Komponen UI yang reusable (Dapat digunakan kembali)
│   │   ├── layout/           # Struktur global layout (Navbar, Footer, dll.)
│   │   ├── sections/         # Potongan section besar untuk 1-page (Hero, About, Photos, dll.)
│   │   └── ui/               # Komponen UI atomik kecil/interaktif (Cursor, Marquee, Noise)
│   ├── services/             # Manajemen API Fetching & integrasi endpoint eksternal
│   ├── types/                # Definisikan interface TypeScript global (index.ts)
│   └── utils/                # Fungsi pembantu (Helper functions & konfigurasi utilitas)
├── .gitignore                # Pengecualian file pelacak Git (seperti node_modules)
├── eslint.config.mjs         # Konfigurasi linter untuk standarisasi kualitas kode
├── next.config.ts            # Konfigurasi kustom Next.js
├── package.json              # Daftar dependencies dan scripts proyek
├── postcss.config.mjs        # Konfigurasi pemrosesan CSS styling
├── README.md                 # Dokumentasi proyek
└── tsconfig.json             # Konfigurasi TypeScript compiler
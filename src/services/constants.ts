import type { PhotoItem, StatItem } from '@/types'

// ─────────────────────────────────────────────────────────────────────────────
//  EDIT FILE INI UNTUK MENGUBAH KONTEN WEBSITE LO
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  /** Nama di navbar, hero, dan footer */
  name: 'Renaldo Yosia',

  /** Path logo Cretivox di folder /public/ */
  logoSrc: '/photos/cretivox.png',

  /** Tagline di bawah nama hero */
  tagline: ['Creative. Fearless.', 'Born to make things', 'unforgettable.'],

  /** Badge lokasi di hero */
  location: 'Tegal · Indonesia · 2026',

  /** Bio di section About */
  bio: 'Gue adalah <strong>kreator yang percaya</strong> bahwa setiap karya harus punya nyawa. Bukan cuma estetik — tapi <strong>berasa, nyentuh, dan ninggalin bekas.</strong>',

  /** Quote personal */
  quote: '"Karya yang baik bukan yang paling ramai — tapi yang paling dirasakan."',
  quoteAuthor: 'Renaldo Yosia Setiyanto, 2026',

  /** 4 stat card di section About */
  stats: [
    { label: 'Based In',         value: 'Jakarta, Indonesia' },
    { label: 'Currently',        value: 'Cretivox Intern'    },
    { label: 'Passionate About', value: 'Creative Direction' },
    { label: 'Open To',          value: 'Collaborations'     },
  ] satisfies StatItem[],

  /** Skill tags */
  skills: [
    'Visual Design',
    'Motion',
    'Branding',
    'Creative Direction',
    'UI / UX',
    'Strategy',
    'Photography',
    'Video',
  ],

  /** Kata-kata di marquee banner */
  marqueeWords: ['CREATIVE', 'DESIGN', 'FIERCE', 'CRETIVOX', 'VISUAL', 'MOTION'],
}

// Photos 
// Taruh foto di /public/photos/ lalu sesuaikan nama file di bawah
export const PHOTOS: PhotoItem[] = [
  {
    id:        1,
    direction: 'DEPAN',
    caption:   '01 — Depan',
    src:       '/photos/depan.png',
    alt:       'Foto sisi depan',
  },
  {
    id:        2,
    direction: 'KANAN',
    caption:   '02 — Kanan',
    src:       '/photos/kanan.png',
    alt:       'Foto sisi kanan',
  },
  {
    id:        3,
    direction: 'KIRI',
    caption:   '03 — Kiri',
    src:       '/photos/kiri.png',
    alt:       'Foto sisi kiri',
  },
]

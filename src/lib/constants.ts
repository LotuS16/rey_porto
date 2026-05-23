import type { PhotoItem, StatItem } from '@/types'

// ─────────────────────────────────────────────────────────────────────────────
//  EDIT EVERYTHING IN THIS FILE TO MAKE THE SITE YOURS
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  /** Your full name — shown in nav, hero, and footer */
  name: 'Your Name',

  /** Short tagline lines shown below the hero name */
  tagline: ['Creative. Fearless.', 'Born to make things', 'unforgettable.'],

  /** City / country / year badge in the hero */
  location: 'Jakarta · Indonesia · 2026',

  /** Long-form bio paragraph (supports <strong> via dangerouslySetInnerHTML in About.tsx) */
  bio: 'Gue adalah <strong>kreator yang percaya</strong> bahwa setiap karya harus punya nyawa. Bukan cuma estetik — tapi <strong>berasa, nyentuh, dan ninggalin bekas.</strong> Gue hadir buat bikin sesuatu yang orang nggak bisa lupain.',

  /** A short personal quote or mantra */
  quote:
    '"Karya yang baik bukan yang paling ramai — tapi yang paling dirasakan."',
  quoteAuthor: 'Your Name, 2026',

  /** Four stat cards in the About section */
  stats: [
    { label: 'Based In',         value: 'Jakarta, Indonesia'  },
    { label: 'Currently',        value: 'Cretivox Intern'     },
    { label: 'Passionate About', value: 'Creative Direction'  },
    { label: 'Open To',          value: 'Collaborations'      },
  ] satisfies StatItem[],

  /** Skill / interest tags */
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

  /** Words that loop in the marquee banner */
  marqueeWords: ['CREATIVE', 'DESIGN', 'FIERCE', 'CRETIVOX', 'VISUAL', 'MOTION'],
}

// ─── Photos ──────────────────────────────────────────────────────────────────
// Put your 9:16 portrait photos inside /public/photos/
// then update the `src` values below.
export const PHOTOS: PhotoItem[] = [
  {
    id:        1,
    direction: 'DEPAN',
    caption:   '01 — Depan',
    src:       '/photos/depan.jpg',   // TODO: add your photo
    alt:       'Foto sisi depan',
  },
  {
    id:        2,
    direction: 'KANAN',
    caption:   '02 — Kanan',
    src:       '/photos/kanan.jpg',   // TODO: add your photo
    alt:       'Foto sisi kanan',
  },
  {
    id:        3,
    direction: 'KIRI',
    caption:   '03 — Kiri',
    src:       '/photos/kiri.jpg',    // TODO: add your photo
    alt:       'Foto sisi kiri',
  },
]

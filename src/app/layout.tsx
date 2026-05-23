import type { Metadata } from 'next'
import { Bebas_Neue, Cormorant_Garamond, DM_Mono } from 'next/font/google'
import './globals.css'

// ─── Google Fonts ─────────────────────────────────────────────────────────
const bebasNeue = Bebas_Neue({
  weight:   '400',
  subsets:  ['latin'],
  variable: '--font-bebas-neue',
  display:  'swap',
})

const cormorant = Cormorant_Garamond({
  weight:   ['300', '400', '600'],
  style:    ['normal', 'italic'],
  subsets:  ['latin'],
  variable: '--font-cormorant',
  display:  'swap',
})

const dmMono = DM_Mono({
  weight:   ['400'],
  style:    ['normal', 'italic'],
  subsets:  ['latin'],
  variable: '--font-dm-mono',
  display:  'swap',
})

// ─── Site Metadata ────────────────────────────────────────────────────────
// TODO: Update title, description, and Open Graph values with your own info
export const metadata: Metadata = {
  title:       'Your Name — Cretivox Intern',
  description: 'Personal portfolio · Cretivox Internship Endurance Test 2026',
  openGraph: {
    title:       'Your Name — Cretivox Intern',
    description: 'Personal portfolio · Cretivox Internship Endurance Test 2026',
    type:        'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${bebasNeue.variable} ${cormorant.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}

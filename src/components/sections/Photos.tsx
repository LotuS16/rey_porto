'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { PHOTOS } from '@/services/constants'
import { useScrollReveal } from '@/utils/useScrollReveal'
import styles from './Photos.module.css'

function PhotoPlaceholder({ direction }: { direction: string }) {
  return (
    <div className={styles.placeholder}>
      <div className={styles.placeholderRing}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
          stroke="var(--muted)" strokeWidth="1.5">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>
      <p className={styles.placeholderText}>
        FOTO {direction}<br />9 : 16 Portrait
      </p>
    </div>
  )
}

function PhotoCard({ photo }: { photo: typeof PHOTOS[0] }) {
  // true  = foto gagal dimuat → tampilkan placeholder
  // false = foto berhasil    → sembunyikan placeholder
  const [hasError, setHasError] = useState(false)

  return (
    <div className={styles.col}>
      <div className={`photo-frame ${styles.frame}`}>
        {!hasError && (
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: 'cover' }}
            onError={() => setHasError(true)}
          />
        )}

        {/* Placeholder hanya muncul kalau foto error / belum ada */}
        {hasError && <PhotoPlaceholder direction={photo.direction} />}

        <div className={styles.hoverLabel}>SISI {photo.direction}</div>
      </div>
      <p className={styles.caption}>{photo.caption}</p>
    </div>
  )
}

export default function Photos() {
  const sectionRef = useRef<HTMLElement>(null!)

  useScrollReveal(sectionRef, {
    y:             100,
    duration:      1.1,
    stagger:       0.15,
    staggerTarget: `.${styles.col}`,
    start:         'top 72%',
  })

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.header}>
        <span className={styles.num}>01</span>
        <h2 className={styles.title}>FIERCE<br />LOOKS.</h2>
      </div>

      <div className={styles.grid}>
        {PHOTOS.map(photo => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </section>
  )
}
'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { PHOTOS } from '@/lib/constants'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from './Photos.module.css'

// SVG placeholder shown when the photo file is missing
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

export default function Photos() {
  const sectionRef = useRef<HTMLElement>(null!)

  // Each column gets its own staggered reveal
  useScrollReveal(sectionRef, {
    y:             100,
    duration:      1.1,
    stagger:       0.15,
    staggerTarget: `.${styles.col}`,
    start:         'top 72%',
  })

  return (
    <section ref={sectionRef} className={styles.section}>

      {/* Section header */}
      <div className={styles.header}>
        <span className={styles.num}>01</span>
        <h2 className={styles.title}>FIERCE<br />LOOKS.</h2>
      </div>

      {/* 3-column grid */}
      <div className={styles.grid}>
        {PHOTOS.map(photo => (
          <div key={photo.id} className={styles.col}>
            <div className={`photo-frame ${styles.frame}`}>
              {/* Next.js <Image> — swap `placeholder` prop for your real photo */}
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
                onError={e => {
                  // Hide broken img; show placeholder instead
                  ;(e.target as HTMLImageElement).style.display = 'none'
                }}
              />
              {/* Fallback placeholder (visible until photo file is added) */}
              <PhotoPlaceholder direction={photo.direction} />
              {/* Hover label */}
              <div className={styles.hoverLabel}>SISI {photo.direction}</div>
            </div>
            <p className={styles.caption}>{photo.caption}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

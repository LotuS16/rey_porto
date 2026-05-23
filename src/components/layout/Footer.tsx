'use client'

import { useRef } from 'react'
import { SITE } from '@/lib/constants'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from './Footer.module.css'

export default function Footer() {
  const ref = useRef<HTMLElement>(null!)

  useScrollReveal(ref, { y: 40, duration: 1.5, start: 'top 90%' })

  return (
    <footer ref={ref} className={styles.footer}>
      <div className={styles.ghost}>
        {SITE.name.toUpperCase()}
      </div>
      <div className={styles.info}>
        <p className={styles.label}>Program</p>
        <p className={styles.program}>
          Cretivox Internship<br />
          Endurance Test · 2026
        </p>
      </div>
    </footer>
  )
}

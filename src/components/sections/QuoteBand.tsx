'use client'

import { useRef } from 'react'
import { SITE } from '@/services/constants'
import { useScrollReveal } from '@/utils/useScrollReveal'
import styles from './QuoteBand.module.css'

export default function QuoteBand() {
  const ref = useRef<HTMLDivElement>(null!)
  useScrollReveal(ref, { x: 80, y: 0, duration: 1.4, start: 'top 75%' })

  return (
    <div className={styles.band}>
      <div ref={ref}>
        <blockquote className={styles.quote}>{SITE.quote}</blockquote>
        <p className={styles.attr}>&mdash; {SITE.quoteAuthor}</p>
      </div>
    </div>
  )
}

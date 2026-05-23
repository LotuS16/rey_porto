'use client'

import { useRef } from 'react'
import { SITE } from '@/lib/constants'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from './About.module.css'

export default function About() {
  const bioRef   = useRef<HTMLParagraphElement>(null!)
  const statsRef = useRef<HTMLDivElement>(null!)
  const tagsRef  = useRef<HTMLDivElement>(null!)

  useScrollReveal(bioRef,   { y: 50, duration: 1.2 })
  useScrollReveal(statsRef, { y: 30, duration: 0.8, delay: 0.25 })
  useScrollReveal(tagsRef,  { y: 18, duration: 0.6, stagger: 0.055, staggerTarget: `.${styles.tag}` })

  return (
    <section className={styles.section}>

      {/* Left column — title + tags */}
      <div className={styles.left}>
        <span className={styles.num}>02</span>
        <h2 className={styles.title}>ABOUT<br />ME.</h2>

        <div ref={tagsRef} className={styles.tagWrap}>
          {SITE.skills.map(skill => (
            <span key={skill} className={`tag ${styles.tag}`}>{skill}</span>
          ))}
        </div>
      </div>

      {/* Right column — bio + stats */}
      <div className={styles.right}>
        {/* dangerouslySetInnerHTML allows <strong> tags in the bio string */}
        <p
          ref={bioRef}
          className={styles.bio}
          dangerouslySetInnerHTML={{ __html: SITE.bio }}
        />

        <div ref={statsRef} className={styles.grid}>
          {SITE.stats.map(stat => (
            <div key={stat.label}>
              <p className={styles.statLabel}>{stat.label}</p>
              <p className={styles.statValue}>{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

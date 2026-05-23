'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SITE } from '@/lib/constants'
import styles from './Hero.module.css'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const bgWordRef  = useRef<HTMLDivElement>(null)
  const eyebrowRef = useRef<HTMLParagraphElement>(null)
  const linesRef   = useRef<HTMLSpanElement[]>([])
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const scrollRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 })

      // 1. Eyebrow fades up
      tl.to(eyebrowRef.current, {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
      })
      // 2. Name lines slide up (staggered)
      .to(linesRef.current, {
        y: '0%', duration: 1.3, ease: 'power4.out', stagger: 0.14,
      }, '-=0.5')
      // 3. Tagline
      .to(taglineRef.current, {
        opacity: 0.65, y: 0, duration: 0.9,
      }, '-=0.7')
      // 4. Scroll hint
      .to(scrollRef.current, {
        opacity: 1, duration: 0.6,
      }, '-=0.5')

      // Background word parallax on scroll
      gsap.to(bgWordRef.current, {
        y: '36%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start:   'top top',
          end:     'bottom top',
          scrub:   2,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Collect line <span> refs
  const addLineRef = (el: HTMLSpanElement | null, i: number) => {
    if (el) linesRef.current[i] = el
  }

  // Split name into words for the staggered reveal
  const nameWords = SITE.name.split(' ')

  return (
    <section ref={sectionRef} className={styles.hero}>
      {/* Decorative ghost word */}
      <div ref={bgWordRef} className={styles.bgWord} aria-hidden="true">
        FIERCE
      </div>

      <p ref={eyebrowRef} className={styles.eyebrow}>
        {SITE.location}
      </p>

      <h1 className={styles.name}>
        {nameWords.map((word, i) => (
          <span key={i} className={styles.line}>
            <span ref={el => addLineRef(el, i)}>
              {word.toUpperCase()}{i < nameWords.length - 1 ? '' : '.'}
            </span>
          </span>
        ))}
      </h1>

      <div className={styles.bottom}>
        <p ref={taglineRef} className={styles.tagline}>
          {SITE.tagline.map((line, i) => (
            <span key={i}>
              {i === SITE.tagline.length - 1
                ? <em>{line}</em>
                : <>{line}<br /></>}
            </span>
          ))}
        </p>

        <div ref={scrollRef} className={styles.scrollHint} aria-hidden="true">
          <span className={styles.scrollBar} />
          Scroll to explore
        </div>
      </div>
    </section>
  )
}

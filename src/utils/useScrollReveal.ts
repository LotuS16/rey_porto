'use client'

import { useEffect, RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface ScrollRevealOptions {
  y?: number
  x?: number
  duration?: number
  delay?: number
  ease?: string
  stagger?: number
  /** Selector elemen anak yang di-stagger, misal '.tag' */
  staggerTarget?: string
  /** ScrollTrigger start position. Default: 'top 78%' */
  start?: string
}

/**
 * Hook GSAP scroll-triggered reveal.
 * Pasang ke ref elemen, animasi otomatis jalan saat masuk viewport.
 */
export function useScrollReveal(
  ref: RefObject<HTMLElement>,
  options: ScrollRevealOptions = {},
) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const el = ref.current
    if (!el) return

    const target =
      options.staggerTarget
        ? el.querySelectorAll(options.staggerTarget)
        : el

    const ctx = gsap.context(() => {
      gsap.from(target, {
        y:        options.y        ?? 60,
        x:        options.x        ?? 0,
        opacity:  0,
        duration: options.duration ?? 1,
        delay:    options.delay    ?? 0,
        ease:     options.ease     ?? 'power3.out',
        stagger:  options.stagger  ?? 0,
        scrollTrigger: {
          trigger:       el,
          start:         options.start ?? 'top 78%',
          toggleActions: 'play none none none',
        },
      })
    }, el)

    return () => ctx.revert()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
}

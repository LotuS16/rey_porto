'use client'

import { useEffect, RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface ScrollRevealOptions {
  /** How far (px) the element travels before snapping into view. Default: 60 */
  y?: number
  x?: number
  duration?: number
  delay?: number
  ease?: string
  /** Stagger amount when the ref contains multiple child elements */
  stagger?: number
  /** Selector for child elements to stagger (e.g. '.tag') */
  staggerTarget?: string
  /** ScrollTrigger start position. Default: 'top 78%' */
  start?: string
}

/**
 * Attach a GSAP from-animation with ScrollTrigger to the provided ref.
 * Registers ScrollTrigger plugin automatically.
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
      options.staggerTarget ? el.querySelectorAll(options.staggerTarget) : el

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
          trigger: el,
          start:   options.start ?? 'top 78%',
          toggleActions: 'play none none none',
        },
      })
    }, el)

    return () => ctx.revert()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
}

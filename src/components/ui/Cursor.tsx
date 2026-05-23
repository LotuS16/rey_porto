'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Renders a gold dot + lagging ring that follow the mouse.
 * The ring expands when hovering over interactive elements.
 */
export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = mx + 'px'
        dotRef.current.style.top  = my + 'px'
      }
    }

    function tick() {
      rx += (mx - rx) * 0.13
      ry += (my - ry) * 0.13
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top  = ry + 'px'
      }
      rafId = requestAnimationFrame(tick)
    }

    const SELECTORS = 'a, button, [role="button"], .photo-frame, .tag'

    const onEnter = () => setExpanded(true)
    const onLeave = () => setExpanded(false)

    function attachListeners() {
      document.querySelectorAll<HTMLElement>(SELECTORS).forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    document.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(tick)
    attachListeners()

    // Re-attach when DOM changes (e.g. after GSAP reveals elements)
    const observer = new MutationObserver(attachListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor" />
      <div ref={ringRef} className={`cursor-ring${expanded ? ' expanded' : ''}`} />
    </>
  )
}

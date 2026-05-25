'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useAuth } from '@/utils/useAuth'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { logout } = useAuth()
  const navRef     = useRef<HTMLElement>(null)

  useEffect(() => {
    let lastY   = 0
    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true

      requestAnimationFrame(() => {
        const currentY = window.scrollY

        if (currentY > lastY && currentY > 80) {
          gsap.to(navRef.current, { y: '-100%', duration: 0.45, ease: 'power2.inOut' })
        } else {
          gsap.to(navRef.current, { y: '0%', duration: 0.45, ease: 'power2.inOut' })
        }

        lastY   = currentY
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav ref={navRef} className={styles.nav}>

      {/* Logo Cretivox */}
      <div className={styles.logoWrap}>
        <Image
          src="/photos/cretivox.png"
          alt="Cretivox"
          width={120}
          height={32}
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>

      {/* logout */}
      <div className={styles.right}>
        <span className={styles.pill}>Cretivox Intern</span>

        <button
          className={styles.logoutBtn}
          onClick={logout}
          title="Logout"
          aria-label="Logout"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          <span>Logout</span>
        </button>
      </div>

    </nav>
  )
}
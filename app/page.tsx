'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useAuth } from '@/utils/useAuth'

import Navbar    from '@/components/layout/Navbar'
import Footer    from '@/components/layout/Footer'
import Marquee   from '@/components/ui/Marquee'
import Hero      from '@/components/sections/Hero'
import Photos    from '@/components/sections/Photos'
import About     from '@/components/sections/About'
import QuoteBand from '@/components/sections/QuoteBand'

export default function HomePage() {
  const { user, loading, requireAuth } = useAuth()
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    requireAuth()
  }, [requireAuth])

  // Fade IN saat halaman home pertama kali muncul setelah login
  useEffect(() => {
    if (user && pageRef.current) {
      gsap.from(pageRef.current, {
        opacity:  0,
        duration: 0.8,
        ease:     'power2.out',
      })
    }
  }, [user])

  if (loading || !user) return null

  return (
    <div ref={pageRef}>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Photos />
        <About />
        <QuoteBand />
      </main>
      <Footer />
    </div>
  )
}
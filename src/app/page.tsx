'use client'

import { useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'

// Layout
import Navbar    from '@/components/layout/Navbar'
import Footer    from '@/components/layout/Footer'

// UI atoms
import Cursor  from '@/components/ui/Cursor'
import Noise   from '@/components/ui/Noise'
import Marquee from '@/components/ui/Marquee'

// Page sections
import Hero       from '@/components/sections/Hero'
import Photos     from '@/components/sections/Photos'
import About      from '@/components/sections/About'
import QuoteBand  from '@/components/sections/QuoteBand'

export default function HomePage() {
  const { user, loading, requireAuth } = useAuth()

  // Redirect to /login if unauthenticated
  useEffect(() => {
    requireAuth()
  }, [requireAuth])

  // Show nothing while we confirm auth state
  if (loading || !user) return null

  return (
    <>
      {/* Global decorators */}
      <Noise />
      <Cursor />

      {/* Navigation */}
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <Photos />
        <About />
        <QuoteBand />
      </main>

      <Footer />
    </>
  )
}

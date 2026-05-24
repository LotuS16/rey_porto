'use client'

import Cursor from '@/components/ui/Cursor'
import Noise  from '@/components/ui/Noise'

/**
 * Komponen ini di-render di layout supaya Cursor dan Noise
 * muncul di SEMUA halaman (login, home, dll).
 * Dipisah karena layout.tsx perlu tetap jadi Server Component.
 */
export default function ClientShell() {
  return (
    <>
      <Noise />
      <Cursor />
    </>
  )
}

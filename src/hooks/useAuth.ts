'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import type { AuthUser } from '@/types'

const STORAGE_KEY = 'auth_user'

export function useAuth() {
  const router  = useRouter()
  const [user,    setUser]    = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)

  // Read from sessionStorage on mount (client only)
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY)
      if (raw) setUser(JSON.parse(raw))
    } catch {
      // sessionStorage unavailable or JSON malformed — ignore
    } finally {
      setLoading(false)
    }
  }, [])

  const login = useCallback((userData: AuthUser) => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(userData))
    setUser(userData)
  }, [])

  const logout = useCallback(() => {
    sessionStorage.removeItem(STORAGE_KEY)
    setUser(null)
    router.push('/login')
  }, [router])

  const requireAuth = useCallback(() => {
    if (!loading && !user) router.replace('/login')
  }, [loading, user, router])

  return { user, loading, login, logout, requireAuth }
}

'use client'

import { useState, useRef, KeyboardEvent, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import gsap from 'gsap'
import { loginUser } from '@/services/api'
import { useAuth } from '@/utils/useAuth'
import styles from './login.module.css'

export default function LoginPage() {
  const router     = useRouter()
  const { login, user, loading } = useAuth()
  const pageRef    = useRef<HTMLElement>(null)

  const [username, setUsername] = useState('emilys')
  const [password, setPassword] = useState('emilyspass')
  const [error,    setError]    = useState('')
  const [pending,  setPending]  = useState(false)

  // Kalau sudah login, langsung redirect ke home — tidak bisa kembali ke login
  useEffect(() => {
    if (!loading && user) {
      router.replace('/')
    }
  }, [loading, user, router])

  // Fade IN saat halaman login muncul
  useEffect(() => {
    if (!loading && !user) {
      gsap.from(pageRef.current, {
        opacity:  0,
        duration: 0.8,
        ease:     'power2.out',
      })
    }
  }, [loading, user])

  async function handleLogin() {
    if (!username || !password) {
      setError('⚠ Isi username dan password dulu.')
      return
    }
    setPending(true)
    setError('')

    try {
      const userData = await loginUser({ username, password })
      login(userData)

      // Fade OUT sebelum pindah halaman
      gsap.to(pageRef.current, {
        opacity:    0,
        duration:   0.7,
        ease:       'power2.inOut',
        onComplete: () => router.push('/'),
      })
    } catch (err: unknown) {
      setError('⚠ ' + (err instanceof Error ? err.message : 'Login gagal.'))
      setPending(false)
    }
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleLogin()
  }

  // Jangan render form kalau sedang cek auth / sudah login
  if (loading || user) return null

  return (
    <main ref={pageRef} className={styles.page}>
      <div className={styles.card}>
        <p className={styles.eyebrow}>
          Cretivox Internship Experience · Endurance Test
        </p>
        <h1 className={styles.heading}>
          ENTER<br />
          <span className={styles.accent}>THE SITE.</span>
        </h1>

        <div className={styles.field}>
          <label htmlFor="username" className={styles.label}>Username</label>
          <input
            id="username"
            type="text"
            className={styles.input}
            value={username}
            onChange={e => setUsername(e.target.value)}
            autoComplete="username"
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <input
            id="password"
            type="password"
            className={styles.input}
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={onKeyDown}
            autoComplete="current-password"
          />
        </div>

        <button className={styles.btn} onClick={handleLogin} disabled={pending}>
          {pending ? 'VERIFYING…' : 'ACCESS GRANTED →'}
        </button>

        {error && <p className={styles.error}>{error}</p>}
        <p className={styles.hint}>demo: emilys / emilyspass</p>
      </div>
    </main>
  )
}
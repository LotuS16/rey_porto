'use client'

import { useState, useRef, KeyboardEvent } from 'react'
import { useRouter } from 'next/navigation'
import { loginUser } from '@/lib/api'
import { useAuth } from '@/hooks/useAuth'
import styles from './login.module.css'

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()

  const [username, setUsername] = useState('emilys')
  const [password, setPassword] = useState('emilyspass')
  const [error,    setError]    = useState('')
  const [loading,  setLoading]  = useState(false)

  const passRef = useRef<HTMLInputElement>(null)

  async function handleLogin() {
    if (!username || !password) {
      setError('⚠ Isi username dan password dulu.')
      return
    }

    setLoading(true)
    setError('')

    try {
      const user = await loginUser({ username, password })
      login(user)
      router.push('/')
    } catch (err: unknown) {
      setError('⚠ ' + (err instanceof Error ? err.message : 'Login gagal.'))
    } finally {
      setLoading(false)
    }
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleLogin()
  }

  return (
    <main className={styles.page}>
      <div className={styles.card}>

        <p className={styles.eyebrow}>
          Cretivox Internship Experience · Endurance Test
        </p>

        <h1 className={styles.heading}>
          ENTER<br />
          <span className={styles.headingAccent}>THE SITE.</span>
        </h1>

        {/* Username */}
        <div className={styles.field}>
          <label htmlFor="username" className={styles.label}>
            Username
          </label>
          <input
            id="username"
            type="text"
            className={styles.input}
            value={username}
            onChange={e => setUsername(e.target.value)}
            onKeyDown={e => e.key === 'Tab' && passRef.current?.focus()}
            autoComplete="username"
          />
        </div>

        {/* Password */}
        <div className={styles.field}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            id="password"
            ref={passRef}
            type="password"
            className={styles.input}
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={onKeyDown}
            autoComplete="current-password"
          />
        </div>

        <button
          className={styles.btn}
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? 'VERIFYING…' : 'ACCESS GRANTED →'}
        </button>

        {error && <p className={styles.error}>{error}</p>}

        <p className={styles.hint}>demo: emilys / emilyspass</p>
      </div>
    </main>
  )
}

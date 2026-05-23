'use client'

import { SITE } from '@/lib/constants'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>{SITE.name}</span>
      <span className={styles.pill}>Cretivox Intern ↗</span>
    </nav>
  )
}

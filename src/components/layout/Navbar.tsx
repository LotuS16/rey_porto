'use client'

import { SITE } from '@/services/constants'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>REY</span>
      <span className={styles.pill}>Cretivox Intern ↗</span>
    </nav>
  )
}

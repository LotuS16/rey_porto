'use client'

import Image from 'next/image'
import { SITE } from '@/services/constants'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoWrapper}>
        <Image 
          src={SITE.logoSrc} 
          alt="Cretivox Logo" 
          width={120}          // Sesuaikan lebar ideal logo (dalam pixel)
          height={30}          // Sesuaikan tinggi ideal logo (dalam pixel)
          className={styles.logoImage}
          priority             // Priority digunakan karena logo berada di atas (LCP)
        />
      </div>
      <span className={styles.pill}>Cretivox Intern ↗</span>
    </nav>
  )
}
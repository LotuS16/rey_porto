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
          width={120}          
          height={30}          
          className={styles.logoImage}
          priority             
        />
      </div>
      <span className={styles.pill}>Cretivox Intern ↗</span>
    </nav>
  )
}
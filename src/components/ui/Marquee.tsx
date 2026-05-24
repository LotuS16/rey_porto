import { Fragment } from 'react'
import { SITE } from '@/services/constants'
import styles from './Marquee.module.css'

export default function Marquee() {
  // Duplikat untuk loop seamless
  const words = [...SITE.marqueeWords, ...SITE.marqueeWords]

  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.track}>
        {words.map((word, i) => (
          <Fragment key={i}>
            <span className={styles.word}>{word}</span>
            <span className={styles.star}>✦</span>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
import { SITE } from '@/lib/constants'
import styles from './Marquee.module.css'

export default function Marquee() {
  // Duplicate words so the CSS animation loops seamlessly
  const words = [...SITE.marqueeWords, ...SITE.marqueeWords]

  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.track}>
        {words.map((word, i) => (
          <span key={i} className={styles.word}>{word}</span>
        ))}
      </div>
    </div>
  )
}

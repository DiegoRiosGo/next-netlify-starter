import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/logo-240x1240.png" alt="MiViajeAPP Logo" className={styles.logo} />
      </footer>
    </>
  )
}

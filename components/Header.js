import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.headCont}>
      <div className={styles.mailCont}>
        <a className={styles.linkMail} href="mailto:alfredo@srtembo.me" target="_blank" rel="noreferrer">
          <p className={styles.pgph}>Email me</p>
        </a>
      </div>
      <nav className={styles.linkCont}>
        <Link href="/" className={styles.home}>alfredo morón montiel</Link>
      </nav>
      <div className={styles.iconsCont}>
        <a className={styles.linkext} href="https://read.cv/alfredomm" target="_blank" rel="noreferrer noopener">
          <p className={styles.cv}>CV</p>
        </a>
        <a className={styles.linkext} href="https://www.behance.net/srtembo" target="_blank" rel="noreferrer noopener">
          <svg className={styles.svgIcon} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5" />
              <line x1="3" y1="12" x2="7.5" y2="12" />
              <path d="M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1" />
              <line x1="16" y1="6" x2="19" y2="6" />
          </svg>
        </a>
        <a className={styles.linkext} href="https://www.linkedin.com/in/alfredomoronmontiel/" target="_blank" rel="noreferrer noopener">
          <svg className={styles.svgIcon} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <line x1="8" y1="11" x2="8" y2="16" />
              <line x1="8" y1="8" x2="8" y2="8.01" />
              <line x1="12" y1="16" x2="12" y2="11" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
          </svg>
        </a>
        <a className={styles.linkext2} href="https://github.com/alfredommid" target="_blank" rel="noreferrer noopener">
          <svg className={styles.svgIcon}xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
        </a>
      </div>
    </header>
  )
}

export default Header
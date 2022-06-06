import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import MainProjects from '../components/MainProjects';

export default function Home({data}) {
  return (
    <div>
      <Head>
          <title>moma - home</title>
          <meta name="description" content="Portafolio Sr.Tembo" />
      </Head>
      <main className={styles.contenedor}>
        <div className={styles.contCarousel}></div>
        <aside className={styles.contSide}>
          <div className={styles.contName}>
            <p className={styles.textName}>Alfredo</p>
            <p className={styles.textName}>Morón</p>
            <p className={styles.textName}>Montiel</p>
          </div>
          <div className={styles.contIcons}>
            <div className={styles.cont1}>
              <a className={styles.linkext} href="https://read.cv/alfredomm" target="_blank" rel="noreferrer noopener">
                <p className={styles.pgph}>CV</p>
              </a>
              <a className={styles.linkext} href="https://www.behance.net/srtembo" target="_blank" rel="noreferrer noopener">
                <svg className={styles.svgIcon} xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5" />
                    <line x1="3" y1="12" x2="7.5" y2="12" />
                    <path d="M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1" />
                    <line x1="16" y1="6" x2="19" y2="6" />
                </svg>
              </a>
              <a className={styles.linkext} href="https://www.linkedin.com/in/alfredomoronmontiel/" target="_blank" rel="noreferrer noopener">
                <svg className={styles.svgIcon} xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <line x1="8" y1="11" x2="8" y2="16" />
                    <line x1="8" y1="8" x2="8" y2="8.01" />
                    <line x1="12" y1="16" x2="12" y2="11" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                </svg>
              </a>
            </div>
            <div className={styles.cont2}>
              <a className={styles.linkMail} href="mailto:alfredo@srtembo.me" target="_blank" rel="noreferrer">
                <p className={styles.pgph}>alfredo@srtembo.me</p>
              </a>
              <a className={styles.linkext2} href="https://github.com/alfredommid" target="_blank" rel="noreferrer noopener">
                <svg className={styles.svgIcon}xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </a>
            </div>
          </div>
        </aside>
      </main>
      <div className={styles.contProjects}>
        {data.map(entrada => (
          <MainProjects key={entrada.id} info={entrada} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const url = `${process.env.API_URL}/details`;
  const resp = await fetch(url);
  const data = await resp.json();

  return {
    props: {
      data
    }
  }
}

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title className="sans">Kube Real Estate</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          KUBE REAL ESTATE
        </h1>

        <p className={styles.description}>
          Coming Soon...
        </p>
      </main>

      <footer className={styles.footer}>
        <Link
          href="https://kibuika.com/twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ♥ by Kibuika
        </Link>
      </footer>
    </div>
  )
}

export default Home

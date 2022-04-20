import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Edge Middleware on Netlify</title>
        <meta
          name="description"
          content="A simple starter template to demonstrates Edge Functions"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Next.js Edge Middleware on Netlify</h1>

        <p className={styles.description}>
          This is a simple starter template that demonstrates Edge Functions by
          adding headers to the response.
        </p>

        <p className={styles.description}>
          Get started by visiting{' '}
          <a href="/shows/123">
            <code className={styles.code}>shows/123</code>
          </a>
        </p>
      </main>
    </div>
  )
}

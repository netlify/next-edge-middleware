import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export async function getStaticProps() {
  return {
    props: {
      banner: 'Hello world!',
    },
  }
}

export default function Home({ banner }) {
  return (
    <div className={styles.container}>
      <h1>Hello world</h1>
      <Link href="/about">About</Link>
    </div>
  )
}

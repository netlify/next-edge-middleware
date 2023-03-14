import styles from '../styles/Home.module.css'
import Image from 'next/image'

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
      <div id="banner" style={{ border: 'solid', padding: '16px' }}>
        {banner}
      </div>
      <p id="content">Here's an image for you!</p>
      <div className="image-wrapper">
        <Image
          width={1500}
          height={1500}
          src="https://assets.ctfassets.net/bmlje59etcpz/2gqHEDgkbhV2hM38iEqC7R/a226a75847f69645dda543d54e176967/photo-1513735492246-483525079686.avif"
          alt="Picture of Porto"
        />
      </div>
    </div>
  )
}

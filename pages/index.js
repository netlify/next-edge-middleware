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
          width={1000}
          height={1000}
          src="https://app.thefeedfactory.nl/api/assets/63d7ade92b50291e1f8f2158/pitch-deck-training.jpg"
          alt="Picture of Porto"
        />
      </div>
    </div>
  )
}

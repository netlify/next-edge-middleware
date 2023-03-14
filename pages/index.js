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
          width={500}
          height={500}
          src="https://images.unsplash.com/photo-1513735492246-483525079686"
          alt="Picture of Porto"
        />
      </div>
    </div>
  )
}

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
          height={300}
          src="https://images.pexels.com/photos/6949272/pexels-photo-6949272.jpeg"
          alt="Picture of Porto"
        />
      </div>
    </div>
  )
}

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
          width={50}
          height={50}
          src="https://images.ctfassets.net/bmlje59etcpz/3wcAuly1CafoUjTXmtJsmM/3b2a3f9b22df86080c72b773387fad63/km-command.png"
          alt="Picture of Porto"
        />
      </div>
    </div>
  )
}

import ReactPlayer from 'react-player'

import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Header from '@components/Header'
import Footer from '@components/Footer'

const CurvedArrow = dynamic(() => import('react-curved-arrow'), {
  ssr: false,
})

export default function Home() {
  const trackClick = () => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('378808883714993')
        ReactPixel.track('ViewContent')
      })
  }

  return (
    <div className="container">
      <Head>
        <title>KODA95doo | Polozi COD95 | Posao u EU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Evropskoj Uniji trebaju VOZAČI sa Balkana!" />
        <ReactPlayer
          url="https://youtu.be/q8xlOn4Atq8"
          controls={true}
          style={{maxWidth: '90%'}}
        />

        <Link href="https://forms.gle/4zrXUPyEQAe8j1No7">
          <button id="apply" onClick={trackClick} className="to">
            Prijavi se!
          </button>
        </Link>
        <CurvedArrow
          fromSelector=".to"
          toSelector=".to"
          dynamicUpdate={true}
          fromOffsetX={-200}
          middleY={-100}
          toOffsetX={-70}
          toOffsetY={-25}
        />
      </main>

      <Footer />
    </div>
  )
}

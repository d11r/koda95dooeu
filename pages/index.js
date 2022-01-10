import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Header from '@components/Header'
import Footer from '@components/Footer'

const CurvedArrow = dynamic(() => import('react-curved-arrow'), {
  ssr: false,
})
const ReactPlayer = dynamic(() => import('react-player/lazy'), {
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
        <meta
          name="description"
          content="Evropskoj Uniji trebaju vozači sa Balkana. Položi COD95 i iskoristi šansu."
        />
        <meta
          property="og:title"
          content="Položi COD95, Postani vozač u EU - KOD95doo"
          key="title"
        />
        <meta property="og:url" content="https://www.koda95doo.eu" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Evropskoj Uniji trebaju vozači sa Balkana. Položi COD95 i iskoristi šansu."
        />
        <meta
          property="og:image"
          content="https://www.koda95doo.eu/polozikod.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://koda95doo.eu/" />
        <meta
          property="twitter:title"
          content="Položi COD95, Postani vozač u EU - KOD95doo"
        />
        <meta
          property="twitter:description"
          content="Evropskoj Uniji trebaju vozači sa Balkana. Položi COD95 i iskoristi šansu."
        />
        <meta
          property="twitter:image"
          content="https://www.koda95doo.eu/polozikod.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat&display=swap"
          rel="stylesheet"
        />
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

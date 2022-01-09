import {useRouter} from 'next/router'
import {useEffect} from 'react'

import '@styles/globals.css'

const App = ({Component, pageProps}) => {
  const router = useRouter()

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('378808883714993')
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])

  return <Component {...pageProps} />
}

export default App

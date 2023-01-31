import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Layout from '../components/Layout.jsx'
import Lenis from '@studio-freight/lenis'
import Head from 'next/head'
import '../styles/globals.css'
import '../styles/fonts.css'

function MyApp({ Component, pageProps }) {

  // Preloader state
  const [isPreloading, setIsPreloading] = useState(true)

  useEffect(() => {

    setTimeout(() => {
      setIsPreloading(false)
    }, 2)

    // Setup ThreeJS
    const threeScript = document.createElement('script')
    threeScript.setAttribute('id', 'threeScript')
    threeScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js')
    document.getElementsByTagName("head")[0].appendChild(threeScript);

    // Init lenis scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical', // vertical, horizontal
      gestureDirection: 'vertical', // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    }
  }, [])

  return (
    <>
      <Head>
        <title>Frenzy | 2023</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      {isPreloading ? (
        <div>Loading here...</div>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
      <div className="noise-container">
        <div className="noise"></div>
      </div>
    </>
  );
}

export default MyApp;

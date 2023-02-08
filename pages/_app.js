import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Noise from '../components/Noise'
import Lenis from '@studio-freight/lenis'
import Head from 'next/head'
import '../styles/globals.css'
import '../styles/fonts.css'
import DataProvider from '../context/DataProvider'
import Preloader from '../components/Preloader'
import gsap from 'gsap'


function app({ Component, pageProps }) {

  // Router for page change transitions
  const router = useRouter()

  // Preloader state
  const [isPreloading, setIsPreloading] = useState(true)
  const preloadTime = Math.floor(Math.random() * 2500) + 1000

  useEffect(() => {

    // Enables preloading
    setTimeout(() => {
      setIsPreloading(false)
    }, preloadTime)
    
    // First time visitors redirected to /index page
    // const firstVisit = localStorage.getItem("firstVisit") || "true"
    // if (firstVisit === "false") {
    //   router.push(`/`)
    // } else {
    //   localStorage.setItem("firstVisit", "true")
    // }

    // Page change transition
    const pageChanged = () => {

      gsap.to(`.transition-block`, {
        y: 0,
        duration: .825,
        ease: 'power4.inOut'
      })
      gsap.to(`.transition-block .transition-inner-above`, {
        y: '-120%',
        duration: .825,
        delay: .125,
        ease: 'power4.inOut'
      })
      gsap.to(`.transition-block .transition-inner-below`, {
        y: '120%',
        duration: .625,
        ease: 'power4.inOut'
      })
      gsap.to(`#__next > main`, {
        opacity: 0,
        duration: .925,
        ease: 'circ.inOut',
      })

    }

    router.events.on(`routeChangeStart`, pageChanged)
    
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
      router.events.off(`routeChangeStart`, pageChanged)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Frenzy | 2023</title>
        <meta charSet="UTF-8"></meta>
        <meta property="og:title" content="My page title" key="title" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"></meta>
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
      </Head>
      {/* {isPreloading ? (
        <Preloader timer={preloadTime} />
      ) : (
        <DataProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </DataProvider>
      )} */}
      <DataProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DataProvider>
      <Noise />
    </>
  );
}

export default app;

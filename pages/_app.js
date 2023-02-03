import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Layout from '../components/Layout'
import Lenis from '@studio-freight/lenis'
import Head from 'next/head'
import '../styles/globals.css'
import '../styles/fonts.css'
import Preloader from '../components/Preloader'
import gsap from 'gsap'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {

  // Preloader state
  const [isPreloading, setIsPreloading] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const router = useRouter()
  const preloadTime = Math.floor(Math.random() * 2500) + 1000
  

  useEffect(() => {

    setTimeout(() => {
      setIsPreloading(false)
    }, preloadTime)

    const mouseMoveHandler = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      })
    }

    document.body.addEventListener(`mousemove`, mouseMoveHandler)
    // show mousePosition.x
    
    // First time visitors redirected to /intro page
    const firstVisit = localStorage.getItem("firstVisit") || "true"
    if (firstVisit === "true") {
      localStorage.setItem("firstVisit", "false")
      router.push(`/page1`)
    }

    // Setup ThreeJS
    // const threeScript = document.createElement('script')
    // threeScript.setAttribute('id', 'threeScript')
    // threeScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js')
    // document.getElementsByTagName("head")[0].appendChild(threeScript);

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
      document.body.removeEventListener(`mousemove`, mouseMoveHandler)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Frenzy | 2023</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      {isPreloading ? (
        <Preloader timer={preloadTime} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
      <div className="noise-container fixed z-[10000]">
        <div className="noise fixed z-[10000]"></div>
      </div>
    </>
  );
}

export default MyApp;

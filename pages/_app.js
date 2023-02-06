import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Layout from '../components/Layout'
import Lenis from '@studio-freight/lenis'
import Head from 'next/head'
import '../styles/globals.css'
import '../styles/fonts.css'
import Preloader from '../components/Preloader'
import gsap from 'gsap'
import { useRouter } from 'next/router'

function app({ Component, pageProps }) {

  // Preloader state
  const [isPreloading, setIsPreloading] = useState(true)
  const router = useRouter()
  const preloadTime = Math.floor(Math.random() * 2500) + 1000

  useEffect(() => {

    setTimeout(() => {
      setIsPreloading(false)
    }, preloadTime)
    
    // First time visitors redirected to /intro page
    const firstVisit = localStorage.getItem("firstVisit") || "true"
    if (firstVisit === "true") {
      localStorage.setItem("firstVisit", "false")
      router.push(`/page1`)
    }

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
      
    }
  }, [])

  return (
    <>
      <Head>
        <title>Frenzy | 2023</title>
        <meta charset="UTF-8"></meta>
        <meta property="og:title" content="My page title" key="title" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"></meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
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

export default app;

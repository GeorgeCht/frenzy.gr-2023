
import { useEffect, useState } from 'react';
import Layout from '../components/Layout.jsx';
import Lenis from '@studio-freight/lenis';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  const [isPreloading, setIsPreloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsPreloading(false);
    }, 4000);
  }, []);

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

  return (
    <>
      {isPreloading ? (
        <div>Loading here...</div>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default MyApp;

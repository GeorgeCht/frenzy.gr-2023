import { useState, useEffect, useRef } from 'react'
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Image from 'next/image'
import CLOUDS from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'
import { useRouter } from 'next/router'

const VantaClouds = () => {

  const [vantaEffect, setVantaEffect] = useState(0)
  const vantaRef = useRef(null)
  const innerRef = useRef(null)
  const rootVantaRef = useRef(null)
  const pinWrapperRef = useRef(null)
  const router = useRouter()

  gsap.registerPlugin(ScrollTrigger)
  ScrollTrigger.refresh()

  useEffect(() => {
    const pageChanged = (url) => {
      console.log(`page change to ${url}`)
      ScrollTrigger.refresh()
    }
    router.events.on(`routeChangeStart`, pageChanged)
    return () => {
      router.events.off(`routeChangeStart`, pageChanged)
    }
  }, [])
  
  useEffect(() => {
    
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS({
          el: vantaRef.current,
          THREE,
          mouseControls: false,
          touchControls: false,
          gyroControls: true,
          minHeight: 940.00,
          minWidth: 200.00,
          skyColor: 0xe4e6e8,
          cloudColor: 0xb5bac8,
          cloudShadowColor: 0x162b41,
          sunColor: 0xaf9473,
          sunGlareColor: 0xb94055,
          sunlightColor: 0xd99b60,
          speed: 0.875
        })
      )
    }

    function vantaResize() {
      vantaEffect.resize()
    }

    window.addEventListener('resize', vantaResize)

    return () => {
      if (vantaEffect) vantaEffect.destroy()
      window.removeEventListener('resize', vantaResize);
    }

  }, [vantaEffect])

  useEffect(() => {
    let ctx = gsap.context(() => {

      gsap.to(".vantaClouds-container .inner-gallery", {
        xPercent: -100 * 2,
        ease: "none", // <-- IMPORTANT!
        scrollTrigger: {
          id: `pinElement`,
          trigger: ".vantaClouds-container",
          pin: true,
          pinSpacing: false,
          anticipatePin: .5,
          scrub: 0.9,
          end: "+=3000",
        }
      })
      
      
      gsap.to(`.vantaClouds-container .image__1`, {
        x: 120,
        ease: "ease3.inOut",
        scrollTrigger: { id: 2, trigger: `.vantaClouds-container`, scrub: 0.3, start: "0 100%", end: "bottom 20%" }
      })
      gsap.to(`.vantaClouds-container .image__2`, {
        x: 225,
        ease: "ease3.inOut",
        scrollTrigger: { id: 3, trigger: `.vantaClouds-container`, scrub: 0.9, start: "0 100%", end: "bottom 20%" }
      })
      gsap.to(`.vantaClouds-container .image__3`, {
        x: 195,
        ease: "ease3.inOut",
        scrollTrigger: { id: 4, trigger: `.vantaClouds-container`, scrub: 0.4, start: "0 100%", end: "bottom 20%" }
      })
      gsap.to(`.vantaClouds-container .image__4`, {
        x: 265,
        ease: "ease3.inOut",
        scrollTrigger: { id: 5, trigger: `.vantaClouds-container`, scrub: 0.7, start: "0 100%", end: "bottom 20%" }
      })
      gsap.to(`.vantaClouds-container .image__5`, {
        x: 110,
        ease: "ease3.inOut",
        scrollTrigger: { id: 6, trigger: `.vantaClouds-container`, scrub: 0.6, start: "0 100%", end: "bottom 20%" }
      })
      gsap.to(`.vantaClouds-container .inner-container-below h2 > div:nth-child(4) > span`, {
        y: -124*10,
        ease: "ease3.inOut",
        scrollTrigger: { 
          id: 101, 
          trigger: ".vantaClouds-container",
          scrub: 0.9,
          start: "bottom 100%",
          end: "+=3000",
          onUpdate: (self) => {
            self.progress.toFixed(3) >= .41 
            ? gsap.to(`.vantaClouds-container .inner-container-below h2 > div:nth-child(3) > span`, { y: -124, ease: "ease3.inOut" })
            : gsap.to(`.vantaClouds-container .inner-container-below h2 > div:nth-child(3) > span`, { y: 0, ease: "ease3.inOut" })
          }
          
        }
      })
    })
    ScrollTrigger.refresh()
    return () => {
      const trigger = ScrollTrigger.getById(`pinElement`)
      trigger.kill()
      ctx.revert()
    }

  })

  return (
    <>
      <section className="vantaClouds-container block absolute w-full h-[100vh] items-end overflow-hidden z-0" ref={rootVantaRef}>
        <div className="top-fade absolute inline-block w-full h-[40vh]">

        </div>
        <div ref={vantaRef} className="block h-[100vh]">

          <div className="pin-wrapper" ref={pinWrapperRef}>
            <div ref={innerRef} className="inner-gallery relative">
              <Image src="/assets/timeline-img-01.webp" width={370} height={250} className="image__1 absolute -left-[13.333rem] top-[20rem]" alt="alt" />
              <Image src="/assets/timeline-img-02.webp" width={540} height={360} className="image__2 absolute left-[1.333%] top-[1rem]" alt="alt" />
              <Image src="/assets/timeline-img-03.webp" width={380} height={580} className="image__3 absolute left-[33.333%] top-0" alt="alt" />
              <Image src="/assets/timeline-img-04.webp" width={420} height={230} className="image__4 absolute left-[55%] top-[10rem]" alt="alt" />
              <Image src="/assets/timeline-img-05.webp" width={350} height={350} className="image__5 absolute left-[80%] top-[3.333rem]" alt="alt" />
            </div>
            <div ref={innerRef} className="inner-gallery relative left-[100vw]">
              <Image src="/assets/timeline-img-01.webp" width={370} height={250} className="image__1 absolute -left-[13.333rem] top-[20rem]" alt="alt" />
              <Image src="/assets/timeline-img-02.webp" width={540} height={360} className="image__2 absolute left-[1.333%] top-[1rem]" alt="alt" />
              <Image src="/assets/timeline-img-03.webp" width={380} height={580} className="image__3 absolute left-[33.333%] top-0" alt="alt" />
              <Image src="/assets/timeline-img-04.webp" width={420} height={230} className="image__4 absolute left-[55%] top-[10rem]" alt="alt" />
              <Image src="/assets/timeline-img-05.webp" width={350} height={350} className="image__5 absolute left-[80%] top-[3.333rem]" alt="alt" />
            </div>
            <div ref={innerRef} className="inner-gallery relative left-[200vw]">
              <Image src="/assets/timeline-img-01.webp" width={370} height={250} className="image__1 absolute -left-[13.333rem] top-[20rem]" alt="alt" />
              <Image src="/assets/timeline-img-02.webp" width={540} height={360} className="image__2 absolute left-[1.333%] top-[1rem]" alt="alt" />
              <Image src="/assets/timeline-img-03.webp" width={380} height={580} className="image__3 absolute left-[33.333%] top-0" alt="alt" />
              <Image src="/assets/timeline-img-04.webp" width={420} height={230} className="image__4 absolute left-[55%] top-[10rem]" alt="alt" />
              <Image src="/assets/timeline-img-05.webp" width={350} height={350} className="image__5 absolute left-[80%] top-[3.333rem]" alt="alt" />
            </div>
          </div>

          <div className="inner-container-below relative">
            <h2 className="text-grotesque main-heading-2 relative">
              <div className="inline-flex relative overflow-hidden max-h-[124px]">2</div>
              <div className="inline-flex relative overflow-hidden max-h-[124px]">0</div>
              <div className="inline-flex relative overflow-hidden items-center flex-col max-h-[124px]">
                <span className="inline-flex relative">1</span>
                <span className="inline-flex relative">2</span>
              </div>
              <div className="inline-flex relative overflow-hidden items-center flex-col max-h-[124px]">
                <span className="inline-flex relative">3</span>
                <span className="inline-flex relative">4</span>
                <span className="inline-flex relative">5</span>
                <span className="inline-flex relative">6</span>
                <span className="inline-flex relative">7</span>
                <span className="inline-flex relative">8</span>
                <span className="inline-flex relative">9</span>
                <span className="inline-flex relative">0</span>
                <span className="inline-flex relative">1</span>
                <span className="inline-flex relative">2</span>
                <span className="inline-flex relative">3</span>
              </div>
            </h2>
            <h5 className="text-grotesque main-text-2 relative text-center uppercase max-w-[336px] m-auto mt-5 hidden sm:block">
              HIGHLY FUNCTIONAL, UNIQUE & AWARD-WINNING DIGITAL PRODUCTS
            </h5>
          </div>

        </div>
      </section>
      <div className="block h-[370vh]"></div>
    </>
  );
};

export default VantaClouds;
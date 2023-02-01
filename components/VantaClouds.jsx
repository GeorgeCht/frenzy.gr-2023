import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Image from 'next/image'
import CLOUDS from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const VantaClouds = () => {

  const [vantaEffect, setVantaEffect] = useState(0)
  const vantaRef = useRef(null)
  const innerRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useLayoutEffect(() => {

    let sections = gsap.utils.toArray(`.vantaClouds-container .inner-gallery`);
    let scrollTween = gsap.to(sections, {
      xPercent: -100 * 2,
      ease: "none", // <-- IMPORTANT!
      scrollTrigger: {
        id: 1,
        trigger: ".vantaClouds-container",
        pin: true,
        scrub: 0.9,
        end: "+=2000"
      }
    })
    gsap.to(`.vantaClouds-container .image__1`, {
      x: 120,
      ease: "ease3.inOut",
      scrollTrigger: { id: 2, trigger: `.vantaClouds-container`, scrub: 0.1, start: "0 100%", end: "bottom 20%" }
    })
    gsap.to(`.vantaClouds-container .image__2`, {
      x: 225,
      ease: "ease3.inOut",
      scrollTrigger: { id: 3, trigger: `.vantaClouds-container`, scrub: 0.1, start: "0 100%", end: "bottom 20%" }
    })
    gsap.to(`.vantaClouds-container .image__3`, {
      x: 195,
      ease: "ease3.inOut",
      scrollTrigger: { id: 4, trigger: `.vantaClouds-container`, scrub: 0.1, start: "0 100%", end: "bottom 20%" }
    })
    gsap.to(`.vantaClouds-container .image__4`, {
      x: 265,
      ease: "ease3.inOut",
      scrollTrigger: { id: 5, trigger: `.vantaClouds-container`, scrub: 0.1, start: "0 100%", end: "bottom 20%" }
    })
    gsap.to(`.vantaClouds-container .image__5`, {
      x: 110,
      ease: "ease3.inOut",
      scrollTrigger: { id: 6, trigger: `.vantaClouds-container`, scrub: 0.1, start: "0 100%", end: "bottom 20%" }
    })

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
          minHeight: 820.00,
          minWidth: 200.00,
          skyColor: 0xe4e6e8,
          cloudColor: 0xb5bac8,
          cloudShadowColor: 0x162b41,
          sunColor: 0xaf9473,
          sunGlareColor: 0xb94055,
          sunlightColor: 0xd99b60,
          speed: 0.60
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }

  }, [vantaEffect])

  return (
    <>
      <section className="vantaClouds-container block absolute w-full h-[100vh] items-end overflow-hidden z-0">
        <div className="top-fade absolute inline-block w-full h-[40vh]">

        </div>
        <div ref={vantaRef} className="block h-[100vh]">

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
      </section>
    </>
  );
};

export default VantaClouds;
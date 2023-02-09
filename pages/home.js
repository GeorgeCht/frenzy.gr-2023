import Blurs from '../components/Blurs'
import SideBlurs from '../components/SideBlurs'
import Marquee from '../components/Marquee'
import PageFooter from '../components/PageFooter'
import Delayed from '../components/Delayed'
import { register } from 'swiper/element/bundle'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

// Register Swiper custom elements
register();

export default function Page1() {

  const swiperRef = useRef(null)

  return (
    <>
      <section className="blurs-intro">
        <Blurs 
          colorA={'#FCAF45'}
          colorB={'#E82B64'}
          colorC={'#FD1D1D'}
          colorD={'#FFDC80'}
        />
      </section>
      <section className="flex flex-col gap-8 items-center max-w-[1224px] mx-auto">
        <h1 className="main-heading-1 mx-auto pt-[13rem] px-4 sm:px-8">We treat each project with <i className="text-timesnewroman">care</i></h1>
        
        <Marquee 
          rotate="1"
          rotateIncline="left"
          textColor="#FFF" 
          backgroundColor="#0B0B0D" 
          isOutbound={false}
          textContent={[
            { head: "Digital",  sub: "Discover what we do" },
            { head: "Agency",   sub: "Learn more about us" },
            { head: "2023",     sub: "Frenzy what we do" },
          ]}
        />
      </section>
      <div className="block h-[100vh]"></div>
      <section className="relative flex flex-col gap-8 items-center max-w-[1224px] h-screen mx-auto">
        
        <Delayed waitBeforeShow={2500}>
          <swiper-container 
            swiperRef={swiperRef}
            slidesPerView={"4"} 
            direction={"horizontal"}
            speed={"500"} 
            navigation={"true"}
            pagination={"true"}
            className="w-100 max-w-lg"
          >
            <swiper-slide>
              <Image src="/assets/timeline-img-01.webp" width={370} height={250} alt="alt" />
            </swiper-slide>
            <swiper-slide>
              <Image src="/assets/timeline-img-02.webp" width={370} height={250} alt="alt" />
            </swiper-slide>
            <swiper-slide>
              <Image src="/assets/timeline-img-03.webp" width={370} height={250} alt="alt" />
            </swiper-slide>
            <swiper-slide>
              <Image src="/assets/timeline-img-04.webp" width={370} height={250} alt="alt" />
            </swiper-slide>
            <swiper-slide>
              <Image src="/assets/timeline-img-05.webp" width={370} height={250} alt="alt" />
            </swiper-slide>
          </swiper-container>
        </Delayed>
        
      </section>
      <section className="relative flex flex-col gap-8 items-center max-w-[1224px] h-screen mx-auto">
        <SideBlurs
            className="z-0"
            position={'left'}
            colorA={'#FCAF45'}
            colorB={'#E82B64'}
          />
        <SideBlurs
          className="z-0"
          position={'right'}
          colorA={'#FCAF45'}
          colorB={'#E82B64'}
        />
      </section>
      <div className="block h-[100vh]"></div>
      <PageFooter />
    </>
  );
}

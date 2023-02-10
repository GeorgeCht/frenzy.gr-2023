import Blurs from '../components/Blurs'
import SideBlurs from '../components/SideBlurs'
import Marquee from '../components/Marquee'
import PageFooter from '../components/PageFooter'
import Delayed from '../components/Delayed'
import { register } from 'swiper/element/bundle'
import { Parallax } from 'swiper'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import LinkFlip from '../components/LinkFlip'

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

      <section className="flex flex-col gap-8 items-center max-w-[1224px] mx-auto">
        <LinkFlip url={'/about'} innerText={'Linkflip'} >
          Linkflip
        </LinkFlip>
        <LinkFlip url={'/about'} innerText={'Headerg 1'} className="main-heading-1" >
          <h1>Headerg 1</h1>
        </LinkFlip>
      </section>
      <section className="flex flex-col gap-8 items-center max-w-[1224px] mx-auto">
        <LinkFlip url={'/about'} innerText={'Linkflip'} >
          Linkflip
        </LinkFlip>
        <LinkFlip url={'/about'} innerText={'Headerg 1'} className="main-heading-1" >
          <h1>Headerg 1</h1>
        </LinkFlip>
      </section>
      <section className="flex flex-col gap-8 items-center max-w-[1224px] mx-auto">
        <LinkFlip url={'/about'} innerText={'Linkflip'} >
          Linkflip
        </LinkFlip>
        <LinkFlip url={'/about'} innerText={'Headerg 1'} className="main-heading-1" >
          <h1>Headerg 1</h1>
        </LinkFlip>
      </section>

      <section className="swiper-gallery relative flex flex-col gap-8 items-center max-w-[1224px] h-screen mx-auto">
        
        <Delayed waitBeforeShow={100}>
          <swiper-container 
            swiperRef={swiperRef}
            slidesPerView={3} 
            spaceBetween={10}
            direction={"horizontal"}
            speed={785} 
            navigation={false}
            pagination={false}
            parallax={true}
            modules={[Parallax]}
          >
            <swiper-slide data-swiper-parallax="100">
              <Image src="/assets/timeline-img-01.webp" width={370} height={250} alt="alt" data-swiper-parallax="-100" />
            </swiper-slide>
            <swiper-slide data-swiper-parallax="-200">
              <Image src="/assets/timeline-img-02.webp" width={370} height={250} alt="alt" data-swiper-parallax="-200" />
            </swiper-slide>
            <swiper-slide data-swiper-parallax="300">
              <Image src="/assets/timeline-img-03.webp" width={370} height={250} alt="alt" />
            </swiper-slide>
            <swiper-slide data-swiper-parallax="-500">
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

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

  const swiperGallery__mouseDown = () => {
    console.log(`mousedown`)
  }

  useEffect(() => {

  }, [])

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

      <section className="swiper-gallery relative flex flex-col gap-8 items-center max-w-[100vw] h-screen mx-auto">

        <Delayed waitBeforeShow={100}>
          <swiper-container 
            className="z-10"
            swiperRef={swiperRef}
            cssMode={true}
            slides-per-view={3} 
            space-between={92}
            direction={"horizontal"}
            speed={1185} 
            navigation={false}
            pagination={false}
            loop={false}
            parallax={true}
            modules={[Parallax]}
          >
            <swiper-slide>
              <div className="inline-flex justify-center items-center mx-auto relative overflow-hidden w-[600px] h-[794px]">
                <Image className="absolute" src="/assets/dummy_img_swiper_01.webp" width={810} height={1072} alt="alt" data-swiper-parallax-scale="1.1" data-swiper-parallax="100" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="inline-flex justify-center items-center mx-auto relative overflow-hidden w-[600px] h-[794px]">
                <Image className="absolute" src="/assets/dummy_img_swiper_02.webp" width={810} height={1072} alt="alt" data-swiper-parallax-scale="1.1" data-swiper-parallax="100" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="inline-flex justify-center items-center mx-auto relative overflow-hidden w-[600px] h-[794px]">
                <Image className="absolute" src="/assets/dummy_img_swiper_03.webp" width={810} height={1072} alt="alt" data-swiper-parallax-scale="1.1" data-swiper-parallax="100" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="inline-flex justify-center items-center mx-auto relative overflow-hidden w-[600px] h-[794px]">
                <Image className="absolute" src="/assets/dummy_img_swiper_02.webp" width={810} height={1072} alt="alt" data-swiper-parallax-scale="1.1" data-swiper-parallax="100" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="inline-flex justify-center items-center mx-auto relative overflow-hidden w-[600px] h-[794px]">
                <Image className="absolute" src="/assets/dummy_img_swiper_01.webp" width={810} height={1072} alt="alt" data-swiper-parallax-scale="1.1" data-swiper-parallax="100" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="inline-flex justify-center items-center mx-auto relative overflow-hidden w-[600px] h-[794px]">
                <Image className="absolute" src="/assets/dummy_img_swiper_02.webp" width={810} height={1072} alt="alt" data-swiper-parallax-scale="1.1" data-swiper-parallax="100" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="inline-flex justify-center items-center mx-auto relative overflow-hidden w-[600px] h-[794px]">
                <Image className="absolute" src="/assets/dummy_img_swiper_03.webp" width={810} height={1072} alt="alt" data-swiper-parallax-scale="1.1" data-swiper-parallax="100" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="inline-flex justify-center items-center mx-auto relative overflow-hidden w-[600px] h-[794px]">
                <Image className="absolute" src="/assets/dummy_img_swiper_02.webp" width={810} height={1072} alt="alt" data-swiper-parallax-scale="1.1" data-swiper-parallax="100" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="inline-flex justify-center items-center mx-auto relative overflow-hidden w-[600px] h-[794px]">
                <Image className="absolute" src="/assets/dummy_img_swiper_01.webp" width={810} height={1072} alt="alt" data-swiper-parallax-scale="1.1" data-swiper-parallax="100" />
              </div>
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


import LinkInBrackets from '../components/LinkInBrackets'
import { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataProvider'
import Link from 'next/link'
import Blurs from '../components/Blurs'
import Segmentext from '../public/dist/segmentext.js'
import gsap from 'gsap'

export default function Intro() {
  
  const [data, setData] = useContext(DataContext)

  const DOM_Items = { 
    title:    '.intro-page h4', 
    subtitle: '.intro-page p.color-dark', 
    button:   '.intro-page a.enter-btn',
  }
  
  useEffect(() => {

    let easing = `expo.inOut`

    for (const item in DOM_Items) {

      // Item selectors
      let selector = document.querySelector( DOM_Items[item] )
  
      // Split header menu
      let segmentate = new Segmentext(selector)

      gsap.set(segmentate.chars, { y: 10, opacity: 0 })
  
    }

    setTimeout(() => {

      gsap.to(DOM_Items.title+' .text-segment--char', {
        opacity: 1,
        y: 0,
        ease: easing,
        stagger: .025,
      })
  
      gsap.to(DOM_Items.subtitle+' .text-segment--char', {
        opacity: 1,
        y: 0,
        ease: easing,
        stagger: .025,
        delay: .465
      })
  
      gsap.to(DOM_Items.button+' .text-segment--char', {
        opacity: 1,
        y: 0,
        ease: easing,
        stagger: .175,
        delay: 1.725
      })
      
    }, 100);

  }, [])

  return (
    <>
      <Blurs 
        colorA={'#FCAF45'}
        colorB={'#E82B64'}
        colorC={'#FD1D1D'}
        colorD={'#FFDC80'}
      />
      <section className="intro-page flex flex-col items-center justify-between h-screen py-1 px-4 md:px-12 md:py-10 lg:px-16 lg:py-12">

        <div></div>

        <div className="flex flex-col items-center justify-center">
          <h4 className="uppercase text-center color-dark max-w-[430px] pb-2 z-[10]">welcome to the frenzy experience. max your Volume and hit enter!</h4>
          <p className="uppercase text-center color-dark max-w-[330px] z-[10]">HIGHLY FUNCTIONAL, UNIQUE & AWARD-WINNING DIGITAL PRODUCTS IN THE MOST UNCOMPLICATED WAY POSSIBLE. WE BELIEVE THAT THE POWER.</p>

          <Link href="/" className="enter-btn uppercase text-colton-xwide z-[10]">Enter</Link>
        </div>

        <div className="flex flex-col items-center justify-center h-[44px] mb-12 sm:mb-0">
          <LinkInBrackets url={"#"} isOutbound={true} innerText={"Proceed without audio"} className="z-[10]" />
        </div>

      </section>
    </>
  )
}

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from '../components/Logo'
import gsap from 'gsap'
import Blurs from './Blurs'
import FrenzyRadio from './FrenzyRadio'
import Segmentext from '../public/dist/segmentext.js'
import LinkFlip from './LinkFlip'

const Header = (props) => {

  const router = useRouter()
  const menuRef = useRef()
  const [menuIsOpen, setMenuIsOpen] = useState(true)
  const menuItems = [
    { title: "Culture",   url: "/home" },
    { title: "Work",      url: "/work" },
    { title: "Services",  url: "/intro" },
    { title: "Contact",   url: "/page2" },
    { title: "Jobs",      url: "/page2" },
    { title: "Merch",     url: "/page2" },
  ]
  const socialMediaItems = [
    { title: "Instagram",  url: "#" },
    { title: "Facebook",   url: "#" },
    { title: "Behance",    url: "#" },
    { title: "Linked in",  url: "#" },
  ]
  const menuStateText = {
    isOpen: `Menu`,
    isClosed: `Close`
  }

  const transitionBlock__Title = (url) => {

    switch (url) {
      case `/`:       return `Welcome`
      case `/home`:   return `Home`
      case `/work`:   return `Work`
      case `/intro`:  return `Services`
      case `/page1`:  return `Contact`
      case `/page2`:  return `Jobs`
      default:        return `Frenzy`
    }  

  }

  const toggleMenu = () => {

    menuIsOpen && reconstructMenuTextSegments()

    // Change state
    setMenuIsOpen(!menuIsOpen)

    let easing = `expo.inOut`
    let origin = `50%`
    let duration = .875
    let durationLong = 1.675
    
    menuIsOpen ? (

      // Prevent clicks on body
      document.body.classList.add(`pointer-events-none`),

      // Change text content
      // document.querySelector(`header .menu-toggle p span`).textContent = menuStateText.isClosed,

      // Menu icon toggle
      gsap.to(`header .menu-toggle svg path[d="M1 16H43"]`, { rotate: `+=38deg`, y: 6, transformOrigin: origin, duration: duration, ease: easing }),
      gsap.to(`header .menu-toggle svg path[d="M1 28H43"]`, { rotate: `-=38deg`, y: -6, transformOrigin: origin, duration: duration, ease: easing }),
      gsap.to(`header .menu-toggle svg path[d="M1 22H43"]`, { scaleX: 0, transformOrigin: origin, duration: duration, ease: easing }),
      gsap.to(`header .menu-toggle svg`, { scale: 1.75, transformOrigin: origin, duration: duration, ease: easing }),

      // Open menu animation
      gsap.to(`.menu-block`, {
        y: '48%',
        duration: durationLong,
        ease: easing
      }),
      gsap.to(`.menu-block .menu-inner-above`, {
        y: '-120%',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        duration: durationLong,
        delay: .125,
        ease: easing
      }),
      gsap.to(`.menu-block .menu-inner-below`, {
        y: '120%',
        duration: durationLong - .2,
        ease: easing
      }),
      gsap.to(`.menu-items-wrapper li a .text-segment--char`, {
        opacity: 1,
        y: 0,
        ease: easing,
        stagger: .025,
        delay: .385,
      }),
      gsap.to(`.menu-block .menu-footer-wrapper .menu-social a .text-segment--char`, {
        opacity: 1,
        y: 0,
        ease: easing,
        stagger: .025,
        delay: 1.295,
      }),
      gsap.to(`.menu-block .menu-footer-wrapper .menu-footnotes p`, {
        opacity: 1,
        ease: easing,
        stagger: .285,
        delay: 1.895,
      }),

      // Remove body prevent clicks
      setTimeout(() => document.body.classList.remove(`pointer-events-none`), duration * 1000)

    ) : (

      // Prevent clicks on body
      document.body.classList.add(`pointer-events-none`),

      // Change text content
      document.querySelector(`header .menu-toggle span`).textContent = menuStateText.isOpen,

      // Menu icon toggle
      gsap.to(`header .menu-toggle svg path[d="M1 16H43"]`, { rotate: `0deg`, y: 0, transformOrigin: origin, duration: duration, ease: easing }),
      gsap.to(`header .menu-toggle svg path[d="M1 28H43"]`, { rotate: `0deg`, y: 0, transformOrigin: origin, duration: duration, ease: easing }),
      gsap.to(`header .menu-toggle svg path[d="M1 22H43"]`, { scaleX: 1, transformOrigin: origin, duration: duration, ease: easing }),
      gsap.to(`header .menu-toggle svg`, { scale: 1, transformOrigin: origin, duration: duration, ease: easing }),

      // Close menu animation
      
      gsap.to(`.menu-block .menu-footer-wrapper .menu-social a .text-segment--char`, {
        y: 20,
        opacity: 0,
        ease: easing,
        stagger: .015,
      }),
      gsap.to(`.menu-block .menu-footer-wrapper .menu-footnotes p`, {
        opacity: 0,
        ease: easing,
        stagger: .085,
      }),
      gsap.to(`.menu-items-wrapper li a .text-segment--char`, {
        y: 110,
        ease: 'back',
        stagger: .005,
      }),





      gsap.to(`.menu-block`, {
        y: '150%',
        delay: 0.275,
        duration: durationLong,
        ease: easing,
        onComplete: () => {
          gsap.set(`.menu-block`, { y: '-60%' })
        },
      }),
      gsap.to(`.menu-block .menu-inner-above`, {
        y: 0,
        borderTopLeftRadius: `50%`,
        borderTopRightRadius: `50%`,
        delay: 0.265,
        duration: durationLong- .05,
        ease: easing,
      }),
      gsap.to(`.menu-block .menu-inner-below`, {
        y: 0,
        delay: 0.275,
        duration: durationLong - .125,
        ease: easing,
      }),

      // Remove body prevent clicks
      setTimeout(() => document.body.classList.remove(`pointer-events-none`), duration * 1000)

    )

  }

  const reconstructMenuTextSegments = () => {
    const header__menuItems = { 
      culture:  'header .menu-items-wrapper li:nth-child(1) a span', 
      work:     'header .menu-items-wrapper li:nth-child(2) a span', 
      services: 'header .menu-items-wrapper li:nth-child(3) a span',
      contact:  'header .menu-items-wrapper li:nth-child(4) a span',
      jobs:     'header .menu-items-wrapper li:nth-child(5) a span',
      merch:    'header .menu-items-wrapper li:nth-child(6) a span'
    }
    const header__menuSocials = { 
      i: 'header .menu-block .menu-footer-wrapper .menu-social a:nth-child(1)', 
      f: 'header .menu-block .menu-footer-wrapper .menu-social a:nth-child(2)', 
      b: 'header .menu-block .menu-footer-wrapper .menu-social a:nth-child(3)', 
      l: 'header .menu-block .menu-footer-wrapper .menu-social a:nth-child(4)'
    }
    const header__menuFooterItems = { 
      a: 'header .menu-block .menu-footer-wrapper .menu-footnotes p:nth-child(1)', 
      b: 'header .menu-block .menu-footer-wrapper .menu-footnotes p:nth-child(2)', 
      c: 'header .menu-block .menu-footer-wrapper .menu-footnotes p:nth-child(3)'
    }
    
    for (const item in header__menuItems) {

      // Item selectors
      let selector = document.querySelector( header__menuItems[item] )

      // Split header menu
      let segmentate = new Segmentext(selector)

      // Correct styles
      gsap.set(segmentate.chars, { y: 110, opacity: 0 })

    }

    for (const item in header__menuSocials) {

      // Item selectors
      let selector = document.querySelector( header__menuSocials[item] )

      // Split header menu
      let segmentate = new Segmentext(selector)

      // Correct styles
      gsap.set(segmentate.chars, { y: 20, opacity: 0 })

    }

    for (const item in header__menuFooterItems) {

      // Item selectors
      let selector = document.querySelector( header__menuFooterItems[item] )

      // Correct styles
      gsap.set(selector, { opacity: 0 })

    }
  }

  useEffect(() => {

    // Intro header animation
    gsap.to(`#__next > header`, {
      y: 0,
      duration: .925,
      delay: .685,
      ease: 'circ.easeInOut'
    })
    gsap.to(`#__next > header`, {
      opacity: 1,
      duration: .865,
      delay: .985,
      ease: 'circ.easeInOut'
    })

  }, [])

  useEffect(() => {

    reconstructMenuTextSegments()

  }, [menuRef])
  
  return (
    <>
      <div className="transition-block pointer-events-none flex w-screen h-screen fixed justify-center bg-[#0B0B0D] z-[9999] -translate-y-full">

        <div className="transition-inner-above">
          <div className="transition-rounded-block bg-[#0B0B0D]"></div>
        </div>
        <h4 className="flex items-center text-center justify-center uppercase">
          {transitionBlock__Title(props.pathName)}
        </h4>
        <div className="transition-inner-below">
          <div className="transition-rounded-block bg-[#0B0B0D]"></div>
        </div>

      </div>
      <header ref={menuRef} className="flex justify-between mx-auto py-1 px-4 md:px-12 md:py-10 lg:px-16 lg:py-12 fixed w-full items-center z-[9998] -translate-y-[80px] opacity-0">

        <nav className="menu-item menu-toggle w-1/3 justify-start items-center z-[1000]" onClick={toggleMenu}>
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
            <path d="M1 22H43" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1 16H43" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1 28H43" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className="linkflip uppercase pl-4 cursor-pointer inline-flex flex-col relative overflow-hidden">
            <span datatext={ menuIsOpen ? menuStateText.isOpen : menuStateText.isClosed }>{ menuIsOpen ? menuStateText.isOpen : menuStateText.isClosed }</span>
          </p>
        </nav>

        {router.pathname === "/" ? (
          <a href="#" className={`logo-wrapper w-1/3 justify-center z-1000 relative inline-flex flex-col items-center overflow-hidden h-auto cursor-pointer`}>
            <Logo width={134} height={15} fill={'#0B0B0D'} />
            <Logo width={134} height={15} fill={'#0B0B0D'} />
          </a>
        ) : (
          <Link href="/" className={`logo-wrapper w-1/3 justify-center z-1000 relative inline-flex flex-col items-center overflow-hidden h-auto cursor-pointer`} scroll={false}>
            <Logo width={134} height={15} fill={'#0B0B0D'} />
            <Logo width={134} height={15} fill={'#0B0B0D'} />
          </Link>
        )}

        

        <div className="menu-item language-toggle flex w-1/3 justify-end items-center z-[1000]">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
            <path d="M11 19.25C15.5563 19.25 19.25 15.5563 19.25 11C19.25 6.44365 15.5563 2.75 11 2.75C6.44365 2.75 2.75 6.44365 2.75 11C2.75 15.5563 6.44365 19.25 11 19.25Z" stroke="#0B0B0D" strokeMiterlimit="10"/>
            <path d="M3.22266 8.25H18.7773" stroke="#0B0B0D" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.22266 13.75H18.7773" stroke="#0B0B0D" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 19.0268C12.8985 19.0268 14.4375 15.4331 14.4375 11.0002C14.4375 6.56725 12.8985 2.97363 11 2.97363C9.10152 2.97363 7.5625 6.56725 7.5625 11.0002C7.5625 15.4331 9.10152 19.0268 11 19.0268Z" stroke="#0B0B0D" strokeMiterlimit="10"/>
          </svg>
          <span className="text-grotesque uppercase pl-4 cursor-pointer">English</span>
        </div>
        <div className="menu-block flex w-screen h-screen absolute justify-center left-0 bg-[#E9E4E4] z-[999] -translate-y-full">
          <div className="menu-inner-above inline-block w-screen h-[13vw] bg-[#E9E4E4] absolute top-[5vh] rounded-t-[50%] translate-y-0"></div>
          <div className="menu-inner-container flex flex-col justify-between w-full z-[1000] px-2 pt-20 pb-4 md:px-8 md:pt-20 md:pb-20 lg:px-12 lg:pt-26 lg:pb-24">

            <div className="menu-items-wrapper flex flex-col">
              <ul className="flex flex-col gap-1">

                {menuItems.map((item, itemIndex) => (
                  <li className="overflow-hidden" key={itemIndex}>
                    {router.pathname === item.url ? (
                      <LinkFlip url={'#'} isOutbound={true} innerText={item.title} onClick={toggleMenu} className={"text-7xl lg:text-9xl inline-flex flex-col"}>
                        {item.title}
                      </LinkFlip>
                    ) : (
                      <LinkFlip url={item.url} innerText={item.title} scroll={false} onClick={toggleMenu} className={"text-7xl lg:text-9xl inline-flex flex-col"}>
                        {item.title}
                      </LinkFlip>
                    )}
                  </li>
                ))}

              </ul>
            </div>

            <div className="menu-footer-wrapper">
              <div className="menu-social flex md:gap-5 flex-col md:flex-row"> 
                {socialMediaItems.map((item, itemIndex) => (
                  <a href={item.url} className="text-grotesque uppercase" key={itemIndex}>{item.title}</a>
                ))}
              </div>
              <span className="menu-footnotes text-grotesque flex">
                <p className="flex">full service 360 agency</p>
                <p className="flex">tel: <a className='flex' href="tel:+304564465161">+302105862900</a></p>
                <p className="flex">mail: <a className='flex' href="tel:+304564465161">info@frenzy.gr</a></p>
              </span>
            </div>

          </div>
          <Blurs 
            className="fixed z-[1000]"
            colorA={'#FCAF45'}
            colorB={'#E82B64'}
            colorC={'#FD1D1D'}
            colorD={'#FFDC80'}
          />
          <div className="menu-inner-below inline-block w-screen h-[10vw] bg-[#E9E4E4] absolute bottom-[10vh] rounded-b-[50%] translate-y-0"></div>
        </div>
      </header>
      <FrenzyRadio url="https://sh.onweb.gr/8854/stream.mp3?ver=927123" />
    </>
  )
}
//https://sh.onweb.gr/8854/stream.mp3?ver=927123
//<FrenzyRadio url="https://uk3.internet-radio.com/proxy/majesticjukebox?mp=/live" />
export default Header
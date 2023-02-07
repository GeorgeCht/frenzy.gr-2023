import Head from 'next/head'
import Marquee from '../components/Marquee'
import Logo from '../components/Logo'
import PageFooter from '../components/PageFooter'
import LinkInBrackets from '../components/LinkInBrackets'
import { useContext } from 'react'
import { DataContext } from '../context/DataProvider'
import Link from 'next/link'
import Image from 'next/image'
import Blurs from '../components/Blurs'

export default function Intro() {
  
  const [data, setData] = useContext(DataContext)

  return (
    <>
      <section className="intro-page flex flex-col items-center">

        <Blurs />

        <h4 className="uppercase text-center color-dark max-w-[430px] pb-2 z-[10]">welcome to the frenzy experience. max your Volume and hit enter!</h4>
        <p className="uppercase text-center color-dark max-w-[330px] z-[10]">HIGHLY FUNCTIONAL, UNIQUE & AWARD-WINNING DIGITAL PRODUCTS IN THE MOST UNCOMPLICATED WAY POSSIBLE. WE BELIEVE THAT THE POWER.</p>

        <Link href="/" className="enter-btn uppercase text-colton-xwide z-[10]">Enter</Link>

        <LinkInBrackets url={"#"} isOutbound={true} innerText={"Proceed without audio"} className="z-[10]" />

      </section>
    </>
  )
}

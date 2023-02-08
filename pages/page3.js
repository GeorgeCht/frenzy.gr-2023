import Head from 'next/head'
import Marquee from '../components/Marquee'
import Logo from '../components/Logo'
import PageFooter from '../components/PageFooter'
import LinkInBrackets from '../components/LinkInBrackets'
import { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataProvider'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import Segmentext from '../public/dist/segmentext.js'



export default function Home() {
  
  const [data, setData] = useContext(DataContext)
  
  useEffect(() => {


  }, [])

  return (
    <>
      <section className="flex flex-col w-full relative">
        
        <h1 className="main-heading-1 text-grotesque">Home page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolor
          aspernatur natus at totam quae temporibus, optio mollitia numquam est ab
          ut non et omnis quas in, laudantium nemo. Nisi, culpa. Porro ab, ducimus
          rerum, sed eum facilis dolorum a veniam cumque sit molestias quaerat
          nobis! Nulla veritatis ea eius!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          voluptatem voluptas ipsa voluptatibus nihil totam a sequi vel tempore
          incidunt. Possimus, obcaecati soluta non in nostrum eaque nemo quod
          adipisci eos architecto expedita eum quis amet dolorem voluptas quas
          impedit voluptatem aperiam eveniet, reiciendis, minima ex. Consectetur
          totam voluptas quisquam.
        </p>
        <LinkInBrackets url={"#"} isOutbound={true} innerText={"Proceed without audio"} />
        <div className="block h-[100vh]"></div>




        
        




        <div className="block h-[100vh]"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          voluptatem voluptas ipsa voluptatibus nihil totam a sequi vel tempore
          incidunt. Possimus, obcaecati soluta non in nostrum eaque nemo quod
          adipisci eos architecto expedita eum quis amet dolorem voluptas quas
          impedit voluptatem aperiam eveniet, reiciendis, minima ex. Consectetur
          totam voluptas quisquam.
        </p>
        

      </section>
      <PageFooter />
    </>
  )
}

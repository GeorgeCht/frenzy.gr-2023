import Head from 'next/head'
import Marquee from '../components/Marquee'
import Logo from '../components/Logo'
import LinkInBrackets from '../components/LinkInBrackets'
import { useContext } from 'react'
import { DataContext } from '../context/DataProvider'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  
  const [data, setData] = useContext(DataContext)

  return (
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




      
      <footer className="flex flex-col items-center">
        
        <div className="block-established flex flex-row items-center gap-4">

          <span className="uppercase">
            Est.
          </span>

          <svg width="120" height="62" viewBox="0 0 120 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M118.003 31C118.003 47.5685 91.8116 61 59.5029 61M118.003 31C118.003 14.4315 91.8116 1 59.5029 1M118.003 31H1.00293M59.5029 61C27.1943 61 1.00293 47.5685 1.00293 31M59.5029 61C78.9429 61 94.7021 47.5685 94.7021 31C94.7021 14.4315 78.9429 1 59.5029 1M59.5029 61C40.063 61 24.3038 47.5685 24.3038 31C24.3038 14.4315 40.063 1 59.5029 1M59.5029 61C66.0742 61 71.4012 47.5685 71.4012 31C71.4012 14.4315 66.0742 1 59.5029 1M59.5029 61C52.9317 61 47.6046 47.5685 47.6046 31C47.6046 14.4315 52.9317 1 59.5029 1M1.00293 31C1.00293 14.4315 27.1943 1 59.5029 1M15.8758 11.1695H103.378M15.6279 50.8305H103.378" stroke="#0B0B0D" strokeWidth="2"/>
          </svg>

          <span className="uppercase">
            2013
          </span>

        </div>

        <Link href="/" className="mt-24">
          <Logo width={298} height={34} fill={'#0B0B0D'} />
        </Link>

        <ul className="block-socials flex flex-col sm:flex-row items-center pt-4 pb-12 gap-2">

          {data.socialMedia.map(item => (
            <li className="flex items-center gap-2" key={item.id}>
              <a href={item.url} className="link uppercase">{item.title}</a>
            </li>
          ))}

        </ul>

        <Marquee 
          rotate={"-1"}
          rotateIncline={"right"}
          textColor={"#F2F2F2"} 
          backgroundColor={"#0B0B0D"} 
          isOutbound={false}
          textContent={[
            { head: "Digital",  sub: "Discover what we do" },
            { head: "Agency",   sub: "Learn more about us" },
            { head: "2023",     sub: "Frenzy what we do" },
          ]}
        />

        <div className="block-cinematic flex flex-col items-center gap-4 pt-12">

          <p className="text-cinematic uppercase text-justify w-full">
            frenzy projects <i>presents</i><br />
            <i>in association with</i> lorem ipsum entertainment <i>and</i> Reggie Barrera global <i>a</i> meteora holdings <i>production</i><br />
            <i>a</i> wordpress <i>development</i> plesk <i>hosted</i> 10-years special edition <i>staring</i> Osman Mccall Khalil Watts<br />
            Zachery Oconnor Talia Brewer Sam Barker Raphael Duke Melissa Bradford Neil Carey Addie Bates Haroon Newman<br />
            <i>art direction by</i> george cht <i>design by</i> Anika Richmond <i>developed by</i> Nicholas Barrett
          </p>

          <Image src="/assets/PG-13.png" width={273} height={44} alt="alt" />

        </div>

        <ul className="block-links flex flex-col sm:flex-row items-center pt-28 pb-12 gap-2">

          {data.footerLinks.map(item => (
            <li className="flex items-center gap-2" key={item.id}>
              <a href={item.url} className="link uppercase">{item.title}</a>
            </li>
          ))}

        </ul>

      </footer>




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
  );
}

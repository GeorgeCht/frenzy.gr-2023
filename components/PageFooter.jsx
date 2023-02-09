import Marquee from '../components/Marquee'
import Logo from '../components/Logo'
import Link from 'next/link'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/DataProvider'

const PageFooter = () => {

  const [data, setData] = useContext(DataContext)
  const [pageHeight, setPageHeight] = useState(0)

  useEffect(() => {
    setPageHeight(document.documentElement.offsetHeight)
  }, [])

  return (
    <footer className="footer flex flex-col items-center">
      
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
        rotate={"-1.5"}
        rotateIncline={"right"}
        textColor={"#F2F2F2"} 
        backgroundColor={"#0B0B0D"} 
        isOutbound={false}
        textContent={[
          { head: "Contact us",   sub: "Discover what we do" },
          { head: "Get in touch", sub: "Learn more about us" },
          { head: "Let's talk",   sub: "Frenzy what we do" },
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
  )
}

export default PageFooter
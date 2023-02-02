import { useEffect, useState } from 'react'
import gsap from 'gsap'
import Logo from '../components/Logo'

const Preloader = (props) => {
  const [showBanner, setShowBanner] = useState(false)
  const [loadingPercentage, setLoadingPercentage] = useState(0)

  useEffect(() => {
    // const firstVisit = localStorage.getItem("firstVisit") || "true";
    // if (firstVisit === "true") {
      // localStorage.setItem("firstVisit", "false");
      setShowBanner(true)

      setTimeout(() => {
        gsap.to(`.preloader .vhs`, {
          width: '100vw',
          height: '2px',
          duration: .215,
          ease: 'Power2.easeOut'
        })
        gsap.to(`.preloader .vhs`, {
          width: '0',
          delay: 0.265,
          duration: .285,
          ease: 'Power2.easeOut'
        })
        gsap.to(`.preloader`, { width: '0', height: '0', delay: 0.665, })
      }, props.timer-215)
      

      // simulate loading
      const intervalId = setInterval(() => {
        setLoadingPercentage((prevPercentage) => {
          if (prevPercentage >= 100) {
            clearInterval(intervalId)
            setShowBanner(false)
            return 0
          }
          console.log(prevPercentage)
          return prevPercentage <= 90 ? prevPercentage + Math.floor(Math.random() * 10) + 9 : prevPercentage
          
        })
      }, Math.floor(Math.random() * 350) + 25)

      setTimeout(() => intervalId && clearInterval(intervalId), 2500)
    // }
  }, [])

  if (!showBanner) return null

  return (
    <div className="preloader">
      <div className="vhs">
        <div className="vhs-container">

          <Logo width={99} height={12} fill={'#FFFFFF'}/>

          <span className="loader">
            <h2 className="text-grotesque">{loadingPercentage}%</h2>
            <p className="text-grotesque">παρακαλω περιμενετε..</p>
          </span>

          <span className="copyrights">
            <p className="text-grotesque">
              Copyright © 2023 FRENZY<br/>All rights reserved
            </p>
          </span>
      
        </div>
        <div className="screen-bottom">
          <div className="line">
            <div className="red"></div>
            <div className="white"></div>
            <div className="green"></div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Preloader
import { useEffect, useRef } from "react"
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

const Marquee = (props) => {

  gsap.registerPlugin(ScrollTrigger)
  const marqueeRef = useRef(null)
  function removeFirstWord(str) {
    return str.slice(str.indexOf(' ') + 1)
  }

  useEffect(() => {
    gsap.to(marqueeRef.current, {
      scrollTrigger: {
        id: 1,
        trigger: "#__next",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      // yPercent: 50,
      marginLeft: -450,
    })
    gsap.set(marqueeRef.current, {
      rotate: `${props.rotate}deg`
    })
  }, [])
  
  return (
    <div className={"marquee-container"} ref={marqueeRef}>
      <div className="marquee-wrapper flex flex-nowrap -ml-3" style={{backgroundColor: props.backgroundColor}}>

        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex">
            {props.textContent.map((content, contentIndex) => (
              <div key={contentIndex} className="flex py-2">
                <span>
                  <h4 className="text-colton-xwide uppercase mx-6" style={{color: props.textColor}}>{content.head}</h4>
                </span>
                <span>
                  <div className="w-[136px] mx-6">
                    <p className="text-grotesque uppercase" style={{color: props.textColor}}>{content.sub.split(' ')[0]}</p>
                    <p className="text-grotesque uppercase text-right" style={{color: props.textColor}}>{removeFirstWord(content.sub)}</p>
                  </div>
                </span>
              </div>
            ))}
          </div>
        ))}
        

      </div>
    </div>
  )
}

export default Marquee
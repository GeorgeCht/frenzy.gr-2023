import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const Blurs = (props) => {

  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0
  })

  function mouseMoveHandler(e) {
    setMousePos({
      x: e.clientX,
      y: e.clientY
    })
  }
  const blobs = useRef()
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(`.blobs`, {
        y: (( mousePos.y ) / 42) + 1,
        x: (( mousePos.x ) / 42) + 1,
        rotationY: 5 * ( mousePos.y / window.innerHeight ) - .5,
        rotationX: 5 * ( mousePos.x / window.innerWidth ) - .5,
        scaleY: (( mousePos.y ) / 10000) + 1,
        scaleX: (( mousePos.x ) / 10000) + 1,
        ease: `Power2.easeOut`,
        transformPerspective: 900,
        transformOrigin: 'center'
      })
      gsap.to(`.blobs`, {
        '--blob-height-multi': (( mousePos.y ) / 6000) + .42,
        ease: `Power1.easeOut`,
      })
    }, blobs)
    //return () => ctx.revert()
  }, [mousePos])

  /*
  --blob-color-1: hsl(35deg 97% 63%);
  --blob-color-2: hsl(169deg 51% 47%);
  --blob-color-3: hsl(276deg 51% 47%);
  --blob-color-4: hsl(0deg 98% 55%);
   */

  return (
    <div className="blobs-container z-[9]" ref={ blobs } onMouseMove={ (e) => mouseMoveHandler(e) }>
      <div className="blobs" role="presentation">

        <div className="blob-rotate">
          <div className="blob-move">
            <div className="blob" style={{ backgroundColor: `${props.colorA}`, marginTop: '-30vh', marginLeft: '-2vw' }}></div>
          </div>
        </div>

        <div className="blob-rotate">
          <div className="blob-move">
            <div className="blob" style={{ backgroundColor: `${props.colorB}`, marginTop: '13.333vh', marginLeft: '-4vw' }}></div>
          </div>
        </div>
        
        <div className="blob-rotate">
          <div className="blob-move">
            <div className="blob" style={{ backgroundColor: `${props.colorC}`, marginRight: '-4vw', marginTop: '10vh' }}></div>
          </div>
        </div>
        
        <div className="blob-rotate">
          <div className="blob-move">
            <div className="blob" style={{ backgroundColor: `${props.colorD}`, marginTop: '-20vh', marginRight: '-3.333vw' }}></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blurs;
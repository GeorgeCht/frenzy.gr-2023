import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";

const Blurs = () => {

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
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(`.blobs`, {
        y: (( mousePos.y )/42) + 1,
        x: (( mousePos.x )/42) + 1,
        rotationY: 5*(mousePos.y/window.innerHeight)-.5,
        rotationX: 5*(mousePos.x/window.innerWidth)-.5,
        scaleY: (( mousePos.y )/10000) + 1,
        scaleX: (( mousePos.x )/10000) + 1,
        ease: `Power2.easeOut`,
        transformPerspective: 900,
        transformOrigin: 'center'
      })
    }, blobs)
    //return () => ctx.revert()
  }, [mousePos])

  return (
    <div className="blobs-container" ref={ blobs } onMouseMove={ (e) => mouseMoveHandler(e) }>
      <div className="blobs" role="presentation">

        <div className="blob-rotate">
          <div className="blob-move">
            <div className="blob" style={{ marginTop: '-30vh', marginLeft: '-20vw' }}></div>
          </div>
        </div>

        <div className="blob-rotate">
          <div className="blob-move">
            <div className="blob" style={{ marginTop: '13.333vh', marginLeft: '-40vw' }}></div>
          </div>
        </div>
        
        <div className="blob-rotate">
          <div className="blob-move">
            <div className="blob" style={{ marginRight: '-40vw', marginTop: '10vh' }}></div>
          </div>
        </div>
        
        <div className="blob-rotate">
          <div className="blob-move">
            <div className="blob" style={{ marginTop: '-20vh', marginRight: '-33.333vw' }}></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blurs;
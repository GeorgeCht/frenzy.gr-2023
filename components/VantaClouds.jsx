import { useState, useEffect, useRef } from 'react'
import CLOUDS from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const VantaClouds = () => {

  const [vantaEffect, setVantaEffect] = useState(0)
  const vantaRef = useRef(null)
  useEffect(() => {
    
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 820.00,
          minWidth: 200.00,
          skyColor: 0xe4e6e8,
          cloudColor: 0xb5bac8,
          cloudShadowColor: 0x162b41,
          sunColor: 0xaf9473,
          sunGlareColor: 0xb94055,
          sunlightColor: 0xd99b60,
          speed: 0.60
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }

  }, [vantaEffect])

  return (
    <>
      <div ref={vantaRef}>
        <p>Foreground content goes here</p>
      </div>
    </>
  );
};

export default VantaClouds;
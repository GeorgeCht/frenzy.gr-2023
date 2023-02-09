import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const Blurs = (props) => {

  const blob__Margin = (position) => {
    switch (position) {
      case `left`:  return `-40vw`
      case `right`: return `90vw`
      default:      return `90vw`
    }
  }

  return (
    <div className="blobs-container z-[9]">
      <div className="blobs side-blobs" role="presentation">

          <div className="blob-move">
            <div className="blob" style={{ backgroundColor: `${props.colorA}`, marginTop: '-30vh', marginLeft: `${blob__Margin(props.position)}` }}></div>
          </div>

          <div className="blob-move">
            <div className="blob" style={{ backgroundColor: `${props.colorB}`, marginTop: '-33.333vh', marginLeft: `${blob__Margin(props.position)}` }}></div>
          </div>

      </div>
    </div>
  );
};

export default Blurs;
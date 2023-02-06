import Blurs from "../components/Blurs"
import Marquee from "../components/Marquee"

// via https://github.com/CookPete/react-player
import ReactPlayer from 'react-player/lazy'
import { useState } from "react";

export default function Page1() {

  const [isPlaying, setIsPlaying] = useState(false)
  const handlePlay = () => {
    setIsPlaying(true)
    // play the radio music here
  }

  const handlePause = () => {
    setIsPlaying(false)
    // pause the radio music here
  }
  
  return (
    <>
      <section className="blurs-intro">
        <Blurs />
      </section>
      <section className="flex flex-col gap-8 items-center max-w-[1224px] mx-auto">
        <h1 className="main-heading-1 mx-auto pt-[13rem] text-grotesque">We treat each project with <i className="text-timesnewroman">care</i></h1>
        
        <Marquee 
          rotate="1"
          rotateIncline="left"
          textColor="#FFF" 
          backgroundColor="#0B0B0D" 
          isOutbound={false}
          textContent={[
            { head: "Digital",  sub: "Discover what we do" },
            { head: "Agency",   sub: "Learn more about us" },
            { head: "2023",     sub: "Frenzy what we do" },
          ]}
        />
      </section>
      <div className="block h-[100vh]"></div>
      <div>
        {isPlaying ? (
          <button onClick={handlePause}>Pause</button>
        ) : (
          <button onClick={handlePlay}>Play</button>
        )}
      </div>
      <ReactPlayer 
        url='https://uk3.internet-radio.com/proxy/majesticjukebox?mp=/live' 
        controls={false} 
        playing={isPlaying} 
        playsinline={true}
        onReady={() => { console.log(`player onReady`) }}
        onError={() => { console.log(`player onError`) }}
        onBuffer={() => { console.log(`player onBuffer`) }}
        onPause={() => { console.log(`player onPause`) }}
        onProgress={(played, loaded) => { console.log(`player onProgress -- played: ${parseInt(played.playedSeconds)}`) }}
      />
      <div className="block h-[100vh]"></div>
    </>
  );
}

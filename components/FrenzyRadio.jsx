// Player via https://github.com/CookPete/react-player
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/lazy'
import gsap from 'gsap'

const FrenzyRadio = (props) => {

  const [isPlaying, setIsPlaying] = useState(false)
  const [radioHasError, setRadioHasError] = useState(false)
  const [radioIsBuffering, setRadioIsBuffering] = useState(false)
  const [playerVolume, setPlayerVolume] = useState(.75)
  const [radioTracking, setRadioTracking] = useState([{
    minutes: 0,
    seconds: 0
  }])

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying)
  }
  
  const toggleRadioError = () => {
    setRadioHasError(true)
  }

  const volumeToggleMute = () => {
    playerVolume != 0 ? setPlayerVolume(0) : setPlayerVolume(.75)
    console.log('Player volume', playerVolume)
  }

  const toTrackingTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60)
    const secs = totalSeconds % 60
    const formattedMinutes = (mins < 10 ? '0' : '') + mins
    const formattedSeconds = (secs < 10 ? '0' : '') + secs
    return {
      minutes: formattedMinutes,
      seconds: formattedSeconds
    }
  }

  const updateTracking = (played) => {
    setRadioTracking(toTrackingTime(parseInt(played)))
  }

  const toggleBuffering = () => {
    setRadioIsBuffering(!radioIsBuffering)
  }

  return (
    <>
      <section className="radio-container-block flex justify-between bottom-0 mx-auto py-3 px-4 md:px-12 md:py-10 lg:px-16 lg:py-12 fixed w-full items-center z-[98]">
        <div className="radio-container-item radio-container-controller" onClick={handleTogglePlay}>
          <div className="flex items-center cursor-pointer">
            <div className="pr-3">
              <span className={`radio-indicator ${isPlaying ? `is-playing` : ``}${radioIsBuffering ? `is-buffering` : ``}${radioHasError ? `has-error` : ``}`}></span>
            </div>
            <div>
              <p className="text-grotesque uppercase inline-flex flex-col relative overflow-hidden">
                <span className="inline-flex relative">Frenzy radio</span>
                <span className="inline-flex relative">
                  {isPlaying ? `Pause` : `Play`}
                </span>
              </p>
              <p className="radio-tracking text-grotesque uppercase opacity-50">
                {!radioHasError ? (
                  <> {radioTracking.minutes} <i>:</i> {radioTracking.seconds} </>
                ) : (
                  `Currently unavailable`
                )}
              </p>
            </div>

          </div>
          
        </div>
        <div className="radio-container-item radio-container-equalizer block w-[16px] h-[16px]" onClick={volumeToggleMute}>
          <div className={`equalizer block ${!isPlaying && `is-paused`} ${playerVolume == 0 && `is-muted`}`}>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>
      <ReactPlayer 
        url={props.url}
        controls={false} 
        playing={isPlaying} 
        playsinline={true}
        volume={playerVolume}
        onReady={() => { console.log(`player onReady`) }}
        onError={() => { toggleRadioError() }}
        onBuffer={toggleBuffering}
        onBufferEnd={() => { console.log(`player onBufferEnd`) }}
        onPause={() => { console.log(`player onPause`) }}
        onProgress={(played, loaded) => updateTracking(played.playedSeconds) }
      />
    </>
  )

}

export default FrenzyRadio
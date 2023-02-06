// Player via https://github.com/CookPete/react-player
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/lazy'
import gsap from 'gsap'

const FrenzyRadio = (props) => {

  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  return (
    <>
    </>
  )

}

export default FrenzyRadio
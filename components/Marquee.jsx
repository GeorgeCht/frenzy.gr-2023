

const Marquee = (props) => {

  function removeFirstWord(str) {
    return str.slice(str.indexOf(' ') + 1)
  }
  
  return (
    <div className="marquee-container">
      <div className="marquee-wrapper flex flex-nowrap" style={{backgroundColor: props.backgroundColor}}>

        
        {props.textContent.map((content, index) => (
          <div key={index} className="flex py-2">
            <span className="">
              <h4 className="text-colton-xwide uppercase mx-6" style={{color: props.textColor}}>{content.head}</h4>
            </span>
            <span className="">
              <div className="justfied-container w-[136px] mx-6">
                <p className="text-grotesque uppercase" style={{color: props.textColor}}>{content.sub.split(' ')[0]}</p>
                <p className="text-grotesque uppercase text-right" style={{color: props.textColor}}>{removeFirstWord(content.sub)}</p>
              </div>
            </span>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Marquee
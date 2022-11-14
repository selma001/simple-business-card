import mypic from "../images/mypic.png"
import Icon from "../images/Icon.png"

function Info () {
  return(
    <div className="info">
        <img src={mypic}></img>
        <h1>Tareb Selma</h1>
        <h4>Frontend Developer</h4>
        <h5>selmatareb.website</h5>
        <button>
           <img src={Icon}></img> 
        </button>
    </div>
  )
}

export default Info
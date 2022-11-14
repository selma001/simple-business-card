import fb from "../images/fb.png"
import insta from "../images/insta.png"
import twitt from "../images/twitt.png"
import github from "../images/github.png"

function Footer() {
    return(
        <ul className="footer">
            <li> <img src={twitt}/> </li>
            <li><img src={fb}/></li>
            <li><img src={insta} /></li>
            <li> <img src={github}/> </li>
        </ul>
    )
}

export default Footer
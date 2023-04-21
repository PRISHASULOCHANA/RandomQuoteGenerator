import React from "react";
import './Footer.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
const Footer=()=>{
    return(
        
        <div className="Footer">
        <div className="sb_Footer section_padding">
        <div className="sb_Footer-links">
        <div className="socialmedia">
        <br></br>
        <a href="#" id="twet-quote">
        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        </a>
        <a href="#" id="twet-quote">
        <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
        </a>
        <a href="#" id="twet-quote">
        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
     </a>
     <h2>Done by PRISHA</h2>
     </div>
        </div>
        </div>
        </div>
        
    )
}
export default Footer;
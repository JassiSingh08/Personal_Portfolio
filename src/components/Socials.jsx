import React from 'react'
import Linkedin from "../Assets/linkedin_3536505.png"
import Github from "../Assets/github-mark.png"
import Gmail from "../Assets/gmail.png"
import CV from "../Assets/CV.png"

const Socials = () => {
  return (
    <div className='socials'>
        {/* <span>Jassi Singh</span> */}
        <div className="navs">
            <a href="/" target='_blank'><img src={Linkedin} alt="Linkedin" /></a>
            <a href="/" target='_blank'><img src={Github} alt="Github" /></a>
            <a href="/"><img src={Gmail} alt="Gmail" /></a>
            <a href="/"><img src={CV} alt="CV" /></a>
        </div>
    </div>
  )
}

export default Socials
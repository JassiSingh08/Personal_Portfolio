import React from 'react'
import Linkedin from "../Assets/linkedin_3536505.png"
import Github from "../Assets/github-mark.png"
import Gmail from "../Assets/gmail.png"
import CV from "../Assets/CV.png"

const Sidebar = () => {
  return (
    <div className='sidebar'>
        {/* <span>Jassi Singh</span> */}
        <div className="navs">
            <a href="/"><img src={Linkedin} alt="Linkedin" /></a>
            <a href="/"><img src={Github} alt="Github" /></a>
            <a href="/"><img src={Gmail} alt="Gmail" /></a>
            <a href="/"><img src={CV} alt="CV" /></a>
        </div>
    </div>
  )
}

export default Sidebar
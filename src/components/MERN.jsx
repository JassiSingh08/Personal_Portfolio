import React from 'react'
import Mongodb from "../Assets/mongodb.png"
import express from "../Assets/Express.png"
import reactPNG from "../Assets/React.png"
import node from "../Assets/node-js.svg"

const MERN = () => {

  return (
    <div className='mern unselectable'>
        <div className="rotating-icon">
        <p>
        <span className='mern-bracket'>[</span> . . .<img src={Mongodb} alt="M" className='mern-img' /> {""}
        <img src={express} alt="E" className='mern-img'/> {""}
        <img src={reactPNG} alt="R" className='mern-img'/> {""}
        <img src={node} alt="N" className='mern-img'/>  {""} <span className='mern-bracket'> ]</span>
      </p>
        </div>
    </div>
  )
}

export default MERN;
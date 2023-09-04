import React from 'react'
import profile_pic from "../Assets/Profile_Pic.png"
import MERN from './MERN';

const Home = () => {
  return (
    <>
    <div className="home-container">
      <div className="info-container">
        <div className="first-info">
          <h1>JASSI SINGH</h1>
        </div>
        <div className="second-info">
          <h2>FULL STACK DEVELOPER</h2>
        </div>
        <div className="third-info">
          I build accessible, inclusive products and digital experiences for the
          web.
        </div>
      </div>
      <div className="profile-pic-container">
        <img src={profile_pic} alt="profile_pic" className="profile-pic" />
      </div>
    </div>
      <MERN/>
      </>
  );
}

export default Home
import React from 'react'
import logo from '../assets/images/elvish-travellogo.png'
import './whowearestyles.css'

const WhoWeAre = () => {
  return (
    <>
    <div className='about-container'>
        <img src={logo} alt='elvish travel logo' />
        <p className='about-section'>Whether you're looking at the sunny farms of the <strong><a href='https://lotr.fandom.com/wiki/The_Shire' style={{color: "white"}}>Shire</a></strong> or the dark, gloomy atmosphere of <strong><a href='https://lotr.fandom.com/wiki/Dol_Guldur' style={{color: "white"}}>Dol Guldur</a></strong>, you can count on us!</p>
        </div>
    </>
  )
}

export default WhoWeAre
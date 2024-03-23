import React from 'react'
import './homeherostyles.css'
import heroImg from '../assets/images/homeheroimage.jpg'

const HomeHero = () => {
  return (
    <>
      <div className='hero'>
        <img src={heroImg} alt='silhouette of an elf hiking through the mountains' />
        <h1 className='hero-text'>Whether you're a Human, Hobbit, Elf or Wizard we have the connections and accomodations to ensure your next vacation is rivaled only by Valinórë. </h1>
        </div>  
    </>
  )
}

export default HomeHero
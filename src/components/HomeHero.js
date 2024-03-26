import React from 'react'
import './homeherostyles.css'
import heroImg from '../assets/images/carousel1.jpeg'

const HomeHero = () => {
  return (
    <>
      <div className='hero'>
        <img src={heroImg} alt='silhouette of an elf hiking through the mountains' />
        <div className='hero-text'>
        <p style={{fontSize: '2rem'}}>Whether you're a Human, Hobbit, Elf or Wizard we have the connections and accomodations to ensure your next vacation is rivaled only by Valinórë. </p>
        </div>
        {/* <ul className='book-link'>
          <li><a href='/bookings' style={{color: 'gray'}}>Not All Who Wander...</a></li>
        </ul> */}
        </div>  
    </>
  )
}

export default HomeHero
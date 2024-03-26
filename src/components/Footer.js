import React from 'react'
import './footerstyles.css'

const Footer = () => {
  return (
    <>
    <div className='footer-container'>
    <div className='footer-left'>
        <h3>Navigation</h3>
        <div className='links'><a href='/bookings'>Bookings</a></div>
        <div className='links'><a href='/contact'>Contact</a></div>
        <div className='links'><a href='/map'>Map</a></div>
    </div>
    <div className='footer-right'>
        <h3>Creator's Links</h3>
        <div className='links'><a href='https://www.jacksonpruett.com/'>Portfolio</a></div>
        <div className='links'><a href='https://www.linkedin.com/in/jacksoncpruett/'>LinkedIn</a></div>
        <div className='links'><a href='https://github.com/JacksonPruett'>Github</a></div>
    </div>
    </div>
    <div className='footer-middle-bottom'>
        <h5>Elvish Travel 2024 ©</h5>
        </div>
    </>
  )
}

export default Footer
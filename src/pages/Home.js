import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../components/Navbar'
import HomeHero from '../components/HomeHero'
import WhoWeAre from '../components/WhoWeAre'
import Footer from '../components/Footer'
import './homestyles.css'


const Home = () => {
  return (
    <>
    <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <HomeHero />
        <br />
        <WhoWeAre />
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default Home
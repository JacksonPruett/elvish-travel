import React from "react";
import './navbarstyles.css'

const Navbar = () => {

  return (
    <>
    <div className="navbar">
    <div className="nav-left">
      <ul>
        <li><a href="/" style={{textDecoration: "none", fontSize: "2rem", color: "white"}}>Elvish Travel</a></li>
      </ul>
    </div>
    <ul className="nav-right">
        <li className="links"><a href="/bookings">Bookings</a></li>
        <li className="links"><a href="/map">Map</a></li>
    </ul>
    </div>
    </>
  );
};

export default Navbar;

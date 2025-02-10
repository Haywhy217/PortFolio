import React from 'react'
import logo from "../assets/Images/brandlogo.png"
const NavBar = () => {
  return (
    <div >
      <nav >
        <div >
          <img src={logo} alt="logo" />
        </div>
        <ul >
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>    
      </nav>
    </div>
  )
}

export default NavBar

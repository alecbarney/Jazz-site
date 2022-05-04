import React from "react"
import Jazzlogo from "./images/jazz-logo.png"
import LoginButtn from "./LoginButton"
import LogOutButton from "./LogOutButton"
import Profile from "./Profile"


export default function Navbar (){
    return(
        // <nav className="navBar">
        // {/* <div className="title--navBar">JAZZ NATION</div> */}
        // <img className ="title--navBar" src={Jazzlogo} alt="Jazzlogo"/>
        // <a href="/games">Past games</a>
        // <a href="/">Home</a>
        // <a href="/team">Team</a>
        // </nav>
        <>
        <nav role="navigation">
  <div id="menuToggle">
 
    <input type="checkbox" />
    
   
    <span></span>
    <span></span>
    <span></span>
    
  
    <ul id="menu">
      <a href="/"><li>Home</li></a>
      <a href="/team"><li>Team</li></a>
      <a href="/games"><li>Past Games</li></a>
      <a href="/contact"><li>Contact</li></a>
      <LoginButtn />
      <Profile />
      <LogOutButton />
    </ul>
  </div>
</nav>
 <img className ="title--navBar" src={Jazzlogo} alt="Jazzlogo"/>
</>
    )
}
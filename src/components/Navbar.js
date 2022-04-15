import React from "react"
import Jazzlogo from "./images/jazz-logo.png"



export default function Navbar (){
    return(
        <nav className="navBar">
        {/* <div className="title--navBar">JAZZ NATION</div> */}
        <img className ="title--navBar" src={Jazzlogo} alt="Jazzlogo"/>
        </nav>
    )
}
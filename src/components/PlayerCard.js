import React, {useEffect, useState} from "react"
import empty from "./images/empty.png"
import filled from "./images/filled.png"

export default function PlayerCard (props) {
    
    const [fav, setFav] = useState(false)

    return(
        <div className="card--container">
            <img
             onClick={()=>{
                if(fav === false){
                    setFav(true)
                    props.favorite = true
                }else{
                    setFav(false)
                    props.favorite = false
             }
            }} className="fav--icon" alt="star" src={!fav ? empty : filled}/>
        <div className="playerCard">
            <img className="player--pic" src={props.img} alt="player pic"/>
            <h3 className="inner--textH">{props.nameF}</h3>
            <h3 className="inner--textH">{props.nameL}</h3>
            <p className="inner--text">Position: {props.position}</p>
            <p className="inner--text">Age: {props.age}</p>
            <p className="inner--text">Height: {props.height}</p>
            <p className="inner--text">College: {props.college}</p>

        </div>
    </div>
    )
}
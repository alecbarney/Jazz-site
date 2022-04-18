import React from "react"

export default function PlayerCard (props) {
    return(
        <div className="card--container">
        <div className="playerCard">
            <img className="player--pic" src={props.img} alt="player pic"/>
            <h3>{props.nameF}</h3>
            <h3>{props.nameL}</h3>
            <p>Position: {props.position}</p>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
            <p>College: {props.college}</p>

        </div>
    </div>
    )
}
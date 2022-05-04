import React from 'react'
import Teams from '../TeamLogos'

export default function CardDisplay (props){
    // const homeid = props.teams.home.id
    // const awayid = props.teams.visitors.id
    // console.log(props.teams.home.id)
    return(
        
        <div className="scoreboard" >
                
        <h1>FINAL</h1>
        <h2>{props.teams.visitors.name} @ {props.teams.home.name}</h2>
    <div className="score--container" >
        <div className="away--team">
        <img className="team--logo"  src={Teams[props.teams.visitors.id].logo} alt="teamlogo"/>
            <h1>{props.scores.visitors.points}</h1>
        </div>

        <div className="home--team">
      
        <img className="team--logo" src={Teams[props.teams.home.id].logo} alt="teamlogo"/>
            <h1>{props.scores.home.points}</h1>
        </div>
    </div>
    <div className="gameinfo">
    <h2>ARENA: {props.arena.name}</h2>
    <h2>DATE: {props.date.start}</h2>
    </div>

</div>
    )
}
import React from "react"





export default function Recent (props){


    if(props.id === 10901){
    return(
        <div className="scoreboard" style={{height: "41vh",
            width: "33vw",  padding: "5px", margin: "15px"}}>
                
                <h1>FINAL</h1>
                <h2>{props.teams.visitors.name} @ {props.teams.home.name}</h2>
            <div className="score--container" style={{display: "flex", flexWrap: "wrap", justifyContent:"space-around"}}>
                <div className="away--team">
                <img className="team--logo" src="https://www.mavs.com/wp-content/uploads/2019/09/Logo_Release.png" alt="teamlogo"/>
                    <h1>{props.scores.visitors.points}</h1>
                </div>

                <div className="home--team">
              
                <img className="team--logo" src="https://content.sportslogos.net/logos/6/234/full/utah_jazz_logo_primary_19973688.png" alt="teamlogo"/>
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

}
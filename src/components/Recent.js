import React from "react"
const axios = require("axios");



// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

export default function Recent (){

    const options = {
        method: 'GET',
        url: 'https://api-nba-v1.p.rapidapi.com/games',
        params: {season: '2021', team: '40'},
        headers: {
          'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
          'X-RapidAPI-Key': '2d98c7cd19msh9fc8762436abcbdp122b57jsn273799f6dfb3'
        }
      };
      const deez= 
         async function () {
        axios.request(options).then(res => console.log(res.data.response[90].scores.home.points))
             }     
    return(
        <div className="scoreboard">
            <p>{deez}</p>
        </div>
    )
}
import React, {useState, useEffect} from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.scss';
import Navbar from "./components/Navbar"
import Recent from "./components/Recent"
import Video from "./video/Jazz-video1.mp4"
import PlayerCard from "./components/PlayerCard"
import data from "./Players"
import CardDisplay from "./components/CardDisplay"
import Footer from "./components/Footer"
import News from "./components/News"
import Slider from "./components/Slider"
import FavPlayer from "./components/FavPlayer"
import LoginButtn from "./components/LoginButton";
import LogOutButton from "./components/LogOutButton";
import { useAuth0 } from "@auth0/auth0-react";

const axios = require("axios");

function App() {
  const {isLoading } = useAuth0();
  const [games, setGames] = useState([])
  const [pastGames, setpastGames] =useState([])

// axios request for games
  const options = {
      method: 'GET',
      url: 'https://api-nba-v1.p.rapidapi.com/games',
      params: {season: '2021', team: '40'},
      headers: {
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '2d98c7cd19msh9fc8762436abcbdp122b57jsn273799f6dfb3'
      }
    };

    useEffect(()=>{
      axios.request(options).then(function (res) {
        setGames(res.data.response) ;
     }).catch(function (error) {
         console.error(error);
     });
     
     axios.request(options).then(function (res) {
       setpastGames(res.data.response) ;
    }).catch(function (error) {
        console.error(error);
    });
    }, [])


  //    axios.request(options).then(function (res) {
  //      setGames(res.data.response) ;
  //   }).catch(function (error) {
  //       console.error(error);
  //   });
    
  //   axios.request(options).then(function (res) {
  //     setpastGames(res.data.response) ;
  //  }).catch(function (error) {
  //      console.error(error);
  //  });

        // recent game score function
    const game = games.map(item =>{
     return( <Recent 
        key = {item.id}
        {...item}
      />
     )
    })

    const allGames = pastGames.map(item =>{
      return( <CardDisplay 
         key = {item.id}
         {...item}
       />
      )
     })


    // player card function
  const card = data.map(item =>{
    return(
      <PlayerCard 
        key={item.id}
        {...item}
      />
    )
  })

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="App">
        <video loop autoPlay muted
        style={{
          position: "fixed",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
          opacity: "0.9"
        }}
        >
        <source
          src= {Video}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {/* background video ^^^^^^^*/}

      <Navbar/>
      
    <Router>


        <Routes>
          <Route path="/" element={<>
          <div className="home-display">
          {game}
          <News />
          </div>
          
      </>} />

      <Route path="/games" element= {<div  className="all--games">{allGames}</div>} />

      <Route path="/team" element={<div>
        <Slider />
        <div className="card--display">
          {card}
      </div>
      </div>} />
      <Route path="/contact" element= {<div className="card--display">
        <FavPlayer />
      </div>} />
      </Routes>

    </Router>

    {/* <Footer /> */}
    
      </div>
  );
}

export default App;

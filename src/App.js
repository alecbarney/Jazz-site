import './App.css';
import Navbar from "./components/Navbar"
import Recent from "./components/Recent"
import Video from "./video/Jazz-video.mp4"
import PlayerCard from "./components/PlayerCard"
import data from "./Players"

function App() {

  const card = data.map(item =>{
    return(
      <PlayerCard 
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="App">
        <video loop autoPlay muted
        style={{
          position: "absolute",
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
      <Navbar />
      <Recent />
      <div className="card--display">

      {card}
      </div>
      
    </div>
  );
}

export default App;

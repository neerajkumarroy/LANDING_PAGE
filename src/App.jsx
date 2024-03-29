import React, { useEffect, useState } from "react";
import Background from './components/background/background'; 
import BikeNavBar from './components/BikeNavBar/Navbar';
import Bike from "./components/Bike/Bike";


const App = () => {
  const bikeData = [
    { text1: "Dive into", text2: "What you love" },
    { text1: "Indulge", text2: "Your passions" },
    { text1: "give in to", text2: "your passion" }, 
  ];

  const [bikeCount, setBikeCount] = useState(0); 
  const [playStatus, setPlayStatus] = useState(false);
useEffect(()=>{
  setInterval(()=>{
    setBikeCount((count)=>{return count===2?0:count+1 })
  },5000);
},[]);

  return (
    <div>
      <Background PlayStatus={playStatus} BikeCount={bikeCount} /> {/* Corrected props' names */}
      <BikeNavBar />
      <Bike 
        setPlayStatus={setPlayStatus}
        bikeData={bikeData[bikeCount]} // Changed index to bikeCount
        bikeCount={bikeCount} // Corrected prop name
        setBikeCount={setBikeCount}
        playStatus={playStatus} // Corrected prop name
      />
    </div>
  );
}

export default App;

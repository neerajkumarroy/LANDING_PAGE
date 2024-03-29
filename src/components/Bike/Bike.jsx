import React from 'react';
import './Bike.css';
import arrow_btn from '../../assets/arrow_btn.png';
import play_icon from '../../assets/play_icon.png';
import pause_icon from '../../assets/pause_icon.png';

const Bike = ({ bikeData, setBikeCount, bikeCount, setPlayStatus, playStatus }) => {
  // const handlePlayPauseClick = () => {
  //   setPlayStatus(!PlayStatus); 
  // };

  console.log("BikeCount:", bikeCount);
  console.log("PlayStatus:", playStatus);

  return (
    <div className='bike'>
      <div className='bike-text'>
        <p>{bikeData.text1}</p>
        <p>{bikeData.text2}</p>
      </div>
      <div className='bike-explore'>
        <p>Explore The Features</p>
        <img src={arrow_btn} alt=''/>
      </div>
      <div className='bike-dot-play'>
        <ul className='bike-dots'>
          <li onClick={() => setBikeCount(0)} className={bikeCount === 0 ? "bike-dot orange" : "bike-dot"}></li>
          <li onClick={() => setBikeCount(1)} className={bikeCount === 1 ? "bike-dot orange" : "bike-dot"}></li>
          <li onClick={() => setBikeCount(2)} className={bikeCount === 2 ? "bike-dot orange" : "bike-dot"}></li>
        </ul>
        <div className='bike-play'>
          <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus ? pause_icon : play_icon} alt=''/>
          <p>See The Video</p>
        </div>
      </div>
    </div>
  );
};

export default Bike;

import React from 'react';
import './background.css';
import video1 from '../../assets/video1.mp4';
import bike1 from '../../assets/bike1.jpg';
import bike2 from '../../assets/bike2.jpg';
import bike3 from '../../assets/bike3.jpg';

const Background = ({ PlayStatus, BikeCount }) => {
  let content = null;

  if (PlayStatus) {
    content = (
      <video className='background' autoPlay loop muted>
        <source src={video1} type='video/mp4' />
      </video>
    );
  } else if (BikeCount === 0) {
    content = <img src={bike1} className='background fade-in' alt='' />;
  } else if (BikeCount === 1) {
    content = <img src={bike2} className='background fade-in' alt='' />;
  } else if (BikeCount === 2) {
    content = <img src={bike3} className='background fade-in' alt='' />;
  }

  return content;
};

export default Background;

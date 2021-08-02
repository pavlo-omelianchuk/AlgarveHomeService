import React from 'react';
import clip from '../../video/production ID_3998263.mp4';

const VideoBg = ({ children }) => {
  return (
    <>
      <div className="video-container">
        <video className="hero-video desktop" autoPlay loop muted>
          <source src={clip} type="video/mp4" />
          <source src={clip} type="video/ogg" />
        </video>
      </div>
      {children}
    </>
  );
};

export default VideoBg;

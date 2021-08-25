import React from 'react';
import clip from '../../video/HeroVideoforDesktop.mp4';
import clipM from '../../video/HeroVideoforMob.mp4';

const VideoBg = ({ children }) => {
  return (
    <div className="video-container ">
      <video className="hero-video mobile"
        autoPlay loop muted playsInline>
        <source src={clipM} type="video/mp4" />
        <source src={clipM} type="video/ogg" />
      </video>
      <video className="hero-video desktop"
        autoPlay loop muted playsInline>
        <source src={clip} type="video/mp4" />
        <source src={clip} type="video/ogg" />
      </video>
      {children}
    </div>
  );
};

export default VideoBg;

import React from 'react';
import clip from '../../video/production ID_3998263.mp4';
// import Poster from '../../video/bgHeroPoster.jpg';

//poster={Poster}

const VideoBckg = ({ children }) => {
  return (
    <>
      <div className='video-container'>
        <video className="hero-video" autoPlay loop muted>
          <source src={clip} type="video/mp4" />
          <source src={clip} type="video/ogg" />
        </video>
      </div>
      {children}
    </>
  );
};

export default VideoBckg;


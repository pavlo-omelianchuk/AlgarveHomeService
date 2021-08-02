import React from 'react';
import StyledBackground from '../Image/HeroImg';
import Hero from './Hero-component';
import VideoBckg from './HeroVideoBg-component';
import HeadingElement from './HeadingElement-component';

const HeroDesktop = () => {
  return (
    <div>
      <StyledBackground
        className="hero-bg"
        filename="bgHeroWithOpacity.jpg"
        alt="Woman getting massage"
        bgContent={
          <VideoBckg>
            <Hero />
          </VideoBckg>
        }
      />
    </div>
  );
};

const HeroSection = () => {
  return (
    <div id="home">
      <HeadingElement />
      <HeroDesktop />
    </div>
  );
};

export default HeroSection;

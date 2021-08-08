import React from 'react';
import StyledBackground from '../Image/HeroImg';
import Hero from './Hero-component';
import VideoBckg from './HeroVideoBg-component';
import HeadingElement from './HeadingElement-component';

const HeroDesktop = () => {
  return (
    <VideoBckg>
      <Hero />
    </VideoBckg>
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

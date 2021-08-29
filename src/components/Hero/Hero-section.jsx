import React from 'react';
import Hero from './Hero-component';
import VideoBckg from './HeroVideoBg-component';
import HeadingElement from './HeadingElement-component';

const HeroSection = () => (
  <div id="home">
    <HeadingElement />
    <VideoBckg>
      <Hero />
    </VideoBckg>
  </div>
);

export default HeroSection;

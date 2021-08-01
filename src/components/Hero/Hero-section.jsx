import React from 'react';
import { Container, Row } from 'react-bootstrap';
import StyledBackground from '../Image/HeroImg';
import Hero from './Hero-component';
import VideoBckg from './HeroVideoBg-component';
import HeadingElement from './HeadingElement-component';

const HeroDesktop = () => {
  return (
    <div className="desktop">
      <StyledBackground
        className="hero-bg"
        filename="bgHeroPoster.jpg"
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
const HeroMobile = () => {
  return (
    <div className="mobile">
      <StyledBackground
        className="hero-bg"
        filename="bgHeroWithOpacity.jpg"
        alt="Woman getting massage"
        bgContent={
          <div>
            <Hero />
          </div>
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
      <HeroMobile />
    </div>
  );
};

export default HeroSection;

import React from 'react';
import { Container, Row } from 'react-bootstrap';
import StyledBackground from '../Image/HeroImg';
import Hero from './Hero-component';
import VideoBckg from './HeroVideoBg-component';
import HeroCarousel from './Hero-carousel';

const HeroDesktop = () => {
  return (
    <div className="desktop">
      <Container fluid>
        <Row style={{ position: 'relative' }}>
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
        </Row>
      </Container>
    </div>
  );
};
const HeroMobile = () => {
  return (
    <div className="mobile">
      <Container fluid>
        <Row style={{ position: 'relative' }}>
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
        </Row>
      </Container>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div id="home">
      <HeroDesktop />
      <HeroMobile />
    </div>
  );
};

export default HeroSection;

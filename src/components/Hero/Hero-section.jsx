import React from 'react';
import { Container, Row } from 'react-bootstrap';
import StyledBackground from '../Image/HeroImg';
import Hero from './Hero-component';
import VideoBckg from '../Experiments/Experiments';

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
            bgContent={<Hero />}
          />
        </Row>
      </Container>
    </div>
  );
};

const HeroSection = () => {
  return (
    <>
      <HeroDesktop />
      <HeroMobile />
    </>
  );
};

export default HeroSection;

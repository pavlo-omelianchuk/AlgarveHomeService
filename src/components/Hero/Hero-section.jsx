import React from 'react';
import { Container, Row } from 'react-bootstrap';
import StyledBackground from '../Image/HeroImg';
import Hero from './Hero-component';
import VideoBckg from '../Experiments/Experiments';

const PricesWelcomeBg = () => {
  if (window.innerWidth > 769) {
    return (
      <Container fluid>
        <Row style={{ position: 'relative' }}>
          <div id="home-desktop">
            <VideoBckg>
              <Hero />
            </VideoBckg>
          </div>
        </Row>
      </Container>
    );
  } else {
    return (
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
    );
  }
};

export default PricesWelcomeBg;

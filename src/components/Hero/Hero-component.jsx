import React from 'react';
import { Container } from 'react-bootstrap';
import { Fade, Zoom } from 'react-reveal';
import LogoImg from '../Image/LogoImg';

const Hero = () => (
  <>
    <section id="hero" className="jumbotron">
      <Container>
        <Fade big duration={4000}>
          <LogoImg alt="Logo" filename="component2-pink.png" />
        </Fade>
        <Fade bottom distance="30px">
          <h3 className="hero-overtitle">Massage & Beauty therapy</h3>
        </Fade>
        <Fade bottom duration={4000} distance="300px">
          <h1 className="hero-title">
            MASSAGE AT HOME <br /> in Algarve
          </h1>
          <h2 className="hero-title hero-title-name text-color-main">{` Danylo Hips`}</h2>
        </Fade>

        <Zoom duration={1000} delay={2000}>
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <a href="/prices-massage">make an appointment</a>
            </span>
          </p>
        </Zoom>
      </Container>
    </section>
  </>
);

export default Hero;

import React from 'react';
import { Container } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import HeroCarousel from "./Hero-carousel";
import PinkImg from '../Image/PinkImg';



const Hero = () => (
  <>
    <section id="hero" className="jumbotron">
      <Container>
        <span className="absolute-algarve">Algarve</span>
        <Fade big duration={1500}>
          <PinkImg alt="Logo" filename="component2-pink.png" />
        </Fade>
        <Fade bottom distance="30px">
          <h3 className="hero-overtitle">Massage & Beauty therapy</h3>
        </Fade>
        <HeroCarousel />
      </Container>
    </section>
  </>
);

export default Hero;

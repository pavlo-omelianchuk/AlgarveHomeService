import React from 'react';
import { Fade } from 'react-reveal';
import HeroCarousel from './Hero-carousel';
import PinkImg from '../Image/PinkImg';

const Hero = () => (
  <>
    <section id="hero" className="jumbotron">
      <div
        style={{ position: 'relative', maxWidth: '60vw', marginLeft: 'auto', marginRight: 'auto' }}
      >
        <Fade big duration={1500}>
          <PinkImg alt="Logo" filename="component2-pink.png" />
        </Fade>
        <Fade bottom distance="30px">
          <h3 className="hero-overtitle">Algarve Home Service</h3>
        </Fade>
      </div>
      <HeroCarousel />
    </section>
  </>
);

export default Hero;

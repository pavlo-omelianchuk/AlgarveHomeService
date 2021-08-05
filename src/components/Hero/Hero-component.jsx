import React from 'react';
import { Fade, Zoom } from 'react-reveal';
import PinkImg from '../Image/PinkImg';
import { Link } from 'gatsby';

const Hero = () => (
  <div className="hero-wrapper">
    <div className="hero-message-wrapper">
      <Fade duration={1500} distance="1000px" delay={1500}>
        <PinkImg alt="Logo" filename="component2-pink.png" />
      </Fade>

      <Fade bottom distance="30px">
        <h3 className="hero-overtitle">Algarve Home Service</h3>
      </Fade>
      <Fade bottom duration={1500} distance="300px">
        <h1 className="hero-title">MASSAGE & BEAUTY THERAPY</h1>
        <h2 className="hero-title hero-title-name text-color-main">From Danylo Hips and Company</h2>
      </Fade>
    </div>
    <Zoom duration={1000} delay={200}>
      <p className="hero-cta">
        <Link to="/blog/">
          <span className="cta-btn cta-btn--hero">our blog</span>
        </Link>
        <Link to="/prices-massage/">
          <span className="cta-btn cta-btn--hero">Book now</span>
        </Link>
      </p>
    </Zoom>
  </div>
);

export default Hero;

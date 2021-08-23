import React from 'react';
import { Fade, Zoom } from 'react-reveal';
import PinkImg from '../Image/PinkImg';
import { Link } from 'gatsby';
import heroData from '../../mock/hero.json'

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-message-wrapper">
        <Fade duration={1500} distance="1000px" delay={1500}>
          <PinkImg alt="Logo" filename="component2-pink.png" />
        </Fade>

        <Fade bottom distance="30px">
          <h3 className="hero-overtitle">{heroData.overTitle}</h3>
        </Fade>
        <Fade bottom duration={1500} distance="300px">
          <h2 className="hero-title">{heroData.title}</h2>
          <h2 className="hero-title-name text-color-main">{heroData.afterTitle}</h2>
        </Fade>
      </div>
      <Zoom duration={1000} delay={200}>
        <p className="hero-cta">
          <Link to="/blog/">
            <span className="cta-btn cta-btn--hero">{heroData.buttonOne}</span>
          </Link>
          <Link to="/prices-massage/">
            <span className="cta-btn cta-btn--hero">{heroData.buttonTwo}</span>
          </Link>
        </p>
      </Zoom>
    </div>
  );
};

export default Hero;

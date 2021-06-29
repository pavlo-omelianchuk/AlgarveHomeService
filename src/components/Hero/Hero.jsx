import React from 'react';
import { Container } from 'react-bootstrap';
import { Fade, Zoom } from 'react-reveal';
// import { StaticQuery, graphql } from 'gatsby';
import pinkComponent from '../../images/component2-pink.png';

const Hero = () => (
  <>
    <div>
      <section id="hero" className="jumbotron">
        <Container>
          <div id="hero-overlay" />

          <Fade big duration={4000}>
            <img src={pinkComponent} alt="pink component" />
          </Fade>
          <Fade bottom distance="30px">
            <h3 className="hero-subtitle">Massage & Beauty therapy</h3>
          </Fade>
          <Fade bottom duration={4000} distance="300px">
            <h1 className="hero-title">Home massage from</h1>
            <h2 className="hero-title hero-title-name text-color-main">{` Danylo Hips`}</h2>
          </Fade>

          <Zoom duration={1000} delay={2000}>
            <p className="hero-cta">
              <span className="cta-btn cta-btn--hero">
                <a href="/prices">
                  make an appointment
                  {/* <a href="https://api.whatsapp.com/send?phone=+351 925 142 109">
                        <i className="fa fa-whatsapp"
                          ariaHidden="true"
                        ></i>
                      </a>  */}
                </a>
              </span>
            </p>
          </Zoom>
        </Container>
      </section>
    </div>
  </>
);

export default Hero;

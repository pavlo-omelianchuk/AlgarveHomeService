import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-parallax';
import { Container, Col, Row } from 'react-bootstrap';
import ServImg1 from '../../images/presImg1.jpg';
import ServImg2 from '../../images/ServImg1.jpg';
import ServImg3 from '../../images/ServImg2.jpg';
import ServImg4 from '../../images/hairdressing.jpg';

const insideStyles = {
  background: 'transparent',
  padding: 0,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  zIndex: 10,
};

const parallaxMainStyles = {
  height: '80vh',
  maxHeight: '550px',
};
const parallaxMobileStyles = {
  height: '40vh',
  maxHeight: '150px',
};
let parallaxStyle = parallaxMobileStyles;

const Services = () => {
  useEffect(() => {
    if (window.innerWidth > 769) {
      parallaxStyle =  parallaxMainStyles;
    } else {
      parallaxStyle = parallaxMobileStyles;
    }
  }, []);
  return (
    <section id="services">
      <Container fluid>
        <Row className="services-row">
          <Col className="services-row__col" lg={3} md={12}>
            <Fade duration={500} distance="100px">
              <Parallax className="parallax-img" bgImage={ServImg1} strength={-100}>
                <div style={parallaxStyle}>
                  <div id="service__overlay" />
                  <div style={insideStyles}>
                    <Fade bottom duration={1000} distanse="500px">
                      <h3 className="service-overtitle">Massage for rest & relaxation</h3>
                    </Fade>
                    <h2 className="service-title-small">BEAUTY THERAPY</h2>
                  </div>
                </div>
              </Parallax>
            </Fade>
          </Col>
          <Col className="services-row__col" lg={3} md={12}>
            <Fade duration={600} distance="100px">
              <Parallax bgImage={ServImg2} strength={-100}>
                <div style={parallaxStyle}>
                  <div id="service__overlay" />
                  <div style={insideStyles}>
                    <Fade bottom duration={1000} distanse="500px">
                      <h3 className="service-overtitle">Manual & excercise therapy</h3>
                    </Fade>
                    <h2 className="service-title-small">MASSAGE THERAPY</h2>
                  </div>
                </div>
              </Parallax>
            </Fade>
          </Col>
          <Col className="services-row__col desktop" lg={3} md={12}>
            <Fade duration={700} distance="100px">
              <Parallax bgImage={ServImg3} strength={-100}>
                <div style={parallaxStyle}>
                  <div id="service__overlay" />
                  <div style={insideStyles}>
                    <Fade bottom duration={1000} distanse="500px">
                      <h3 className="service-overtitle">Eyebrows beauty</h3>
                    </Fade>
                    <h2 className="service-title-small">MICRO -
                      PIGMENTATION</h2>
                  </div>
                </div>
              </Parallax>
            </Fade>
          </Col>
          <Col className="services-row__col mobile" lg={3} md={12}>
            <Fade duration={700} distance="100px">
              <Parallax bgImage={ServImg3} strength={-100}>
                <div style={parallaxStyle}>
                  <div id="service__overlay" />
                  <div style={insideStyles}>
                    <Fade bottom duration={1000} distanse="500px">
                      <h3 className="service-overtitle">Eyebrows beauty</h3>
                    </Fade>
                    <h2 className="service-title-small">MICROPIGMENTATION</h2>
                  </div>
                </div>
              </Parallax>
            </Fade>
          </Col>
          <Col className="services-row__col" lg={3} md={12}>
            <Fade duration={800} distance="100px">
              <Parallax bgImage={ServImg4} strength={-100}>
                <div style={parallaxStyle}>
                  <div id="service__overlay" />
                  <div style={insideStyles}>
                    <Fade bottom duration={1000} distanse="500px">
                      <h3 className="service-overtitle">Hair Style</h3>
                    </Fade>
                    <h2 className="service-title-small">HAIRDRESSER</h2>
                  </div>
                </div>
              </Parallax>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;

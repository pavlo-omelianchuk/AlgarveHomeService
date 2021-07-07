import React from 'react';
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-parallax';
import { Container, Col, Row } from 'react-bootstrap';
import ServImg1 from '../../images/ServImg1.jpg';
import ServImg2 from '../../images/ServImg2.jpg';
import ServImg3 from '../../images/ServImg3.jpg';

const insideStyles = {
  background: 'transparent',
  padding: 0,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  zIndex: 10,
};

const Services = () => (
  <section id="services">
    <Container fluid>
      <Row className="services-row">
        <Col className="services-row__col" md={4} sm={12}>
          <Fade duration={1000} distance="100px">
            <Parallax bgImage={ServImg1} strength={-100}>
              <div style={{ height: '70vh', maxHeight: '550px' }}>
                <div id="service__overlay" />
                <div style={insideStyles}>
                  <Fade bottom duration={1000} distanse="500px">
                    <h3 className="service-overtitle">Massage for rest & relaxation</h3>
                  </Fade>
                  <h2 className="service-title-small"> BEAUTY THERAPY</h2>
                </div>
              </div>
            </Parallax>
          </Fade>
        </Col>
        <Col className="services-row__col" md={4} sm={12}>
          <Fade duration={1000} distance="100px">
            <Parallax bgImage={ServImg2} strength={-100}>
              <div style={{ height: '70vh', maxHeight: '550px' }}>
                <div id="service__overlay" />
                <div style={insideStyles}>
                  <Fade bottom duration={1000} distanse="500px">
                    <h3 className="service-overtitle">Manual & excercise therapy</h3>
                  </Fade>
                  <h2 className="service-title-small"> MASSAGE THERAPY</h2>
                </div>
              </div>
            </Parallax>
          </Fade>
        </Col>
        <Col className="services-row__col" md={4} sm={12}>
          <Fade duration={1000} distance="100px">
            <Parallax bgImage={ServImg3} strength={-100}>
              <div style={{ height: '70vh', maxHeight: '550px' }}>
                <div id="service__overlay" />
                <div style={insideStyles}>
                  <Fade bottom duration={1000} distanse="500px">
                    <h3 className="service-overtitle">Physical therapy</h3>
                  </Fade>
                  <h2 className="service-title-small"> MASSAGE THERAPY</h2>
                </div>
              </div>
            </Parallax>
          </Fade>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Services;

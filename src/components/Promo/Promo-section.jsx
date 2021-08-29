import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Col, Row } from 'react-bootstrap';
import Tilt from 'react-tilt';
import ProjectImg from '../Image/ProjectImg';
import effectData from '../../mock/effect.json';

const imgRegEx = /(\w+\.\w+)/g;

const Promo = () => (
  <section id="promo">
    <Container>
      <Row className="promo-row">
        <Col className="promo-row__col mx-auto my-auto" md={6} sm={12}>
          <Fade left duration={1000} delay={100} distance="300px">
            <div className="promo-wrapper__info-container">
              <h3 className="promo-over-title">{effectData.over_Title}</h3>
              <h3 className="section-title-small">{effectData.title}</h3>
              <p>{effectData.description}</p>
              <Fade bottom duration={1000} delay={300} distance="30px">
                <span className="d-flex mt-5">
                  <a
                    className="cta-btn cta-btn--hero px-5 rounded"
                    href={effectData.link_to}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {effectData.button}
                  </a>
                </span>
              </Fade>
            </div>
          </Fade>
        </Col>
        <Col className="promo-row__col mx-auto" md={5} sm={12}>
          <Tilt
            options={{
              reverse: false,
              max: 8,
              perspective: 1000,
              scale: 1,
              speed: 300,
              transition: true,
              axis: null,
              reset: true,
              easing: 'cubic-bezier(.03,.98,.52,.99)',
            }}
          >
            <div className="promo-wrapper__image">
              <ProjectImg filename={effectData.image.match(imgRegEx)[0]} alt={effectData.alt} />
            </div>
          </Tilt>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Promo;

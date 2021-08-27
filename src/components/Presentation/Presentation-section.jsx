import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Col, Row } from 'react-bootstrap';
import PresentationTitleSmall from './Presentation-TitleSmall-component';
import ProjectImg from '../Image/ProjectImg';
import presentationData from '../../mock/presentation.json';
import { Link } from 'gatsby';

const imgRegEx = /([/])\w+\.\w+/g;
const Presentation = () => {

  return (
    <section id="presentation">
      <Container>
        <Row className="presentation-row">
          <Col className="presentation-row__col" md={4}>
            <Fade left duration={800} distance="300px">
              <div className="presentation-wrapper__image">
                <ProjectImg
                  filename={presentationData.block_One.image.match(imgRegEx)[0]}
                  alt={presentationData.block_One.image_Description}
                />
              </div>
              <div className="presentation-wrapper__info-container">
                <div className="presentation-wrapper__info">
                  <Fade cascade>
                    <PresentationTitleSmall title={presentationData.block_One.title} />
                  </Fade>
                  <Fade bottom duration={500} delay={300} distance="30px">
                    <p className="presentation-wrapper__info-text ">
                      {presentationData.block_One.message}
                    </p>
                    <span className="d-flex justify-content-center ">
                      <a
                        className="cta-btn cta-btn--pres"
                        href="https://wa.me/351963531684"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-whatsapp" aria-hidden="true" />{' '}
                        {presentationData.block_One.button}
                      </a>
                    </span>
                  </Fade>
                </div>
              </div>
            </Fade>
          </Col>
          <Col className="presentation-row__col" md={4}>
            <Fade bottom duration={800} d distance="200px">
              <div className="presentation-wrapper__image mobile">
                <ProjectImg
                  filename={presentationData.block_Two.image.match(imgRegEx)[0]}
                  alt={presentationData.block_Two.image_Description}
                />
              </div>
              <div className="presentation-wrapper__info-container">
                <div className="presentation-wrapper__info">
                  <Fade cascade>
                    <PresentationTitleSmall title={presentationData.block_Two.title} />
                  </Fade>
                  <Fade bottom duration={500} delay={300} distance="30px">
                    <p className="presentation-wrapper__info-text ">
                      {presentationData.block_Two.message}
                    </p>
                    <Link className="cta-btn cta-btn--pres" to="/prices-massage">
                      <span className="d-flex justify-content-center ">
                        {presentationData.block_Two.button}
                      </span>
                    </Link>
                  </Fade>
                </div>
              </div>
              <div className="presentation-wrapper__image desktop">
                <ProjectImg
                  filename={presentationData.block_Two.image.match(imgRegEx)[0]}
                  alt={presentationData.block_Two.image_Description}
                />
              </div>
            </Fade>
          </Col>
          <Col className="presentation-row__col" md={4}>
            <Fade right duration={800} distance="300px">
              <div className="presentation-wrapper__image">
                <ProjectImg
                  filename={presentationData.block_Three.image.match(imgRegEx)[0]}
                  alt={presentationData.block_Three.image_Description}
                />
              </div>
              <div className="presentation-wrapper__info-container">
                <div className="presentation-wrapper__info">
                  <Fade cascade>
                    <PresentationTitleSmall title={presentationData.block_Three.title} />
                  </Fade>
                  <Fade bottom duration={500} delay={300} distance="30px">
                    <p className="presentation-wrapper__info-text ">
                      {presentationData.block_Three.message}
                    </p>
                    <Link className="cta-btn cta-btn--pres" to="/about-us">
                      <span className="d-flex justify-content-center ">
                        {presentationData.block_Three.button}
                      </span>
                    </Link>
                  </Fade>
                </div>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Presentation;

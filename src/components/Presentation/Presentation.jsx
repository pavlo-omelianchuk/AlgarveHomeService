import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Col, Row } from 'react-bootstrap';
import TitleSmall from '../TitleSmall/TitleSmall';
import ProjectImg from '../Image/ProjectImg';

const Presentation = () => (
  <section id="presentation">
    <Container>
      <Row className="presentation-wrapper">
        <Col className="presentation-wrapper__col" md={4} sm={12}>
          <Fade left duration={1000} delay={100} distance="300px">
            <div className="presentation-wrapper__image">
              <ProjectImg filename="presImg1.jpg" alt="contacts" />
            </div>
            <div className="presentation-wrapper__info-container">
              <div className="presentation-wrapper__info">
                <Fade cascade>
                  <TitleSmall title="CONTACT US" />
                </Fade>
                <hr className="hr-styled" />
                <Fade bottom duration={1000} delay={1000} distance="30px">
                  <p className="presentation-wrapper__info-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa
                    animi maiores repellendu distinctioaperiam
                  </p>
                  <span className="d-flex mt-3">
                    <a className="cta-btn cta-btn--contacts" href="/">
                      Contacts
                    </a>
                  </span>
                </Fade>
              </div>
            </div>
          </Fade>
        </Col>
        <Col className="presentation-wrapper__col" md={4} sm={12}>
          <Fade bottom duration={1000} delay={100} distance="200px">
            <div className="presentation-wrapper__image">
              <ProjectImg filename="presImg1.jpg" alt="contacts" />
            </div>
            <div className="presentation-wrapper__info-container">
              <div className="presentation-wrapper__info">
                <Fade cascade>
                  <TitleSmall title="CONTACT US" />
                </Fade>
                <hr className="hr-styled" />
                <Fade bottom duration={1000} delay={1000} distance="30px">
                  <p className="presentation-wrapper__info-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa
                    animi maiores repellendu distinctioaperiam
                  </p>
                  <span className="d-flex mt-3">
                    <a className="cta-btn cta-btn--contacts" href="/">
                      Contacts
                    </a>
                  </span>
                </Fade>
              </div>
            </div>
          </Fade>
        </Col>
        <Col className="presentation-wrapper__col" md={4} sm={12}>
          <Fade right duration={1000} delay={100} distance="300px">
            <div className="presentation-wrapper__image">
              <ProjectImg filename="presImg1.jpg" alt="contacts" />
            </div>
            <div className="presentation-wrapper__info-container">
              <div className="presentation-wrapper__info">
                <Fade cascade>
                  <TitleSmall title="CONTACT US" />
                </Fade>
                <hr className="hr-styled" />
                <Fade bottom duration={1000} delay={1000} distance="30px">
                  <p className="presentation-wrapper__info-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa
                    animi maiores repellendu distinctioaperiam
                  </p>
                  <span className="d-flex mt-3">
                    <a className="cta-btn cta-btn--contacts" href="/">
                      Contacts
                    </a>
                  </span>
                </Fade>
              </div>
            </div>
          </Fade>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Presentation;

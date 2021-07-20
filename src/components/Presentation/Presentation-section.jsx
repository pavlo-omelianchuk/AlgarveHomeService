import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Col, Row } from 'react-bootstrap';
import TitleSmall from '../Titles/TitleSmall-component';
import ProjectImg from '../Image/ProjectImg';

const Presentation = () => (
  <section id="presentation">
    <Container>
      <Row className="presentation-row">
        <Col className="presentation-row__col" sm={4}>
          <Fade left duration={1000} delay={100} distance="300px">
            <div className="presentation-wrapper__image">
              <ProjectImg filename="presImgContact.jpg" alt="Woman getting beauty procedure" />
            </div>
            <div className="presentation-wrapper__info-container">
              <div className="presentation-wrapper__info">
                <Fade cascade>
                  <TitleSmall title="CONTACT US" />
                </Fade>
                <Fade bottom duration={1000} delay={1000} distance="30px">
                  <p className="presentation-wrapper__info-text ">
                    You are welcome to call but you can also book a massage online! Please feel free
                    to reach out
                  </p>
                  <span className="d-flex justify-content-center ">
                    <a
                      className="cta-btn cta-btn--pres"
                      href="https://api.whatsapp.com/send?phone=+351 925 142 109"
                    >
                      <i className="fa fa-whatsapp" aria-hidden="true" /> call now
                    </a>
                  </span>
                </Fade>
              </div>
            </div>
          </Fade>
        </Col>
        <Col className="presentation-row__col desktop" sm={4}>
          <Fade bottom duration={1000} delay={100} distance="200px">
            <div className="presentation-wrapper__info-container">
              <div className="presentation-wrapper__info">
                <Fade cascade>
                  <TitleSmall title="BOOK MASSAGE" />
                </Fade>
                <Fade bottom duration={1000} delay={1000} distance="30px">
                  <p className="presentation-wrapper__info-text ">
                    Book your massage online and view orthopedic massage therapy pricing at our
                    midtown
                  </p>
                  <span className="d-flex justify-content-center ">
                    <a className="cta-btn cta-btn--pres" href="/prices-massage">
                      book now
                    </a>
                  </span>
                </Fade>
              </div>
            </div>
            <div className="presentation-wrapper__image">
              <ProjectImg filename="presImgMkAppointment.jpg" alt="Woman getting massage" />
            </div>
          </Fade>
        </Col>
        <Col className="presentation-row__col mobile" sm={4}>
          <Fade bottom duration={1000} delay={100} distance="200px">
            <div className="presentation-wrapper__image">
              <ProjectImg filename="presImgMkAppointment.jpg" alt="Woman getting massage" />
            </div>
            <div className="presentation-wrapper__info-container">
              <div className="presentation-wrapper__info">
                <Fade cascade>
                  <TitleSmall title="BOOK MASSAGE" />
                </Fade>
                <Fade bottom duration={1000} delay={1000} distance="30px">
                  <p className="presentation-wrapper__info-text ">
                    Book your massage online and view orthopedic massage therapy pricing at our
                    midtown
                  </p>
                  <span className="d-flex justify-content-center ">
                    <a className="cta-btn cta-btn--pres" href="/prices-massage/#request-form">
                      book now
                    </a>
                  </span>
                </Fade>
              </div>
            </div>
          </Fade>
        </Col>
        <Col className="presentation-row__col" sm={4}>
          <Fade right duration={1000} delay={100} distance="300px">
            <div className="presentation-wrapper__image">
              <ProjectImg filename="presImgOurSpecialists.jpg" alt="Woman getting neck massage" />
            </div>
            <div className="presentation-wrapper__info-container">
              <div className="presentation-wrapper__info">
                <Fade cascade>
                  <TitleSmall title="OUR SPECIALISTS" />
                </Fade>
                <Fade bottom duration={1000} delay={1000} distance="30px">
                  <p className="presentation-wrapper__info-text ">
                    Each one of our staff members are licensed massage therapists who have gone
                    above and beyond
                  </p>
                  <span className="d-flex justify-content-center ">
                    <a className="cta-btn cta-btn--pres" href="#staff">
                      view all
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

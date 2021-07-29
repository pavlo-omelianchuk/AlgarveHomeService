import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Col, Row } from 'react-bootstrap';
import PresentationTitleSmall from './Presentation-TitleSmall-component';
import ProjectImg from '../Image/ProjectImg';

const Presentation = () => (
  <section id="presentation">
    <Container>
      <Row className="presentation-row">
        <Col className="presentation-row__col" md={4}>
          <Fade left duration={800} distance="300px">
            <div className="presentation-wrapper__image">
              <ProjectImg filename="presImgContact.jpg" alt="Woman getting beauty procedure" />
            </div>
            <div className="presentation-wrapper__info-container">
              <div className="presentation-wrapper__info">
                <Fade cascade>
                  <PresentationTitleSmall title="CONTACT US" />
                </Fade>
                <Fade bottom duration={500} delay={300} distance="30px">
                  <p className="presentation-wrapper__info-text ">
                    To have Massage or Beauty treatment at home any where in the Algarve you can
                    make an appointment online or if you have any questions, feel free to call us.
                  </p>
                  <span className="d-flex justify-content-center ">
                    <a className="cta-btn cta-btn--pres" href="https://wa.me/351963531684">
                      <i className="fa fa-whatsapp" aria-hidden="true" /> call now
                    </a>
                  </span>
                </Fade>
              </div>
            </div>
          </Fade>
        </Col>
        <Col className="presentation-row__col desktop" md={4}>
          <Fade bottom duration={800} distance="200px">
            <div className="presentation-wrapper__info-container">
              <div className="presentation-wrapper__info">
                <Fade cascade>
                  <PresentationTitleSmall title="BOOK MASSAGE" />
                </Fade>
                <Fade bottom duration={500} delay={300} distance="30px">
                  <p className="presentation-wrapper__info-text ">
                    Mobile Massage and Beauty services available in Sagres, Lagos, Portimão,
                    Albufeira, Quarteira, Faro, Olhão, Tavira and over all the Algarve. We will make
                    your home more relaxing with best Masseurs and Beauticians. No travel fees
                    added!
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
        <Col className="presentation-row__col mobile" md={4}>
          <Fade bottom duration={800} d distance="200px">
            <div className="presentation-wrapper__image">
              <ProjectImg filename="presImgMkAppointment.jpg" alt="Woman getting massage" />
            </div>
            <div className="presentation-wrapper__info-container">
              <div className="presentation-wrapper__info">
                <Fade cascade>
                  <PresentationTitleSmall title="BOOK MASSAGE" />
                </Fade>
                <Fade bottom duration={500} delay={300} distance="30px">
                  <p className="presentation-wrapper__info-text ">
                    Our Massage and Beauty Mobile services are available over all the Algarve. We
                    will come to you in Sagres, Lagos, Portimão, Albufeira, Quarteira, Faro, Olhão,
                    Tavira and other nearby areas. We will make your home more relaxing with best
                    masseurs. No travel fees added!
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
        <Col className="presentation-row__col" md={4}>
          <Fade right duration={800} distance="300px">
            <div className="presentation-wrapper__image">
              <ProjectImg filename="presImgOurSpecialists.jpg" alt="Woman getting neck massage" />
            </div>
            <div className="presentation-wrapper__info-container">
              <div className="presentation-wrapper__info">
                <Fade cascade>
                  <PresentationTitleSmall title="OUR SPECIALISTS" />
                </Fade>
                <Fade bottom duration={500} delay={300} distance="30px">
                  <p className="presentation-wrapper__info-text ">
                    Each one of our staff members are licensed and experienced massage therapists or
                    beauty professional, with many years of experience.
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

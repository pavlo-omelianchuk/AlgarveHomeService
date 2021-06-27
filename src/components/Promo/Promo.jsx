import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Col, Row } from 'react-bootstrap';
import TitleSmall from '../TitleSmall/TitleSmall';
import ProjectImg from '../Image/ProjectImg';

const Promo = () => (
  <section id="promo">
    <Container>
      <Row className="promo-row">
        <Col className="promo-row__col" md={4} sm={12}>
          <Fade left duration={1000} delay={100} distance="300px">
            <div className="promo-wrapper__info-container">
              <div className="promo-wrapper__info">
                <Fade cascade>
                  <TitleSmall title="CONTACT US" />
                </Fade>
                <hr className="hr-styled" />
                <Fade bottom duration={1000} delay={1000} distance="30px">
                  <p className="promo-wrapper__info-text mt-5">
                    You are welcome to call but you can also book a massage online! Please feel free
                    to reach out
                  </p>
                  <span className="d-flex justify-content-center mt-5">
                    <a className="cta-btn cta-btn--pres" href="/">
                      Contacts
                    </a>
                  </span>
                </Fade>
              </div>
            </div>
          </Fade>
        </Col>
        <Col className="promo-row__col" md={4} sm={12}>
          <Fade right duration={1000} delay={100} distance="300px">
            <div className="promo-wrapper__image">
              <ProjectImg filename="Promo.jpg" alt="contacts" />
            </div>
          </Fade>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Promo;

import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Col, Row } from 'react-bootstrap';
import Tilt from 'react-tilt';
import ProjectImg from '../Image/ProjectImg';

const Promo = () => (
  <section id="promo">
    <Container>
      <Row className="promo-row">
        <Col className="promo-row__col mx-auto my-auto" md={6} sm={12}>
          <Fade left duration={1000} delay={100} distance="300px">
            <div className="promo-wrapper__info-container">
              <h3 className="promo-over-title">Best Sellers</h3>
              <h3 className="section-title-small">PRODUCTS WE USE​​</h3>
              <p>
                Through targeted massage of the desired parts of the body, your skin is regenerated
                and better supplied with oxygen, and blood circulation is stimulated. The result is
                smooth and firm skin in the &quot;problem areas of the body&quot;.
              </p>
              <Fade bottom duration={1000} delay={300} distance="30px">
                <span className="d-flex mt-5">
                  <a
                    className="cta-btn cta-btn--hero px-5 rounded"
                    href="https://effectdh.com/products"
                    target="_blank"
                    rel="noreferrer"
                  >
                    buy now
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
              <ProjectImg filename="promoImg.jpg" alt="promo" />
            </div>
          </Tilt>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Promo;

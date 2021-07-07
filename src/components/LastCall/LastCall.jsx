import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row } from 'react-bootstrap';
import StyledBackground from '../Image/LastCallBackgroundImage';

const LastCall = () => {
  const BgContent = () => (
    <>
      <h3 className="section-title-small">DON’T WASTE TIME! SCHEDULE A PROCEDURE NOW!​​</h3>
      <p>Everything you need to feel healthy and beautiful</p>
      <Fade bottom duration={1000} delay={300} distance="30px">
        <span className="d-flex justify-content-center">
          <a
            className="cta-btn cta-btn--contacts px-4 rounded"
            href="https://effectdh.com/products"
            target="_blank"
            rel="noreferrer"
          >
            make an appointment
          </a>
        </span>
      </Fade>
    </>
  );
  return (
    <Container fluid>
      <Row className="lastCall-row">
        <StyledBackground
          className="last-call-background"
          filename="background-pink.jpg"
          alt="background-pink"
          bgContent={<BgContent />}
        />
      </Row>
    </Container>
  );
};
export default LastCall;

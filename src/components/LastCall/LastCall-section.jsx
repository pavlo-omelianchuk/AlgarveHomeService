import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row } from 'react-bootstrap';
import StyledBackground from '../Image/LastCallBackgroundImage';
import { Link } from 'gatsby';

const LastCall = () => {
  const BgContent = () => (
    <div className="background-image-children">
      <h3 className="section-title-small">DON’T WASTE TIME! SCHEDULE A PROCEDURE NOW!​​</h3>
      <p>Everything you need to feel healthy and beautiful</p>
      <Fade bottom duration={1000} delay={300} distance="30px">
        <Link
          className="cta-btn cta-btn--contacts px-4 rounded"
          to="/prices-massage"
          rel="noreferrer"
        >
          <span className="d-flex justify-content-center">Book now</span>
        </Link>
      </Fade>
    </div>
  );
  return (
    <Container fluid>
      <Row>
        <StyledBackground
          className="last-call-background"
          alt="background-pink"
          filename="bgLastCall.jpg"
          bgContent={<BgContent />}
        />
      </Row>
    </Container>
  );
};
export default LastCall;

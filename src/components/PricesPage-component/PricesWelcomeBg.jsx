import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row } from 'react-bootstrap';
import StyledBackground from '../Image/PricesWelcomeBackgroundImage';

const PricesWelcomeBg = () => {
  const WelcomePrices = () => (
    <>
      <div id="best-offers" />
      <Fade bottom duration={1000} delay={300} distance="30px">
        <h3 className="prices-over-title">Best Offers</h3>
        <h1 className="prices-welcome-bg-title ">Algarve Home Massage & Beauty</h1>
      </Fade>
    </>
  );
  return (
    <Container id="prices-welcome-bg" fluid>
      <Row>
        <StyledBackground
          className="prices-page-bg"
          filename="prices-bg.jpg"
          alt="prices-bg"
          bgContent={<WelcomePrices />}
        />
      </Row>
    </Container>
  );
};

export default PricesWelcomeBg;

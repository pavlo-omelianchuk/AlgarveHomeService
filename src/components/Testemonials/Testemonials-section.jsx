import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import StyledBackground from '../Image/LastCallBackgroundImage';
import TestemonialsCarousel from '../Testemonials/TestemonialsCarousel-component';

const Testemonials = () => (
  <section id="testemonials">
    <Container id="testemonials-fluid" fluid>
      <Fade big duration={1500}>
        <StyledBackground
          className="testemonials-background"
          alt="background-pink"
          filename="bgTestemonials.jpg"
          bgContent={<TestemonialsCarousel />}
        />
      </Fade>
    </Container>
  </section>
);

export default Testemonials;

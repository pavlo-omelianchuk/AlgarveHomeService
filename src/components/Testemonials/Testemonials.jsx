import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import StyledMultiBackground from './TestemonialsBackgroundImage';

const Testemonials = () => (
  <section id="testemonials">
    <Container id="testemonials-fluid" fluid>
      <Fade big duration={4000}>
        <StyledMultiBackground />
      </Fade>
    </Container>
  </section>
);

export default Testemonials;

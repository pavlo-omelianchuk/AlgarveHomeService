import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row } from 'react-bootstrap';
import StyledMultiBackground from './TestemonialsBackgroundImage';

const Testemonials = () => (
  <section id="testemonials">
    <Container fluid>
      <Row className="testemonials-row">
        <Fade big duration={4000}>
          <StyledMultiBackground />
        </Fade>
      </Row>
    </Container>
  </section>
);

export default Testemonials;

import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import StyledBackground from '../Image/LastCallBackgroundImage';
import TestemonialsCarousel from '../Testemonials/TestemonialsCarousel-component';
import TestemonialsData from '../../mock/testemonials.json';

const { background_Image, alt } = TestemonialsData;
const imgRegEx = /(\w+\.\w+)/g;
console.log(background_Image.match(imgRegEx)[0]);

const Testemonials = () => (
  <section id="testemonials">
    <Container id="testemonials-fluid" fluid>
      <Fade big duration={1500}>
        <StyledBackground
          className="testemonials-background"
          alt={alt}
          filename="bgtestemonials.webp"
          bgContent={<TestemonialsCarousel />}
        />
      </Fade>
    </Container>
  </section>
);

export default Testemonials;

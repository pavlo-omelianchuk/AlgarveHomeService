import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import StyledBackground from '../Image/LastCallBackgroundImage';
import TestimonialsCarousel from '../Testimonials/TestimonialsCarousel-component';
import testimonialsData from '../../mock/testimonials.json';

const { background_Image, alt } = testimonialsData;
const imgRegEx = /(\w+\.\w+)/g;

const Testimonials = () => (
  <section id="testimonials">
    <Container id="testimonials-fluid" fluid>
      <Fade big duration={1500}>
        <StyledBackground
          className="testimonials-background"
          alt={alt}
          filename={background_Image.match(imgRegEx)}
          bgContent={<TestimonialsCarousel />}
        />
      </Fade>
    </Container>
  </section>
);

export default Testimonials;

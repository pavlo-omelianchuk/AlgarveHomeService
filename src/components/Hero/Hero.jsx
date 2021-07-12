import React from 'react';
import { Container, Row } from 'react-bootstrap';
import StyledBackground from '../Image/HeroImg';
import Hero from './Hero-component';

const PricesWelcomeBg = () => {
  return (
    <Container fluid>
      <Row style={{ position: 'relative' }}>
        <StyledBackground
          className="hero-bg"
          filename="pexels.jpg"
          alt="prices-bg"
          bgContent={<Hero />}
        />
      </Row>
    </Container>
  );
};

export default PricesWelcomeBg;

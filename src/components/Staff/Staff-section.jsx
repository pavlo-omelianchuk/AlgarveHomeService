import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Col, Row } from 'react-bootstrap';
import Title from '../Titles/Title-component';
import LogoImg from '../Image/LogoImg';

import StaffMaker from './StaffCreator-component';

const Staff = () => (
  <section id="staff">
    <Container>
      <Row className="staff-row-title">
        <Col sm={12}>
          <Fade bottom duration={1000} distanse="200px">
            <h3 className="staff-overtitle">Our Staff</h3>
          </Fade>
          <Fade bottom duration={1000} distanse="800px">
            <Title title="MEET OUR SPECIALISTS" />
          </Fade>
          <Fade big duration={4000}>
            <LogoImg alt="Logo" filename="component3-pink.png" />
          </Fade>
        </Col>
      </Row>
      <Row className="staff-row">
        <Col>
          <Fade big duration={4000}>
            <StaffMaker />
          </Fade>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Staff;

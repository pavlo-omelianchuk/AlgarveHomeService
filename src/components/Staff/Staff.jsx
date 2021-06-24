import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Col, Row } from 'react-bootstrap';
import Title from '../Title/Title';
import pinkComponent from '../../images/component3-pink.png';

import StaffMaker from '../StaffMaker/StaffMaker';

const Staff = () => (
  <section id="staff">
    <Container>
      <Row className="staff-row-title">
        <Col sm={12}>
          <Fade bottom duration={1000} distanse="200px">
            <h3 className="staff-subtitle">Our Staff</h3>
          </Fade>
          <Fade bottom duration={1000} distanse="800px">
            <Title title="MEET OUR EXPERTS" />
          </Fade>
          <Fade big duration={4000}>
            <img src={pinkComponent} alt="pink component" />
          </Fade>
        </Col>
      </Row>
      <Row className="staff-row">
        <Col sm={12}>
          <Fade big duration={4000}>
            <StaffMaker />
          </Fade>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Staff;

import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Col, Row } from 'react-bootstrap';
import Title from '../Titles/Title-component';
import PinkImg from '../Image/PinkImg';

import StaffMaker from './StaffCreator-component';

const Staff = () => (
  <section id="staff">
    <Row>
        <Fade bottom duration={500} distanse="200px">
          <h3 className="staff-overtitle">Our Staff</h3>
        </Fade>
        <Fade bottom duration={500} distanse="800px">
          <Title title="MEET OUR SPECIALISTS" />
        </Fade>
        <Fade big duration={1000}>
          <PinkImg alt="Logo" filename="component3-pink.png" />
        </Fade>
    </Row>
    <Row className='mr-0'>
        <Fade big duration={1500}>
          <StaffMaker />
        </Fade>
    </Row>
  </section>
);

export default Staff;

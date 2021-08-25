import React from 'react';
import { nanoid } from 'nanoid';
import { Container, Col, Row } from 'react-bootstrap';
import Tilt from 'react-tilt';
import Title from '../Titles/Title-component';
import StaffMaker from '../Staff/StaffCreator-component';
import AboutImg from '../Image/AboutImg';
import aboutUsData from '../../mock/about_us.json';

import { Link } from 'gatsby';

const { title, intro, team } = aboutUsData;

export default () => {
  const imgRegEx = /(\w+\.\w+)/g;
  
  return (
    <section id="about-us">
      <Container>
        <Title title={title} />;
        <div className="staff-row">
          <StaffMaker />
        </div>
        {team.map((staff) => (
          <Row id={staff.photo.match(imgRegEx)} key={nanoid()} className="about-us">
            <Col className="about-us__col mx-auto my-auto" lg={4} md={12}>
              <Tilt
                options={{
                  reverse: false,
                  max: 8,
                  perspective: 1000,
                  scale: 1,
                  speed: 300,
                  transition: true,
                  axis: null,
                  reset: true,
                  easing: 'cubic-bezier(.03,.98,.52,.99)',
                }}
              >
                <div className="about-us-wrapper__image">
                  <AboutImg filename={staff.photo.match(imgRegEx)} alt={staff.alt} />
                </div>
              </Tilt>
            </Col>
            <Col className="about-us__col mx-auto " lg={7} md={12}>
              <div className="about-us-wrapper__info-container">
                <div>
                  <h2 className="about-us-staff-name">{staff.name}</h2>
                  <h5 className="about-us-profession">{staff.position}</h5>
                </div>

                <p className="about-us-message">{staff.description}</p>
                <div style={{ padding: '2.5rem' }}>
                  <h4>To book treatment with {staff.name} click the button.</h4>
                  <Link to="/prices-massage/">
                    <span className="cta-btn cta-btn--blog">Book now</span>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};

import React from 'react';
import { Fade } from 'react-reveal';
import Tilt from 'react-tilt';
import { Container, Col, Row } from 'react-bootstrap';
import AboutImg from '../Image/AboutImg';
import Title from '../Titles/Title-component';
import StaffMaker from '../Staff/StaffCreator-component';
import { Link } from 'gatsby';

export default () => {
  const staffArray = [
    {
      filename: 'staffDanylo',
      alt: 'Massage Therapist Danylo',
      title: 'Danylo',
      sub: 'Massage Therapist',
      info: `Danylo is a physiotherapist with more than 10 years of experience as a massage  therapist.  He came to Sagres 10 years ago and has since been worprofessional  therapist and Spa supervisor.  Recently, he created "EffectDH" massage tools which you can efor anti  - cellulitis massages or sciatic nerve issues.`,
    },
    {
      filename: 'staffLena',
      alt: 'Micropigmentation Expert Lena',
      title: 'Lena Fox',
      sub: 'Micropigmentation Expert',
    },
    {
      filename: 'staffTania',
      alt: 'Beautician Tania',
      title: 'Tania​​​',
      sub: 'Beauty Therapist',
    },
    {
      filename: 'staffOlga',
      alt: 'Hairdresser Olga',
      title: 'Olga ',
      sub: 'Hairdresser',
    },
    {
      filename: 'staffInes',
      alt: 'Masseur  Ines',
      title: 'Ines',
      sub: 'Massage Therapist',
    },
    {
      filename: 'staffLyuda',
      alt: 'Reflexology Therapist Lyuda',
      title: 'Lyuda',
      sub: 'Reflexology Therapist',
    },
  ];
  return (
    <section id="about-us">
      <Container>
        <Title title="MEET OUR SPECIALISTS" />;
        <div className="staff-row">
          <StaffMaker />
        </div>
        {staffArray.map((staff) => (
          <Row id={staff.filename} key={staff.filename} className="about-us">
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
                  <AboutImg filename={staff.filename} alt="about" />
                </div>
              </Tilt>
            </Col>
            <Col className="about-us__col mx-auto " lg={7} md={12}>
              <Fade duration={1000} delay={100} distance="300px">
                <div className="about-us-wrapper__info-container">
                  <div>
                    <h2 className="about-us-staff-name">{staff.title}</h2>
                    <h5 className="about-us-profession">{staff.sub}</h5>
                  </div>

                  <p className="about-us-massage">{staff.info}</p>
                  <div>
                    <h4>To book treatment with {staff.title} click the button.</h4>
                    <Link to="/prices-massage/">
                      <span className="cta-btn cta-btn--blog">Book now</span>
                    </Link>
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};

import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import TestemonialImg from '../Image/TestemonialImg';
import PinkImg from '../Image/StaffPinkImg';

const TestimonialsMaker = ({ overTitle, title, message, img, alt, name }) => (
  <Fade bottom duration={1000} distance="500px">
    <div>
      <div>
        <h3 className="testimonials-overtitle">{overTitle}</h3>
        <h3 className="section-title-small">{title}</h3>
        <PinkImg alt="Logo" filename="component3-pink.png" />
      </div>
      <br />
      <div>
        <p className="testimonials-message">{message}</p>
        <div className="testimonials-person">
          <TestemonialImg alt={alt} filename={img} />
          <h6 className="testimonials-person-name">{name}</h6>
        </div>
      </div>
    </div>
  </Fade>
);

TestimonialsMaker.propTypes = {
  overTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  img: PropTypes.array.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TestimonialsMaker;

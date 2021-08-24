import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import TestemonialImg from '../Image/TestemonialImg';
import PinkImg from '../Image/StaffPinkImg';

const TestemonialsMaker = ({ overTitle, title, message, img, alt, name }) => (
  <Fade bottom duration={1000} distance="500px">
    <div>
      <div>
        <h3 className="testemonials-overtitle">{overTitle}</h3>
        <h3 className="section-title-small">{title}</h3>
        <PinkImg alt="Logo" filename="component3-pink.png" />
      </div>
      <br />
      <div>
        <p className="testemonials-message">{message}</p>
        <div className="testemonials-person">
          <TestemonialImg alt={alt} filename={img} />
          <h6 className="testemonials-person-name">{name}</h6>
        </div>
      </div>
    </div>
  </Fade>
);

TestemonialsMaker.propTypes = {
  overTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TestemonialsMaker;

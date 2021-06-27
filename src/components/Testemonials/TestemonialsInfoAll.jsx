import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import TestemonialImg from '../Image/TestemonialImg';
import pinkComponent from '../../images/component3-pink.png';

const TestemonialsInfoAll = ({ overTitle, title, message, img, alt, name }) => (
  <Fade bottom duration={1000} distance="500px">
    <div>
      <div>
        <h3 className="testemonials-over-title">{overTitle}</h3>
        <h3 className="section-title-small">{title}</h3>
      </div>
      <img src={pinkComponent} alt="pink component" />
      <br />
      <div>
        <p>{message}</p>
        <div className="testemonials-person">
          <TestemonialImg alt={alt} filename={img} />
          <h6 className="testemonials-person-name">{name}</h6>
        </div>
      </div>
    </div>
  </Fade>
);

TestemonialsInfoAll.propTypes = {
  overTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TestemonialsInfoAll;

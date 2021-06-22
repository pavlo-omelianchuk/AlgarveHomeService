import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

const TitleSmall = ({ title }) => (
  <Fade bottom duration={1000} delay={300} distance="0px">
    <h3 className="section-title-small">{title}</h3>
  </Fade>
);

TitleSmall.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleSmall;

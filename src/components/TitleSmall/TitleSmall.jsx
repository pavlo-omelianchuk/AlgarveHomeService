import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

const TitleSmall = ({ title, sub }) => (
  <Fade bottom duration={1000} delay={300} distance="0px">
    <div className="title-small-flex">
      <h3 className="section-title-small">{title}</h3>
      <h6>{sub}</h6>
      <hr className="hr-styled" />
    </div>
  </Fade>
);

TitleSmall.propTypes = {
  title: PropTypes.string.isRequired,
  sub: PropTypes.string,
};

export default TitleSmall;

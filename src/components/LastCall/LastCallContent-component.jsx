import React from 'react';
import lastCallData from '../../mock/lastCall.json';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';

const { title, sub_title, button, link_to } = lastCallData;

export default function BgContent() {
  return (
    <div className="background-image-children">
      <h3 className="section-title-small">{title}​​</h3>
      <p>{sub_title}</p>
      <Fade bottom duration={1000} delay={300} distance="30px">
        <Link className="cta-btn cta-btn--contacts px-4 rounded" to={link_to} rel="noreferrer">
          <span className="d-flex justify-content-center">{button}</span>
        </Link>
      </Fade>
    </div>
  );
}
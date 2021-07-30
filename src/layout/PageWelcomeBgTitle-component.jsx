import React from 'react';
import Fade from 'react-reveal/Fade';

const PageWelcomeBgTitle = ({overTitle, title}) => (
  <>
    <div id="best-offers" />
    <Fade bottom duration={1000} delay={300} distance="30px">
      <h3 className="prices-over-title">{overTitle}</h3>
      <h1 className="prices-welcome-bg-title ">{title}</h1>
    </Fade>
  </>
);

export default PageWelcomeBgTitle;

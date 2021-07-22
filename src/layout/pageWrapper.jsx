import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header-section';

import loadable from '@loadable/component';

const Footer = loadable(() => import('../components/Footer/Footer-section'));

function PageWrapepr({ children, footerLinkTo }) {
  return (
    <>
      <Header />
      {children}
      <Footer linkTo={footerLinkTo} />
    </>
  );
}

PageWrapepr.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};
export default PageWrapepr;

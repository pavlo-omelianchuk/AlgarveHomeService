import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header-section';
import Footer from '../components/Footer/Footer-section';

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

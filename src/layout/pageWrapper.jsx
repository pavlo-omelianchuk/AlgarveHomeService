import React from 'react';
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

export default PageWrapepr;

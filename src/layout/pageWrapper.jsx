import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header-section';
import Footer from '../components/Footer/Footer-section';
import { PortfolioProvider } from '../context/context';
import { heroData, footerData } from '../mock/data';

function PageWrapepr({ children, footerLinkTo }) {
  const [hero, setHero] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider
      value={{
        hero,
        footer,
      }}
    >
      <Header />
      {children}
      <Footer linkTo={footerLinkTo} />
    </PortfolioProvider>
  );
}

PageWrapepr.propTypes = {
  children: PropTypes.element,
};
export default PageWrapepr;

import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import Presentation from './Presentation/Presentation';
import Services from './Services/Services';
import Staff from './Staff/Staff';
import Testemonials from './Testemonials/Testemonials';
import Promo from './Promo/Promo';
import LastCall from './LastCall/LastCall';

import { PortfolioProvider } from '../context/context';

import { heroData, footerData } from '../mock/data';

import PageWrapepr from '../layout/pageWrapper';

function App() {
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
      <PageWrapepr footerLinkTo="hero">
        <>
          <Hero />
          <Presentation />
          <Services />
          <Staff />
          <Testemonials />
          <Promo />
          <LastCall />
        </>
      </PageWrapepr>
    </PortfolioProvider>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero-section';
import Presentation from './Presentation/Presentation-section';
import Services from './Services/Services-section';
import Staff from './Staff/Staff-section';
import Testemonials from './Testemonials/Testemonials-section';
import Promo from './Promo/Promo-section';
import LastCall from './LastCall/LastCall-section';

import { PortfolioProvider } from '../context/context';

import heroData, { footerData } from '../mock/data';

import PageWrapepr from '../layout/pageWrapper';

function App() {

  return (

      <PageWrapepr footerLinkTo="home">
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
  );
}

export default App;

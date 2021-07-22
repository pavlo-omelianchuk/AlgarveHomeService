import React from 'react';
import PageWrapepr from '../layout/pageWrapper';
import Hero from './Hero/Hero-section';
import Presentation from './Presentation/Presentation-section';

import loadable from '@loadable/component';

// import Services from './Services/Services-section';
// import Staff from './Staff/Staff-section';
// import Testemonials from './Testemonials/Testemonials-section';
// import Promo from './Promo/Promo-section';
// import LastCall from './LastCall/LastCall-section';

const Services = loadable(() => import('./Services/Services-section'));
const Staff = loadable(() => import('./Staff/Staff-section'));
const Testemonials = loadable(() => import('./Testemonials/Testemonials-section'));
const Promo = loadable(() => import('./Promo/Promo-section'));
const LastCall = loadable(() => import('./LastCall/LastCall-section'));

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

import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Footer from './Footer/Footer';
import Presentation from './Presentation/Presentation';
import Services from './Services/Services';
import Staff from './Staff/Staff';
import Testemonials from './Testemonials/Testemonials';
import Promo from './Promo/Promo';
import LastCall from './LastCall/LastCall';

import { PortfolioProvider } from '../context/context';

import { heroData, footerData } from '../mock/data';

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
      <Header />
      <Hero />
      <Presentation />
      <Services />
      <Staff />
      <Testemonials />
      <Promo />
      <LastCall />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;

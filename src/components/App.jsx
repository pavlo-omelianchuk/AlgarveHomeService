import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
// import About from './About/About';
// import Projects from './Projects/Projects';
// import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Presentation from './Presentation/Presentation';
import Services from './Services/Services';
import Staff from './Staff/Staff';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  // aboutData,
  // projectsData,
  // contactData,
  footerData,
} from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  // const [about, setAbout] = useState({});
  // const [projects, setProjects] = useState([]);
  // const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    // setAbout({ ...aboutData });
    // setProjects([...projectsData]);
    // setContact({ ...contactData });
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
      {/* <About />
      <Projects />
      <Contact /> */}
      <Footer />
    </PortfolioProvider>
  );
}

export default App;

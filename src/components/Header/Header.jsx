import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import LogoImg from '../Image/LogoImg';

const Header = () => {
  const header = [
    '/#home',
    `Algarve Home Massage & Beauty`,
    '/#home',
    'Home',
    '/#services',
    'Services',
    '/#testemonials',
    'Testemonials',
    '/prices-massage',
    'Prices',
    '/#presentation',
    'About us',
  ];
  const [
    logoHREF,
    brandName,
    linkURL1,
    linkText1,
    linkURL2,
    linkText2,
    linkURL3,
    linkText3,
    linkURL4,
    linkText4,
    linkURL5,
    linkText5,
  ] = header;
  return (
    <Navbar expand="lg" fixed="top">
      <LogoImg link={logoHREF} alt="Logo" filename="faviconD.png" />
      <Navbar.Brand href={logoHREF}>{brandName}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href={linkURL1} className="px-4">
            {linkText1}
          </Nav.Link>
          <Nav.Link href={linkURL2} className="px-4">
            {linkText2}
          </Nav.Link>
          <Nav.Link href={linkURL3} className="px-4">
            {linkText3}
          </Nav.Link>
          <Nav.Link href={linkURL4} className="px-4">
            {linkText4}
          </Nav.Link>
          <Nav.Link href={linkURL5}>{linkText5}</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

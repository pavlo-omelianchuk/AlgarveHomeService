import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import Logo from '../../images/logo.png';

const Header = () => {
  const header = [
    '/#hero',
    'Mobile Beauty Algarve',
    '/#hero',
    'Home',
    '/#services',
    'Services',
    '/#testemonials',
    'Testemonials',
    '/prices',
    'Prices',
    '/#about-us',
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
      <Navbar.Brand href={logoHREF}>
        <img
          alt="logo"
          src={Logo}
          width="40"
          height="40"
          className="d-inline-block align-top mr-4"
        />
        {brandName}
      </Navbar.Brand>
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

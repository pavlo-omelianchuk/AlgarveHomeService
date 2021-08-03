import React from 'react';
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';
import LogoImg from '../Image/LogoImg';

const Header = () => {
  const header = [
    '/',
    `Algarve Home Massage & Beauty`,
    '/',
    'Home',
    '/#services',
    'Services',
    '/blog',
    'Blog',
    '/#testemonials',
    'Testemonials',
    '/prices-massage',
    'Prices',
    '/#staff',
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
    linkURL6,
    linkText6,
  ] = header;
  return (
    <Navbar expand="lg" fixed="top">
      <NavbarBrand href={logoHREF}>
        <LogoImg />
      </NavbarBrand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mr-5">
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
          <Nav.Link href={linkURL5} className="px-4">
            {linkText5}
          </Nav.Link>
          <Nav.Link href={linkURL6}>{linkText6}</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

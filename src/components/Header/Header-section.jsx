import React from 'react';
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';
import NavLink from '../NavBar-components/NavLink-component';
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
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mr-5">
          <NavLink to={linkURL1} className="px-4">
            {linkText1}
          </NavLink>
          <NavLink to={linkURL2} className="px-4">
            {linkText2}
          </NavLink>
          <NavLink to={linkURL3} className="px-4">
            {linkText3}
          </NavLink>
          <NavLink to={linkURL4} className="px-4">
            {linkText4}
          </NavLink>
          <NavLink to={linkURL5} className="px-4">
            {linkText5}
          </NavLink>
          <NavLink to={linkURL6}>{linkText6}</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

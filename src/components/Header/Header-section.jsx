import React from 'react';
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';
import NavLink from '../NavBar-components/NavLink-component';
import AboutImg from '../Image/AboutImg';
import headerData from '../../mock/header.json';

const { logo_link_to, menu_tab, logo, alt } = headerData;

const imgRegEx = /(\w+\.\w+)/g;

const Header = () => (
  <Navbar expand="lg" fixed="top">
    <NavbarBrand href={logo_link_to}>
      <AboutImg filename={logo.match(imgRegEx)} alt={alt} />
    </NavbarBrand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto mr-5">
        {menu_tab &&
          menu_tab.map((nav_item) => {
            return (
              <NavLink to={nav_item.nav_link} className="px-4">
                {nav_item.nav_title}
              </NavLink>
            );
          })}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
export default Header;

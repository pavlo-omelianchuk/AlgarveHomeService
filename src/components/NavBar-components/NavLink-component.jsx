import React from 'react';
import { Link } from 'gatsby';

const linkStyles = {
  color: 'black',
  display: 'inline-block',
  margin: '0 0.5rem',
  padding: '0.25rem',
  textDecoration: 'none',
}

const NavLink = ({ children, to }) => (
  <Link className='nav-link' to={to} style={linkStyles}>
    {children}
  </Link>
);

export default NavLink;

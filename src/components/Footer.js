import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <footer>
    <NavLink to='/about' activeClassName="footer__navlink--active" exact={true}>About</NavLink>
    <NavLink to='/help' activeClassName="footer__navlink--active">Help</NavLink>
    <NavLink to='/contact' activeClassName="footer__navlink--active">Contact</NavLink>
    <div> &copy; 2018 All rights reserved. Designed by Alan Yin</div>
  </footer>
);

export default Footer;

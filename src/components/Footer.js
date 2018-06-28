import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
<footer className="footer">
  <div className="row">
      <div className="col-7">
          <div className="footer__navigation">
              <ul className="footer__list">
                  <li className="footer__item"><NavLink to='/' className="footer__link" activeClassName="footer__navlink--active" exact={true}>Home</NavLink></li>
                  <li className="footer__item"><NavLink to='/about' className="footer__link" activeClassName="footer__navlink--active" exact={true}>About</NavLink></li>
                  <li className="footer__item"><NavLink to='/help' className="footer__link" activeClassName="footer__navlink--active" exact={true}>Help</NavLink></li>
                  <li className="footer__item"><NavLink to='/contact' className="footer__link" activeClassName="footer__navlink--active" exact={true}>Contact</NavLink></li>
              </ul>
          </div>
      </div>
      <div className="col-5">
          <p className="footer__copyright">&copy; 2018 All rights reserved. Designed by Alan Yin</p>
      </div>
  </div>
</footer>
);

export default Footer;

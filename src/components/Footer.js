import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
<footer className="footer">
    <div className="footer__navigation">
        <ul className="footer__list">
            <li className="footer__item"><NavLink to='/planets' className="footer__link" activeClassName="footer__navlink--active" exact={true}>Home</NavLink></li>
            <li className="footer__item"><NavLink to='/about' className="footer__link" activeClassName="footer__navlink--active" exact={true}>About</NavLink></li>
            <li className="footer__item"><NavLink to='/help' className="footer__link" activeClassName="footer__navlink--active" exact={true}>Help</NavLink></li>
            <li className="footer__item"><NavLink to='/contact' className="footer__link" activeClassName="footer__navlink--active" exact={true}>Contact</NavLink></li>
        </ul>
    </div>
    <div className="footer__copyright">
        <p>&copy; 2018 All rights reserved. Designed by Alan Yin</p>
    </div>
</footer>
);

export default Footer;

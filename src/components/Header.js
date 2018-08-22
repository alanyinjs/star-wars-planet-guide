import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="header__title">
      <h1>Star Wars Planet Guide</h1>
    </div>
    <div className="header__list">
      <ul>
        <li className="header__item"><NavLink to='/planets' className="header__link" activeClassName="header__navlink--active" exact={true}>Home</NavLink></li>
        <li className="header__item"><NavLink to='/about' className="header__link" activeClassName="header__navlink--active" exact={true}>About</NavLink></li>
        <li className="header__item"><NavLink to='/help' className="header__link" activeClassName="header__navlink--active" exact={true}>Help</NavLink></li>
        <li className="header__item"><NavLink to='/contact' className="header__link" activeClassName="header__navlink--active" exact={true}>Contact</NavLink></li>
      </ul>
    </div>
  </header>
);


export default Header;
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="row">
      <div className="col-4">
        <div className="navbar-brand"><h1 className="header__title">Star Wars Planet Guide</h1></div>
      </div>
      <div className="col-8 d-flex">
              <ul className="header__list row">
                  <li className="header__item"><NavLink to='/' className="header__link" activeClassName="header__navlink--active" exact={true}>Home</NavLink></li>
                  <li className="header__item"><NavLink to='/about' className="header__link" activeClassName="header__navlink--active" exact={true}>About</NavLink></li>
                  <li className="header__item"><NavLink to='/help' className="header__link" activeClassName="header__navlink--active" exact={true}>Help</NavLink></li>
                  <li className="header__item"><NavLink to='/contact' className="header__link" activeClassName="header__navlink--active" exact={true}>Contact</NavLink></li>
              </ul>
      </div>
    </div>
  </header>
);



export default Header;
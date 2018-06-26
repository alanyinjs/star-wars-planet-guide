import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Star Wars Planet Guide</h1>
    <NavLink to='/' activeClassName="header__navlink--active" exact={true}>Planets</NavLink>
    <NavLink to='' activeClassName="header__navlink--active">People</NavLink>
    <NavLink to='' activeClassName="header__navlink--active">Films</NavLink>
  </header>
);


export default Header;
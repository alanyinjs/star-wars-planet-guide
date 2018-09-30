import React from 'react';
import { NavLink } from 'react-router-dom';
import TopNav from './TopNav.js';
import DropdownMenu from './DropdownMenu.js';

export default class Header extends React.Component {
  state = { expanded: false };

  toggleDropdown = () => {
    this.setState(prevState => {
      console.log(prevState.expanded);
      return {
        expanded: !prevState.expanded
      }
    });
  }

  render() {
    return (
      <header className="header">
        <div className="header__title">
          <h1>Star Wars Planet Guide</h1>
        </div>
        <TopNav
          toggleDropdown={this.toggleDropdown}
          active={this.state.expanded}
        />
        <div className="header__list">
          <ul>
            <li className="header__item"><NavLink to='/planets' className="header__link" activeClassName="header__navlink--active" exact={true}>Home</NavLink></li>
            <li className="header__item"><NavLink to='/about' className="header__link" activeClassName="header__navlink--active" exact={true}>About</NavLink></li>
            <li className="header__item"><NavLink to='/help' className="header__link" activeClassName="header__navlink--active" exact={true}>Help</NavLink></li>
            <li className="header__item"><NavLink to='/contact' className="header__link" activeClassName="header__navlink--active" exact={true}>Contact</NavLink></li>
          </ul>
        </div>
        <DropdownMenu expanded={this.state.expanded}/>
      </header>
    );
  }
}

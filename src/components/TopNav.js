import React from 'react';

const TopNav = (props) => (
  <div
    className={`topnav ${props.active ? 'topnav--active' : ''}`} onClick={props.toggleDropdown}>
    <i className="fa fa-th-list topnav-icon"></i>
    <h6 className="topnav-label">Menu</h6>
  </div>
);

export default TopNav;

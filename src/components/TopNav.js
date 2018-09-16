import React from 'react';

const TopNav = (props) => (
  <div
    className={`topnav ${props.active ? 'topnav--active' : ''}`}>
    <input type="checkbox"/>
    <div>PLACEHOLDER</div>
    <div>PLACEHOLDER</div>
    <div>PLACEHOLDER</div>
    <button className='btn btn-primary' onClick={props.onDropdownClick}>HAHAHAHHAHAHAHHAHAHAH</button>
  </div>
);

export default TopNav;

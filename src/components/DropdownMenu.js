import React from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = (props) => (
  <div className="dropdown" aria-expanded={props.expanded}>
    <ul className="dropdown__list">
      <li className="dropdown__item"><Link to='/planets' className="dropdown__link">Home</Link></li>
      <li className="dropdown__item"><Link to='/about' className="dropdown__link">About</Link></li>
      <li className="dropdown__item"><Link to='/help' className="dropdown__link">Help</Link></li>
      <li className="dropdown__item"><Link to='/contact' className="dropdown__link">Contact</Link></li>
    </ul>
  </div>
);

export default DropdownMenu;

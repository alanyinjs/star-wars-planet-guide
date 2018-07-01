import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ to, className, children, ...rest }) => (
  <Link className={className.concat(" ", "btn")} to={to}>
    {children}
  </Link>
)

export default Button;
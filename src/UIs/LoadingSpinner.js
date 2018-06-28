import React from 'react';
import MDSpinner from 'react-md-spinner';

const LoadingSpinner = ({ color, size, className, ...rest }) => (
  <div className={className}>
    <MDSpinner 
      size={100} 
      color1={color}
      color2={color}
      color3={color}
      color4={color}
      {...rest}
    />
  </div>
);

export default LoadingSpinner;
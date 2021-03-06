import React from 'react';

import LoadingSpinner from '../UIs/LoadingSpinner';

const LoadingPage = () => (
  <div className="landing">
    <div className="landing__text-box">
      <h1 className="heading-primary">
          <div className="landing-heading__text-box--sub">
            <span className="heading-primary--sub">Loading results...</span>
          </div>
      </h1>
    </div>
    <LoadingSpinner 
      color="#FCE852" 
      className="landing__loader" 
      size={100}
    />
  </div>
)

export default LoadingPage;
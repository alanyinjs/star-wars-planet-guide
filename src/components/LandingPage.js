import React from 'react';
import MDSpinner from 'react-md-spinner';

const LandingPage = () => (
  <div className="landing">
    <div className="landing__text-box">
        <h1 className="heading-primary">
            <div className="landing-heading__text-box--main">
              <span className="heading-primary--main">Star Wars Planet Guide</span>
            </div>
            <div className="landing-heading__text-box--sub">
              <span className="heading-primary--sub">The Essential Guide to Planets and Moons</span>
            </div>
        </h1>
    </div>
    <div className="landing__loader">
      <MDSpinner 
        size={100} 
        color1="#FCE852" 
        color2="#FCE852" 
        color3="#FCE852" 
        color4="#FCE852"
      />
    </div>
  </div>


)

export default LandingPage;
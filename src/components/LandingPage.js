import React from 'react';

import Button from '../UIs/Button';
import LandingPageContent from '../UIs/LandingPageContent';
import LoadingSpinner from '../UIs/LoadingSpinner';

const LandingPage = (props) => props.isFetchingPlanetData ? (
  <div className="landing">
    <LandingPageContent />
    <LoadingSpinner 
      color="#FCE852" 
      className="landing__loader" 
      size={100}
    />
  </div>
):(
  <div className="landing">
    <LandingPageContent />
    <Button to="/planets" className="btn-warning landing__loader">
      Discover Planets
    </Button>
  </div>
)

export default LandingPage;
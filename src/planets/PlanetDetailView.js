import React from 'react';

const PlanetDetailView = ({ location, history, match: { params : { id } } }) => {
  return (
    <div>
      <h1>Viewing Planet: {id}</h1>
    </div>
  )
}

export default PlanetDetailView;
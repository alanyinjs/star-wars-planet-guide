import React from 'react';

const PlanetDetailView = (props) => {
  return <h1>Viewing Planet: {props.match.params.id}</h1>
}

export default PlanetDetailView;
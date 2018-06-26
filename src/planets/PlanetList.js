import React from 'react';
import PlanetListItem from './PlanetListItem';

const PlanetList = (props) => (
  <div>
    {
      props.planets.length === 0 ? (
        <p>No matching planet</p>
      ) : (
        props.planets.map(planet => (
          <PlanetListItem key={planet.name} {...planet} />
        ))
      )
    }
  </div>
);

export default PlanetList;
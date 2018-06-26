import React from 'react';
import { Link } from 'react-router-dom';

const PlanetListItem = ({ name, population, terrain }) => (
  <div>
    <p>
      {name} - {population} - {terrain}
    </p>
    <Link to={`/planet/${name}`}>
      Planet Details
    </Link>
  </div>
);

export default PlanetListItem;
import React from 'react';
import { Link } from 'react-router-dom';

const PlanetListItem = ({ id, name, population, terrain }) => (
  <div>
    <p>
      {name} - {population} - {terrain}
    </p>
    <Link to={`/planet/${id}`}>
      Planet Details
    </Link>
  </div>
);

export default PlanetListItem;
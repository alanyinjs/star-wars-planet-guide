import React from 'react';
import { Link } from 'react-router-dom';

const PlanetListItem = ({ id, index, name, population, terrain }) => (
  <tr>
    <th>{index + 1}</th>
    <td>{name}</td>
    <td>{population}</td>
    <td>{terrain}</td>
    <td>
      <Link className='btn btn-primary' to={`/planets/${id}`}>
        Planet Details
      </Link>
    </td>
  </tr>
);

export default PlanetListItem;
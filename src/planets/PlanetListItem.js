import React from 'react';
import { Link } from 'react-router-dom';

const PlanetListItem = ({ id, index, name, population, terrain }) => (
  <tr className="planet-list__item">
    <th className="planet-list__attr planet-list__attr--short">{index + 1}</th>
    <td className="planet-list__attr planet-list__attr--short">{name}</td>
    <td className="planet-list__attr">{population}</td>
    <td className="planet-list__attr">{terrain}</td>
    <td className="planet-list__attr">
      <Link className='btn btn-primary' to={`/planets/${id}`}>
        Planet Details
      </Link>
    </td>
  </tr>
);

export default PlanetListItem;
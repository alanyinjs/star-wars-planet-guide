import React from 'react';
import PlanetListItem from './PlanetListItem';

const PlanetList = ({planets, indexOfStart}) => (
  <div>
    {
      planets.length === 0 ? (
        <p>No matching planet</p>
      ) : (
        <div className='container'>
          <table className='table'>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Population</th>
                <th>Terrain</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="planet-list">
              {
                planets.map( (planet, index) => (
                  <PlanetListItem key={planet.name} {...planet} index={indexOfStart + index}/>
                ))
              }
            </tbody>
          </table>
        </div>
      )
    }
  </div>
);

export default PlanetList;

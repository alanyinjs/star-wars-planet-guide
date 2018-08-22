import React from 'react';
import PlanetListItem from './PlanetListItem';
import AddPlanetForm from './AddPlanetForm';

const PlanetList = (props) => (
  <div>
    {
      props.planets.length === 0 ? (
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
            <AddPlanetForm addPlanet={props.addPlanet}/>
            <tbody>
              {
                props.planets.map((planet, index) => (
                  <PlanetListItem key={planet.name} {...planet} index={index}/>
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
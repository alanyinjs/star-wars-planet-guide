import React from 'react';
import { Link } from 'react-router-dom';

import LoadingSpinner from '../UIs/LoadingSpinner';

import { fetchPlanetById } from '../api/planets';


export default class PlanetDetailView extends React.Component {
  state = {
    isLoading: false,
    planet: {}
  };

  componentDidMount() {
    this.setState({isLoading: true});
    fetchPlanetById(this.props.match.params.id)
      .then(planet => {
        this.setState ({
          isLoading: false,
          planet
        });
      })
      .catch(e => {
        alert('error fetching planet details');
      });
  }

  render() {
    const { 
      name = '',
      rotPeriod = '',
      orbPeriod = '',
      diameter = '',
      climate = '',
      gravity = '',
      terrain = '',
      surfaceWater = '',
      population = '',
      residentNames = []
    } = this.state.planet;

    const cardStyle = {width: '50rem'};

    return this.state.isLoading ? (
      <div className="planet-card">
        <LoadingSpinner 
          color="#FCE852" 
          className="planet-card__loader" 
          size={100}
        />
      </div>
    ) : (
      <div className="container">
        <div className="card text-center planet-card" style={cardStyle}>
          <img 
            className="card-img-top" src="https://drscdn.500px.org/photo/14992149/q%3D80_m%3D2000/v2?webp=true&sig=3076023a9a09be6772d42759668d8498ef224a117b731d04c54634e2fd468ce1" 
            alt="Planet"
          />
          <h2 className="card-header">
            {name}
          </h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Diameter: {diameter}</li>
            <li className="list-group-item">Population: {population}</li>
            <li className="list-group-item">Gravity: {gravity}</li>
            <li className="list-group-item">Terrain: {terrain}</li>
            <li className="list-group-item">Climate: {climate}</li>
            <li className="list-group-item">Surface Water: {surfaceWater}</li>
            <li className="list-group-item">Orbital Period: {orbPeriod}</li>
            <li className="list-group-item">Rotation Period: {rotPeriod}</li>
            <li className="list-group-item">Residents: 
              <ul className="planet-card__list">
                {residentNames.map(residentName => (
                  <li key={residentName}>{residentName}</li>
                ))}
              </ul>
              <Link className='btn btn-primary' to={`/`}>
                Back
              </Link>
            </li>

          </ul>
        </div>
      </div>
    );
  }
}


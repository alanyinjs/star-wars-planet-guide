import React from 'react';
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
    console.log(residentNames);
    return this.state.isLoading ? (
      <div>Loading</div>
    ) : (
      <div>
        <p>
          {name} - {rotPeriod} - {orbPeriod} - {diameter} - {climate} - {gravity} - {terrain} - {surfaceWater} - {population}
        </p>
        <ul>
          {residentNames.map(residentName => (
            <li key={residentName}>{residentName}</li>
          ))}
        </ul>

      </div>
    );
  }
}


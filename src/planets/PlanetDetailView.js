import React from 'react';
import { fetchPlanetByName } from '../api/planets';

export default class PlanetDetailView extends React.Component {
  state = {
    isLoading: false,
    planet: {}
  };

  componentDidMount() {
    this.setState({isLoading: true});
    fetchPlanetByName(this.props.match.params.id)
      .then(planet => {
        this.setState ({
          isLoading: false,
          planet
        });
      })
      .catch( e => {
        alert('error fetching planet details');
      })
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
      residents = []
    } = this.state.planet;
    return this.state.isLoading ? (
      <div>Loading</div>
    ) : (
      <div>
        {name} - {rotPeriod} - {orbPeriod} - {diameter} - {climate}
      </div>
    );
  }
}
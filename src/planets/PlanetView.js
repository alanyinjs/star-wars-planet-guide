import React from 'react';

import PlanetList from './PlanetList';
import PlanetListFilters from './PlanetListFilters';

import { getVisiblePlanets } from '../utils/planets';

export default class PlanetView extends React.Component {
  state = {
    filter: '',
    sortBy: 'name-a-to-z'
  };

  setFilter = e => {
    console.log('filter changing');
    this.setState({filter: e.target.value});
  }

  setSortBy = e => {
    console.log('sortby changing');
    this.setState({sortBy: e.target.value});
  }

  render() {
    const planetState = {
      ...this.state,
      planets: this.props.planets
    };
    const visiblePlanets = getVisiblePlanets( planetState );
    return (
      <div>
        <PlanetListFilters 
          setFilter={this.setFilter} 
          setSortBy={this.setSortBy} 
          filter={this.state.filter} 
          sortBy={this.state.sortBy} 
        />
        <PlanetList planets={visiblePlanets} />
      </div>
    );
  }
}
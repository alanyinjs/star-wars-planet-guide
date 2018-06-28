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
      <div className="container">
        <div className="row d-flex flex-row align-items-center">
          <div className="col-3">
            <p>Displaying {visiblePlanets.length} of {planetState.planets.length} planets</p>
          </div>
          <div className="col-9">
            <PlanetListFilters 
              setFilter={this.setFilter} 
              setSortBy={this.setSortBy} 
              filter={this.state.filter} 
              sortBy={this.state.sortBy} 
            />
          </div>
        </div>
        <PlanetList planets={visiblePlanets} />
      </div>
    );
  }
}
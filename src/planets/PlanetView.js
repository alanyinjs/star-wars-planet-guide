import React from 'react';

import PlanetList from './PlanetList';
import PlanetListFilters from './PlanetListFilters';

import { fetchPlanets } from '../api/planets';
import { getVisiblePlanets } from '../utils/planets';

export default class PlanetView extends React.Component {
  state = {
    isLoading: false,
    planets: [],
    filter: '',
    sortBy: 'name'
  };

  componentDidMount() {
    this.setState({isLoading: true});
    fetchPlanets()
      .then(data => {
        console.log(data);
        this.setState({
          isLoading: false,
          planets: data
        });
      })
      .catch( e => {
        alert('error fetching planets');
      })
  }

  setFilter = e => {
    console.log('filter changing');
    this.setState({filter: e.target.value});
  }

  setSortBy = e => {
    console.log('sortby changing');
    this.setState({sortBy: e.target.value});
  }

  render() {
    const visiblePlanets = getVisiblePlanets( this.state );
    return this.state.isLoading ? (
      <div>Loading</div>
    ) : (
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
import React from 'react';

import LoadingPage from '../components/LoadingPage';
import PlanetList from './PlanetList';
import PlanetListFilters from './PlanetListFilters';

import { getPlanets } from '../api/planets';
import { getVisiblePlanets } from '../utils/planets';

export default class PlanetView extends React.Component {
  state = {
    isLoading: true,
    planets: [],
    filter: '',
    sortBy: 'name'
  };

  componentDidMount() {
    this.setState({isLoading: true});
    getPlanets()
      .then((planetResults) => {
        this.setState({
          isLoading: false,
          planets: planetResults
        });
      });
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
    const visiblePlanets = getVisiblePlanets(this.state);
    return this.state.isLoading ? (
      <LoadingPage />
    ) : (
      <div className="container">
        <div className="row d-flex flex-row align-items-center">
          <div className="col-3">
            <p>Displaying {visiblePlanets.length} of {this.state.planets.length} planets</p>
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
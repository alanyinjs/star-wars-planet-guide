import React from 'react';

import LoadingPage from '../components/LoadingPage';
import PlanetList from './PlanetList';
import PlanetListFilters from './PlanetListFilters';
import Pagination from '../components/Pagination';

import { getPlanets } from '../api/planets';
import { getVisiblePlanets } from '../utils/planets';

export default class PlanetView extends React.Component {
  constructor(){
    super();
    this.state = {
      isLoading: true,
      planets: [],
      filter: '',
      sortBy: 'name-a-to-z',
      currentPage: 1,
      planetsPerPage: 10,
    };
  }

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

  onPageChange = e => {
    this.setState({currentPage: parseInt(e.target.innerHTML)});
  }

  setFilter = e => {
    this.setState({
      filter: e.target.value,
      currentPage: 1,
    });
  }

  setSortBy = e => {
    this.setState({sortBy: e.target.value});
  }

  render() {
    const visiblePlanets = getVisiblePlanets(this.state);
    const pageNumber = Math.ceil(visiblePlanets.length / this.state.planetsPerPage);
    const indexOfEnd = this.state.planetsPerPage * this.state.currentPage;
    const indexOfStart = indexOfEnd - this.state.planetsPerPage;
    const displayPlanets = visiblePlanets.slice(indexOfStart, indexOfEnd);
    return this.state.isLoading ? (
      <LoadingPage />
    ) : (
      <div className="planet-view">
        <section className="planet-view__header">
            <div className="planet-view__summary">
              <p>Displaying {visiblePlanets.length} of {this.state.planets.length} planets</p>
            </div>
            <div className="planet-view__filters">
              <PlanetListFilters
                setFilter={this.setFilter}
                setSortBy={this.setSortBy}
                filter={this.state.filter}
                sortBy={this.state.sortBy}
              />
            </div>
        </section>
        <section className="planet-view__table">
          <PlanetList planets={displayPlanets} />
        </section>
        <Pagination
          currentPage={this.state.currentPage}
          pageNumber={pageNumber}
          onClick={this.onPageChange}
        />
      </div>
    );
  }
}

import React from 'react';

export default class PlanetListFilters extends React.Component {

  render() {
    return (
      <div>
        <input type="text" value={this.props.filter} onChange={this.props.setFilter}/>
        <select value={this.props.sortBy} onChange={this.props.setSortBy} >
          <option value="name-a-to-z">Name: A to Z</option>
          <option value="name-z-to-a">Name: Z to A</option>
          <option value="population-high-to-low">Population: High to Low</option>
          <option value="population-low-to-high">Population: Low to High</option>
        </select>
      </div>
    );
  }
} 
import React from 'react';

export default class AddPlanetForm extends React.Component {
  state = {
    name: '',
    population: '',
    terrain: '',
    error: '',
    success: ''
  };

  onNameChange = e => {
    this.setState({name: e.target.value});
  };


  onPopulationChange = e => {
    const population = e.target.value;
  if (population.match(/^\d*$/)){
      this.setState({population});
    }
  };

  onTerrainChange = e => {
    this.setState({terrain: e.target.value});
  };

  onSubmit = e => {
    e.preventDefault();
    if(!this.state.name || !this.state.population || !this.state.terrain){
      this.setState({error: 'All fields are required.'});
      this.setState({success: ''});
    } else {
      const planetData = {
        name: this.state.name,
        population: this.state.population,
        terrain: this.state.terrain
      };
      this.props.addPlanet(planetData);
      this.setState({
        name: '',
        population: '',
        terrain: '',
        error:'',
        success: 'New planet added!'
      });
    }
  }

  render(){
    return (
        <thead>
          <tr className="table-active">
            <th>
            </th>
            <th>
              <input type="text" placeholder="e.g. Cantonica" value={this.state.name} onChange={this.onNameChange}/>
            </th>
            <th>
              <input type="text" placeholder="100" value={this.state.population} onChange={this.onPopulationChange}/>
            </th>
            <th>
              <input type="text" placeholder="e.g. ocean" value={this.state.terrain} onChange={this.onTerrainChange}/>
            </th>
            <th>
              <button onClick={this.onSubmit} className="btn btn-add">Add Planet</button>
            </th>
          </tr>
          {this.state.error ? (
            <tr className="table-active">
              <td></td>
              <td><p style={{color: 'red'}}>{this.state.error}</p></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ) : null}
          {this.state.success ? (
            <tr className="table-active">
              <td></td>
              <td><p style={{color: 'red'}}>{this.state.success}</p></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ) : null}
        </thead>
    );
  }
}
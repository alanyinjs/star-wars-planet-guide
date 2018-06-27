import React from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';

import PlanetView from '../planets/PlanetView';
import PlanetDetailView from '../planets/PlanetDetailView';

import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage';
import ErrorPage from '../components/ErrorPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import Footer from '../components/Footer';

import { fetchPlanets } from '../api/planets';


export default class AppRouter extends React.Component {
  state = {
    isLoading: true,
    planets: []
  }

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

  render() {
    return this.state.isLoading ? (
      <h1>Landing Page</h1>
    ) : (
      <Router>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path='/' render={({ history, match, location }) => <PlanetView history={history} match={match} location={location} planets={this.state.planets} isLoading={this.state.isLoading}/>} />
            <Route path='/planets/:id' component={PlanetDetailView} />
            <Route path='/about' component={AboutPage} />
            <Route path='/contact' component={ContactPage} />
            <Route path='/help' component={HelpPage} />
            <Route component={ErrorPage} />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import PlanetView from '../planets/PlanetView';
import PlanetDetailView from '../planets/PlanetDetailView';

import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage';
import ErrorPage from '../components/ErrorPage';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import LandingPage from '../components/LandingPage';
import { fetchPlanetData } from '../api/planets';


export default class AppRouter extends React.Component {
  state = {
    isFetchingPlanetData: false
  };

  componentDidMount() {
    this.setState({isFetchingPlanetData: true});
    fetchPlanetData()
      .then(data => {
        this.setState({isFetchingPlanetData: false});
      })
      .catch( e => {
        alert('error fetching planets');
      })
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Route path="/(.{1,})" component={Header}/>
          <Switch>
            <Route 
              exact 
              path="/" 
              render={({ history, match, location }) => (
                <LandingPage history={history} match={match} location={location} isFetchingPlanetData={this.state.isFetchingPlanetData} />
              )} 
            />
            <Route exact path="/planets" component={PlanetView}/>
            <Route path='/planets/:id' component={PlanetDetailView} />
            <Route path='/about' component={AboutPage} />
            <Route path='/contact' component={ContactPage} />
            <Route path='/help' component={HelpPage} />
            <Route component={ErrorPage} />
          </Switch>
          <Route path="/(.{1,})" component={Footer}/>
          </React.Fragment>
      </Router>
    );
  }
}
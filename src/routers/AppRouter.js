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



const AppRouter = () => (
  <Router>
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={PlanetView} />
        <Route path='/planet/:id' component={PlanetDetailView} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/help' component={HelpPage} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </React.Fragment>
  </Router>
);

export default AppRouter;
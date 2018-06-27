import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AppRouter from './routers/AppRouter';

import 'bootstrap/dist/css/bootstrap.min.css';


axios.defaults.baseURL = 'https://swapi.co/api';

const app = (
  <AppRouter />
);

const root = document.getElementById('root');

ReactDOM.render(app, root);
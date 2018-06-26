import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AppRouter from './routers/AppRouter';

axios.defaults.baseURL = 'https://https://swapi.co/api';

const app = (
  <AppRouter />
);

const root = document.getElementById('root');

ReactDOM.render(app, root);
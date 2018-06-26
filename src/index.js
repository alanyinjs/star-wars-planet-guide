import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';




axios.defaults.baseURL = 'https://https://swapi.co/api';

const app = (
  <h1>Star Wars Planet Guide</h1>
) ;

const root = document.getElementById('root');

ReactDOM.render(app, root);
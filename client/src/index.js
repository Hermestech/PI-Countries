import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { COUNTRIES_ENDPOINT } from './constants';
import axios from 'axios'

axios.defaults.baseURL = COUNTRIES_ENDPOINT

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



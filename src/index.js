import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from "react-redux";
import store from './store';
import state from './state';

ReactDOM.render(
  <Provider store ={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {increaseCounter} from "./actions";
import {Provider} from "react-redux";

import store from "./store";

//store.dispatch(increaseCounter());


ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);

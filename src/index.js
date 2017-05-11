import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import App from './App';
import './index.css';
import state from "./state";
import store from "./store";

store.dispatch(increaseCounter());

ReactDOM.render(
  <Provider store={store}>
  <App />,
  </Provider>,
  document.getElementById('root')
);

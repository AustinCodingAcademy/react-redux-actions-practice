import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from "./store";
import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store ={store}><App/></Provider>,
  document.getElementById('root')
);



//Provide Store to Components... IN indexjs... Import Provider from react-redux... import store
//from store.js... use Provider Component to wrapp App, make sure there is no whitespace between Provider and App
//Give Provider a prop "store" and the value of the store//
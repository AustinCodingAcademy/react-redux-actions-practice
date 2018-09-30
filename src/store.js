//CREATE STORE...Create a store.js file//
// Import createStore from redux...import reducers from reducers...create the store...xport the store//


import {createStore} from 'redux';
import state from "./state";
import reducers from "./reducers";

var store = createStore(reducers,state);

export default store;
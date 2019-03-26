import {createStore} from 'redux';
import reducers from "./reducers";

const state = []

var store = createStore(reducers,state);

export default store;
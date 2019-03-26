import {createStore} from 'redux';
import reducers from "./reducers";

const state = {isLoading: false}

var store = createStore(reducers,state);

export default store;
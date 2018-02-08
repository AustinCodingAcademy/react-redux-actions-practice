import {createStore} from 'redux';
import state from "./state";
import rootReducers from "./reducers";

var store = createStore(rootReducers,state);

export default store;

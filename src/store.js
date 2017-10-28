import {createStore} from 'redux';
import state from "./state";
import rootReducer from "./reducers/index";

var store = createStore(rootReducer,state);

export default store;
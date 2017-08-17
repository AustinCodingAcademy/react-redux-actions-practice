import {createStore} from 'redux';
import state from "./state";
import reducers from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";

var store = createStore(
  reducers,state,
  composeWithDevTools()

);

export default store;

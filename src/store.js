
import state from "./state.js";
import {createStore} from "redux";
import reducers from "./reducers";

const store = createStore(reducers, state);

export default store;

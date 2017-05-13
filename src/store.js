import {createStore} from "redux";
import reducer from "./reducers";

import state from "./state";

const {

} = state;

const store = createStore(
 reducer, /* preloadedState, */
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

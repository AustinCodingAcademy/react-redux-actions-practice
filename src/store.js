/* Create store.js file */
import {createStore} from "redux"; // import createStore from redux
import reducers from "./reducers";
import state from "./state"; // import state from state.js

// export the store

export default createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

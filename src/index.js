import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./App";
import "./index.css";
// import {increaseCounter} from "./actions/index";
// import {setSpecialText} from "./actions/index";
import store from "./store";

// store.dispatch(increaseCounter());
// store.dispatch(setSpecialText());

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById("root")
);

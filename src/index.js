import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./App";
import "./index.css";
import state from "./state";
import store from "./store";
import {increaseCounter} from "./actions";

const {
  currentCount,
  specialText,
  currentCity,
  searchText,
  currentTemp,
  isLoading,
  videoURL,
  currentUserSort,
  videoScale
} = state;

ReactDOM.render(
  <Provider store={store}>
    <App
      currentCount={currentCount}
      specialText={specialText}
      currentCity={currentCity}
      searchText={searchText}
      currentTemp={currentTemp}
      isLoading={isLoading}
      videoURL={videoURL}
      currentUserSort={currentUserSort}
      videoScale={videoScale}
    />
  </Provider>,
  document.getElementById("root")
);

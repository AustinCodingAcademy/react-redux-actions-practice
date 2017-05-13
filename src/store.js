import {createStore} from "redux";
import state from "./state";
import reducers from "./reducers";

const {
  currentCount,
  specialText,
  currentCity,
  searchText,
  currentTemp,
  isLoading,
  videoUrl,
  currentUserSort,
  videoScale,
  users
} = state;

const store = createStore(reducers,{
  currentCount,
  specialText,
  currentCity,
  searchText,
  currentTemp,
  isLoading,
  videoUrl,
  currentUserSort,
  videoScale,
  users
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

import {createStore} from "redux";
import reducer from "./reducers/index";
import state from "./state";

const {
  currentCount,
  specialText,
  currentCity,
  searchText,
  currentTemp,
  isLoading,
  videoURL,
  currentUserSort,
  videoScale,
  users
} = state;

const store = createStore(
  reducer, {
    currentCount,
    specialText,
    currentCity,
    searchText,
    currentTemp,
    isLoading,
    videoURL,
    currentUserSort,
    videoScale,
    users
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

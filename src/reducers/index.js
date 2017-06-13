import {combineReducers} from "redux";


function currentCity(state = "") {
  return state;
}

function searchText(state = "") {
  return state;
}

function currentTemp(state = null) {
  return state;
}

function isLoading(state = false) {
  return state;
}

function videoURL(state = "") {
  return state;
}

function currentUserSort(state = "") {
  return state;
}

function videoScale(state = null) {
  return state;
}

function currentCount(state = 0, action) {
  // switch with a switch
  if (action.type === "INCREASE_COUNTER") {
    return state + 1;
  }
  if (action.type === "DECREASE_COUNTER") {
    return state - 1;
  }
  return state;
}

function users(state = [], action) {
  if (action.type === "ADD_USER") {
    return state;
  }
  if (action.type === "REMOVE_USER") {
    return state;
  }
  return state;
}


function specialText(state = "", action) {
  if (action.type === "SET_SPECIAL_TEXT") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  currentCity,
  searchText,
  currentTemp,
  isLoading,
  videoURL,
  currentUserSort,
  videoScale,
  currentCount,
  users,
  specialText
});

export default rootReducer;

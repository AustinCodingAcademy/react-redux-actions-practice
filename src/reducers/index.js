
import {combineReducers} from "redux";
import {
  INCREASE_COUNTER,
  DECREASE_COUNTER
} from "../actions";

function currentCount(state = 0, action) {
  console.log("currentCount reducer", action);
  switch (action.type) {
    case INCREASE_COUNTER:
      return state + 1;
    case DECREASE_COUNTER:
      return state - 1;
  }
  if (action.type === "INCREASE_COUNTER") {

  }
  if (action.type === "DECREASE_COUNTER") {

  }
  return state;
}

function users(state = [], action) {
  if (action.type === "ADD_USER") {

  }
  if (action.type === "REMOVE_USER") {

  }
  return state;
}
function specialText(state = [], action) {
  if (action.type === "SET_SPECIAL_TEXT") {
    return action.value;
  }
  return state;
}
function currentCity(state = "") {
  return state;
}
function searchText(state = "") {
  return state;
}
function currentTemp(state = 0) {
  return state;
}
function isLoading(state = "") {
  return state;
}
function videoURL(state = "") {
  return state;
}
function currentUserSort(state = "") {
  return state;
}
function videoScale(state = 0) {
  return state;
}


export default combineReducers({
  users,
  currentCount,
  specialText,
  currentCity,
  searchText,
  currentTemp,
  isLoading,
  videoURL,
  currentUserSort,
  videoScale
});

/*
function currentCount(state = 0, action) {
  if (action.type === "INCREASE_COUNTER") {

  }
  if (action.type === "DECREASE_COUNTER") {

  }
  return state;
}

function users(state =[], action) {
  if (action.type === "ADD_USER") {

  }
  if (action.type === "REMOVE_USER") {

  }
  return state;
}


function specialText(state =[], action) {
  if (action.type === "SET_SPECIAL_TEXT") {
    return action.value;
  }
  return state;
}
*/

import {combineReducers} from "redux";
import {INCREASE_COUNTER} from "../actions";

function currentCount(state=0, action) {
  switch (action.type) {
    case INCREASE_COUNTER:
      return state + 1
  }
  if(action.type === "DECREASE_COUNTER") {

  }
  return state;
}

function users(state =[], action) {
  if(action.type === "ADD_USER") {

  }
  if(action.type === "REMOVE_USER") {

  }
  return state;
}


function specialText(state =[], action) {
  if(action.type === "SET_SPECIAL_TEXT") {
    return action.value;
  }
  return state;
}

export default combineReducers({
  currentCount,
  users,
  specialText
});

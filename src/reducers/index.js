import {combineReducers} from "redux";
import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  SET_SPECIAL_TEXT,
  SET_CURRENT_CITY,
  ADD_USER,
  REMOVE_USER,
  SET_TEMP,
  SET_IS_LOADING,
  SET_VIDEO_URL
} from "../actions";

function currentCount(state = 0, action) {
  if (action.type === INCREASE_COUNTER) {
    return state + 1;
  }
  if (action.type === DECREASE_COUNTER && state > 0) {
    return state - 1;
  }
  return state;
}

function specialText(state = [], action) {
  if (action.type === SET_SPECIAL_TEXT) {
    return action.value;
  }
  return state;
}

function currentCity(state = [], action) {
  if (action.type === SET_CURRENT_CITY) {
    return action.value;
  }
  return state;
}

function users(state = [], action) {
  if (action.type === ADD_USER) {
    return [
      ...state,
      action.value
    ];
  }
  if (action.type === REMOVE_USER) {
    return state.slice(1);
  }
  return state;
}

function currentTemp(state = "", action) {
  if (action.type === SET_TEMP) {
    return action.value;
  }
  return state;
}

function isLoading(state = [], action) {
  if (action.type === SET_IS_LOADING) {
    return action.value;
  }
  return state;
}

function videoURL(state = "", action) {
  if (action.type === SET_VIDEO_URL) {
    return action.value;
  }
  return state;
}


export default combineReducers({
  currentCount,
  specialText,
  currentCity,
  users,
  currentTemp,
  isLoading,
  videoURL
});

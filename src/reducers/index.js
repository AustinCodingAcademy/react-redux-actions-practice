import state from '../state';
import { combineReducers } from 'redux';

function currentCount(state=0, action){
  if(action.type === "INCREASE_COUNTER"){

  }
  if(action.type === "DECREASE_COUNTER"){

  }
  return state;
}

function users(state =[], action){
  if(action.type === "ADD_USER"){

  }
  if(action.type === "REMOVE_USER"){

  }
  return state;
}


function specialText(state = "", action){
  if(action.type === "SET_SPECIAL_TEXT"){
    return action.value;
  }
  return state;
}

const currentCity = (state = "", action) {
  return state;
}

const searchText = (state = "", action) {
  return state;
}

const currentTemp = (state = 0, action) {
  return state;
}

const isLoading = (state = false, action) {
  return state;
}

const videoURL = (state = "", action) {
  return state;
}

const currentUserSort = (state = "first_name", action) {
  return state;
}

const videoScale = (state = 1, action) {
  return state;
}

const rootReducers = combineReducers({
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
});

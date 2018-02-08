import state from '../state';
import { combineReducers } from 'redux';

function currentCount(state=0, action){
  if(action.type === "INCREASE_COUNTER"){
    return state++;
  }
  if(action.type === "DECREASE_COUNTER"){
    return state--;
  }
  return state;
}

function users(state =[], action){
  if(action.type === "ADD_USER"){
    return [...state, action.value];
  }
  if(action.type === "REMOVE_USER"){
    let copyArray = state.slice(1);
    return copyArray;
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
  return action.value;
}

const searchText = (state = "", action) {
  return action.value;
}

const currentTemp = (state = 0, action) {
  return action.value;
}

const isLoading = (state = false, action) {
  return action.value;
}

const videoURL = (state = "", action) {
  return action.value;
}

const currentUserSort = (state = "first_name", action) {
  return action.value;
}

const videoScale = (state = 1, action) {
  return action.value;
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

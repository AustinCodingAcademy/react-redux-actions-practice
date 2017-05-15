/* Create all reducers here */

import {combineReducers} from "redux";
import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  SET_SPECIAL_TEXT,
  SET_CURRENT_CITY,
  ADD_USER,
  REMOVE_USER,
  SET_TEMP,
  SET_VIDEO_URL,
  SET_IS_LOADING,
  SET_SEARCH_TEXT,
  SET_CURRENT_USER_SORT,
  SET_VIDEO_SCALE
} from "../actions";

function currentCount(state=0, action){
  console.log("currenCount reducer",action);
  switch(action.type){
    case INCREASE_COUNTER:
      return state + 1;
    case DECREASE_COUNTER:
      return state - 1;
  }

  return state;
}

function users(state =[], action){
  if(action.type === "ADD_USER"){
    return [...state.action.value];
  }
  if(action.type === "REMOVE_USER"){
    return state.slice(1);
  }
  return state;
}


function specialText(state =[], action){
  if(action.type === "SET_SPECIAL_TEXT"){
    return action.value;
  }
  return state;
}

function currentCity(state = [], action){
  if(action.type === SET_CURRENT_CITY){
    return action.value;
  }
  return state;
}

function currentTemp(state = "", action){
  if(action.type === SET_TEMP) {
    return action.value;
  }
  return state;
}

function isLoading(state = "", action){
  if(action.type === SET_IS_LOADING){
    return action.value;
  }
  return state;
}

function videoURL(state = "", action){
  if(action.type === SET_VIDEO_URL) {
    return action.value;
  }
  return state;
}

function searchText(state = "", action){
  if (action.type === SET_SEARCH_TEXT){
    return action.value;
  }
  return state;
}

function currentUserSort(state = "", action){
  if(action.type === SET_CURRENT_USER_SORT){
    return action.value;
  }
  return state;
}

function videoScale(state = [], action){
  if(action.type === SET_VIDEO_SCALE){
    return action.value;
  }
  return state;
}



export default combineReducers({
  users,
  currentCount,
  specialText,
  currentCity,
  currentTemp,
  isLoading,
  videoURL,
  currentUserSort,
  videoScale,
  searchText
});

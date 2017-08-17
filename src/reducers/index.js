import {combineReducers} from "redux";
import initialState from "../state";

function currentCount(state=initialState.currentCount, action){
  if(action.type === "INCREASE_COUNTER"){
    return state + 1;
  }
  if(action.type === "DECREASE_COUNTER"){
    return state - 1;
  }
  return state;
}

function specialText(state=initialState.specialText, action){
 if(action.type === "SET_SPECIAL_TEXT"){
   return action.value;
 }
 return state;
}

function currentCity(state=initialState.currentCity,action){
  if(action.type === "SET_CURRENT_CITY"){
    return action.value;
  }
  return state;
}

function searchText(state=initialState.searchText,action){
  if(action.type === "SET_SEARCH_TEXT"){
    return action.value;
  }
  return state;
}

function currentTemp(state=initialState.currentTemp,action){
  if(action.type === "SET_TEMP"){
    return action.value;
  }
  return state;
}

function isLoading(state=initialState.isLoading,action){
  if(action.type === "SET_IS_LOADING"){
    return action.value;
  }
  return state;
}

function videoURL(state=initialState.videoURL,action){
  if(action.type === "SET_VIDEO_URL"){
    return action.value;
  }
  return state;
}

function currentUserSort(state=initialState.currentUserSort,action){
if(action.type === "SET_CURRENT_USER_SORT"){
  return action.value;
}
  return state;
}

function videoScale(state=initialState.videoScale,action){
  if(action.type === "SET_VIDEO_SCALE"){
    return action.value;
  }
  return state;
}

function users(state=initialState.users, action){
  if(action.type === "ADD_USER"){
    return [...state,action.value];
  }
  //spread operator??????? something weird here
  if(action.type === "REMOVE_USER"){
    var newArray = state.slice(1);
     return newArray;
  }
  return state;
}
var rootReducer = {
  currentCount,users,specialText,currentCity,searchText,currentTemp,isLoading,videoURL,currentUserSort,videoScale
}

export default combineReducers(rootReducer);

import {combineReducers} from 'redux';

function currentCount(state=0, action){
  if(action.type === "INCREASE_COUNTER"){
      return state + 1
  }
  if(action.type === "DECREASE_COUNTER"){
    return state  - 1
  }
  return state;
}

function specialText(state="", action) {
  if (action.type === "SET_SPECIAL_TEXT") {
    return action.value;
  }
  return state;
}

function currentCity(state="", action) {
  if (action.type === "SET_CURRENT_CITY"){
    return action.value;
  }
  return state;
}

function searchText(state="", action) {
  if (action.type === "SET_SEARCH_TEXT") {
      return action.value;
  }
  return state;
}

function currentTemp(state=0, action){
  if(action.type === "INCREASE_TEMPERATURE"){
      return state + 1
  }
  return state;
}

function isLoading(state=false, action) {
  if (action.type === "SET_IS_LOADING") {
      return action.value;
  }
  return state;
}

function videoURL(state="", action) {
  if (action.type === "SET_VIDEO_URL") {
      return action.value;
  }
  return state;
}

function currentUserSort(state="first_name", action) {
  return state;
}

function videoScale (state=0, action) {
  if (action.type === "SET_VIDEO_SCALE") {
      return action.value;
  }
  return state;
}

function users(state =[], action){
  if(action.type === "ADD_USER"){
    return action.value
  }
  if(action.type === "REMOVE_USER"){
    return action.value.slice(1);
  }
  return state;
}


function specialText(state ="", action){
  if(action.type === "SET_SPECIAL_TEXT"){
    return action.value;
  }
  return state;
}

function setTemp(state=0, action) {
  return state;
}

function SET_IS_LOADING(state=false, action) {
  return state;
}

function SET_VIDEO_URL(state="", action) {
  return state;
}

function SET_SEARCH_TEXT(state="", action) {
  return state;
}

function SET_CURRENT_USER_SORT(state=[], action) {
  return state;
}

function SET_VIDEO_SCALE(state="", action) {
  return state;
}

const rootReducer = combineReducers({
  currentCount,specialText,currentCity,searchText,currentTemp,isLoading,videoURL,currentUserSort,videoScale,users,specialText,setTemp,SET_IS_LOADING,SET_VIDEO_URL,SET_SEARCH_TEXT, SET_CURRENT_USER_SORT,SET_VIDEO_SCALE
});
export default rootReducer;

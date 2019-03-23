import {combineReducers} from "redux";

function currentCity(state = "", action){
  if(action.type === "CHANGE_CITY"){
    return action.value
  }
  return state;
}
function searchText(state = "", action){
  if(action.type === "SEARCH_USERS"){
    return action.value
  }
  return state;
}
function currentTemp(state = 23, action){
  if(action.type === "CHANGE_TEMPERATURE"){
    return action.value
  }
  return state;
}
function isLoading(state = false, action){
  if(action.type === "MODAL_TOGGLE"){
    return !state
  }
  return state;
}
function videoURL(state = "", action){
  if(action.type === "FIND_VIDEO"){
    return action.value
  }
  return state;
}
function currentUserSort(state = "", action){
  if(action.type === "SORT_USER"){
    return action.value
  }
  return state;
}
function videoScale(state = 1, action){
  if(action.type === "SCALE_VIDEO"){
    return action.value
  }
  return state;
}

function currentCount(state=0, action){
  if(action.type === "INCREASE_COUNTER"){
    let count = state + 1;
    return count; 
  }
  if(action.type === "DECREASE_COUNTER"){
    let count = state - 1;
    return count 
  }
  return state;
}   

function users(state =[], action){
  if(action.type === "ADD_USER"){
    return [...state, action.value];
  }
  if(action.type === "REMOVE_USER"){
    return state.splice(1)
  }
  return state;
}


function specialText(state = "", action){
  if(action.type === "SET_SPECIAL_TEXT"){
    return action.value;
  }
  return state;
}

let reducers = combineReducers({
  currentCount, users, specialText, 
  currentCity, searchText, currentTemp,
  isLoading, videoURL, currentUserSort,
  videoScale
})

export default reducers;
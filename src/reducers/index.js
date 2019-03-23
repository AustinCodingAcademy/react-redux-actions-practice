import { combineReducers } from "redux";

function currentCount(state=0, action){
  if(action.type === "INCREASE_COUNTER"){
    let newCount = state+1;
    return newCount;
  }
  if(action.type === "DECREASE_COUNTER"){
    let newCount = state-1;
    return newCount;
  }
  return state;
}   

function setCurrentCity(state="Austin", action){
  if(action.type === "SET_CURRENT_CITY"){
    return action.value
  }
  return state;
}

function searchText(state="", action){
  if(action.type === ""){

  }
  return state
}

function currentTemp(state=23, action){
  if(action.type === "SET_TEMP"){
    return action.value
  }
  return state
}

function isLoading(state=false, action){
  if(action.type === ""){

  }
  return state
}

function videoURL(state="", action){
  if (action.type === ""){

  }
  return state
}

function currentUserSort(state="first_name", action){
  if (action.type === ""){

  }
  return state
}

function videoScale(state=1, action){
  if (action.type === ""){

  }
  return state
}

function users(state =[], action){
  if(action.type === "ADD_USER"){
    return [...state, action.value];
  }
  if(action.type === "REMOVE_USER"){
    return []
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
  currentCount,users,specialText,setCurrentCity,searchText,currentTemp,isLoading,videoURL,currentUserSort,videoScale
})

export default reducers;
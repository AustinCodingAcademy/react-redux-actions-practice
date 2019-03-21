import { combineReducers } from "redux";

function currentCount(state=0, action){
  if(action.type === "INCREASE_COUNTER"){
    return state+1
  }
  if(action.type === "DECREASE_COUNTER"){
    return state-1
  }
  return state;
}   

function currentCity(state="", action){
  if(action.type === ""){

  }
  return state
}

function searchText(state="", action){
  if(action.type === ""){

  }
  return state
}

function currentTemp(state=0, action){
  if(action.type === ""){

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
    // let newArray = state.map(p=>p);
    // newArray.push(action.value);
    // return newArray;

    return [...state, action.value];
  }
  if(action.type === "REMOVE_USER"){
    return state.splice()
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
  currentCount,users,specialText,currentCity,searchText, currentTemp,isLoading,videoURL,currentUserSort,videoScale
})

export default reducers;
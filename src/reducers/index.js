import {combineReducers} from 'redux';


function currentCount(state=0, action){
  if(action.type === "INCREASE_COUNTER"){
    return state+1;
  }
  if(action.type === "DECREASE_COUNTER"){
    return state-1;
  }
  return state;
}

function users(state =[], action){
  if(action.type === "ADD_USER"){
    console.log(state);
    state.push(action.value);
    console.log(state);
    return state;

  }
  if(action.type === "REMOVE_USER"){
    console.log(state);
    state.shift();
    console.log(state);
    return state;
  }
  return state;
}

function currentCity(state = "", action){
  if(action.type === "SET_CURRENT_CITY"){
    return action.value;
  }
  return state;
}


function currentTemp(state = 0, action){
  if(action.type === "SET_TEMP"){
    return action.value;
  }
  return state;
}

function isLoading(state = false, action){
  if(action.type === "SET_IS_LOADING"){
    return action.value;
  }
  return state;
}

function videoURL(state = "", action){
  if(action.type === "SET_VIDEO_URL"){
    return action.value;
  }
  return state;
}

function searchText(state = "", action){
  if(action.type === "SET_SEARCH_TEXT"){
    return action.value;
  }
  return state;
}

function videoScale(state = "", action){
  if(action.type === "SET_VIDEO_SCALE"){
    return action.value;
  }
  return state;
}


function specialText(state =[], action){
  if(action.type === "SET_SPECIAL_TEXT"){
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
currentCount, users, currentCity, currentTemp, isLoading, videoURL, searchText,videoScale, specialText});

export default rootReducer;

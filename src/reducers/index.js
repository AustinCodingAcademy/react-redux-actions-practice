import {combineReducers} from "redux";

// currentCount can also be called state
function currentCount(state=0, action){
  if(action.type === "INCREASE_COUNTER"){
    return state + 1;
  }
  if(action.type === "DECREASE_COUNTER"){
    return state - 1;
  }
  return state;
}   

function users(state =[], action){
  if(action.type === "ADD_USER"){
    console.log(action);
    console.log(state);
    return [...state, action.value];
  }
  if(action.type === "REMOVE_USER"){
    return state.slice(1);
  }
  return state;
}
  



function specialText(state = "", action){
  if(action.type === "SET_SPECIAL_TEXT"){
    return action.value;
  }
  return state;
}

function currentCity(state = "Austin", action){
  if(action.type === "SET_CURRENT_CITY"){
    console.log(action);
    state = action.value;
    return state;
  }
  return state;
}


function searchText(state = "", action){
  if(action.type === "SET_SEARCH_TEXT"){
    return action.value;
  }
  return state;
}

function currentTemp(state = 0, action){
  if(action.type === "SET_TEMP"){
    console.log(state);
    console.log(action);
   return action.value 

  }
  return state;
}

function isLoading(state = false, action){
  if (action.type === "SET_IS_LOADING"){
    return action.value;
  }
  return state;
}

function videoURL(state = "", action){
  if(action.type === "SET_VIDEO_URL"){
    console.log(action.value);
    return action.value;
  }
  return state;
}

function currentUserSort(state = "first_name", action){
  if(action.type === "SET_CURRENT_USER_SORT"){
    return action.value;
  }
  return state;
}

function videoScale(state = 0, action){
  if(action.type === "SET_VIDEO_SCALE"){
    return action.value;

  }
  return state;

}

const rootReducer = combineReducers({
  currentCount, specialText, currentCity,
   users, currentTemp, isLoading, videoURL, 
   searchText, currentUserSort, videoScale
})
export default rootReducer;
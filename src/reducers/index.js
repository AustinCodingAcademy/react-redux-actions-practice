import { combineReducers } from "redux";

function currentCount(state=0, action){
  if(action.type === "INCREASE_COUNTER"){
    return state + 1; 
  }
  if(action.type === "DECREASE_COUNTER"){
    return state - 1;
  }
  return state;
}   

function users(state=[], action){
  if(action.type === "ADD_USER"){
    console.log("adding user")
    let addUserArray = [...state];
    addUserArray.push(action.value);
    return addUserArray;
  }
  if(action.type === "REMOVE_USER"){
    console.log("trying to remove user")
    let removeUserArray = [...state];
    return removeUserArray.slice(1);
  }
  return state;
}

function specialText(state = "", action){
  if(action.type === "SET_SPECIAL_TEXT"){
    return action.value;
  }
  return state;
}

function currentCity(state="", action){
  if(action.type === "SET_CURRENT_CITY"){
    return action.value; 
  }
  return state;
}  

// * searchText
// * if "SET_SEARCH_TEXT" should return action value
function searchText(state="", action){
  if(action.type === "SET_SEARCH_TEXT"){
    return action.value;
  }
  return state;
}  

function currentTemp(state=0, action){
  if(action.type === "SET_TEMP"){
    console.log(action.value);
    return action.value;
  }
  return state;
}  

// * isLoading
// * if "SET_IS_LOADING" should return action value 
function isLoading(state=false, action){
  if(action.type === "SET_IS_LOADING"){
    return action.value;
  }
  return state;
}  


// * videoURL
// * if "SET_VIDEO_URL" should return action value
function videoURL(state="", action){
  if(action.type === "SET_VIDEO_URL"){
    return action.value;
  }
  return state;
}  

function currentUserSort(state="", action){
  if(action.type === "SET_CURRENT_USER_SORT"){
    return action.value;
  }
  return state;
}  

// * videoScale
// * if "SET_VIDEO_SCALE" should return action value
function videoScale(state=1, action){
  if(action.type === "SET_VIDEO_SCALE"){
    return action.value;
  }
  return state;
}  

const rootReducer = combineReducers({
  currentCount, 
  users, 
  specialText, 
  currentCity, 
  searchText, 
  currentTemp, 
  isLoading, 
  videoURL, 
  currentUserSort, 
  videoScale
});

export default rootReducer;

import {combineReducers} from "redux";

function currentCount(state=0, action){
  if(action.type === "INCREASE_COUNTER"){
    return state++
  }
  if(action.type === "DECREASE_COUNTER"){
    return state--
  }
  return state;
}   

function users(state =[], action){
  if(action.type === "ADD_USER"){
    // let newArray=state.map(p=>p);
    // newArray.push(action.value);
    // return newArray;
    return [...state,action.value];
    //[...state] === state.map(p=>p)
  }
  if(action.type === "REMOVE_USER"){
    // let newArray = state.map(u=>u);
    // newArray.splice
    //use state.splice

    // return state.splice(<?>,1)??
  }
  return state;
}

function specialText(state = "", action){
  if(action.type === "SET_SPECIAL_TEXT"){
    return action.value;
  }
  return state;
}

function currentCity(state="",action){
  if(action.type === "SET_CURRENT_CITY"){
    return action.value;
  }
  return state;
}

function currentTemp(state=0,action){
  if(action.type === "SET_TEMP"){ 
    return action.value;
  }
  return state
}

function isLoading(state=false,action){
  if (action.type === "SET_IS_LOADING"){ 
    return action.value;
  }
  return state;
}
    
function videoURL(state="",action){
  if(action.type === "SET_VIDEO_URL"){ 
    return action.value;
  }
  return state;
}

function searchText(state="",action){
  if(action.type === "SET_SEARCH_TEXT"){ 
    return action.value;
  }
  return state;
}
   
function currentUserSort(state="first_name",action){
  if(action.type === "SET_CURRENT_USER_SORT"){
    return action.value;
  }
  return state;
} 
   
function videoScale(state=1,action){
  if(action.type === "SET_VIDEO_SCALE"){
    return action.value;
  }
  return state;
} 

let reducers = combineReducers({
  currentCount, users, specialText, currentCity, currentTemp, 
  isLoading, videoURL, searchText, currentUserSort, videoScale
})

export default reducers;


import {combineReducers} from 'redux';
//shoule return current count plus one//
function currentCount(state=0, action){
  if(action.type === "INCREASE_COUNTER"){
    return state + 1;
    
  }
  //or minus one depending on the action//
  if(action.type === "DECREASE_COUNTER"){
    
  }
  return state -1;
}   
//added both return statements here//
function users(state =[], action){
  if(action.type === "ADD_USER"){
   return [...state,action,value]; 
  }
  if(action.type === "REMOVE_USER"){
    return slice(1);
    
  }
  return state;
}

//looks like this one was set up for me//
function specialText(state = "", action){
  if(action.type === "SET_SPECIAL_TEXT"){
    return action.value;
  }
  return state;
}

//added function and both return statements here//
function currentCity(state ="",action){
  if(action.type === "SET_CURRENT_CITY"){
    return action.value;
  }
  return state;
}
//added function and both return statements here//
function currentTemp(state,action){
  if(action.type === "SET_TEMP"){
    return action.value;
  }
  return state;
}
//added function and both return statements//
function isLoading(state,action){
  if(action.type === "SET_IS_LOADING"){
    return action.value;
  }
  return state;
}
//added function and both return statements//
function videoURL(state,action){
  if(action.type === "SET_VIDEO_URL"){
    return action.value;
  }
  return state;
}
//added function and both return statements//
function currentUserSort(state,action){
  if(action.type === "SET_CURRENT_USER_SORT"){
    return action.value;
  }
  return state;
}
//added function and both return statements//
function videoScale(state,action){
  if(action.type === "SET_VIDEO_SCALE"){
    return action.value;
  }
}
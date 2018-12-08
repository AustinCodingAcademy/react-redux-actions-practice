import {combineReducers} from 'redux';

function currentCount(state=0, action){
  if(action.type === "INCREASE_COUNTER"){
    return state +1;
  }
  if(action.type === "DECREASE_COUNTER"){
    return state -1;
  }
  return state;
}   

function users(state =[], action){
  if(action.type === "ADD_USER"){
    ///destructuring, mapping and and pushing value to new array 
    return [...state, action.value];
  }
  if(action.type === "REMOVE_USER"){
    return state.slice(0,1);    
  }
  return state;
}

function specialText(state = "", action){
  if(action.type === "SET_SPECIAL_TEXT"){
    return action.value;
  }
  return state;
}

function currentCity(state= "", action){
  if(action.type === "SET_CURRENT_CITY"){
    return action.value;
  }
  return state;
}
function currentTemp(state="", action){
  if(action.type === "SET_TEMP"){
    return action.value;
  }
  return state;
}
function searchText(state="", action){
  if(action.type === "SET_SEARCH_TEXT"){
    return action.value;
  }
  return state;
}
function isLoading(state="", action){
  if(action.type === "SET_IS_LOADING"){
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  currentCount,
  specialText,
  users,
  currentCity,
  currentTemp,
  searchText,
  isLoading

});
export default rootReducer;
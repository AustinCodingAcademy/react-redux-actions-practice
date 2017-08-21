import {combineReducers} from "redux";

function currentCount(state=0, action){
  if(action.type === "INCREASE_COUNTER"){
    return state + 1
  }
  if(action.type === "DECREASE_COUNTER"){
    return state - 1
  }
  return state;
}

function users(state =[], action){
  if(action.type === "ADD_USER"){
    return [...state,action.value];
  }
  if(action.type === "REMOVE_USER"){
    let newArray = state.slice(1);
    return state;
  }
  return state;
}

function specialText(state = "", action){
  if(action.type === "SET_SPECIAL_TEXT"){
    return action.value;
  }
  return state;
}

// function currentCity(state = "", action){
//   if(action.type === "SET_CURRENT_CITY"){
//     return action.value;
//   }
//   return state;
// }

function setCurrentCity(state = "", action){
  if(action.type === "SET_CURRENT_CITY"){
    return action.value;
  }
  return state;
}

let reducerfunction = {
  currentCount, specialText, users, setCurrentCity
}
export default combineReducers(reducerfunction);

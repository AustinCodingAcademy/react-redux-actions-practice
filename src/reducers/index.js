import {combineReducers} from "redux";
import {
  INCREASE_COUNTER,
  DECREASE_COUNTER
} from "../actions";


function currentCount(state=0, action){
  console.log("currenCount reducer",action);
  switch(action.type){
    case INCREASE_COUNTER:
      return state + 1;
    case DECREASE_COUNTER:
      return state - 1;
  }

  return state;
}

function users(state =[], action){
  if(action.type === "ADD_USER"){

  }
  if(action.type === "REMOVE_USER"){

  }
  return state;
}


function specialText(state =[], action){
  if(action.type === "SET_SPECIAL_TEXT"){
    return action.value;
  }
  return state;
}


export default combineReducers({
  users,
  currentCount
});

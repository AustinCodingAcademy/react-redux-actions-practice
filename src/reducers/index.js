import {combineReducers} from "redux";

function currentCount(state=0, action){
  if(action.type === "INCREASE_COUNTER"){
    
  }
  if(action.type === "DECREASE_COUNTER"){
    
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
    
    //use state.splice
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
  currentCount, users, specialText
})

export default reducers;


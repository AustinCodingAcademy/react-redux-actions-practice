import { combineReducers } from "redux";

function currentCount(state = 0, action) {
  if (action.type === "INCREASE_COUNTER") {

  }
  if (action.type === "DECREASE_COUNTER") {

  }
  return state;
}

function users(state = [], action) {
  if (action.type === "ADD_USER") {
    // state = []
    // action.value = {} //user object
    // state.push(action.value)

    // let newArray = state.map(p => p);
    // newArray.push(action.value);
    // return newArray;

    return [...state,//state.map(p => p);
    action.value //newArray.push(action.value);
    ]
  }
  if (action.type === "REMOVE_USER") {
    //return state.splice
  }
  return state;
}


function specialText(state = "", action) {
  if (action.type === "SET_SPECIAL_TEXT") {
    return action.value;
  }
  return state;
}

let reducers = combineReducers({
  currentCount, users, specialText
})

export default reducers;


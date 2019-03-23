import {combineReducers} from "redux";


function currentCount(state=0, action){
  if (action.type === "INCREASE_COUNTER"){
    state += 1;
  }
  else if( action.type === "DECREASE_COUNTER"){
    state -= 1;
  }
  return state;
}   

function users(state =[], action){
  if(action.type === "ADD_USER"){

    //let tmp = state.map(p=>p);
    //tmp.push(action.value);
    //return tmp;

    return [...state, action.value];
  }
  if(action.type === "REMOVE_USER"){
    return state.splice();
  }
  return state;
}


function specialText(state = "", action){
  if(action.type === "SET_SPECIAL_TEXT"){
    return action.value;
  }
  return state;
}


function currentCity(state = "", action) {
  if (action.type === "SET_CURRENT_CITY") {
    return action.value;
  }
  return state;
}


function currentTemp(state=0, action) {
  if (action.type === "SET_CURRENT_TEMPERATURE") {
    return action.value
  }
  return state;
}

function videoURL(state="", action) {
  if (action.type === "SET_VIDEO_URL") {
    return action.value
  }
  return state;
}


let reducers = combineReducers({
  currentCount,
  users,
  specialText,
  currentCity,
  currentTemp,
  videoURL
})
export default reducers;

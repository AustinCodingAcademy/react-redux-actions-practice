
function currentCount(state=0, action){
  if(action.type === "INCREASE_COUNTER"){
      return state + 1
  }
  if(action.type === "DECREASE_COUNTER"){
    return state  - 1
  }
  return state;
}

function specialText(state="", action) {
  if (action.type === "SET_SPECIAL_TEXT") {
    return action.value;
  }
  return state;
}

function currentCity(state="", action) {
  if (action.type === "SET_CURRENT_CITY"){
    return action.value;
  }
  return state;
}

function searchText(state="", action) {
  return action.value;
}

function currentTemp(state=0, action){
  if(action.type === "INCREASE_TEMPERATURE"){
      return state + 1
  }
  if(action.type === "DECREASE_TEMPERATURE"){
    return state  - 1
  }
  return state;
}

function isLoading(state=null, action) {
  return action.value;
}

function videoURL(state="", action) {
  return action.value;
}

function currentUserSort(state="first_name", action) {
  return state;
}

function videoScale (state=0, action) {
  return action.value;
}

function users(state =[], action){
  if(action.type === "ADD_USER"){
    return action.value.slice(1);
  }
  if(action.type === "REMOVE_USER"){
    return action.value.slice(0);
  }
  return state;
}


function specialText(state =[], action){
  if(action.type === "SET_SPECIAL_TEXT"){
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  currentCount, specialText, currentCity, searchText, currentTemp, isLoading, videoURL, currentUserSort, videoScale, users, specialText
});
export default rootReducer;

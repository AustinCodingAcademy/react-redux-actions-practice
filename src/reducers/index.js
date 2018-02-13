import {combineReducers} from 'redux';


function currentCount(state = 0, action){
  if(action.type === "INCREASE_COUNTER"){
    console.log('INCREASE_COUNTER is being called in reducers');
    return state + 1;
  }
  if(action.type === "DECREASE_COUNTER"){
    console.log('DECREASE_COUNTER is being called in reducers');
    return state - 1;
  }
  return state;
}

function specialText(state = "", action){
  if(action.type === "SET_SPECIAL_TEXT"){
    return action.value;
  }
  return state;
}

function currentCity(state = "", action){
  if(action.type === "SET_CURRENT_CITY"){
    return action.value;
  }
  return state;
}

function searchText(state = "", action){
  if(action.type === "SET_SEARCH_TEXT"){
    return action.value;
  }
  return state;
}

function currentTemp(state = 0, action){
  if(action.type === "SET_TEMP"){
    if(action.value > 100 || action.value < 1){
      return state;
    }
    return action.value;
  }
  return state;
}

function isLoading(state = false, action){
  if(action.type === "SET_IS_LOADING"){
    return action.value;
  }
  return state;
}

function videoURL(state = "", action){
  if(action.type === "SET_VIDEO_URL"){
    return action.value;
  }
  return state;
}

function currentUserSort(state = "", action){
  if(action.type === "SET_CURRENT_USER_SORT"){
    return action.value;
  }
  return state;
}

function videoScale(state = 1, action){
  if(action.type === "SET_VIDEO_SCALE"){
    return action.value;
  }
  return state;
}

function users(state = [], action){
  if(action.type === "ADD_USER"){
    return [...state,action.value];
  }
  if(action.type === "REMOVE_USER"){
    // we're not supposed to modify state directly, right?
    // so if i make a copy of it (i.e. newArray) to work with, is that okay?
    // i'm confused
    let newArray = state.slice();
    newArray.splice(-1, 1);
    return newArray;
  }
  return state;
}



const rootReducer = combineReducers({
  currentCount,
  specialText,
  currentCity,
  searchText,
  currentTemp,
  isLoading,
  videoURL,
  currentUserSort,
  videoScale,
  users
});

export default rootReducer;
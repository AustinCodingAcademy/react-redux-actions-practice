import {combineReducers} from "redux";

// actions
import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  SET_SPECIAL_TEXT,
  ADD_USER,
  REMOVE_USER,
  SET_CURRENT_CITY
} from "../actions";


function currentCount(state = 0, action) {
  switch (action.type) {
    case INCREASE_COUNTER:
      return state + 1;
    case DECREASE_COUNTER:
      return state - 1;
  }
  
//  if (action.type === "INCREASE_COUNTER") {
//    
//  }
//  if (action.type === "DECREASE_COUNTER") {
//    
//  }
  return state;
}   

function users(state = [], action) {
//  switch(action.type) {
//    case ADD_USER:
//      //add user
//      return ;
//    case REMOVE_USER:
//      return ;
//  }
  if (action.type === "ADD_USER") {

  }
  if (action.type === "REMOVE_USER") {
    
  }
  return state;
}


function specialText(state = [], action) {
  if (action.type === SET_SPECIAL_TEXT) {
    return action.value;
  }
  return state;
}

function currentCity(state = "", action) {
  if (action.type === SET_CURRENT_CITY) {
    return action.value;
  }
  return state;
}

function searchText(state = "", action) {
  return state;
}

function currentTemp(state = 0, action) {
  return state;
}

function isLoading(state = false, action) {
  return state;
}

function videoURL(state = "", action) {
  return state;
}

function currentUserSort(state = "", action) {
  return state;
}

function videoScale(state = 1, action) {
  return state;
}


const rootReducer = combineReducers({
  currentCount,
  users,
  specialText,
  currentCity,
  searchText,
  currentTemp,
  isLoading,
  videoURL,
  currentUserSort,
  videoScale
});

export default rootReducer;

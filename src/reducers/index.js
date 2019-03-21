import { combineReducers } from "redux";

function currentCount(state=0, action){
  if(action.type === "INCREASE_COUNTER"){
    
  }
  if(action.type === "DECREASE_COUNTER"){
    
  }
  return state;
}   

function users(state =[], action){
  if(action.type === "ADD_USER"){
    // state = []
    // actions.value = {}//user object
    // state.push(action.value)
    // let newArray = state.map(p=>p); [...state] replaces this
    // newArray.push(action.value);
    // return newArray;

    return [...state,//state.map(p=>p);
      action.value //newArray.push(action.value);
    ];
  }
  if(action.type === "REMOVE_USER"){
    return [state.splice,action.value]
  }
  return state;
}

function currentTemp(state = 0, action){
  if(action.type === "SET_TEMP"){
    return action.value
  }
  return state;
}

function isLoading(state = false, action){
  if(action.type === "SET_IS_LOADING"){
    return action.value
  }
  return state;
}

function videoURL(state = "", action){
  if(action.type === "SET_VIDEO_URL"){
    return action.value
  }
  return state;
}

function searchText(state = "", action){
  if(action.type === "SET_SEARCH_TEXT"){
    return action.value
  }
  return state;
}

function currentUserSort(state = "first_name", action){
  if(action.type === "SET_CURRENT_USER_SORT"){
    return action.value
  }
  return state;
}

function videoScale(state = 1, action){
  if(action.type === "SET_VIDEO_SCALE"){
    return action.value
  }
  return state;
}

function specialText(state = "", action){
  // state = "" does the following shorthand
  //if(typeof(state)===undefined){
  //state = "" 
  //}
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



let reducers = combineReducers ({
  currentCount,
  specialText,
  currentCity,
  users,
  currentTemp,
  isLoading,
  videoURL,
  searchText,
  currentUserSort,
  specialText,
  videoScale
})

export default reducers;
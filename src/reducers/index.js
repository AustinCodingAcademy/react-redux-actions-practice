import {combineReducers} from "redux";


function currentCount(state=0, action){
  if(action.type === "INCREASE_COUNTER"){

  }
  if(action.type === "DECREASE_COUNTER"){

  }
  return state;
}

function currentCity(state="", action){
  if(action.type === "SET_CURRENT_CITY"){

  }
  return state;
}

function users(state=[], action){
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

function currentTemp(state=0, action){
  if(action.type === "SET_TEMP"){

  }
  return state;
}

function isLoading(state=false, action){
  if(action.type === "SET_IS_LOADING"){

  }
  return state;
}

function videoURL(state="", action){
  if(action.type === "SET_VIDEO_URL"){

  }
  return state;
}

unction searchText(state="", action){
  if(action.type === "SET_SEARCH_TEXT"){

  }
  return state;
}

unction currentUserSort(state="first_name", action){
  if(action.type === "SET_CURRENT_USER_SORT"){

  }
  return state;
}

unction videoScale(state=1, action){
  if(action.type === "SET_VIDEO_SCALE"){

  }
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
  videoScale,
});

export default rootReducer;

// Setting up redux:
// - Create reducers
// - Create store createStore(rootReducer, initialStateObject, /*... redux toolbar middleware .../)
// - Add Provider to app root (index.js) and pass store
// - Create containers around components that need access to redux connect(mapStateToProps, mapDispatchToProps)(MyComponent)
// - Map the state to the component props inside of mapStateToProps
// - Create action creators and actions
// - Map props with callback handlers inside of mapDispatchToProps to functions that call dispatch:

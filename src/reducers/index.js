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

const rootReducer = combineReducers({
  currentCount,
  users,
  specialText
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

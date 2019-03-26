import { combineReducers } from 'redux'


function currentCount(state=0, action){
  if(action.type === "INCREASE_COUNTER"){
    return state + 1
  }
  if(action.type === "DECREASE_COUNTER"){
    return state - 1
  }
  return state;
}   

function users(state =[], action){
  if(action.type === "ADD_USER"){
    return [action.value,...state]
  }
  if(action.type === "REMOVE_USER"){
    return state.slice(1)
  }
  return state;
}


function specialText(state = "", action){
  if(action.type === "SET_SPECIAL_TEXT"){
    return action.value;
  }
  return state;
}

const currentCity = (state="",action)=>{
  if(action.type === "SET_CURRENT_CITY"){
    return action.value;
  }
  return state;
}

const currentTemp = (state="",action) =>{
  if(action.type === "SET_TEMP"){
    return action.value
  }
  return state;
}

const searchText = (state="",action) =>{
  if(action.type === "SET_SEARCH_TEXT"){
    return action.value;
  }
  return state;
}

const videoScale = (state="",action)=>{
  if(action.type === "SET_VIDEO_SCALE"){
    return action.value;
  }
  return state;
}

const currentUserSort = (state="",action)=>{
  if(action.type === "SET_CURRENT_USER_SORT"){
    return action.value;
  }
  return state;
}

const videoURL = (state="",action)=>{
  if(action.type === "SET_VIDEO_URL"){
    return action.value;
  }
  return state;
}

const isLoading = (state="false",action)=>{
  if(action.type==="SET_IS_LOADING"){
    return action.value;
  }
  return state;
}

const reducers = combineReducers({
  currentCount,users,specialText,currentCity,currentTemp,
  searchText,videoScale,currentUserSort,videoURL,isLoading
})

export default reducers;
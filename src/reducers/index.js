function currentCount(state=0, action){
  switch (action.type){
    case "INCREASE_COUNTER":
      return state +1;
    case "DECREASE_COUNTER":
      return state -1;
    default:
      return state;
  }
}

function users(state =[], action){
  switch (action.type){
    case "ADD_USER":
      return slice(1);
    case "REMOVE_USER":
      return [...state,action.value];
    default:
      return state;
  }
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


function currentTemp(state = "", action){
  if(action.type === "SET_TEMP"){
    return action.value;
  }
  return state;
}


function isLoading(state = "", action){
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


function searchText(state = "", action){
  if(action.type === "SET_SEARCH_TEXT"){
    return action.value;
  }
  return state;
}


function currentUserSort(state = [], action){
  if(action.type === "SET_CURRENT_USER_SORT"){
    return action.value;
  }
  return state;
}


function videoScale(state = "", action){
  if(action.type === "SET_VIDEO_SCALE"){
    return action.value;
  }
  return state;
}


function currentCount(state=0, action){
  if(action.type === "INCREASE_COUNTER"){

  }
  if(action.type === "DECREASE_COUNTER"){
    
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


function specialText(state=[], action){
  if(action.type === "SET_SPECIAL_TEXT"){
    return action.value;
  }
  return state;
}

function currentCity(state="", action){
  return state;
}

function currentTemp(state=0, action){
  return state;
}

function isLoading(state=true, action){
  return state;
}

function videoURL(state="", action){
  return state;
}

function CurrentUserSort(state="", action){
  return state;
}

function videoScale(state=0, action){
  return state;
}



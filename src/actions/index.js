export function increaseCounter(){
  return {
    type:"INCREASE_COUNTER"
  }
}

export function decreaseCounter(){
  return {
    type:"DECREASE_COUNTER"
  }
}

export function setSpecialText(text){
  return {
    type:"SET_SPECIAL_TEXT",
    value:text
  }
}

export function addUser(user){
  return {
    type:"ADD_USER",
    value:user
  }
}
export function removeUser(){
  return {
    type:"REMOVE_USER"
  }
}

export function setSearchText(text){
  return {
    type:"SET_SEARCH_TEXT",
    value:text
  }
}

export function setIsLoading(){
  return {
    type:"SET_IS_LOADING",
    value:true
  }
}

export function setTemp(){
  return {
    type:"SET_TEMP",
  }
}

export function currentCity(text){
  return {
    type:"SET_CURRENT_CITY",
  }
}

export function videoURL(url){
  return {
    type:"SET_VIDEO_URL",
  }
}

export function currentUserSort(sortOn){
  return {
    type:"SET_CURRENT_USER_SORT",
  }
}

export function setVideoScale(){
  return {
    type:"SET_VIDEO_SCALE",
  }
}

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
export function removeUser(user){
  return {
    type:"REMOVE_USER",
    value: user
  }
}

export function setSearchText(txt){
  return {
    type:"SET_SEARCH_TEXT",
    value:txt
  }
}

export function setIsLoading(){
  return {
    type:"SET_IS_LOADING",
    value:true
  }
}

export function setTemp(temp){
  return {
    type:"SET_TEMP",
    value: temp
  }
}

export function currentCity(city){
  return {
    type:"SET_CURRENT_CITY",
    value: city
  }
}

export function videoURL(url){
  return {
    type:"SET_VIDEO_URL",
    value: URL
  }
}

export function currentUserSort(sortOn){
  return {
    type:"SET_CURRENT_USER_SORT",
    value: sortOn
  }
}

export function setVideoScale(){
  return {
    type:"SET_VIDEO_SCALE",
  }
}

export function increaseCounter(){
  return {//the object returned here is called the Action
    type:"INCREASE_COUNTER"//you MUST have a type, must be a string that describes the action, use uppercase with underscores as convention. This is so we can text for it later.
  }
}

export function decreaseCounter(){
  return {//the object returned here is called the Action
    type:"DECREASE_COUNTER"//you MUST have a type, must be a string that describes the action, use uppercase with underscores as convention. This is so we can text for it later.
  }
}


export function setSpecialText(text){
  return {
    type:"SET_SPECIAL_TEXT",
    value: text
  }
}

export function setCurrentCity(city){
  return {
    type:"SET_CURRENT_CITY",
    value: city
  }
}

export function setTemp(temp){
  return {
    type:"SET_TEMP",
    value: temp
  }
}

export function addUser(user){  
  return {
    type:"ADD_USER",
    value: user
  }
}
export function removeUser(){
  return {
    type:"REMOVE_USER"
  }
}

export function setSearchText(text){
  return {
    type: "SET_SEARCH_TEXT",
    value: text
  }
}

export function setCurrentUserSort(sort){
  return {
    type: "SET_CURRENT_USER_SORT",
    value: sort
  }
}

export function setIsLoading(isLoading){
  return {
    type: "SET_IS_LOADING",
    value: isLoading
  }
}

export function setVideoURL(URL){
  return {
    type: "SET_VIDEO_URL",
    value: URL
  }
}

export function setVideoScale(scale){
  return {
    type: "SET_VIDEO_SCALE",
    value: scale
  }
}


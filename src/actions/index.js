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

export function setSpecialText(txt){
  return {
    type:"SET_SPECIAL_TEXT",
    value:txt
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
    type:"REMOVE_USER",
    //Readme says that there's no need for a value... why?
    // value: user
  }
}

export function setSearchText(text){
  return {
    type: "SET_SEARCH_TEXT",
    value: text
  }
}

// export function currentCity(city){
//   return {
//     type:"SET_CURRENT_CITY",
//     value: city
//   }
// }

export function setCurrentCity(city){
  return {
    type: "SET_CURRENT_CITY",
    value: city
  }
}

export function setTemp(temp){
  return {
    type: "SET_TEMP",
    value: temp
  }
}

export function setCurrentUserSort(sort){
  return {
    type: "SET_CURRENT_USER_SORT",
    value: sort
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

export function setIsLoading(isLoading){
  return{
    type: "SET_IS_LOADING",
    value: isLoading
  }
}

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
    value:user
  }
}
export function removeUser(){
  return {
    type:"REMOVE_USER"
  }
}
export function changeCity(txt){
  return {
    type:"CHANGE_CITY",
    value: txt
  }
}
export function changeTemperature(txt){
  return {
    type:"CHANGE_TEMPERATURE",
    value: txt
  }
}
export function findVideo(txt){
  return {
    type:"FIND_VIDEO",
    value: txt
  }
}
export function scaleVideo(txt){
  return {
    type:"SCALE_VIDEO",
    value: txt
  }
}
export function modalToggle(txt){
  return {
    type:"MODAL_TOGGLE",
    value: txt
  }
}
export function currentUserSorter(txt){
  return {
    type:"SORT_USER",
    value: txt
  }
}
export function searchText(txt){
  return {
    type:"SEARCH_USERS",
    value: txt
  }
}

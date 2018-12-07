//redux action object must have a type and a value that is human readable description of what the function returns.
//need a separate function for each element (ie. button, input, slider etc) you have.
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
export function setCurrentCity(city){
  return {
    type: "SET_CURRENT_CITY",
    value: city
  }
}
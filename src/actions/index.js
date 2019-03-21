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
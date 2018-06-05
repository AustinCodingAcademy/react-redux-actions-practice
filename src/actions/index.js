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


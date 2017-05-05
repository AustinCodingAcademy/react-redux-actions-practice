function increaseCounter(){
  return {
    type:"INCREASE_COUNTER"
  }
}

function setSpecialText(txt){
  return {
    type:"SET_SPECIAL_TEXT",
    value:txt
  }
}

function addUser(user){
  return {
    type:"ADD_USER",
    value:user
  }
}
function removeUser(){
  return {
    type:"REMOVE_USER"
  }
}
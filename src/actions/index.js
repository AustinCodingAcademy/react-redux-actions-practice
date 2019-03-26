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

export function setCurrentCity(city) {
  return {
    type: "SET_CURRENT_CITY",
    value: city
  }
}

export function setCurrentTemperature(temperature) {
  return {
    type: "SET_CURRENT_TEMPERATURE",
    value: temperature
  }
}

export function setVideoUrl(url) {
  return {
    type: "SET_VIDEO_URL",
    value: url
  }
}


export function setFirstNameFilter(firstName) {
  return {
    type: "SET_FIRST_NAME",
    value: firstName
  }
}
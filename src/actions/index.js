export const INCREASE_COUNTER = 'INCREASE_COUNTER';

export function increaseCounter(){
  return {
    type:INCREASE_COUNTER
  }
}

export function decreaseCounter() {
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

export function setTemp(temp) {
  return {
    type: 'SET_TEMP',
    value: temp
  }
}

export function setIsLoading(isLoading) {
  return {
    type: 'SET_IS_LOADING',
    value: isLoading
  }
}

export function setVideoURL(url) {
  return {
    type: 'SET_VIDEO_URL',
    value: url
  }
}
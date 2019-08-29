export const INCREASE_COUNTER = "INCREASE_COUNTER";
export const LOAD_USERS = "LOAD_USERS";
export const DECREASE_COUNTER = "DECREASE_COUNTER"
export const SET_SPECIAL_TEXT= "SET_SPECIAL_TEXT"
export const ADD_USER = "ADD_USER"
export const REMOVE_USER = "REMOVE_USER"
export const SET_SEARCH_TEXT = "SET_SEARCH_TEXT"
export const SET_IS_LOADING = "SET_IS_LOADING"
export const SET_TEMP = "SET_TEMP"
export const SET_CURRENT_CITY = "SET_CURRENT_CITY"
export const SET_VIDEO_URL = "SET_VIDEO_URL"
export const SET_CURRENT_USER_SORT = "SET_CURRENT_USER_SORT"
export const SET_VIDEO_SCALE = "SET_VIDEO_SCALE"

export function increaseCounter(){
  return {
    type: INCREASE_COUNTER
  }
}

export function loadUsers(users) {
  return {
    type: LOAD_USERS,
    value: users
  }
}

export function decreaseCounter(){
  return {
    type:DECREASE_COUNTER
  }
}

export function setSpecialText(text){
  return {
    type:SET_SPECIAL_TEXT,
    value:text
  }
}

export function addUser(user){
  return {
    type:ADD_USER,
    value:user
  }
}
export function removeUser(){
  return {
    type:REMOVE_USER
  }
}

export function setSearchText(text){
  return {
    type: SET_SEARCH_TEXT,
    value: text
  }
}

export function setIsLoading(isLoading) {
  return {
    type:  SET_IS_LOADING,
    value: isLoading
  }
}

export function setTemp(temp) {
  return {
    type: SET_TEMP,
    value: temp
  }
}

export function setCurrentCity(city) {
  return {
    type: SET_CURRENT_CITY,
    value: city
  }
}

export function setVideoURL(URL) {
  return {
    type: SET_VIDEO_URL,
    value: URL
  }
}

export function setCurrentUserSort(sort) {
  return {
    type: SET_CURRENT_USER_SORT,
    value: sort
  }
}

export function setVideoScale(scale) {
  return {
    type: SET_VIDEO_SCALE,
    value: scale
  }
}

export function addUser(user) {
  return {
    type: "ADD_USER",
    value: user
  }
}

export function decreaseCounter() {
  return {
    type: "DECREASE_COUNTER",
  }
}

export function increaseCounter() {
  return {
    type:"INCREASE_COUNTER"
  }
}

export function removeUser() {
  return {
    type: "REMOVE_USER"
  }
}

export function setCurrentCity(txt) {
  return {
    type: "SET_CURRENT_CITY",
    value: txt
  }
}

export function setCurrentUserSort(txt) {
  return {
    type: "SET_CURRENT_USER_SORT",
    value: txt
  }
}

export function setIsLoading(value) {
  return {
    type: "SET_IS_LOADING",
    value: value
  }
}

export function setSearchText(txt) {
  return {
    type: "SET_SEARCH_TEXT",
    value: txt
  }
}

export function setSpecialText(txt) {
  return {
    type:"SET_SPECIAL_TEXT",
    value: txt
  }
}

export function setTemp(value) {
  return {
    type: "SET_TEMP",
    value: value
  }
}

export function setVideoScale(value) {
  return {
    type: "SET_VIDEO_SCALE",
    value: value
  }
}

export function setVideoURL(txt) {
  return {
    type: "SET_VIDEO_URL",
    value: txt
  }
}

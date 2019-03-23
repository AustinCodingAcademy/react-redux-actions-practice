export function increaseCounter() {
  return {
    type: "INCREASE_COUNTER"
  }
}

export function decreaseCounter() {
  return {
    type: "DECREASE_COUNTER"
  }
}

export function setSpecialText(txt) {
  return {
    type: "SET_SPECIAL_TEXT",
    value: txt
  }
}

export function add(user) {
  return {
    type: "ADD_USER",
    value: user
  }
}

export function removeUser() {
  return {
    type: "REMOVE_USER"
  }
}

export function setCurrentCity() {
  return {
    type: "SET_CURRENT_CITY"
  }
}

export function setSearchText(txt) {
  return {
    type: "SET_SEARCH_TEXT",
    value: txt
  }
}

export function setTemp(num) {
  return {
    type: "SET_TEMP",
    value: num
  }
}

export function setIsLoading() {
  return {
    type: "SET_IS_LOADING"
  }
}

export function setVideoURL(txt) {
  return {
    type: "SET_VIDEO_URL",
    value: txt
  }
}

export function setCurrentUserSort(txt) {
  return {
    type: "SET_CURRENT_USER_SORT",
    value: txt
  }
}

export function setVideoScale() {
  return {
    type: "SET_VIDEO_SCALE"
  }
}
export function increaseCounter() {
  return {
    type: 'INCREASE_COUNTER',
  };
}

export function decreaseCounter() {
  return {
    type: 'DECREASE_COUNTER',
  };
}

export function setSpecialText(text) {
  return {
    type: 'SET_SPECIAL_TEXT',
    value: text
  }
}

export function setCurrentCity(city) {
  return {
    type: 'SET_CURRENT_CITY',
    value: city
  }
}

export function setSearchText(text) {
  return {
    type: 'SET_SEARCH_TEXT',
    value: text
  }
}

export function setCurrentTemp(temp) {
  return {
    type: 'SET_CURRENT_TEMP',
    value: temp
  }
}

export function setIsLoading(bool) {
  return {
    type: 'SET_IS_LOADING',
    value: bool
  }
}

export function setVideoURL(url) {
  return {
    type: 'SET_VIDEO_URL',
    value: url
  }
}

export function setCurrentUserSort(sorter) {
  return {
    type: 'SET_USER_SORT',
    value: sorter
  }
}

export function setVideoScale(scale) {
  return {
    type: 'SET_VIDEO_SCALE',
    value: scale
  }
}

export function addUser(user) {
  return {
    type: 'ADD_USER',
    value: user
  }
}

export function removeUser() {
  return {
    type: 'REMOVE_USER',
  }
}
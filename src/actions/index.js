//Create Action in actions/index.js//

//added a value of count and took count as the argument//
export function increaseCounter(count){
  return {
    type:"INCREASE_COUNTER",
    value:count
  }
}
//export function decreaseCounter added//
export function decreaseCounter(count){
  return{
    type:"DECREASE_COUNTER",
    value:count
  }
}
//this export function was already done for me//
export function setSpecialText(txt){
  return {
    type:"SET_SPECIAL_TEXT",
    value:txt
  }
}
//export function removeUser added//
export function removeUser(user){
return {
  type:"REMOVE_USER",
  value:user
  }
}
//this function was done for me with nothing to add//
export function addUser(user){
  return {
    type:"ADD_USER",
    value:user
  }
}
//export function setSearchText added//
export function setSearchText(text){
  return {
    type:"SET_SEARCH_TEXT",
    value:text
  }
}
//export function setIsLoading added//
export function setIsLoading(isLoading){
  return {
    type:"SET_IS_LOADING",
    value:isLoading
  }
}
//export function setTemp//
export function setTemp(temp){
  return{
    type:"SET_TEMP",
    value:temp
  }
}
//export function CurrentCity//
export function setCurrentCity(city){
  return{
  type="SET_CURRENT_CITY",
  value:city
  }
}
//export function setVideoURL//
export function setVideoURL(URL){
  return{
    type:"SET_VIDEO_URL",
    value:URL
  }
}
//export function setCurrentUserSort(sort)
export function setCurrentUserSort(sort){
  return{
    type:"SET_CURRENT_USER_SORT",
    value:sort
  }
}
//export function setVideoScale//
export function setVideoScale(scale){
  return{
    type:"SET_VIDEO_SCALE"
    value:scale
  }
}
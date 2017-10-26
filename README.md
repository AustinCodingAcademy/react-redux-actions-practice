# Make sure to do one thing at a time, save and refresh to check for errors

###  Reducers
  X Create Reducers in reducers/index.js

  X Look at state.js and create a reducer for each piece of state

  X Remember reducers take 2 parameters: `state`, and `action`

  X Remember to give state a default value appropriate for what type it is in the reducer. Number, string, array, object

  ??? Remember to return state if the reducer doesn't care about the action

  * You will need to decide which reducer cares about which action type

  X Combine reducers and export

### Make these reducers
  X currentCount
    * if "INCREASE_COUNTER" of "DECREASE_COUNTER" should return the current count plus one or minus one, depending on the action

  X specialText
    * if "SET_SPECIAL_TEXT" should return the action value

  X currentCity
    * if "SET_CURRENT_CITY" should return the action value

  X users
    * if "REMOVE_USER" OR "ADD_USER" should return slice(1) to remove the first user or [...state,action.value] to add a user

  X currentTemp
    * if "SET_TEMP" should return action value

  X isLoading
    * if "SET_IS_LOADING" should return action value  

  X videoURL
    * if "SET_VIDEO_URL" should return action value

  X searchText
    * if "SET_SEARCH_TEXT" should return action value

  X currentUserSort
    * if "SET_CURRENT_USER_SORT" should return action value

  X videoScale
    * if "SET_VIDEO_SCALE" should return action value

### Create Actions in actions/index.js
  X increaseCounter()
    X type = "INCREASE_COUNTER"

  X decreaseCounter()
    X type = "DECREASE_COUNTER"

  X setSpecialText(text)
    X type = "SET_SPECIAL_TEXT"
    X value = text

  X removeUser()
    X type = "REMOVE_USER"

  X addUser(user)
    X type = "ADD_USER"
    X value = user

  X setSearchText(text)
    X type = "SET_SEARCH_TEXT"
    X value = text

  X setIsLoading(isLoading)
    X type = "SET_IS_LOADING"
    X value = isLoading

  X setTemp(temp)
    X type = "SET_TEMP"
    X value = temp

  X setCurrentCity(city)
    X type = "SET_CURRENT_CITY"
    X value = city

  X setVideoURL(URL)
    X type = "SET_VIDEO_URL"
    X value = URL

  X setCurrentUserSort(sort)
    X type = "SET_CURRENT_USER_SORT"
    X value = sort

  X setVideoScale(scale)
    X type = "SET_VIDEO_SCALE"
    X value = scale

### Create Store - DONE PRIOR!
  X Create a store.js file
  X Import state from state.js
  X import createStore from redux
  X import reducers from reducers
  X create the store
  X export the store

### Provide store to components
  X In index.js
  X Import Provider from react-redux
  X Import store from store.js
  X Use Provider component to wrap App

  X Make sure there is no whitespace between Provider and App

  X Give Provider a prop “store” and the value of the store


### Containers
  * We need to leave the components alone and create containers
  * In the container folder, create a container file for each component i.e. SpecialTextContainer.js
  * Import the appropriate component into the container file
  * This is where the connect function and the actions should be imported
  * This is where mapStateToProps and mapDispatchToProps should be
  * This is where you should do the connecting
  * Export the container



### Create these Containers that care about what the data is
  * Import connect from react-redux into all containers
  * Import the appropriate component into the container
  * Create mapStateToProps function
  * Call the connect function

  XX SpecialTextContainer.js
    X map a prop called `text` to the state `specialText`

  XX UsersContainer.js
    X map a prop called `users` to the state `users`
    X map a prop called `firstNameFilter` to the state `searchText`
    X map a prop called `sortOn` to the state `currentUserSort`

  XX CounterContainer.js
    X map a prop called `count` to the state `currentCount`

  XX CurrentCityContainer.js
    X map a prop called `text` to the state `currentCity`

  XX ThermostatContainer.js
    X map a prop called `temp` to the state `currentTemp`

  XX VideoPlayerContainer.js
    X map a prop called `URL` to the state `videoURL`

    X map a prop called `scale` to the state `videoScale`

  XX ModalContainer.js
    X map a prop called `isLoading` to the state `isLoading`

    /////////

### Create these Containers that care about changing the data
  * Import the connect function from react-redux
  * create mapDispatchToProps
  * connect the component so that it becomes a container
  * export container

  XX SpecialTextBoxContainer.js
    * import `setSpecialText` action
    * map prop `set` to action `setSpecialText`

  XX SearchTextContainer.js
      X import `setSearchText` action
      X map prop `set` to action `setSearchText`

  XX UserButtonsContainer.js
  --> not sure about 2 in one :/
    X import `addUser` and `removeUser` action
    X map prop `add` to action `addUser`
    X map prop `remove` to action `removeUser`

  XX CityDropDownContainer.js
    X import `setCurrentCity` action
    X map prop `set` to action `setCurrentCity`

  XX ChangeTemperatureContainer.js
    X import `setTemp` action
    X map prop `set` to action `setTemp`
    ? ChangeTemperatureContainer.js
      ? import `setTemp` action
      ? map prop `set` to action `setTemp`

?? multiple
  XX CounterButtonContainer.js
    X import the increaseCounter and decreaseCounter actions
    X map prop `increase` to action `increaseCounter`
    X map prop `decrease` to action `decreaseCounter`

  XX VideoTextBoxContainer.js
    X import `setVideoURL` action
    X map prop `set` to action `setVideoURL`

  XX SortUsersContainer.js
    X import `setCurrentUserSort` action
    X map prop `set` to action `setCurrentUserSort`

  XX ScaleVideoContainer.js
    X import `setVideoScale` action
    X map prop `set` to action `setVideoScale`

  XX ShowModalContainer.js
    X import `setIsLoading` action
    X map prop `setIsLoading` to action `setIsLoading`Show

  XX ModalContainer.js
    X import `setIsLoading` action
    X map prop `setIsLoading` to action `setIsLoading`

### App
  * Change App.js
  * Use containers instead of components
  * Basically, just add the word Container everywhere a component is referenced

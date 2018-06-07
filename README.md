# Make sure to do one thing at a time, save and refresh to check for errors

###  Reducers
  * X Create Reducers in reducers/index.js
  * X Look at state.js and create a reducer for each piece of state
  * X Remember reducers take 2 parameters: `state`, and `action`
  * X Remember to give state a default value appropriate for what type it is in the reducer. Number, string, array, object
  * X Remember to return state if the reducer doesn't care about the action
  * X You will need to decide which reducer cares about which action type
  * X Combine reducers and export

### Make these reducers
  * X currentCount
    * if "INCREASE_COUNTER" of "DECREASE_COUNTER" should return the current count plus one or minus one, depending on the action
  * X specialText
    * if "SET_SPECIAL_TEXT" should return the action value
  * X currentCity
    * if "SET_CURRENT_CITY" should return the action value
  * X users
    * if "REMOVE_USER" OR "ADD_USER" should return slice(1) to remove the first user or [...state,action.value] to add a user
  * X currentTemp
    * if "SET_TEMP" should return action value
  * X isLoading
    * if "SET_IS_LOADING" should return action value  
  * X videoURL
    * if "SET_VIDEO_URL" should return action value
  * X searchText
    * if "SET_SEARCH_TEXT" should return action value
  * X currentUserSort
    * if "SET_CURRENT_USER_SORT" should return action value
  * X videoScale
    * if "SET_VIDEO_SCALE" should return action value
### Create Actions in actions/index.js
  * X increaseCounter()
    * type = "INCREASE_COUNTER"
  * X decreaseCounter()
    * type = "DECREASE_COUNTER"
  * X setSpecialText(text)
    * type = "SET_SPECIAL_TEXT"
    * value = text
  * X removeUser()
    * type = "REMOVE_USER"
  * X addUser(user)
    * type = "ADD_USER"
    * value = user
  * X setSearchText(text)
    * type = "SET_SEARCH_TEXT"
    * value = text
  * X setIsLoading(isLoading)
    * type = "SET_IS_LOADING"
    * value = isLoading
  * X setTemp(temp)
    * type = "SET_TEMP"
    * value = temp
  * X setCurrentCity(city)
    * type = "SET_CURRENT_CITY"
    * value = city
  * X setVideoURL(URL)
    * type = "SET_VIDEO_URL"
    * value = URL
  * X setCurrentUserSort(sort)
    * type = "SET_CURRENT_USER_SORT"
    * value = sort
  * X setVideoScale(scale)
    * type = "SET_VIDEO_SCALE"
    * value = scale
### Create Store
  * X Create a store.js file
  * X  Import state from state.js
  * X import createStore from redux
  * X import reducers from reducers
  * X create the store
  * X export the store

### Provide store to components
  * X In index.js
  * X Import Provider from react-redux
  * X Import store from store.js
  * X Use Provider component to wrap App
  * X Make sure there is no whitespace between Provider and App
  * X Give Provider a prop “store” and the value of the store


### Containers
  * We need to leave the components alone and create containers
  * In the container folder, create a container file for each component i.e. SpecialTextContainer.js
  * Import the appropriate component into the container file
  * This is where the connect function and the actions should be imported
  * This is where mapStateToProps and mapDispatchToProps should be
  * This is where you should do the connecting
  * Export the container



### Create these Containers that care about what the data is
  * X Import connect from react-redux into all containers
  * X Import the appropriate component into the container
  * X Create mapStateToProps function 
  * X Call the connect function
  * X SpecialTextContainer.js
    * map a prop called `text` to the state `specialText`
  * X UsersContainer.js
    * map a prop called `users` to the state `users`
    * map a prop called `firstNameFilter` to the state `searchText`
    * map a prop called `sortOn` to the state `currentUserSort`
  * X CounterContainer.js
    * map a prop called `count` to the state `currentCount`
  * X CurrentCityContainer.js
    * map a prop called `text` to the state `currentCity`
  * X ThermostatContainer.js
    * map a prop called `temp` to the state `currentTemp`
  * X VideoPlayerContainer.js
    * map a prop called `URL` to the state `videoURL`
    * map a prop called `scale` to the state `videoScale`
  * X ModalContainer.js
    * map a prop called `isLoading` to the state `isLoading`

### Create these Containers that care about changing the data
  * X Import the connect function from react-redux
  * X create mapDispatchToProps
  * X connect the component so that it becomes a container
  * X export container
  * X SpecialTextBoxContainer.js
    * import `setSpecialText` action
    * map prop `set` to action `setSpecialText`
  * X UserButtonsContainer.js
    * import `addUser` and `removeUser` action
    * map prop `add` to action `addUser`
    * map prop `remove` to action `removeUser`
  * X CityDropDownContainer.js
    * import `setCurrentCity` action
    * map prop `set` to action `setCurrentCity`
  * X CounterButtonContainer.js
    * import the increaseCounter and decreaseCounter actions
    * map prop `increase` to action `increaseCounter`
    * map prop `decrease` to action `decreaseCounter`
  * X SearchTextBoxContainer.js
    * import `setSearchText` action
    * map prop `set` to action `setSearchText`
  * X ChangeTemperatureContainer.js
    * import `setTemp` action
    * map prop `set` to action `setTemp`
  * X VideoTextBoxContainer.js
    * import `setVideoURL` action
    * map prop `set` to action `setVideoURL`
  * X SortUsersContainer.js
    * import `setCurrentUserSort` action
    * map prop `set` to action `setCurrentUserSort`
  * X ScaleVideoContainer.js
    * import `setVideoScale` action
    * map prop `set` to action `setVideoScale`
  * X ShowModalContainer.js
    * import `setIsLoading` action
    * map prop `setIsLoading` to action `setIsLoading`Show
  * X ModalContainer.js
    * import `setIsLoading` action
    * map prop `setIsLoading` to action `setIsLoading`

### App
  * X Change App.js
  * X Use containers instead of components
  * X Basically, just add the word Container everywhere a component is referenced

# Make sure to do one thing at a time, save and refresh to check for errors

###  Reducers
  * Create Reducers in reducers/index.js
  * Look at state.js and create a reducer for each piece of state
  * Remember reducers take 2 parameters: `state`, and `action`
  * Remember to give state a default value appropriate for what type it is in the reducer. Number, string, array, object
  * Remember to return state
  * You will need to decide which reducer cares about which action type
### Make these reducers
  * currentCount
  * specialText
  * currentCity
  * users
  * currentTemp
  * isLoading
  * videoURL
  * searchText
  * currentUserSort
  * videoScale
### Create Actions in actions/index.js
  * increaseCounter
  * decreaseCounter
  * setSpecialText
  * removeUser - use slice
  * addUser 
  * setSearchText
  * setIsLoading
  * setTemp
  * setCurrentCity
  * setVideoURL
  * setCurrentUserSort
  * setVideoScale
### Create Store
  * Create a store.js file
  * Import state from state.js
  * import createStore from redux
  * import reducers from reducers
  * create the store
  * export the store

### Provide store to components
  * In index.js
  * Import Provider from react-redux
  * Import store from store.js
  * Use Provider component to wrap App
  * Make sure there is no whitespace between Provider and App
  * Give Provider a prop “store” and the value of the store


### Containers
  * We need to leave the components alone and create containers
  * In the container folder, create a container file for each component i.e. SpecialTextContainer.js
  * Import the appropriate component into the container file
  * This is where the connect function and the actions should be imported
  * This is where mapStateToProps and mapDispatchToProps should be
  * This is where you should do the connecting
  * Export the container
  
### Create these Containers that care about what the data is
  * import connect from react-redux into all components
  * create mapStateToProps function 
  * call the connect function
  * SpecialTextContainer.js
    * map a prop called `text` to the state `specialText`
  * UsersContainer.js
    * map a prop called `users` to the state `users`
    * map a prop called `firstNameFilter` to the state `searchText`
    * map a prop called `sortOn` to the state `currentUserSort`
  * CounterContainer.js
    * map a prop called `count` to the state `currentCount`
  * CurrentCityContainer.js
    * map a prop called `text` to the state `currentCity`
  * ThermostatContainer.js
    * map a prop called `temp` to the state `currentTemp`
  * VideoPlayerContainer.js
    * map a prop called `URL` to the state `videoURL`
    * map a prop called `scale` to the state `videoScale`
  * ModalContainer.js
    * map a prop called `isLoading` to the state `isLoading`

### Create these Containers that care about changing the data
  * Import the connect function from react-redux
  * create mapDispatchToProps
  * connect the component so that it becomes a container
  * export container
  * SpecialTextBoxContainer.js
    * import `setSpecialText` action
    * map prop `set` to action `setSpecialText`
  * UserButtonsContainer.js
    * import `addUser` and `removeUser` action
    * map prop `add` to action `addUser`
    * map prop `remove` to action `removeUser`
  * CityDropDownContainer.js
    * import `setCurrentCity` action
    * map prop `set` to action `setCurrentCity`
  * ChangeTemperatureContainer.js
    * import `setTemp` action
    * map prop `set` to action `setTemp`
  * CounterButtonContainer.js
    * import the increaseCounter and decreaseCounter actions
    * map prop `increase` to action `increaseCounter`
    * map prop `decrees` to action `decreaseCounter`
  * SearchTextBoxContainer.js
    * import `setSearchText` action
    * map prop `set` to action `setSearchText`
  * ChangeTemperatureContainer.js
    * import `setTemp` action
    * map prop `set` to action `setTemp`
  * VideoTextBoxContainer.js
    * import `setVideoURL` action
    * map prop `set` to action `setVideoURL`
  * SortUsersContainer.js
    * import `setCurrentUserSort` action
    * map prop `set` to action `setCurrentUserSort`
  * ScaleVideoContainer.js
    * import `setVideoScale` action
    * map prop `set` to action `setVideoScale`
  * ShowModalContainer.js
    * import `setIsLoading` action
    * map prop `setIsLoading` to action `setIsLoading`Show
  * ModalContainer.js
    * import `setIsLoading` action
    * map prop `setIsLoading` to action `setIsLoading`

### App
  * Change App.js
  * Use containers instead of components
  * Basically, just add the word Container everywhere a component is referenced
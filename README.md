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

### Containers that care about what the data is
  * import connect from react-redux into all components
  * create mapStateToProps function 
  * call the connect function
  * Users.js
    * map a prop called `users` to the state `users`
    * map a prop called `firstNameFilter` to the state `searchText`
    * map a prop called `sortOn` to the state `currentUserSort`
  * Counter.js
    * map a prop called `count` to the state `currentCount`
  * SpecialText.js
    * map a prop called `text` to the state `specialText`
  * CurrentCity.js
    * map a prop called `text` to the state `currentCity`
  * Thermostat.js
    * map a prop called `temp` to the state `currentTemp`
  * VideoPlayer.js
    * map a prop called `URL` to the state `videoURL`
    * map a prop called `scale` to the state `videoScale`
  * Modal.js
    * map a prop called `isLoading` to the state `isLoading`

Containers that care about changing the data
  * Import the connect function from react-redux
  * create mapDispatchToProps
  * connect the component so that it becomes a container
  * export container
  * UserButtons.js
    * import `addUser` and `removeUser` action
    * map prop `add` to action `addUser`
    * map prop `remove` to action `removeUser`
  * SpecialTextBox.js
    * import `setSpecialText` action
    * map prop `set` to action `setSpecialText`
  * CityDropDown.js
    * import `setCurrentCity` action
    * map prop `set` to action `setCurrentCity`
  * ChangeTemperature.js
    * import `setTemp` action
    * map prop `set` to action `setTemp`
  * CounterButton.js
    * import the increaseCounter and decreaseCounter actions
    * map prop `increase` to action `increaseCounter`
    * map prop `decrees` to action `decreaseCounter`
  * SearchTextBox.js
    * import `setSearchText` action
    * map prop `set` to action `setSearchText`
  * ChangeTemperature.js
    * import `setTemp` action
    * map prop `set` to action `setTemp`
  * VideoTextBox.js
    * import `setVideoURL` action
    * map prop `set` to action `setVideoURL`
  * SortUsers.js
    * import `setCurrentUserSort` action
    * map prop `set` to action `setCurrentUserSort`
  * ScaleVideo.js
    * import `setVideoScale` action
    * map prop `set` to action `setVideoScale`
  * ShowModal.js
    * import `setIsLoading` action
    * map prop `setIsLoading` to action `setIsLoading`Show
  * Modal.js
    * import `setIsLoading` action
    * map prop `setIsLoading` to action `setIsLoading`

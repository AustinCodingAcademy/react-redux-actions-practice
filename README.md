# Make sure to do one thing at a time, save and refresh to check for errors
### Setup
Fork, clone, npm i, npm start

### Intro
View this video to see how the app should work once you are done coding. [Video](https://youtu.be/R8VFic_ZZUc). This project is to practice using redux actions to control data that is changed through user interactions. On the left hand side of the page is a collection of different inputs that are available on a web page. When the user interacts with the input it will change some data that should update the right hand side of the page. All you need to do is code the redux containers such that it will connect redux actions and data to the components. You do not need to alter the existing components themselves. There is nothing out of the ordinary that needs to be done here so if you do not undersand the instruction exactly, try to relate it to how you already know what to do with redux.




###  Reducers
  * Create Reducers in reducers/index.js
  * Look at state.js and create a reducer for each piece of state
  * Remember reducers take 2 parameters: `state`, and `action`
  * Remember to give state a default value appropriate for what type it is in the reducer. Number, string, array, object
  * Remember to return state if the reducer doesn't care about the action
  * You will need to decide which reducer cares about which action type
  * Combine reducers and export

### Make these reducers
  * currentCount
    * if "INCREASE_COUNTER" of "DECREASE_COUNTER" should return the current count plus one or minus one, depending on the action
  * specialText
    * if "SET_SPECIAL_TEXT" should return the action value
  * currentCity
    * if "SET_CURRENT_CITY" should return the action value
  * users
    * if "REMOVE_USER" OR "ADD_USER" should return slice(1) to remove the first user or [...state,action.value] to add a user
  * currentTemp
    * if "SET_TEMP" should return action value
  * isLoading
    * if "SET_IS_LOADING" should return action value  
  * videoURL
    * if "SET_VIDEO_URL" should return action value
  * searchText
    * if "SET_SEARCH_TEXT" should return action value
  * currentUserSort
    * if "SET_CURRENT_USER_SORT" should return action value
  * videoScale
    * if "SET_VIDEO_SCALE" should return action value
### Create Actions in actions/index.js
  * increaseCounter()
    * type = "INCREASE_COUNTER"
  * decreaseCounter()
    * type = "DECREASE_COUNTER"
  * setSpecialText(text)
    * type = "SET_SPECIAL_TEXT"
    * value = text
  * removeUser()
    * type = "REMOVE_USER"
  * addUser(user)
    * type = "ADD_USER"
    * value = user
  * setSearchText(text)
    * type = "SET_SEARCH_TEXT"
    * value = text
  * setIsLoading(isLoading)
    * type = "SET_IS_LOADING"
    * value = isLoading
  * setTemp(temp)
    * type = "SET_TEMP"
    * value = temp
  * setCurrentCity(city)
    * type = "SET_CURRENT_CITY"
    * value = city
  * setVideoURL(URL)
    * type = "SET_VIDEO_URL"
    * value = URL
  * setCurrentUserSort(sort)
    * type = "SET_CURRENT_USER_SORT"
    * value = sort
  * setVideoScale(scale)
    * type = "SET_VIDEO_SCALE"
    * value = scale
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
  * Import connect from react-redux into all containers
  * Import the appropriate component into the container
  * Create mapStateToProps function 
  * Call the connect function
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
  * CounterButtonContainer.js
    * import the increaseCounter and decreaseCounter actions
    * map prop `increase` to action `increaseCounter`
    * map prop `decrease` to action `decreaseCounter`
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

### Bonus - fetch
Currently, the users are hard coded in the state.js file. How could we change this so that the data is coming from an api. https://jsonplaceholder.typicode.com/users
There is no new special thing we have to do. We have all the knowledge we need to do this with redux. We just need to figure out how to use them together.
* We should know how to make a fetch call by now. Where does the fetch call go? 
* What do you do with the data when the fetch call is complete? Not setState.
* Is there an action message that could represent that the redux store needs to be updated with the list of users you just fetched from the api.
* Does any reducer need to be aware of this message?



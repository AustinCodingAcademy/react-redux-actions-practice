
import { connect } from "react-redux";
import {increaseCounter, decreaseCounter} from "../actions"
import CounterButton from "../components/CounterButton"



// ALWAYS name the below function mapDispatchToProps and return an object:  return{}
function mapDispatchToProps(dispatch){
  return{
    // the below key needs to be the same name as the function props you require above,
    // and the value needs to be the function and prop called within the
    // function
    increase: function(){

      //this is associated to the action folder's index.js.  It is calling the
      //function setCurrentUser and passing the user.
      let action = increaseCounter();
      //this is standard
      dispatch(action);
    },
    decrease: function(){
      let action = decreaseCounter();
      dispatch(action);
    }
  }
}

// calling connect returns a function which is why you can call functions
// immediately afterward.  Always in that order  OR...for example,
// this is how it's called:

// const connectedThingFunction = connect(mapStateToProps, mapDispatchToProps);
// const ListOfUsersContainer = connectedThingFunction(ListOfUsers);
const CounterButtonContainer = connect(null, mapDispatchToProps)(CounterButton);
export default CounterButtonContainer

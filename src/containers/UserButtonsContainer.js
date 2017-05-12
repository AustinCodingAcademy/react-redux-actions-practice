
import { connect } from "react-redux";
import {addUser, removeUser} from "../actions"
import UserButtons from "../components/UserButtons"



// ALWAYS name the below function mapDispatchToProps and return an object:  return{}
function mapDispatchToProps(dispatch){
  return{
    // the below key needs to be the same name as the function props you require above,
    // and the value needs to be the function and prop called within the
    // function
    add: function(user){

      //this is associated to the action folder's index.js.  It is calling the
      //function setCurrentUser and passing the user.
      let action = addUser(user);
      //this is standard
      dispatch(action);
    },
    remove: function(user){
      let action = removeUser(user);
      dispatch(action);
    }
  }
}

// calling connect returns a function which is why you can call functions
// immediately afterward.  Always in that order  OR...for example,
// this is how it's called:

// const connectedThingFunction = connect(mapStateToProps, mapDispatchToProps);
// const ListOfUsersContainer = connectedThingFunction(ListOfUsers);
const UserButtonsContainer = connect(null, mapDispatchToProps)(UserButtons);
export default UserButtonsContainer

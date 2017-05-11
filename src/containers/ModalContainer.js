
import { connect } from "react-redux";
import {setIsLoading} from "../actions"
import Modal from "../components/Modal"

// ALWAYS name the below function mapStateToProps and return an object:  return{}
function mapStateToProps(state){
  return{
    // the below key needs to be the same name as the props you require above,
    // and the value needs to be the state.js files object(s) being
    // called within the file
    isLoading:state.isLoading

  }
}

// ALWAYS name the below function mapDispatchToProps and return an object:  return{}
function mapDispatchToProps(dispatch){
  return{
    // the below key needs to be the same name as the function props you require above,
    // and the value needs to be the function and prop called within the
    // function
    setIsLoading: function(isLoading){

      //this is associated to the action folder's index.js.  It is calling the
      //function setCurrentUser and passing the user.
      let action = setIsLoading(isLoading);
      //this is standard
      dispatch(action);
    }
  }
}

// calling connect returns a function which is why you can call functions
// immediately afterward.  Always in that order  OR...for example,
// this is how it's called:

// const connectedThingFunction = connect(mapStateToProps, mapDispatchToProps);
// const ListOfUsersContainer = connectedThingFunction(ListOfUsers);
const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);
export default ModalContainer


import { connect } from "react-redux";
import Users from "../components/Users"

// ALWAYS name the below function mapStateToProps and return an object:  return{}
function mapStateToProps(state){
  return{
    // the below key needs to be the same name as the props you require above,
    // and the value needs to be the state.js files object(s) being
    // called within the file
    users:state.users,
    firstNameFilter: state.searchText,
    sortOn: state.currentUserSort

  }
}


// calling connect returns a function which is why you can call functions
// immediately afterward.  Always in that order  OR...for example,
// this is how it's called:

// const connectedThingFunction = connect(mapStateToProps, mapDispatchToProps);
// const ListOfUsersContainer = connectedThingFunction(ListOfUsers);
const UsersContainer = connect(mapStateToProps)(Users);
export default UsersContainer

import {addUser, removeUser} from "../actions";
import {connect} from "react-redux";
import UserButtons from "../components/UserButtons";

function mapDispatchToProps(dispatch) {
  return{
    add: function(users){
      let action = addUser(users);
      dispatch(action);
    },
    remove: function(users){
      let action = removeUser(users);
      dispatch(action);
    }
  }
}

//This is the shorter way to export.
//export default connect(null,mapDispatchToProps)(UserButtons)

let otherFunction = connect(null, mapDispatchToProps);
let UserButtonsContainer = otherFunction(UserButtons)
export default UserButtonsContainer;

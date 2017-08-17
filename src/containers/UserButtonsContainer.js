import {connect} from "react-redux";
import UserButtons from "../components/UserButtons";
import {addUser, removeUser} from "../actions";


function mapDispatchToProps(dispatch) {
  return {
    add: function(user) {
      var action = addUser(user);
      dispatch(action);
    },
    remove: function() {
      var action2 = removeUser();
      dispatch(action2);
    }
  }
}

var otherFunction = connect(null, mapDispatchToProps);
var UserButtonsContainer = otherFunction(UserButtons)

export default UserButtonsContainer;

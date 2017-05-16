import { connect } from "react-redux";
import {addUser, removeUser} from "../actions";
import UserButtons from "../components/UserButtons.js";

function mapDispatchToProps(dispatch){
  return{
    add: function(user){
      let action = addUser(user);
      dispatch(action);
    },
    remove: function(user){
      let action = removeUser(user);
      dispatch(action);
    }
  }
}
const UserButtonsContainer = connect(null, mapDispatchToProps)(UserButtons);
export default UserButtonsContainer

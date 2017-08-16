import UserButtons from "../components/UserButtons";
import {connect} from "react-redux";
import {addUser} from "../actions";
import {removeUser} from "../actions";

function mapDispatchToProps(dispatch){
  return {
    add: function(user){
      var action = addUser(user);
      dispatch(action);
    },
    remove: function(){
      var action = removeUser();
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchToProps)(UserButtons);
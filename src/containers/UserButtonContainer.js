import {connect} from "react-redux";
import {addUser} from "./actions";
import {removeUser} from "./actions";

function mapDispatchToProps(dispatch){
  return {
    add: function(){
      var action = addUser();
      dispatch(action);
    },
    remove: function(){
      var action = removeUser();
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchToProps)(UserButton);
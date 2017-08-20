import {connect} from "react-redux";
import UserButtons from "../components/UserButtons";
import {addUser,removeUser} from "../actions";


function mapDispatchToProps(dispatch){
  return{
    add:function(user){
      var action = addUser(user);
      dispatch(action);
    },
    remove:function(){
      var action = removeUser();
      dispatch(action);
    }
  }
}

export default connect(null,mapDispatchToProps)(UserButtons)

import { connect } from 'react-redux';
import {addUser, removeUser} from "../actions";
import UserButtons from "../components/UserButtons";

function mapDispatchToProps(dispatch){
  return{
    remove:function(user){
      let action =  removeUser(user);
      dispatch(action);
    },
    add:function(user){
      let action = addUser(user);
      dispatch(action);
    }
  }
}

export default connect(null,mapDispatchToProps)(UserButtons);

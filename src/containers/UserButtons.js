import { connect } from 'react-redux';
import {addUser,removeUser} from "../actions";
import UserButtons from "../components/UserButtons";

function mapDispatchToProps(dispatch){
return {
  add:function(txt){
    let action = addUser(txt);
    dispatch(action);
  },
  remove:function(txt){
    let action = removeUser();
    dispatch(action);
  }
 }
}

export default connect(null,mapDispatchToProps)(UserButtons);

import { connect } from 'react-redux';
import {addUser} from "../actions";
import {removeUser} from "../actions";
import UserButtons from "../components/UserButtons";


function mapDispatchToProps(dispatch){
  return {
   remove:function(txt){
     let action = removeUser(txt);
     dispatch(action);
   },
   add:function(txt){
     let action = addUser(txt);
     dispatch(action);
   }
  }
}

export default connect(null,mapDispatchToProps)(UserButtons);

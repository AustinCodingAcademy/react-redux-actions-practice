import { connect } from 'react-redux';
import {addUser} from '.../actions';
import {removeUser} from '.../actions';
import UserButtons from '.../components/UserButtons';

function mapDispatchToProps(dispatch){
  return {
   add:function(text){
     let action = addUser(text);
     dispatch(action);
   }

   remove:function(text){
     let action = removeUser(text);
     dispatch(action);
   }
  }
}

export default connect(null,mapDispatchToProps)(UserButtons);

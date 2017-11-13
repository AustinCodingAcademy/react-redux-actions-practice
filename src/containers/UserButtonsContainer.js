import {connect} from 'react-redux';
import {addUser, removeUser} from '../actions';
import UserButtons from '../components/UserButtons'


function mapDispatchToProps(dispatch){
  return {
    add:function(theUser){
      let action = addUser(theUser);
      dispatch(action);
    },
    remove:function(){
      let action = removeUser();
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchToProps)(UserButtons);

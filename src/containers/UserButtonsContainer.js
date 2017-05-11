import { connect } from 'react-redux';
import UserButtons from '../components/UserButtons';
import {addUser,removeUser} from '../actions';

function mapDispatchToProps(dispatch){
  return {
    // returns an object that we call an action
    add:function(user){
      let action = addUser(user);
      dispatch(action);
    }
  }
}

const UserButtonsContainer = connect(mapDispatchToProps)(UserButtonsContainer);

export default UserButtonsContainer
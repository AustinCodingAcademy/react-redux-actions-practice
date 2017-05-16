import UserButtons from "../components/UserButtons";
import {connect} from 'react-redux';
import {addUser} from '../actions';
import {removeUser} from '../actions'

function mapDispatchToProps(dispatch) {
  return {
    add: function(user) {
      // add that user
      let action = addUser(user);
       dispatch(action);
    },
    remove: function(user) {
      // remove that user
      let action = removeUser(user);
       dispatch(action);
    }
  }
}

// you need both of these to make this work
const UserButtonsContainer = connect(null, mapDispatchToProps)(UserButtons);
export default UserButtonsContainer

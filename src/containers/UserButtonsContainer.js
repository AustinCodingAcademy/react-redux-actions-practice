import {connect} from 'react-redux';
import UserButtons from '../components/UserButtons';
import {addUser, removeUser} from '../actions';


function mapDispatchToProps(dispatch) {
  return {
    add: function(user) {
      dispatch(addUser(user));
    },
    remove: function() {
      dispatch(removeUser());
    }
  }
}

export default connect(null, mapDispatchToProps)(UserButtons);

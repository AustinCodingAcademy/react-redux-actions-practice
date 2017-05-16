import { connect } from 'react-redux';
import UserButtons from '../components/UserButtons';
import { addUser, removeUser } from '../actions';

function mapDispatchToProps(dispatch) {
  return {
    add: (user) => {
      const action = addUser(user);
      dispatch(action);
    },
    remove: () => {
      const action = removeUser();
      dispatch(action);
    }
  }
}

const UserButtonsContainer = connect(null, mapDispatchToProps)(UserButtons);

export default UserButtonsContainer;

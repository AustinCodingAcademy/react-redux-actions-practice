import { connect } from 'react-redux';
import { addUser, removeUser } from '../actions';
import UserButtons from '../components/UserButtons';

const mapDispatchToProps = (dispatch) => {
  return {
    add(user) {
      dispatch(addUser(user));
    },
    remove() {
      dispatch(removeUser());
    }
  };
};

export default connect(null, mapDispatchToProps)(UserButtons);

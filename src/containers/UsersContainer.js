import Users from '../components/Users';
import {addUser, removeUser, setCurrentUserSort} from '../actions';
import {connect} from 'react-redux';
import state from '../state.js';


function mapStateToProps(state) {
  return {
    users: state.users,

    sortOn: state.currentUserSort,

    firstNameFilter: state.searchText
  }
}

export default connect(mapStateToProps)(Users);

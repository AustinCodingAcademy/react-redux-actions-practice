import Users from "../components/Users";
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {users: state.users,
          firstNameFilter: state.searchText,
          sortOn: state.currentUserSort
  }
}

// you need both of these to make this work
const UsersContainer = connect(mapStateToProps)(Users);
export default UsersContainer

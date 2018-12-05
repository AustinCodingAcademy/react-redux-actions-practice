import { connect } from 'react-redux';
import Users from '../components/Users';

function mapStateToProps(state) {
  return {
    user: state.users,
    firstNameFilter: state.searchText,
    sortOn: state.currentUserSort
  }
}

export default connect(mapStateToProps)(Users);
import Users from '../components/Users';
import {connect} from 'react-redux';


function mapStateToProps(state) {
  return {
    users: state.users,

    sortOn: state.currentUserSort,

    firstNameFilter: state.searchText
  }
}

export default connect(mapStateToProps)(Users);

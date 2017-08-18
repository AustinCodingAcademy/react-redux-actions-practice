import Users from '../components/Users';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    users: state.users,
    firstNameFilter: state.firstNameFilter,
    sorton: state.sortOn
  }
}

export default connect(mapStateToProps)(Users);


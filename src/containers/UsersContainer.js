import {connect} from 'react-redux';
import Users from '../components/Users'

const mapStateToProps = state => ({users: state.users,firstNameFilter: state.searchText,sortOn: state.currentUserSort})
  
export default connect(mapStateToProps)(Users);